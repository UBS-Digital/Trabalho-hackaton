<script setup>
import { computed, onMounted, ref } from 'vue'

import AppBanner from '@/components/Produtos/AppBanner.vue'
import paginas from '@/components/data/data'
import { useUsuario } from '@/composables/usePaciente'

const { usuarioAtual } = useUsuario()
const API_URL = 'http://localhost:3000'
const pacienteId = computed(() => String(
  usuarioAtual.value?.id ?? sessionStorage.getItem('usuarioId') ?? '',
).trim())
const examesAgendados = ref([])
const carregandoExames = ref(false)
const salvandoExame = ref(false)
const registroEmExclusao = ref(null)
const mensagem = ref('')
const erro = ref('')
const exameConsultado = ref(null)
const exameEmEdicao = ref(null)

const exames = [
  {
    id: 1,
    nome: 'Hemograma completo',
    preparo: 'Jejum de 8h',
    icone: '🩸',
    rota: '/hemograma-completo',
  },
  {
    id: 2,
    nome: 'Glicemia em jejum',
    preparo: 'Jejum de 8h',
    icone: '💉',
    rota: '/glicemia',
  },
  {
    id: 3,
    nome: 'Colesterol Total',
    preparo: 'Jejum de 12h',
    icone: '🧪',
    rota: '/colesterol',
  },
  {
    id: 4,
    nome: 'Raio-X Tórax',
    preparo: 'Sem preparo',
    icone: '📄',
    rota: '/raio-x',
  },
]

const opcoesExames = computed(() => {
  if (
    exameEmEdicao.value &&
    !exames.some((exame) => exame.nome.toLowerCase() === exameEmEdicao.value.tipo.toLowerCase())
  ) {
    return [
      ...exames,
      {
        id: `agendado-${exameEmEdicao.value.id}`,
        nome: exameEmEdicao.value.tipo,
        preparo: 'Exame já agendado',
        icone: '🧪',
      },
    ]
  }

  return exames
})

const etapa = ref(1)
const exameSelecionado = ref(null)
const dataSelecionada = ref('')
const horarioSelecionado = ref('')
const horarios = ['08:00', '09:30', '11:00', '13:30', '15:00', '16:30']
const horariosDisponiveis = computed(() => (
  horarioSelecionado.value && !horarios.includes(horarioSelecionado.value)
    ? [...horarios, horarioSelecionado.value].sort()
    : horarios
))

function limparMensagens() {
  mensagem.value = ''
  erro.value = ''
}

async function verificarResposta(resposta, acao) {
  if (!resposta.ok) {
    throw new Error(`${acao} (HTTP ${resposta.status}).`)
  }

  return resposta
}

async function carregarExames() {
  carregandoExames.value = true
  erro.value = ''

  try {
    if (!pacienteId.value) {
      throw new Error('Faça login como paciente para consultar seus exames.')
    }

    const resposta = await verificarResposta(
      await fetch(`${API_URL}/exames`),
      'Não foi possível carregar os exames',
    )
    const registros = await resposta.json()
    examesAgendados.value = registros.filter(
      (exame) => String(exame.pacienteId) === pacienteId.value,
    )
  } catch (errorCarregamento) {
    erro.value = errorCarregamento.message || 'Não foi possível carregar os exames.'
  } finally {
    carregandoExames.value = false
  }
}

async function consultarExame(id) {
  limparMensagens()

  try {
    const resposta = await verificarResposta(
      await fetch(`${API_URL}/exames/${encodeURIComponent(id)}`),
      'Não foi possível consultar o exame',
    )
    const exame = await resposta.json()

    if (String(exame.pacienteId) !== pacienteId.value) {
      throw new Error('Este exame não pertence ao paciente conectado.')
    }

    exameConsultado.value = exame
    mensagem.value = 'Exame consultado com sucesso.'
  } catch (errorConsulta) {
    erro.value = errorConsulta.message || 'Não foi possível consultar o exame.'
    exameConsultado.value = null
  }
}

