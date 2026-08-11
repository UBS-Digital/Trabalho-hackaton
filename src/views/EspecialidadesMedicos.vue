<script setup>
 import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="banner">
        <div class="voltar">
            <RouterLink to="/"><- Voltar</RouterLink>
        </div>
        <h2>
            Especialidades Médicas
        </h2>
        <p>
            Conheça todas as especialidades disponíveis na UBS Digital e agende sua consulta
        </p>
    </div>
</template>
<style scoped>
.banner {
    padding: 1VW 0.85VW;
    background: linear-gradient(170deg, #2053ac, #447CDB, #267154, #267154, #37c22f);
    color: whitesmoke;
}
.banner a {
    color: white;
}
h2 {
    font-size: 1.67rem;
    font-weight: bolder;
    margin: 3vw 1vw 0 2.5vw;
}
p {
    font-size: 1.1rem;
    margin: 1vw 2.5vw 3vw 2.5vw;
}

</style>
