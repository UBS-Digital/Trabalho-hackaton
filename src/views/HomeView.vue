<script setup>

import { RouterLink,  } from 'vue-router'

</script>

<template>

   <img src="" alt="">

    <div class="banner">

        <div class="primeira_parte">
            <p class="fundo">Atendimento disponivel</p>

            <h2>Seu atendimento de saúde mais <span>rápido</span> e <span>acessivel</span></h2>
            <p>Agende consultas e exames online sem filas. Cuidado humanizado e tecnologia para você e sua família.</p>

            <div class="botao">

                <div>
                    <input type="button" value="Agendar consulta" name="">
                </div>
                <div> <input type="button" value="Agendar exame" name="">
                </div>
                  
            </div>
          
        </div>

        <div class="segunda_parte">
            <img src="/src/imagem/ImgHome.png" alt="">
        </div>
    </div>



</template>
<style scoped>

div.banner{
    display: flex;
    background: linear-gradient(90deg, #2F6FDB, #418CEF, #4FA3FF);
    padding: 3rem;
}

div.primeira_parte{
.fundo{
    border-radius: 1.3rem;
    background-color: #d9d9d981;
    text-align: center;
    display: inline-block;
    padding: 0.6rem;
}

h2{
    font-size: 6.8rem;
    color: white;
    font-weight: bold; 
    padding: 2rem;
    letter-spacing: 0.8px;
   
}
h2 span{
     color: #24DF68;
}
p{
    color: white;
    padding: 4rem;
    font-size: xx-large;
    letter-spacing: 0.5px;
    font-weight: 300;

}
.botao{
    display: flex;
    padding: 0.7rem;
    border-radius: 10px;
    
}
}






</style>
