<template>
  <div class="doctor-page">
    <header class="hero">
      <div class="hero-inner">
        <h1>Médico da Família</h1>
        <p>Acompanhamento contínuo e integral da saúde de você e sua família.</p>
      </div>
    </header>

    <main class="container">
      <section class="conteudo">
        <div class="profile-card">
          <div class="profile-header">
            <div class="avatar">PLACEHOLDER</div>
            <div class="profile-info">
              <h2>Dr. Carlos Mendes</h2>
              <p class="subtitle">Médico da Família • 15 anos de experiência</p>
              <p class="desc">
                Especialista em Medicina de Família e Comunidade, com foco em acompanhamento
                integral e prevenção.
              </p>
              <div class="actions">
                <RouterLink to="/agendar-consulta" class="btn primary">Agendar Consulta</RouterLink>
                <RouterLink to="/contato-site" class="btn outline">Contato</RouterLink>
              </div>
            </div>
          </div>

          <div class="graficos">
            <h2>Acompanhamento de Saúde</h2>
            <div class="panel image-slot">
              <h3>Evolução peso (kg)</h3>
              <img class="chart" :src="chart1" alt="Gráfico 1 - Pressão" />
            </div>

            <div class="panel image-slot">
              <h3>Evolução pressão arterial (mmHg)</h3>
              <img class="chart" :src="chart2" alt="Gráfico 2 - Pressão" />
            </div>
          </div>

          <div class="historico">
            <h3>Histórico de Consultas</h3>
            <div class="historico-item">
              <div>
                <strong>Consulta de Rotina</strong>
                <div class="meta">02 Mai 2024 · Pressão arterial controlada. Manter medicação.</div>
              </div>
              <button class="btn small">Ver Detalhes</button>
            </div>
            <div class="historico-item">
              <div>
                <strong>Consulta de Rotina</strong>
                <div class="meta">01 Mar 2024 · Pressão arterial controlada. Manter medicação.</div>
              </div>
              <button class="btn small">Ver Detalhes</button>
            </div>
          </div>
        </div>

        <aside class="barraLateral">
          <div class="card contact">
            <h4>Informações de Contato</h4>
            <p>Tel: (11) 3456-7890</p>
            <p>Email: dr.carlos@ubsdigital.gov.br</p>
          </div>

          <div class="card-hours">
            <h4>Horário de Atendimento</h4>
            <ul>
              <li>Segunda–Feira: <span>8h – 17h</span></li>
              <li>Terça–Feira: <span>8h – 17h</span></li>
              <li>Quarta–Feira: <span>8h – 17h</span></li>
              <li>Quinta–Feira: <span>8h – 17h</span></li>
              <li>Sexta–Feira: <span>8h – 17h</span></li>
              <li>Sábado: <span>8h – 12h</span></li>
              <li>Domingo: <span>FECHADO</span></li>
            </ul>
          </div>

          <div class="card-cta">
            <h4>Programa Família Saudável</h4>
            <button class="btn primary full">Saiba Mais</button>
          </div>
        </aside>
      </section>
    </main>
  </div>
</template>

<script setup>
import chart1 from '../imagem/img1.jpg';
import chart2 from  '../imagem/image2.jpg';
</script>

<style scoped>
.hero {
  background: linear-gradient(90deg, #1a9df7, #27a96b);
  color: white;
  padding: 38px 0;
}
.hero-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px;
}
.hero h1 {
  margin: 0;
  font-size: 44px;
}
.hero p {
  margin: 6px 0 0;
}
.container {
  max-width: 1440px;
  margin: 34px auto;
  padding: 0 24px;
}
.conteudo {
  display: flex;
  gap: 30px;
}
.profile-card {
  flex: 1;
  background: #ffffff;
  border-radius: 10px;
  padding: 22px;
 
}
.profile-header {
  display: flex;
  gap: 20px;
  align-items: center;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  padding: 20px;
}
.avatar {
  width: 144px;
  height: 144px;
  background: #eee;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 22px;
}
.profile-info h2 {
  margin: 0;
  font-size: 32px;
}
.subtitle {
  color: #666;
  margin: 6px 0;
}
.desc {
  color: #444;
  margin: 6px 0 12px;
}
.actions {
  display: flex;
  gap: 10px;
}
.btn {
  padding: 12px 20px;
  border-radius: 10px;
  border: 1px solid #d0d7de;
  background: white;
  cursor: pointer;
  font-size: 18px;
}
.btn.primary {
  background: #1a9df7;
  color: white;
  border-color: #1787d6;
}
.btn.outline {
  background: white;
}
.btn.small {
  padding: 6px 10px;
  font-size: 13px;
}
.graficos {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 26px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  padding: 20px;
  padding-left: 30px;
}

.graficos h2 {
  align-self: center;
  font-size: 2rem;  
}

.graficos h3 {
  padding-left: 30px;
  font-size: 1.5rem;
}

.panel {
  width: 70%;
  background: #ffffff;
  border-radius: 8px;
  padding: 12px;
}
.chart {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.06);
}
.line-chart {
  width: 100%;
  height: 100%;
}
.historico {
  margin-top: 18px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  padding: 10px;
}
.historico-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 6px;
  margin-top: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  
}

.barraLateral {
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.03);
}
.card, .card-hours, .card-cta  {
  background: #fff;
  padding: 14px;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
}
.card-hours h4 {
  margin: 0 0 8px;
}

.card-hours ul li {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
}

.card-hours ul li span {
  font-weight: bold;
}

.btn.full {
  width: 100%;
}

@media (max-width: 900px) {
  .content {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
  }
}
</style>
