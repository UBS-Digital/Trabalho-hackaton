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

        <div class="step confere" v-if="checaPasso"> 
            <span>-</span>
            <p>Especialidade</p>
        </div>

        <div class="linha"></div>

        <div class="step ativo">
            <span>2</span>
            <p>Local</p>
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
 <div class="local">
          <h2>Selecionar o Local</h2>

     <select v-model="localAtendimento">
        <option value="">UBS digital - Unidade Norte</option>
        <option value="ubs">UBS digital - Laboratório central</option>
       
    </select>

     <div class="botoes">

        <button>← Voltar</button>

        <button @click="proximo">Próximo →</button>

    </div>

    </div>
  
            <div class="data-hora">
               
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
              <div class="container">


    <div class="stepper">

        <div class="step confere" v-if="checaPasso"> 
            <span>-</span>
            <p>Especialidade</p>
        </div>

        <div class="linha"></div>

        <div class="step confere">
            <span>-</span>
            <p>Local</p>
        </div>

        <div class="linha"></div>

        <div class="step ativo">
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

    <div class="data">
        <h2>
            Selecione Data e Horário
        </h2>

        <div class="calendario">
        <h4>
            Data e hora Disponível
        </h4>

            <VDatePicker v-model="date" mode="dateTime" is24hr />
        
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
.local{
   width:auto;
   max-width: 900px;
   margin: 16px auto;
    background:white;
    padding:30px;
    border-radius:10px;
     box-shadow:0 20px 20px rgba(0,0,0,.15);
}
.local h2{
    margin: 10px 165px
}
.local select{
    border-radius: 9vw;
   font-size: 3rem;
   margin: 10px 155px
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
.data-hora{
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

.data{
    width:auto;
   max-width: 900px;
   margin: 16px auto;
    background:white;
    padding:30px;
    border-radius:10px;
     box-shadow:0 20px 20px rgba(0,0,0,.15); 

.calendario{
display: flex;
justify-content: center;
}
}

</style>