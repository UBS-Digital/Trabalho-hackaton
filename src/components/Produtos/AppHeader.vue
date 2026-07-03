<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>

    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/">AgendarConsulta</RouterLink>
        <RouterLink to="/">AgendarExame</RouterLink>
        <RouterLink to="/">MedicoFamiliar</RouterLink>
        <RouterLink to="#">Especialidades</RouterLink>
        <RouterLink to="#"> Contato</RouterLink>
        <RouterLink to="#" class="btn">Minha Área</RouterLink>
        <RouterLink to="#" class="btn">Agendar Agora</RouterLink>
    </nav>

</template>

<style scoped>
RouterLink {
  color: blue;
}
</style>
