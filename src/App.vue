<script setup>
import AppHeader from './components/Produtos/appHeader.vue';
import { RouterView } from 'vue-router';
import AppFooter from '../src/components/Produtos/AppFooter.vue';
</script>

<template>
  <header>
<AppHeader />
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
