<script setup>

import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import appHeader from '@/components/Produtos/appHeader.vue';

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
    },
    {
        id: 4,
        nome: "Raio-X Tórax",
        preparo: "sem preparo",
        icone: "📄"
    }
])

const exameSelecionado = ref(null)

function selecionar(exame){
    exameSelecionado.value = exame.id
}

</script>
<template>
  
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
<style scoped>

.container{
    width:900px;
    margin:auto;
    background:white;
    padding:30px;
    border-radius:10px;
    box-shadow:0 2px 10px rgba(0,0,0,.15);
}
.container h2{
    font-size: 2rem;
    font-weight: bolder;
}

.stepper{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:40px;
}

.step{
    display:flex;
    flex-direction:column;
    align-items:center;
}

.step span{
    width:30px;
    height:30px;
    border-radius:50%;
    background:#bbb;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
}

.step.ativo span{
    background:#2f80ed;
}

.linha{
    flex:1;
    height:2px;
    background:#ccc;
}

.cards{

    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:20px;

}

.card{

    display:flex;
    align-items:center;
    gap:15px;

    padding:15px;

    border-radius:12px;

    background:white;

    cursor:pointer;

    box-shadow:0 3px 8px rgba(0,0,0,.15);

    transition:.3s;

}

.card:hover{
    transform:scale(1.02);
}

.card.selecionado{
    border:2px solid #2f80ed;
}

.icone{

    width:40px;
    height:40px;

    background:#2f80ed;

    color:white;

    display:flex;
    justify-content:center;
    align-items:center;

    border-radius:6px;

}

.botoes{

    display:flex;
    justify-content:space-between;
    margin-top:40px;

}

button{

    padding:10px 20px;
    border:none;
    border-radius:8px;
    background:#2f80ed;
    color:white;
    cursor:pointer;

}

</style>
