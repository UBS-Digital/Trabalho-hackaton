<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <RouterLink to="/">
      <img src="../../../public/logoUBSDigital.png" alt="Logo UBS Digital" width="80px">
    </RouterLink>
    <nav>
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/AgendarConsulta" >Agendar Consulta</RouterLink>
        <RouterLink to="/AgendarExame" >Agendar Exame</RouterLink>
        <RouterLink to="/MedicoFamilia" >Médico da familia</RouterLink>
        <RouterLink to="/" >Especialidades</RouterLink>
        <RouterLink to="/" > Contato</RouterLink>
        <div class="botoes">
          <RouterLink to="/" class="btn">Minha Área</RouterLink>
          <RouterLink to="/" class="btn">Agendar Agora</RouterLink>
        </div>
    </nav>
  </header>


</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2vw 3vw 2vw 2vw;
}
.btn {
  border: 1px solid black;
  padding: 0.5vw 1vw;
  margin: 5px;
}

nav {
  display: flex;
}
.botoes {
  display: block;
}
.atual {
  color: rgb(4, 132, 51);
}

</style>
