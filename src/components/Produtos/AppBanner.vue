<script setup>
defineProps(['titulo', 'subtitulo']);
import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="hero">
    <div class="hero-inner">
      <RouterLink to="/"><- Voltar</RouterLink>
      <h1 class="titulo">{{ titulo }}</h1>
      <p class="subtitulo">{{ subtitulo }}</p>
    </div>
  </div>
</template>
<style scoped>
.hero {
  background: linear-gradient(170deg, #2053ac, #447cdb, #267154, #267154, #37c22f);
  color: white;
  padding: 38px 0;
}

.hero-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px;
}

.hero h1 {
  margin: 0;
  font-size: 44px;
}

.hero p {
  margin: 6px 0 0;
}
.hero a {
  color: white;
}
</style>
