<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import paginas from '@/components/data/data'
import AppBanner from '@/components/Produtos/AppBanner.vue'
import { useUsuario } from '@/composables/usePaciente'
import { useRoute, useRouter } from 'vue-router'
import { API_URL } from '@/services/api'

const router = useRouter()
const route = useRoute()
const {
  usuarioAtual,
  carregarUsuarioPorId,
  criarConsulta,
  atualizarConsulta,
  deletarRegistroPorId,
} = useUsuario()

const consultas = ref([])
const etapa = ref(1)
const especialidadeSelecionada = ref('')
const profissionalSelecionado = ref('')
const dataSelecionada = ref('')
const horarioSelecionado = ref('')
const consultaEditandoId = ref(null)
const salvando = ref(false)

const especialidades = [
  { nome: 'Pediatria', descricao: 'Saúde infantil', icone: '👩‍⚕️', cor: 'pink' },
  { nome: 'Ginecologia', descricao: 'Saúde da mulher', icone: '👩‍🦱', cor: 'blue' },
  { nome: 'Clínico Geral', descricao: 'Atendimento geral', icone: '🩺', cor: 'teal' },
  { nome: 'Médico da família', descricao: 'Acompanhamento familiar', icone: '👨‍⚕️', cor: 'purple' },
]

const profissionais = {
  Pediatria: ['Dra. Ana Clara', 'Dr. Pedro Vieira'],
  Ginecologia: ['Dra. Maria Helena', 'Dra. Carla Souza'],
  'Clínico Geral': ['Dr. João Martins', 'Dra. Luiza Costa'],
  'Médico da família': ['Dr. Felipe Nunes', 'Dra. Renata Lima'],
}

const horarios = ['08:00', '09:30', '11:00', '13:30', '15:00', '16:30']
const profissionalLista = computed(() => profissionais[especialidadeSelecionada.value] || [])

function converterDataParaInput(data) {
  if (!data) return ''
  if (/^\d{4}-\d{2}-\d{2}$/.test(data)) return data

  const meses = {
    janeiro: '01', fevereiro: '02', março: '03', abril: '04', maio: '05', junho: '06',
    julho: '07', agosto: '08', setembro: '09', outubro: '10', novembro: '11', dezembro: '12',
  }

  const correspondencia = String(data).match(/^(\d{1,2}) de ([a-zç]+) de (\d{4})$/i)
  if (correspondencia) {
    const dia = correspondencia[1].padStart(2, '0')
    const mes = meses[correspondencia[2].toLowerCase()] || '01'
    return `${correspondencia[3]}-${mes}-${dia}`
  }

  const correspondenciaBarra = String(data).match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/)
  if (correspondenciaBarra) {
    const dia = correspondenciaBarra[1].padStart(2, '0')
    const mes = correspondenciaBarra[2].padStart(2, '0')
    return `${correspondenciaBarra[3]}-${mes}-${dia}`
  }

  return ''
}

async function carregarConsultas() {
  const usuarioId = sessionStorage.getItem('usuarioId')

  if (!usuarioId) {
    consultas.value = []
    return
  }

  try {
    const resposta = await fetch(`${API_URL}/consultas?pacienteId=${encodeURIComponent(usuarioId)}`)
    if (!resposta.ok) throw new Error('Não foi possível carregar as consultas.')
    consultas.value = await resposta.json()
  } catch (error) {
    alert(error.message)
  }
}

function editarConsulta(consulta) {
  const especialidade = consulta.especialidade || ''
  const medico = consulta.medico || ''

  if (especialidade && !especialidades.some((item) => item.nome === especialidade)) {
    especialidades.push({
      nome: especialidade,
      descricao: 'Especialidade cadastrada',
      icone: '🩺',
      cor: 'teal',
    })
  }

  if (especialidade && !profissionais[especialidade]) profissionais[especialidade] = []
  if (medico && !profissionais[especialidade].includes(medico)) {
    profissionais[especialidade].push(medico)
  }

  consultaEditandoId.value = consulta.id
  especialidadeSelecionada.value = especialidade
  profissionalSelecionado.value = medico
  dataSelecionada.value = converterDataParaInput(consulta.data)
  horarioSelecionado.value = consulta.horario || ''
  etapa.value = 1
}

