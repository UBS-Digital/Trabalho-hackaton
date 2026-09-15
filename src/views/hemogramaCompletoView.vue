<script setup>

import { ref } from 'vue';

const date = ref(new Date())
const localAtendimento = ref('')

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
        <div class="coluna1">
            <div class="imagem">
                <h2>Selecionar o Local</h2>
                <img src="/public/iconeLocal.png" alt="">
            </div>    
                <select v-model="localAtendimento">
                <option value="">UBS digital - Unidade Norte</option>
                <option value="ubs">UBS digital - Laboratório central</option>
            </select>
            
        </div>
        <div class="coluna2">
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

        <button><RouterLink to="/agendar-exame" class="btn primary"><span><- voltar</span> </RouterLink></button>

        <button><RouterLink to="/agendar-consulta" class="btn primary"><span> Confirmar -></span> </RouterLink>
</button> 
    </div>

</template>

<style scoped>
.colunas {
    padding: 50px;
    display: flex;
    gap: 20px;
}

.coluna1, .coluna2 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
     transform: scale(1.3);
}

.coluna1 {
    background-color: white;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    border-radius: 20px;
    margin-top: 5.65rem;
    margin-bottom: 5.65rem;
    margin-left: 17rem;    
}
.imagem{
    margin: 9vw 0 2vw 0;
    transform: scale(1.7);
    background: linear-gradient(to right, #4DDC45, #267154, #6949A8);
    border-radius: 2px;
    padding: 4px;
    }
.data{
    margin: 5vw;
     background: linear-gradient(to right, #6949A8, #267154, #4DDC45);
      border-radius: 9px;
}
.imagem {
    display: flex;
    gap: 10px
}
.imagem img{
    width: 20px;
    height: auto;
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
    cursor: pointer;

}

span {
    color: white;
}

.data{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>