function converterDataParaInput(data) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(data)) return data

  const partes = data.match(/^(\d{1,2}) de ([a-zç]+) de (\d{4})$/i)
  if (!partes) return ''

  const meses = {
    janeiro: '01',
    fevereiro: '02',
    março: '03',
    abril: '04',
    maio: '05',
    junho: '06',
    julho: '07',
    agosto: '08',
    setembro: '09',
    outubro: '10',
    novembro: '11',
    dezembro: '12',
  }
  const mes = meses[partes[2].toLowerCase()]
  return mes ? `${partes[3]}-${mes}-${partes[1].padStart(2, '0')}` : ''
}

async function iniciarEdicao(id) {
  await consultarExame(id)
  if (!exameConsultado.value) return

  exameEmEdicao.value = exameConsultado.value
  exameSelecionado.value = opcoesExames.value.find(
    (exame) => exame.nome.toLowerCase() === exameEmEdicao.value.tipo.toLowerCase(),
  ) || null
  dataSelecionada.value = converterDataParaInput(exameEmEdicao.value.data || '')
  horarioSelecionado.value = exameEmEdicao.value.horario || ''
  etapa.value = 1
  limparMensagens()
}

async function excluirExame(exame) {
  if (!window.confirm(`Deseja excluir o agendamento de ${exame.tipo}?`)) return

  limparMensagens()
  registroEmExclusao.value = exame.id

  try {
    await verificarResposta(
      await fetch(`${API_URL}/exames/${encodeURIComponent(exame.id)}`, { method: 'DELETE' }),
      'Não foi possível excluir o exame',
    )
    mensagem.value = 'Exame excluído com sucesso.'
    if (String(exameConsultado.value?.id) === String(exame.id)) {
      exameConsultado.value = null
    }
    if (String(exameEmEdicao.value?.id) === String(exame.id)) {
      resetar()
    }
    await carregarExames()
  } catch (errorExclusao) {
    erro.value = errorExclusao.message || 'Não foi possível excluir o exame.'
  } finally {
    registroEmExclusao.value = null
  }
}

async function salvarExame() {
  const exame = exameSelecionado.value
  if (!exame || !pacienteId.value) {
    erro.value = 'Selecione um exame e entre como paciente para continuar.'
    return
  }

  salvandoExame.value = true
  limparMensagens()

  const dadosExame = {
    tipo: exame.nome,
    data: dataSelecionada.value,
    horario: horarioSelecionado.value,
    pacienteId: exameEmEdicao.value?.pacienteId ?? pacienteId.value,
    medicoId: exameEmEdicao.value?.medicoId ?? 2,
    medico: exameEmEdicao.value?.medico ?? 'Laboratório Central',
  }

  try {
    const url = exameEmEdicao.value
      ? `${API_URL}/exames/${encodeURIComponent(exameEmEdicao.value.id)}`
      : `${API_URL}/exames`
    const resposta = await verificarResposta(
      await fetch(url, {
        method: exameEmEdicao.value ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          exameEmEdicao.value ? { ...exameEmEdicao.value, ...dadosExame } : dadosExame,
        ),
      }),
      exameEmEdicao.value ? 'Não foi possível atualizar o exame' : 'Não foi possível agendar o exame',
    )
    const registroSalvo = await resposta.json()
    mensagem.value = exameEmEdicao.value
      ? 'Exame atualizado com sucesso.'
      : 'Exame agendado com sucesso.'
    exameConsultado.value = registroSalvo
    resetar()
    await carregarExames()
  } catch (errorSalvamento) {
    erro.value = errorSalvamento.message || 'Não foi possível salvar o exame.'
  } finally {
    salvandoExame.value = false
  }
}

async function avancar() {
  limparMensagens()

  if (etapa.value === 1 && !exameSelecionado.value) {
    erro.value = 'Selecione um exame antes de continuar.'
    return
  }

  if (etapa.value === 2 && (!dataSelecionada.value || !horarioSelecionado.value)) {
    erro.value = 'Selecione a data e o horário do exame.'
    return
  }

  if (etapa.value < 3) {
    etapa.value += 1
    return
  }
  await salvarExame()
}

