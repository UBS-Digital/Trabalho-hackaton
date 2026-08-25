<script setup>
import { RouterLink } from 'vue-router';

function abrirMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('ativo');
}

</script>

<template>
  <header>
    <div class="logo">
      <RouterLink to="/">
      <img src="../../../public/logoUBSDigital.png" alt="Logo UBS Digital" width="80px">
    </RouterLink>
    </div>
    <div class="menu-direita">
      <button id="mudar-menu" class="mudar-menu" @click="abrirMenu">
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    <nav id="menu">
      <ul>
        <li>
          <RouterLink to="/"> Home </RouterLink>
        </li>
        <li>
          <RouterLink to="/AgendarConsulta" >Agendar Consulta</RouterLink>
        </li>
        <li>
          <RouterLink to="/AgendarExame" >Agendar Exame</RouterLink>
        </li>
        <li>
          <RouterLink to="/MedicoFamilia" >Médico da familia</RouterLink>
        </li>
        <li>
          <RouterLink to="/Especialidades" >Especialidades</RouterLink>
        </li>
        <li>
          <RouterLink to="/Contato" > Contato</RouterLink>
        </li>
        <li>
          <div class="botoes">
            <RouterLink to="/MinhaArea" class="btn">Minha Área</RouterLink>
            <RouterLink to="/AgendarAgora" class="btn">Agendar Agora</RouterLink>
          </div>
        </li>
      </ul>
    </nav>
    </div>
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
nav ul {
  display: flex;
}
.botoes {
  display: block;
}
.atual {
  color: rgb(4, 132, 51);
}

.menu-direita {
  position: relative;
}

.mudar-menu {
  justify-content: space-between;
  width: 12vw;
  height: 12vw;
  cursor: pointer;
  background-color: white;
  border: none;
  border-radius: 5px;
  display: none;
}
.hamburger {
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  padding: 1vw;
}
.hamburger span {
  display: block;
  margin: 3px 0;
  height: 1px;
  background-color: #447CDB;
  padding: 2px;
  content: '';
  border-radius: 5px;
}
@media (max-width: 768px) {
  .botoes {
    display: grid;
  }
  #menu {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    display: block;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    pointer-events: none;
    text-align: right;
    background: white;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    padding: 0.75rem 1rem;
    z-index: 20;
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  }

  #menu.ativo {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  }

  nav ul {
    display: block;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  nav ul li {
    margin: 2.5vw 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .mudar-menu {
    display: block;
  }
}
</style>
