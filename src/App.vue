<script setup>
import AppHeader from './components/Produtos/appHeader.vue';
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import AppFooter from '../src/components/Produtos/AppFooter.vue';

const route = useRoute();
const headerCompacto = computed(() => [
  '/',
  '/escolha-cadastro',
  '/cadastro-usuario',
  '/cadastro-medico',
  '/login-usuario'
].includes(route.path));
</script>

<template>
  <header>
    <AppHeader :compact="headerCompacto" />
  </header>

    <main>
      <RouterView />
    </main>
    <footer>
      <AppFooter />
    </footer>
</template>

<style scoped>

</style>
