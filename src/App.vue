<script setup>
import appHeader from './components/Produtos/AppHeader.vue';
import { RouterView } from 'vue-router';
import AppFooter from './components/Produtos/AppFooter.vue';
</script>

<template>
  <header>
    <appHeader />
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