function voltarEtapa() {
  if (etapa.value > 1) {
    etapa.value -= 1
  }
}

function resetar() {
  etapa.value = 1
  exameSelecionado.value = null
  dataSelecionada.value = ''
  horarioSelecionado.value = ''
  exameEmEdicao.value = null
}

onMounted(carregarExames)
</script>

<template>
  <AppBanner
    key="paginas[1].pagina"
    :titulo="paginas[1].titulo"
    :subtitulo="paginas[1].subtitulo"
  />

  <div class="container">
    <div class="stepper" aria-label="etapas de agendamento">
      <div :class="['step', { ativo: etapa === 1 }]">
        <span>1</span>
        <p>Exame</p>
      </div>

      <div class="linha"></div>

      <div :class="['step', { ativo: etapa === 2 }]">
        <span>2</span>
        <p>Data e Horário</p>
      </div>

      <div class="linha"></div>

      <div :class="['step', { ativo: etapa === 3 }]">
        <span>3</span>
        <p>Confirmação</p>
      </div>
    </div>

    <p v-if="mensagem" class="feedback sucesso" role="status">{{ mensagem }}</p>
    <p v-if="erro" class="feedback erro" role="alert">{{ erro }}</p>

    <section class="lista-exames" aria-labelledby="titulo-exames">
      <h2 id="titulo-exames">Meus exames agendados</h2>
      <p v-if="carregandoExames" role="status">Carregando exames...</p>
      <p v-else-if="!examesAgendados.length && !erro">
        Você ainda não possui exames agendados.
      </p>

      <article v-for="exame in examesAgendados" :key="exame.id" class="exame-agendado">
        <div>
          <h3>{{ exame.tipo }}</h3>
          <p>Data: {{ exame.data }} <span v-if="exame.horario"> às {{ exame.horario }}</span></p>
        </div>
        <div class="acoes-exame">
          <button type="button" @click="consultarExame(exame.id)">Consultar</button>
          <button type="button" @click="iniciarEdicao(exame.id)">Editar</button>
          <button
            type="button"
            :disabled="registroEmExclusao === exame.id"
            @click="excluirExame(exame)"
          >
            {{ registroEmExclusao === exame.id ? 'Excluindo...' : 'Excluir' }}
          </button>
        </div>
      </article>

      <div v-if="exameConsultado" class="detalhe-exame" aria-live="polite">
        <h3>Detalhes do exame #{{ exameConsultado.id }}</h3>
        <p><strong>Exame:</strong> {{ exameConsultado.tipo }}</p>
        <p><strong>Data:</strong> {{ exameConsultado.data }}</p>
        <p><strong>Horário:</strong> {{ exameConsultado.horario || 'Não informado' }}</p>
        <p><strong>Unidade:</strong> {{ exameConsultado.medico || 'Não informada' }}</p>
        <button type="button" @click="exameConsultado = null">Fechar detalhes</button>
      </div>
    </section>

    <div v-if="etapa === 1" class="panel-block">
      <h2>{{ exameEmEdicao ? 'Atualize o exame' : 'Qual exame deseja fazer?' }}</h2>

      <div class="cards">
        <div
          v-for="opcao in opcoesExames"
          :key="opcao.id"
          :class="['card', { selecionado: exameSelecionado && exameSelecionado.id === opcao.id }]"
          @click="exameSelecionado = opcao"
        >
          <div class="icone">{{ opcao.icone }}</div>

          <div class="card-info">
            <h3>{{ opcao.nome }}</h3>
            <small>{{ opcao.preparo }}</small>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="etapa === 2" class="panel-block">
      <h2>Escolha a data e o horário</h2>

      <div class="schedule-grid">
        <div class="field-group">
          <label for="data-exame">Data</label>
          <input id="data-exame" v-model="dataSelecionada" type="date" required />
        </div>

        <div class="field-group">
          <label for="horario-exame">Horário</label>
          <select id="horario-exame" v-model="horarioSelecionado" required>
            <option value="" disabled>Selecione</option>
            <option v-for="hora in horariosDisponiveis" :key="hora" :value="hora">
              {{ hora }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div v-else class="panel-block confirmation">
      <h2>Confirmação</h2>
      <div class="confirm-box">
        <p><strong>Exame:</strong> {{ exameSelecionado?.nome }}</p>
        <p><strong>Data:</strong> {{ dataSelecionada }}</p>
        <p><strong>Horário:</strong> {{ horarioSelecionado }}</p>
      </div>
    </div>

    <div class="actions-row">
      <button v-if="etapa > 1" class="back-btn" @click="voltarEtapa">Voltar</button>
      <button v-if="etapa < 3" class="next-btn" @click="avancar">Próximo →</button>
      <button v-else class="next-btn" :disabled="salvandoExame" @click="avancar">
        {{ salvandoExame ? 'Salvando...' : exameEmEdicao ? 'Salvar alterações' : 'Confirmar' }}
      </button>
      <button v-if="exameEmEdicao" class="back-btn" type="button" @click="resetar">
        Cancelar edição
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: min(900px, calc(100% - 32px));
  margin: 0 auto 30px;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.container h2 {
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 24px;
}

.stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  gap: 12px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #555;
  font-size: 0.9rem;
}

