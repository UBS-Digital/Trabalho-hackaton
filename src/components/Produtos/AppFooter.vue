<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <footer>
    <div class="ubs">
      <RouterLink to="/">
        <span class="logo">
          <img src="/logoUBSDigital.png" alt="logo UBS Digital" width="80px">
          <h2>UBS DIgital</h2>
        </span>
      </RouterLink>
      <p>
        Atendimento humanizado e
        tecnologia para cuidar da sua saúde e da sua família com qualidade e agilidade.
      </p>
  </div>
    <div class="links">
      <h3>Links Rápidos</h3>
    </div>
    <div class="contato">
      <h3>Contato</h3>
    </div>
    <div class="horarios">
      <h3>Horário de Atendimento</h3>
    </div>
  </footer>

</template>
<style scoped>
  footer {
    background-color: #0E315E;
    background: linear-gradient(90deg, #0E315E, #2462B4);
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    color: white;
    padding: 1vw;
    align-items: center;
    gap: 20px;
  }
  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
  .logo {
    display: margin;
    align-items: center;
  }
  .ubs {
    display: block;
  }
</style>
