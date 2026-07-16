<script setup>
</script>
<template>
  <footer>
    <div class="ubs">
      <img src="/logoUBSDigital.png" alt="logo UBS Digital" width="80px">
    <h2>UBS DIgital</h2>
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
  }
  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
  .ubs {
    display: flex;
    align-items: center;
  }
</style>
