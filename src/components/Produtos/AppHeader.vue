<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const atual = (RouterLink.path.value === '/')? ref('atual') : ref('')
</script>

<template>
  <header>
    <RouterLink to="/Home">
      <img src="../../../public/logoUBSDigital.png" alt="Logo UBS Digital" width="80px">
    </RouterLink>
    <nav>
        <RouterLink to="/Home" :class="{ atual }"> Home </RouterLink>
        <RouterLink to="/AgendarConsulta" :class="{ atual }">Agendar Consulta</RouterLink>
        <RouterLink to="/AgendarExame" :class="{ atual }">Agendar Exame</RouterLink>
        <RouterLink to="/MedicoFamiliar" :class="{ atual }">Médico da familia</RouterLink>
        <RouterLink to="#" :class="{ atual }">Especialidades</RouterLink>
        <RouterLink to="#" :class="{ atual }"> Contato</RouterLink>
        <div class="botoes">
          <RouterLink to="#" class="btn">Minha Área</RouterLink>
          <RouterLink to="#" class="btn">Agendar Agora</RouterLink>
        </div>
    </nav>
  </header>


</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1vw;
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
