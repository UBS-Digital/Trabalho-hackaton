<script setup>
import { computed, onMounted, ref } from 'vue'
import AppBanner from '@/components/Produtos/AppBanner.vue'
import paginas, { horarios } from '@/components/data/data'
import chart1 from '../imagem/img1.jpg'
import chart2 from '../imagem/image2.jpg'
import { useUsuario } from '@/composables/usePaciente'

const API_URL = 'http://localhost:3000'
const { usuarioAtual, usuarioLogado } = useUsuario()
const medicoFamiliar = ref(null)
const medicosDisponiveis = ref([])
const exibindoSelecao = ref(false)
const carregandoPerfil = ref(false)
const carregandoMedicos = ref(false)
const salvando = ref(false)
const erro = ref('')

const especialidadeMedico = computed(() => {
  if (!medicoFamiliar.value) return ''

  return medicoFamiliar.value.especialidades?.join(', ')
    || medicoFamiliar.value.especialidade
    || 'Especialidade não informada'
})

const iniciaisMedico = computed(() => {
  const nome = medicoFamiliar.value?.nome || ''
  return nome
    .replace(/^Dr(a)?\.?\s*/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join('')
    .toUpperCase()
})

function idPacienteAtual() {
  return sessionStorage.getItem('usuarioId') || usuarioAtual.value?.id || null
}

function normalizarMedico(medico) {
  const especialidades = Array.isArray(medico.especialidades)
    ? medico.especialidades
    : medico.especialidade
      ? [medico.especialidade]
      : []

  return {
    id: medico.id,
    nome: medico.nome,
    experiencia: medico.experiencia,
    email: medico.email,
    tel: medico.tel,
    especialidades,
    especialidade: especialidades[0] || ''
  }
}

async function carregarPerfil() {
  const pacienteId = idPacienteAtual()
  if (!pacienteId) return

  carregandoPerfil.value = true
  erro.value = ''

  try {
    const respostaPaciente = await fetch(`${API_URL}/pacientes/${encodeURIComponent(pacienteId)}`)
    if (!respostaPaciente.ok) {
      throw new Error('Não foi possível carregar os dados do paciente.')
    }

    const paciente = await respostaPaciente.json()
    usuarioLogado.value = { ...usuarioLogado.value, ...paciente, tipo: 'paciente' }

    const medicoAssociado = paciente.medicoFamiliar
    if (medicoAssociado?.id == null) {
      medicoFamiliar.value = null
      return
    }

    const respostaMedico = await fetch(`${API_URL}/medicos/${encodeURIComponent(medicoAssociado.id)}`)
    if (!respostaMedico.ok) {
      throw new Error('Não foi possível carregar os dados do médico associado.')
    }

    medicoFamiliar.value = normalizarMedico(await respostaMedico.json())
  } catch (errorCarregamento) {
    console.error('Erro ao carregar médico da família:', errorCarregamento)
    erro.value = errorCarregamento.message || 'Não foi possível carregar os dados.'
  } finally {
    carregandoPerfil.value = false
  }
}

async function abrirSelecaoMedico() {
  exibindoSelecao.value = true
  erro.value = ''
  carregandoMedicos.value = true

  try {
    const resposta = await fetch(`${API_URL}/medicos`)
    if (!resposta.ok) {
      throw new Error('Não foi possível buscar os médicos disponíveis.')
    }

    const medicos = await resposta.json()
    if (!Array.isArray(medicos)) {
      throw new Error('A lista de médicos recebida é inválida.')
    }

    medicosDisponiveis.value = medicos.map(normalizarMedico)
  } catch (errorCarregamento) {
    console.error('Erro ao buscar médicos disponíveis:', errorCarregamento)
    erro.value = errorCarregamento.message || 'Não foi possível buscar os médicos.'
  } finally {
    carregandoMedicos.value = false
  }
}

async function salvarMedico(medico) {
  const pacienteId = idPacienteAtual()
  if (!pacienteId || usuarioAtual.value?.tipo === 'medico') {
    erro.value = 'Entre na sua conta de paciente para gerenciar o médico da família.'
    return false
  }

  salvando.value = true
  erro.value = ''

  const medicoParaSalvar = medico
    ? {
        id: medico.id,
        nome: medico.nome,
        experiencia: medico.experiencia ?? null,
        especialidades: medico.especialidades,
        especialidade: medico.especialidade,
        email: medico.email || '',
        tel: medico.tel || ''
      }
    : null

  try {
    const resposta = await fetch(`${API_URL}/pacientes/${encodeURIComponent(pacienteId)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ medicoFamiliar: medicoParaSalvar })
    })

    if (!resposta.ok) {
      throw new Error('Não foi possível salvar o médico da família.')
    }

    const pacienteAtualizado = await resposta.json()
    usuarioLogado.value = { ...usuarioLogado.value, ...pacienteAtualizado, tipo: 'paciente' }
    medicoFamiliar.value = medico ? normalizarMedico(medico) : null
    exibindoSelecao.value = false
    return true
  } catch (errorSalvamento) {
    console.error('Erro ao salvar médico da família:', errorSalvamento)
    erro.value = errorSalvamento.message || 'Não foi possível salvar a alteração.'
    return false
  } finally {
    salvando.value = false
  }
}

onMounted(carregarPerfil)
</script>

<template>
  <AppBanner :key="paginas[3].pagina" :titulo="paginas[3].titulo" :subtitulo="paginas[3].subtitulo" />
  <div class="pagina-medico">
    <main class="recipiente">
      <p v-if="erro" class="mensagem erro" role="alert">{{ erro }}</p>
      <p v-if="carregandoPerfil" class="mensagem" role="status">Carregando informações...</p>

      <section v-else-if="!medicoFamiliar" class="estado-vazio">
        <div class="icone-medico" aria-hidden="true">+</div>
        <h2>Nenhum médico da família selecionado</h2>
        <p>Adicione um médico para visualizar suas informações e formas de contato.</p>
        <button class="botao primario" type="button" :disabled="salvando" @click="abrirSelecaoMedico">
          Adicionar médico
        </button>
      </section>

      <section v-else class="conteudo">
        <div class="cartao-perfil">
          <div class="cabecalho-perfil">
            <div class="imagem-perfil" aria-hidden="true">{{ iniciaisMedico }}</div>
            <div class="informacoes-perfil">
              <h2>{{ medicoFamiliar.nome }}</h2>
              <p class="subtitulo">
                Médico da Família<span v-if="medicoFamiliar.experiencia != null">
                  • {{ medicoFamiliar.experiencia }} anos de experiência</span>
              </p>
              <p class="descricao">
                Especialidades: {{ especialidadeMedico }}. Atendimento integral e preventivo para você e sua família.
              </p>
              <div class="acoes">
                <RouterLink to="/agendar-consulta" class="botao primario">Agendar Consulta</RouterLink>
                <RouterLink to="/contato-site" class="botao contorno">Contato</RouterLink>
                <button class="botao contorno" type="button" :disabled="salvando" @click="abrirSelecaoMedico">
                  Trocar médico
                </button>
                <button class="botao perigo" type="button" :disabled="salvando" @click="salvarMedico(null)">
                  Remover médico
                </button>
              </div>
            </div>
          </div>

          <div class="graficos">
            <h2>Acompanhamento de Saúde</h2>
            <div class="painel espaco-imagem">
              <h3>Evolução peso (kg)</h3>
              <img class="grafico" :src="chart1" alt="Gráfico de evolução do peso" />
            </div>

            <div class="painel espaco-imagem">
              <h3>Evolução pressão arterial (mmHg)</h3>
              <img class="grafico" :src="chart2" alt="Gráfico de evolução da pressão arterial" />
            </div>
          </div>

          <div class="historico">
            <h3>Histórico de Consultas</h3>
            <div class="item-historico">
              <div>
                <strong>Consulta de Rotina</strong>
                <div class="informacao-adicional">02 Mai 2024 · Pressão arterial controlada. Manter medicação.</div>
              </div>
              <button class="botao pequeno" type="button">Ver Detalhes</button>
            </div>
            <div class="item-historico">
              <div>
                <strong>Consulta de Rotina</strong>
                <div class="informacao-adicional">01 Mar 2024 · Pressão arterial controlada. Manter medicação.</div>
              </div>
              <button class="botao pequeno" type="button">Ver Detalhes</button>
            </div>
          </div>
        </div>

        <aside class="barra-lateral">
          <div class="cartao contato">
            <h4>Informações de Contato</h4>
            <p>Tel: {{ medicoFamiliar.tel || 'Não informado' }}</p>
            <p>Email: {{ medicoFamiliar.email || 'Não informado' }}</p>
          </div>

          <div class="cartao horarios-atendimento">
            <h4>Horário de Atendimento</h4>
            <ul>
              <li v-for="horario in horarios" :key="horario.id">
                {{ horario.dia }}:
                <span>{{ horario.horariosDisponiveis.join(', ') }}</span>
              </li>
            </ul>
          </div>

          <div class="cartao chamada-acao">
            <h4>Programa Família Saudável</h4>
            <button class="botao primario cheio" type="button">Saiba Mais</button>
          </div>
        </aside>
      </section>

      <div
        v-if="exibindoSelecao"
        class="fundo-modal"
        @click.self="exibindoSelecao = false"
      >
        <section
          class="selecao-medicos"
          role="dialog"
          aria-modal="true"
          aria-labelledby="titulo-selecao"
          aria-describedby="descricao-selecao"
        >
          <div class="cabecalho-selecao">
            <div>
              <h2 id="titulo-selecao">Escolha um médico</h2>
              <p id="descricao-selecao">Profissionais disponíveis no banco de dados.</p>
            </div>
            <button class="botao pequeno" type="button" :disabled="salvando" @click="exibindoSelecao = false">
              Fechar
            </button>
          </div>

          <p v-if="carregandoMedicos" class="mensagem" role="status">Buscando médicos...</p>
          <p v-else-if="!medicosDisponiveis.length && !erro" class="mensagem">
            Nenhum médico disponível no momento.
          </p>
          <div v-else class="lista-medicos">
            <article v-for="medico in medicosDisponiveis" :key="medico.id" class="opcao-medico">
              <h3>{{ medico.nome }}</h3>
              <div class="topico-medico">
                <span class="rotulo-topico">Especialidade</span>
                <p>{{ medico.especialidades.join(', ') || 'Especialidade não informada' }}</p>
              </div>
              <div class="topico-medico contato-medico">
                <span class="rotulo-topico">Informações de contato</span>
                <div class="detalhes-contato">
                  <p><strong>Telefone:</strong> {{ medico.tel || 'Não informado' }}</p>
                  <p><strong>E-mail:</strong> {{ medico.email || 'Não informado' }}</p>
                </div>
              </div>
              <div>
                <button
                  class="botao primario"
                  type="button"
                  :disabled="salvando"
                  @click="salvarMedico(medico)"
                >
                  {{ salvando ? 'Salvando...' : 'Selecionar médico' }}
                </button>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
.pagina-medico {
  background: #f4f3f3;
  min-height: 60vh;
  padding: 1px 0 34px;
}

.recipiente {
  max-width: 1440px;
  margin: 34px auto;
  padding: 0 24px;
}

.conteudo {
  display: flex;
  gap: 30px;
}

.cartao-perfil {
  flex: 1;
  min-width: 0;
  background: #fff;
  border-radius: 10px;
  padding: 22px;
}

.cabecalho-perfil {
  display: flex;
  gap: 20px;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  padding: 20px;
}

.imagem-perfil {
  width: 144px;
  height: 144px;
  flex: 0 0 144px;
  background: #e8f4fd;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1787d6;
  font-size: 32px;
  font-weight: 700;
}

.informacoes-perfil h2 {
  margin: 0;
  font-size: 32px;
}

.subtitulo {
  color: #666;
  margin: 6px 0;
}

.descricao {
  color: #444;
  margin: 6px 0 12px;
}

.acoes {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.botao {
  padding: 12px 20px;
  border-radius: 10px;
  border: 1px solid #d0d7de;
  background: #fff;
  color: #222;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
}

.botao:disabled {
  cursor: not-allowed;
  opacity: 0.65;
}

.botao.primario {
  background: #1a9df7;
  color: #fff;
  border-color: #1787d6;
}

.botao.contorno {
  background: #fff;
}

.botao.perigo {
  color: #b42318;
  border-color: #f2b8b5;
}

.botao.pequeno {
  padding: 6px 10px;
  font-size: 13px;
}

.graficos {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 26px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  padding: 20px 20px 20px 30px;
}

.graficos h2 {
  align-self: center;
  font-size: 2rem;
}

.graficos h3 {
  padding-left: 30px;
  font-size: 1.5rem;
}

.painel {
  width: 70%;
  background: #fff;
  border-radius: 8px;
  padding: 12px;
}

.grafico {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.06);
}

.historico {
  margin-top: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  padding: 10px;
}

.item-historico {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 6px;
  margin-top: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.barra-lateral {
  width: 340px;
  flex: 0 0 340px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.03);
}

.cartao {
  background: #fff;
  padding: 14px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.horarios-atendimento h4 {
  margin: 0 0 8px;
}

.horarios-atendimento ul {
  padding-left: 20px;
}

.horarios-atendimento ul li {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 4px 0;
}

.horarios-atendimento ul li span {
  font-weight: 700;
}

.botao.cheio {
  width: 100%;
}

.estado-vazio,
.selecao-medicos {
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.estado-vazio {
  text-align: center;
}

.estado-vazio h2 {
  margin: 12px 0 8px;
}

.estado-vazio p,
.cabecalho-selecao p,
.opcao-medico p {
  color: #555;
}

.icone-medico {
  width: 64px;
  height: 64px;
  margin: 0 auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #e8f4fd;
  color: #1787d6;
  font-size: 40px;
  font-weight: 300;
}

.fundo-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(15, 30, 45, 0.62);
  backdrop-filter: blur(3px);
}

.selecao-medicos {
  width: min(900px, 100%);
  max-height: min(85vh, 900px);
  margin: 0;
  padding: 36px;
  overflow-y: auto;
  border-top: 5px solid #1a9df7;
  box-sizing: border-box;
}

.cabecalho-selecao,
.opcao-medico {
  display: flex;
  align-items: center;
}

.cabecalho-selecao {
  position: relative;
  justify-content: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #dce5ec;
  text-align: center;
}

.cabecalho-selecao h2 {
  margin: 0;
  color: #17324d;
  font-size: 30px;
}

.cabecalho-selecao p {
  margin: 8px 0 0;
  font-size: 18px;
}

.cabecalho-selecao > .botao {
  position: absolute;
  right: 0;
}

.opcao-medico h3 {
  margin: 0;
}

.lista-medicos {
  display: grid;
  gap: 18px;
  max-width: 720px;
  margin: 24px auto 0;
}

.opcao-medico {
  flex-direction: column;
  gap: 18px;
  padding: 26px;
  border: 1px solid #d8e3ec;
  border-radius: 14px;
  background: linear-gradient(180deg, #fff 0%, #f8fbfd 100%);
  box-shadow: 0 5px 16px rgba(23, 50, 77, 0.08);
  text-align: center;
  transition: box-shadow 160ms ease, transform 160ms ease;
}

.opcao-medico:hover {
  transform: translateY(-2px);
  box-shadow: 0 9px 22px rgba(23, 50, 77, 0.13);
}

.opcao-medico h3 {
  color: #17324d;
  font-size: 25px;
}

.topico-medico {
  width: 100%;
  padding: 16px 10px;
  border-top: 1px solid #dce5ec;
}

.rotulo-topico {
  display: block;
  color: #587084;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.opcao-medico p {
  margin: 8px 0 0;
  color: #263c4d;
  font-size: 19px;
  line-height: 1.5;
}

.detalhes-contato {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px 28px;
}

.detalhes-contato p {
  overflow-wrap: anywhere;
}

.opcao-medico .botao {
  min-width: 220px;
  font-size: 18px;
}

.mensagem {
  margin: 12px 0;
}

.selecao-medicos > .mensagem {
  padding: 24px 12px;
  color: #344b5c;
  font-size: 19px;
  text-align: center;
}

.mensagem.erro {
  color: #b42318;
  font-weight: 600;
}

@media (max-width: 900px) {
  .conteudo {
    flex-direction: column;
  }

  .barra-lateral {
    width: auto;
    flex-basis: auto;
  }

  .cabecalho-perfil {
    align-items: flex-start;
  }
}

@media (max-width: 600px) {
  .recipiente {
    padding: 0 14px;
  }

  .cabecalho-perfil,
  .opcao-medico {
    flex-direction: column;
    align-items: stretch;
  }

  .cabecalho-selecao {
    flex-direction: column;
    gap: 16px;
  }

  .cabecalho-selecao > .botao {
    position: static;
  }

  .selecao-medicos {
    padding: 24px 18px;
  }

  .fundo-modal {
    padding: 14px;
  }

  .opcao-medico {
    align-items: center;
    padding: 22px 16px;
  }

  .imagem-perfil {
    align-self: center;
  }

  .informacoes-perfil h2 {
    font-size: 26px;
  }

  .estado-vazio,
  .selecao-medicos {
    padding: 22px;
  }
}
</style>
