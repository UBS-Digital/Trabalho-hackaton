<script setup>

import AgendarExameView from './AgendarExameView.vue';
import { ref } from 'vue';
import 'v-calendar/style.css';
const date = ref(new Date())

</script>
<template>

    <header>



        <div class="Banner">
            <div>
                <h1>Agendar Exame</h1>
                <p>
                    Escolha o exame e horário que melhor se adequa à sua necessidade
                </p>
            </div>

            <div>

                <img src="/public/foto.png" alt="">

            </div>

        </div>

    </header>

    <div class="container">


        <div class="stepper">

            <div class="step confere">
                <span>1</span>
                <p>Especialidade</p>
            </div>

            <div class="linha"></div>

            <div class="step ativo">
                <span>2</span>
                <p>Local e Data</p>
            </div>

            <div class="linha"></div>

            <div class="step">
                <span>3</span>
                <p>Confirmação</p>
            </div>

        </div>



    </div>
    <div class="colunas">
        <div class="coluna">
            <div class="imagem">
                <h2>Selecionar o Local</h2>
                <img src="/public/iconeLocal.png" alt="">
            </div>
            <select v-model="localAtendimento">
                <option value="">UBS digital - Unidade Norte</option>
                <option value="ubs">UBS digital - Laboratório central</option>
            </select>
        </div>
        <div class="coluna">
            <div class="data">
                <h2>
                    Selecione Data e Horário
                </h2>
                <div class="calendario">
                    <VDatePicker v-model="date" mode="dateTime" is24hr />
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="linha"></div> -->

    <div class="botoes">

        <button>← Voltar</button>

        <button @click="proximo">Próximo →</button>

    </div>

</template>

<style scoped>
.colunas {
    padding: 50px;
    display: flex;
    gap: 20px;
}

.coluna {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.imagem {
    display: flex;
    gap: 10px
}
.imagem img{
    width: 20px;
    height: auto;
}
.imagem h2{
    
}
div.Banner {
    display: flex;
    justify-content: space-between;
    padding: 4rem;
    background: linear-gradient(to right, #6949A8, #267154, #4DDC45);
    margin: 1vw 0 3vw 0;

    h1 {
        font-size: 5rem;
        color: white;
    }

    p {
        color: white;
        font-size: 20px;
    }
}

.container {
    width: 900px;
    margin: auto;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
}

.container h2 {
    font-size: 2rem;
    font-weight: bolder;
}

.stepper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
}

.step {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.step span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #bbb;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.step.ativo span {
    background: #2f80ed;
}

.step.confere span {
    background-color: #4DDC45;
}

.linha {
    flex: 1;
    height: 2px;
    background: #0a47ca;
}

.local {
    width: auto;
    max-width: 900px;
    margin: 16px auto;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 20px 20px rgba(0, 0, 0, .15);

}

.local h2 {

    font-size: 2rem;
}

.local select {}

.linha :hover {
    width: 100%;
    height: 2px;
    background-color: rgb(226, 220, 220);
    transition: 2s;
}

.local img {
    width: 20px;

}

.botoes {

    display: flex;
    justify-content: space-between;
    margin-top: 40px;

}

button {

    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    background: #2f80ed;
    color: white;
    cursor: pointer;

}
.data{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.calendario {

}
</style>