.step span:first-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #bbb;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}

.step.ativo {
  color: #1f5ec9;
}

.step.ativo span:first-child {
  background: #2f80ed;
}

.linha {
  flex: 1;
  height: 2px;
  background: #ccc;
}

.panel-block {
  margin-top: 8px;
}

.lista-exames {
  margin-bottom: 32px;
  padding: 20px;
  border: 1px solid #dfeafc;
  border-radius: 12px;
  background: #f8faff;
}

.lista-exames h2 {
  margin-bottom: 16px;
}

.exame-agendado {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
  border-top: 1px solid #dfeafc;
}

.exame-agendado h3,
.exame-agendado p,
.detalhe-exame p {
  margin: 0 0 6px;
}

.acoes-exame {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.acoes-exame button,
.detalhe-exame button {
  padding: 8px 12px;
  border: 1px solid #2f80ed;
  border-radius: 8px;
  background: white;
  color: #1f5ec9;
  cursor: pointer;
}

.acoes-exame button:disabled,
.next-btn:disabled {
  cursor: wait;
  opacity: 0.65;
}

.detalhe-exame {
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
  background: white;
}

.feedback {
  margin: 0 0 16px;
  padding: 12px 14px;
  border-radius: 8px;
}

.feedback.sucesso {
  background: #e8f7ed;
  color: #176b35;
}

.feedback.erro {
  background: #fdecec;
  color: #a12626;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  background: #f8faff;
  cursor: pointer;
  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(47, 128, 237, 0.12);
}

.card.selecionado {
  border: 2px solid #2f80ed;
  background: #eef5ff;
}

.icone {
  width: 48px;
  height: 48px;
  background: #2f80ed;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-size: 1.7rem;
}

.card-info h3 {
  margin: 0 0 6px;
  font-size: 1.1rem;
  color: #1d1d1d;
}

.card-info small {
  color: #4b5563;
}

.schedule-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 10px;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-group label {
  font-weight: 600;
  color: #2d3748;
}

.field-group input,
.field-group select {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
}

.confirmation {
  margin-top: 20px;
}

.confirm-box {
  background: #f4f8ff;
  border: 1px solid #dfeafc;
  border-radius: 12px;
  padding: 20px;
  display: grid;
  gap: 12px;
}

.confirm-box p {
  margin: 0;
  font-size: 1.05rem;
}

.actions-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 28px;
}

.back-btn,
.next-btn {
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.back-btn {
  background: #e5e7eb;
  color: #1f2937;
}

.next-btn {
  background: #2f80ed;
  color: white;
  margin-left: auto;
}

.back-btn:hover,
.next-btn:hover {
  filter: brightness(0.98);
}

@media (max-width: 640px) {
  .cards,
  .schedule-grid {
    grid-template-columns: 1fr;
  }

  .exame-agendado {
    align-items: flex-start;
    flex-direction: column;
  }

  .container {
    padding: 20px 16px;
  }
}
</style>
