<script setup>
import { RouterLink } from 'vue-router'
import { computed, ref } from 'vue'

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

const etapa = ref(1)
const especialidadeSelecionada = ref('')
const profissionalSelecionado = ref('')
const dataSelecionada = ref('')
const horarioSelecionado = ref('')

const profissionalLista = computed(() => profissionais[especialidadeSelecionada.value] || [])

const avancar = () => {
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

  alert(
    `Consulta agendada com sucesso para ${especialidadeSelecionada.value} com ${profissionalSelecionado.value} em ${dataSelecionada.value} às ${horarioSelecionado.value}.`,
  )
}

const voltarEtapa = () => {
  if (etapa.value > 1) {
    etapa.value -= 1
  }
}

const resetar = () => {
  etapa.value = 1
  especialidadeSelecionada.value = ''
  profissionalSelecionado.value = ''
  dataSelecionada.value = ''
  horarioSelecionado.value = ''
}
</script>

<template>
  <main class="content">
    <div class="banner">
      <div class="voltar">
        <RouterLink to="/">← Voltar</RouterLink>
      </div>
      <h2>Agendar Consulta</h2>
      <p>Escolha a especialidade, profissional e horário</p>
    </div>

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
          <article
            v-for="item in especialidades"
            :key="item.nome"
            :class="['specialty-card', { selected: especialidadeSelecionada === item.nome }]"
            @click="especialidadeSelecionada = item.nome"
          >
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
          <button
            v-for="profissional in profissionalLista"
            :key="profissional"
            :class="['professional-btn', { selected: profissionalSelecionado === profissional }]"
            @click="profissionalSelecionado = profissional"
          >
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
        <h2>Confirmação</h2>
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
        <button v-else class="next-btn" @click="avancar">Confirmar</button>
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
