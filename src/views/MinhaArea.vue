<script setup>


</script>




<template>


 <div class="banner">
    <div class="banner__left">
      <div class="avatar" aria-hidden="true">G</div>
      <div class="banner__text">
        <h1>Olá, Gamalindo!</h1>
        <p>Bem-vindo de volta à sua área do paciente</p>
      </div>
    </div>

    <div class="banner__actions">
      <button class="pill-btn" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        Notificações
      </button>
      <button class="pill-btn" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
        configurações
      </button>
    </div>
  </div>





/*card */




  <div class="stats-section">
    <div class="stats-cards">
      <!-- Última Consulta -->
      <div class="stat-card">
        <div class="card-top">
          <div class="icon-box icon-blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <svg class="trend-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        <p class="stat-label">Última Consulta</p>
        <p class="stat-value">02 Mai 2026</p>
      </div>

      <!-- Próximo Exame -->
      <div class="stat-card">
        <div class="card-top">
          <div class="icon-box icon-green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <line x1="10" y1="9" x2="8" y2="9"></line>
            </svg>
          </div>
          <svg class="trend-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        <p class="stat-label">Próximo Exame</p>
        <p class="stat-value">18 Mai 2026</p>
      </div>

      <!-- Vacinas em Dia -->
      <div class="stat-card">
        <div class="card-top">
          <div class="icon-box icon-green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <svg class="trend-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        <p class="stat-label">Vacinas em Dia</p>
        <p class="stat-value">100%</p>
      </div>

      <!-- Peso -->
      <div class="stat-card">
        <div class="card-top">
          <div class="icon-box icon-purple">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <svg class="trend-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        <p class="stat-label">Peso</p>
        <p class="stat-value">72 kg</p>
      </div>
    </div>
  </div>













</template>



<style scoped>


.banner{
  min-height: 100px;
  padding: 36px 32px;
  background: linear-gradient(115deg, #3b6fe0 0%, #3d8fcf 35%, #34a888 65%, #2fb571 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  box-shadow: 0 14px 30px -12px rgba(30, 90, 90, 0.45);
  padding: 60px;
 
}

.banner__left{
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 0;
  padding-left: 150px;
  width: 1000px;
}

.avatar{

  width: 64px;
  height: 64px;  color: #1f1515;
  border-radius: 50%;
  background: #ffffff;
  color: #205cac;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 700;
  box-shadow: 0 4px 10px rgba(0,0,0,0.12);
  
}

.banner__text h1{
  color: #ffffff;
  font-size: 35px;
  font-weight: 700;
  
}

.banner__text p{
  color: rgb(255, 255, 255);
  font-size: 15px;
  padding-left: 30px;;
}

.banner__actions{
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  padding-right: 150px;
}

.pill-btn{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.55);
  background: rgba(255,255,255,0.12);
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  backdrop-filter: blur(2px);
  transition: background 0.15s ease, transform 0.1s ease;
  white-space: nowrap;
}

.pill-btn:hover{
  background: rgba(255,255,255,0.22);
}

.pill-btn:active{
  transform: translateY(1px);
}

.pill-btn:focus-visible{
  outline: 2px solid #fff;
  outline-offset: 2px;
}

.pill-btn svg{
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

@media (max-width: 640px){
  .banner{
    padding: 28px 22px;
    justify-content: flex-start;
  }
  .banner__actions{
    width: 100%;
  }
  .pill-btn{
    flex: 1;
    justify-content: center;
  }
  .banner__text h1{ font-size: 22px; }
}






/*card */











.stats-section {
  width: 100%;
  background: #f3f4f6;
  padding: 24px 0;
  box-sizing: border-box  ;
 
}

.stats-cards {
  max-width: 80vw;   
  margin: 0 auto;       
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0 40px;
  box-sizing: border-box;
}

.stat-card {
  background: #ffffff;
  border-radius: 4px;
  padding: 13px 15px; 
  box-shadow: 1 1px 3px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
}

.card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 14px;
}

.icon-box {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-box svg {
  width: 18px;
  height: 18px;
}

.icon-blue {
  color: #3b82f6;
}

.icon-green {
  color: #10b981;
}

.icon-purple {
  color: #a855f7;
}

.trend-icon {
  width: 15px;
  height: 15px;
  color: #d1d5db;
}

.stat-label {
  margin: 0 0 4px 0;
  font-size: 13px;
  color: #6b7280;
}

.stat-value {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  line-height: 1.2;
}

@media (max-width: 900px) {
  .stats-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .stats-cards {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
}
</style>
