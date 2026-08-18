<script setup>

import AgendarExameView from './AgendarExameView.vue';

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

        <div class="step confere ">
            <span>-</span>
            <p>Especialidade</p>
        </div>

        <div class="linha"></div>

        <div class="step ativo">
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
    </div>
</template>
<style scoped>

div.Banner{
    display: flex;
    justify-content: space-between;
    padding: 4rem;
  background: linear-gradient(to right, #6949A8, #267154, #4DDC45);
  margin: 1vw 0 3vw 0;
h1{
    font-size: 5rem;
    color: white;
}
p{
    color: white;
    font-size: 20px;
}
}

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
.step.confere span{
    background-color: #4DDC45;
}
.linha{
    flex:1;
    height:2px;
    background:#ccc;
}


</style>