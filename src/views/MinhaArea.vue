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


</template>



<style scoped>


.banner{
  min-height: 200px;
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
  color: #e2e2e2;
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

</style>
