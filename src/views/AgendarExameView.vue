<script setup>
import { computed, ref } from 'vue'

import AppBanner from '@/components/Produtos/AppBanner.vue'
import paginas from '@/components/data/data'
import { useUsuario } from '@/composables/usePaciente'
import { useRouter } from 'vue-router'

const { usuarioAtual } = useUsuario()
const router = useRouter()

const examesAgendados = computed(() => usuarioAtual.value?.exames ?? [])

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

const etapa = ref(1)
const exameSelecionado = ref(null)
const dataSelecionada = ref('')
const horarioSelecionado = ref('')
const horarios = ['08:00', '09:30', '11:00', '13:30', '15:00', '16:30']

function avancar() {
  if (etapa.value === 1 && !exameSelecionado.value) {
    alert('Selecione um exame antes de continuar.')
    return
  }

  if (etapa.value === 2 && (!dataSelecionada.value || !horarioSelecionado.value)) {
    alert('Selecione a data e o horário do exame.')
    return
  }

  if (etapa.value < 3) {
    etapa.value += 1
    return
  }

  const exame = exameSelecionado.value

  if (!exame) return

  examesAgendados.value.push({
    tipo: exame.nome,
    data: dataSelecionada.value,
    medico: 'Dr. Carlos Mendes',
    horario: horarioSelecionado.value,
  })

  alert(
    `Exame agendado com sucesso para ${exame.nome} em ${dataSelecionada.value} às ${horarioSelecionado.value}.`,
  )

  resetar()
  router.push(exame.rota)
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
}
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

    <div v-if="etapa === 1" class="panel-block">
      <h2>Qual exame deseja fazer?</h2>

      <div class="cards">
        <div
          v-for="exame in exames"
          :key="exame.id"
          :class="['card', { selecionado: exameSelecionado && exameSelecionado.id === exame.id }]"
          @click="exameSelecionado = exame"
        >
          <div class="icone">{{ exame.icone }}</div>

          <div class="card-info">
            <h3>{{ exame.nome }}</h3>
            <small>{{ exame.preparo }}</small>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="etapa === 2" class="panel-block">
      <h2>Escolha a data e o horário</h2>

      <div class="schedule-grid">
        <div class="field-group">
          <label for="data-exame">Data</label>
          <input id="data-exame" v-model="dataSelecionada" type="date" />
        </div>

        <div class="field-group">
          <label for="horario-exame">Horário</label>
          <select id="horario-exame" v-model="horarioSelecionado">
            <option value="" disabled>Selecione</option>
            <option v-for="hora in horarios" :key="hora" :value="hora">
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
      <button v-else class="next-btn" @click="avancar">Confirmar</button>
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

  .container {
    padding: 20px 16px;
  }
}
</style>
