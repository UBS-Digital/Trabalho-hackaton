<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/Produtos/ButtonChild.vue'
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/AgendarConsulta">Agendar Consulta</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