async function cancelarConsulta(consulta) {
  if (!window.confirm('Deseja cancelar esta consulta?')) return

  const removida = await deletarRegistroPorId('consultas', consulta.id)
  if (!removida) {
    alert('Não foi possível cancelar a consulta.')
    return
  }

  await carregarConsultas()
  alert('Consulta cancelada com sucesso.')
}

const avancar = async () => {
  if (etapa.value === 1 && !especialidadeSelecionada.value) {
    alert('Selecione uma especialidade.')
    return
  }

  if (etapa.value === 2 && !profissionalSelecionado.value) {
    alert('Selecione um profissional.')
    return
  }

  if (etapa.value === 3 && (!dataSelecionada.value || !horarioSelecionado.value)) {
    alert('Selecione a data e o horário.')
    return
  }

  if (etapa.value < 4) {
    etapa.value += 1
    return
  }

  if (!usuarioAtual.value) {
    alert('Você precisa estar logado para agendar uma consulta.')
    return
  }

  salvando.value = true

  const dadosConsulta = {
    especialidade: especialidadeSelecionada.value,
    motivo: 'Consulta agendada pelo paciente',
    medico: profissionalSelecionado.value,
    data: dataSelecionada.value,
    horario: horarioSelecionado.value,
  }

  try {
    if (consultaEditandoId.value) {
      await atualizarConsulta(consultaEditandoId.value, dadosConsulta)
      alert('Consulta atualizada com sucesso.')
    } else {
      await criarConsulta(dadosConsulta)
      alert(`Consulta agendada com sucesso para ${dadosConsulta.especialidade} com ${dadosConsulta.medico}.`)
    }

    resetar()
    await carregarConsultas()
    router.push({ name: 'minha-area' })
  } catch (error) {
    alert(error.message || 'Não foi possível salvar a consulta.')
  } finally {
    salvando.value = false
  }
}

const voltarEtapa = () => {
  if (etapa.value > 1) etapa.value -= 1
}

const resetar = () => {
  etapa.value = 1
  especialidadeSelecionada.value = ''
  profissionalSelecionado.value = ''
  dataSelecionada.value = ''
  horarioSelecionado.value = ''
  consultaEditandoId.value = null
}

onMounted(async () => {
  await carregarUsuarioPorId()
  await carregarConsultas()

  if (route.query.editar) {
    const consulta = consultas.value.find((item) => String(item.id) === String(route.query.editar))
    if (consulta) editarConsulta(consulta)
  }
})

watch(
  () => route.query.editar,
  async (novoValor) => {
    if (novoValor) {
      const consulta = consultas.value.find((item) => String(item.id) === String(novoValor))
      if (consulta) editarConsulta(consulta)
    }
  }
)
</script>

