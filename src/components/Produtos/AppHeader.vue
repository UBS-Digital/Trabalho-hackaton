<script setup>
import { RouterLink } from 'vue-router';
function abrirMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('aberto');
}

const nav =
function abrirMenu() {

}
</script>

<template>
  <header>
    <RouterLink to="/">
      <img src="../../../public/logoUBSDigital.png" alt="Logo UBS Digital" width="80px">
    </RouterLink>
    <button class="mudar-menu" @click="abrirMenu">
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    <nav>
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/AgendarConsulta" >Agendar Consulta</RouterLink>
        <RouterLink to="/AgendarExame" >Agendar Exame</RouterLink>
        <RouterLink to="/MedicoFamilia" >Médico da familia</RouterLink>
        <RouterLink to="/Especialidades" >Especialidades</RouterLink>
        <RouterLink to="/Contato" > Contato</RouterLink>
        <div class="botoes">
          <RouterLink to="/MinhaArea" class="btn">Minha Área</RouterLink>
          <RouterLink to="/AgendarAgora" class="btn">Agendar Agora</RouterLink>
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


.mudar-menu {

  justify-content: space-between;
  width: 12vw;
  height: 12vw;
  cursor: pointer;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  display: none;
}
.hamburger {
  whidth: 100%;
  height: 100%;
   flex-direction: column;
  display: flex;
  padding: 1vw;
}
.hamburger span {
  display: block;
  margin: 3px 0;
  height: 1px;
  background-color: blue;
  padding: 2px;
  content: '';
  border-radius: 5px;
}
@media (max-width: 768px) {
  nav {
    display: none;
  }
  .mudar-menu {
    display: block;
  }
}
</style>
