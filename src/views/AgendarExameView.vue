<script setup>

import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const exames = ref([
    {
        id: 1,
        nome: "hemograma completo",
        preparo: "Jejum de 8h",
        icone: "🩸"
    },
    {
        id: 2,
        nome: "Glicemia em jejum",
        preparo: "Jejum de 8h",
         icone: "💉"
    },
    {
        id: 3,
        nome: "Colesterol Total",
        preparo: "Jejum de 12h",
         icone: "🧪"
    }
])

</script>
<template>
    <nav>  

      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/">AgendarConsulta</RouterLink> 
      <RouterLink to="/">AgendarExame</RouterLink>
      <RouterLink to="/">MedicoFamiliar</RouterLink>
      
    </nav>

<div class="container">


    <div class="stepper">

        <div class="step ativo">
            <span>1</span>
            <p>Especialidade</p>
        </div>

        <div class="linha"></div>

        <div class="step">
            <span>2</span>
            <p>Profissional</p>
        </div>

        <div class="linha"></div>

        <div class="step">
            <span>3</span>
            <p>Data e Horário</p>
        </div>

        <div class="linha"></div>

        <div class="step">
            <span>4</span>
            <p>Confirmação</p>
        </div>

    </div>

    <h2>Selecione o Exame</h2>

    <div class="cards">

        <div
            v-for="exame in exames"
            :key="exame.id"
            class="card"
            :class="{selecionado: exameSelecionado===exame.id}"
            @click="selecionar(exame)"
        >

            <div class="icone">
                {{ exame.icone }}
            </div>

            <div>

                <h3>{{ exame.nome }}</h3>
                <small>{{ exame.preparo }}</small>

            </div>

        </div>

    </div>

    <div class="botoes">

        <button>← Voltar</button>

        <button>Próximo →</button>

    </div>

</div>


</template>