<template>
  <main class="content">
    <AppBanner key="paginas[0].pagina" :titulo="paginas[0].titulo" :subtitulo="paginas[0].subtitulo" />

    <section class="consultas-panel">
      <div class="consultas-header">
        <h2>Minhas consultas</h2>
        <button type="button" class="nova-btn" @click="resetar">Nova consulta</button>
      </div>

      <p v-if="consultas.length === 0" class="sem-consultas">Nenhuma consulta agendada.</p>

      <article v-for="consulta in consultas" :key="consulta.id" class="consulta-card">
        <div>
          <strong>{{ consulta.especialidade }}</strong>
          <p>{{ consulta.medico }} • {{ consulta.data }} às {{ consulta.horario }}</p>
        </div>
        <div class="consulta-actions">
          <button type="button" class="edit-btn" @click="editarConsulta(consulta)">Editar</button>
          <button type="button" class="delete-btn" @click="cancelarConsulta(consulta)">Cancelar</button>
        </div>
      </article>
    </section>

    <section class="steps" aria-label="etapas de agendamento">
      <div :class="['step', { active: etapa === 1 }]">
        <span class="step-number">1</span>
        <span>Especialidade</span>
      </div>
      <div :class="['step', { active: etapa === 2 }]">
        <span class="step-number">2</span>
        <span>Profissional</span>
      </div>
      <div :class="['step', { active: etapa === 3 }]">
        <span class="step-number">3</span>
        <span>Data e Horário</span>
      </div>
      <div :class="['step', { active: etapa === 4 }]">
        <span class="step-number">4</span>
        <span>Confirmação</span>
      </div>
    </section>

    <section class="specialty-panel">
      <div v-if="etapa === 1" class="panel-block">
        <h2>Selecione a Especialidade</h2>
        <div class="specialty-grid">
          <article v-for="item in especialidades" :key="item.nome"
            :class="['specialty-card', { selected: especialidadeSelecionada === item.nome }]"
            @click="especialidadeSelecionada = item.nome">
            <div :class="['icon-box', item.cor]">
              <span>{{ item.icone }}</span>
            </div>
            <div class="card-info">
              <h3>{{ item.nome }}</h3>
              <p>{{ item.descricao }}</p>
            </div>
          </article>
        </div>
      </div>

      <div v-else-if="etapa === 2" class="panel-block">
        <h2>Selecione o Profissional</h2>
        <div class="professional-list">
          <button v-for="profissional in profissionalLista" :key="profissional"
            :class="['professional-btn', { selected: profissionalSelecionado === profissional }]"
            @click="profissionalSelecionado = profissional">
            {{ profissional }}
          </button>
        </div>
      </div>

      <div v-else-if="etapa === 3" class="panel-block">
        <h2>Escolha a Data e o Horário</h2>
        <div class="schedule-grid">
          <div class="field-group">
            <label for="data">Data</label>
            <input id="data" v-model="dataSelecionada" type="date" />
          </div>
          <div class="field-group">
            <label for="horario">Horário</label>
            <select id="horario" v-model="horarioSelecionado">
              <option value="" disabled>Selecione</option>
              <option v-for="hora in horarios" :key="hora" :value="hora">
                {{ hora }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div v-else class="panel-block confirmation">
        <h2>{{ consultaEditandoId ? 'Confirmar alterações' : 'Confirmação' }}</h2>
        <div class="confirm-box">
          <p><strong>Especialidade:</strong> {{ especialidadeSelecionada }}</p>
          <p><strong>Profissional:</strong> {{ profissionalSelecionado }}</p>
          <p><strong>Data:</strong> {{ dataSelecionada }}</p>
          <p><strong>Horário:</strong> {{ horarioSelecionado }}</p>
        </div>
      </div>

      <div class="actions-row">
        <button v-if="etapa > 1" class="back-btn" @click="voltarEtapa">Voltar</button>
        <button v-if="etapa < 4" class="next-btn" @click="avancar">Próximo →</button>
        <button v-else class="next-btn" @click="avancar" :disabled="salvando">
          {{ salvando ? 'Salvando...' : (consultaEditandoId ? 'Salvar alterações' : 'Confirmar') }}
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
.banner {
  padding: 1vw 0.85vw 5vw 3vw;
  background: linear-gradient(170deg, #2053ac, #447cdb, #267154, #267154, #37c22f);
  color: rgb(250, 246, 246);
}

.banner a {
  color: white;
  text-decoration: none;
}

.banner .voltar {
  margin-bottom: 0.5rem;
}

.banner h2 {
  font-size: clamp(1.8rem, 3vw, 2.7rem);
  font-weight: 800;
  margin: 0.8rem 0 0.5rem;
}

.banner p {
  font-size: 1.1rem;
  margin: 0;
}

.agendar-consulta-page {
  min-height: 100vh;
  background: #e7e7e7;
  color: #1d1d1d;
  font-family: Arial, Helvetica, sans-serif;
}

.content {
  margin: 0 auto;
  padding: 0;
}

.banner,
.steps,
.specialty-panel {
  margin-left: 0;
  margin-right: 0;
}

.steps {
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 14px 14px 0 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.8rem;
  padding: 1.2rem 1rem 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.step {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #3b3b3b;
  font-size: 0.95rem;
  min-height: 54px;
  position: relative;
  padding: 0.5rem 0.8rem;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-weight: 600;
}

.step-number {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #d9d9d9;
  color: #1f1f1f;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.step.active {
  background: #eaf3ff;
  border-color: #2a7ae6;
  color: #1a4ea8;
}

.step.active .step-number {
  background: #2a7ae6;
  color: white;
}

.specialty-panel {
  background: #ffffff;
  padding: 2rem 1.4rem 1.2rem;
  border-radius: 0 0 16px 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-top: none;
}

.specialty-panel h2 {
  margin: 0 0 1.5rem;
  font-size: clamp(1.7rem, 2vw, 2.4rem);
  font-weight: 900;
  color: #111;
}

.specialty-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem 1.5rem;
  margin-bottom: 1rem;
}

.specialty-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 1rem 1.2rem;
  min-height: 92px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.icon-box {
  width: 58px;
  height: 58px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  flex-shrink: 0;
}

.icon-box.pink {
  background: #ffe5f0;
}

.icon-box.blue {
  background: #e0f1ff;
}

.icon-box.teal {
  background: #dffdf6;
}

.icon-box.purple {
  background: #f0ebff;
}

.card-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.card-info h3 {
  margin: 0;
  font-size: clamp(1.2rem, 2vw, 1.7rem);
  font-weight: 700;
  color: #1f1f1f;
}

.card-info p {
  margin: 0;
  color: #f8f5f5;
  font-size: 0.95rem;
}

.next-row {
  display: flex;
  justify-content: flex-end;
}

.next-btn {
  background: transparent;
  color: #1a79d7;
  border: 2px solid #1a79d7;
  padding: 0.8rem 1.4rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
}

.specialty-card {
  cursor: pointer;
}

.specialty-card.selected,
.professional-btn.selected {
  border-color: #2a7ae6;
  box-shadow: 0 0 0 2px rgba(42, 122, 230, 0.15);
}

.professional-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.professional-btn {
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #ffffff;
  border-radius: 14px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #1c1c1c;
  cursor: pointer;
}

.schedule-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.field-group label {
  font-weight: 700;
  color: #222;
  font-size: 1rem;
}

.field-group input,
.field-group select {
  width: 100%;
  min-height: 54px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 0.9rem 1rem;
  font-size: 1rem;
  background: white;
  display: block;
}

.confirm-box {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  padding: 1.2rem;
  display: grid;
  gap: 0.7rem;
}

.confirm-box p {
  margin: 0;
  font-size: 1rem;
}

.actions-row {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}

.back-btn,
.next-btn {
  border-radius: 10px;
  padding: 0.85rem 1.3rem;
  font-weight: 700;
  cursor: pointer;
}

.back-btn {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: white;
  color: #2a2a2a;
}

.next-btn {
  background: transparent;
  color: #1a79d7;
  border: 2px solid #1a79d7;
}

.consultas-panel {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  margin: 1.5rem 0;
  padding: 1.2rem;
}

.consultas-header,
.consulta-card,
.consulta-actions {
  display: flex;
  align-items: center;
}

.consultas-header {
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.consultas-header h2 {
  margin: 0;
  font-size: 1.4rem;
}

.consulta-card {
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid #eee;
  padding: 1rem 0;
}

.consulta-card p,
.sem-consultas {
  margin: 0.35rem 0 0;
  color: #555;
}

.consulta-actions {
  gap: 0.6rem;
}

.nova-btn,
.edit-btn,
.delete-btn {
  border-radius: 8px;
  padding: 0.65rem 0.9rem;
  font-weight: 700;
  cursor: pointer;
  background: #fff;
}

.nova-btn,
.edit-btn {
  color: #1a79d7;
  border: 1px solid #1a79d7;
}

.delete-btn {
  color: #b42318;
  border: 1px solid #d92d20;
}

@media (max-width: 980px) {

  .schedule-grid,
  .professional-list,
  .specialty-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .specialty-panel {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .actions-row {
    flex-direction: column-reverse;
  }

  .back-btn,
  .next-btn {
    width: 100%;
  }
}
</style>
