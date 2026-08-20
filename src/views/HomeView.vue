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


          <div class="a">
            <a href="https://www.google.com" class="botaoum">Agendar consultas </a>
              <a href="https://www.google.com" class="botao">Agendar exames<img src="/src/imagem/hospital.png" alt=""></a>
          </div>
        </div>

        <div class="segunda_parte">
            <img src="/src/imagem/ImgHome.png" alt="">
        </div>
    </div>

<div class="blocos">

  <div class="bloco">
    <div class="cabecalho-bloco">
      <img src="/src/imagem/AgendamentoFacil.png" alt="">
      <h2>Agendamento fácil</h2>
    </div>

    <p>Agende sua consulta online sem fila</p>
  </div>


  <div class="bloco">
    <div class="cabecalho-bloco">
      <img src="/src/imagem/AtendimentoRapido.png" alt="">
      <h2>Atendimento rápido</h2>
    </div>

    <p>Horários flexíveis de segunda a sábado</p>
  </div>


  <div class="bloco">
    <div class="cabecalho-bloco">
      <img src="/src/imagem/SemComplicacao.png" alt="">
      <h2>Sem Burocrasia</h2>
    </div>

    <p>Processo simples e descomplicado</p>
  </div>


  <div class="bloco">
    <div class="cabecalho-bloco">
      <img src="/src/imagem/AcompanhamentoDigital.png" alt="">
      <h2>Acompanhamento Digital</h2>
    </div>

    <p>Acesse seu histórico e resultados online</p>
  </div>

</div>



<div class="corpo">

    <h2>Nossos serviços</h2>
    <p>
        Atendimento completo com especialidades médicas e exames para cuidar da sua 
        saúde.
    </p>
</div>
    
<div class="servicos">

  <div class="clinico">
    <div class="cabecalhoUm">
      <img src="/src/imagem/clinicoGeral.png" alt="">
      <h2>Clínico Gerall</h2>
    </div>

    <p>Atendimento completo para diagnóstico e tratamento de doenças comuns</p>
  </div>


  <div class="pediatra">
    <div class="cabecalhoDois">
      <img src="/src/imagem/pediatra.png" alt="">
      <h2>Pediatria</h2>
    </div>

    <p>Cuidado especializado para a saúde e desenvolvimento das crianças</p>
  </div>


  <div class="ginecologista">
    <div class="cabecalhoTres">
      <img src="/src/imagem/ginecologista.png" alt="">
      <h2>Ginecologia</h2>
    </div>

    <p>Saúde da mulher com atendimento humanizado e preventivo</p>
  </div>


  <div class="medicoFamilia">
    <div class="cabecalhoQuatro">
      <img src="/src/imagem/medicoFamilia.png" alt="">
      <h2>Médico da Família</h2>
    </div>

    <p>Acompanhamento contínuo e integral de toda sua família </p>
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

.primeira_parte .a {
    display: flex;
    gap: 35px;
}

.botao,
.botaoum {
    padding: 12px 24px;
    text-decoration: none;
    border: 1px solid;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    height: 50px;
    box-sizing: border-box;
}

.botao {
    color: white;
}

.botaoum {
    color: #418CEF;
    background-color: white;
}

.botao img {
    width: 20px;
    height: 20px;
    object-fit: contain;
}
}
.primeira_parte .a{
display: flex;
gap: 35px;

img{
  width: 30px;
  height: 30px;
}
}

.blocos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 35px;
    padding: 35px 30px;
    background-color: #f5f5f5;
}


.bloco {
    width: 200px;
    min-height: 120px;
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    box-sizing: border-box;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.20);
    transition: 0.2s;
}


.bloco:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

.cabecalho-bloco {
    display: flex;
    align-items: center;
    gap: 8px;
}


.cabecalho-bloco img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    flex-shrink: 0;
}


.cabecalho-bloco h2 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    color: #222;
    line-height: 1.2;
}

.bloco p {
    margin: 10px 0 0 0;
    padding: 0;
    font-size: 12px;
    line-height: 1.4;
    color: #999;
}
.corpo{
    background-color: #f5f5f5;

}
.corpo h2{
    text-align: center;
    font-weight: bold;
    font-size: 7rem;
    padding: 5rem 5rem 1.5rem 5rem

}
.corpo p{
    text-align: center;
    font-size: 2rem;
    color: #918686;
    
}

.servicos{
    background-color: #f5f5f5;
    justify-content: space-between;
    display: flex;
    margin: 0 0 3rem 0;
}
.servicos .clinico{
    background-color: white;
    border-radius: 4px;
    width: 418px;
    height: 432px;
    margin: 25px 0 0 5rem;
}
.cabecalhoUm{
 display: flex;
    align-items: center;
    gap: 10px;
    padding: 17px;
h2{
    font-size: 1.8rem;
}
}
.clinico p{
    color: #696666;
    font-size: 1.5rem;
    padding: 0 17px;
     line-height: 1.5;
}

.servicos{
    background-color: #f5f5f5;
    justify-content: space-between;
    display: flex;
    margin: 0 0 3rem 0;
}
.servicos .clinico{
    background-color: white;
    border-radius: 4px;
    width: 418px;
    height: 432px;
    margin: 25px 0 0 5rem;
}
.cabecalhoUm{
 display: flex;
    align-items: center;
    gap: 10px;
    padding: 17px;
h2{
    font-size: 1.8rem;
}
}
.clinico p{
    color: #696666;
    font-size: 1.5rem;
    padding: 0 17px;
     line-height: 1.5;
}

.servicos .pediatra{
    background-color: white;
    border-radius: 4px;
    width: 418px;
    height: 432px;
    margin: 25px 0 0 5rem;
}
.cabecalhoDois{
 display: flex;
    align-items: center;
    gap: 10px;
    padding: 17px;
h2{
    font-size: 1.8rem;
}
}
.pediatra p{
    color: #696666;
    font-size: 1.5rem;
    padding: 0 17px;
     line-height: 1.5;
}

.servicos{
    background-color: #f5f5f5;
    justify-content: space-between;
    display: flex;
    margin: 0 0 3rem 0;
}
.servicos .pediatra{
    background-color: white;
    border-radius: 4px;
    width: 418px;
    height: 432px;
    margin: 25px 0 0 5rem;
}
.cabecalhoDois{
 display: flex;
    align-items: center;
    gap: 10px;
    padding: 17px;
h2{
    font-size: 1.8rem;
}
}
.pediatra p{
    color: #696666;
    font-size: 1.5rem;
    padding: 0 17px;
     line-height: 1.5;
}

.servicos .ginecologista{
    background-color: white;
    border-radius: 4px;
    width: 418px;
    height: 432px;
    margin: 25px 0 0 5rem;
}
.cabecalhoTres{
 display: flex;
    align-items: center;
    gap: 10px;
    padding: 17px;
h2{
    font-size: 1.8rem;
}
}
.ginecologista p{
    color: #696666;
    font-size: 1.5rem;
    padding: 0 17px;
     line-height: 1.5;
}

.servicos{
    background-color: #f5f5f5;
    justify-content: space-between;
    display: flex;
    margin: 0 0 3rem 0;
}
.servicos .ginecologista{
    background-color: white;
    border-radius: 4px;
    width: 418px;
    height: 432px;
    margin: 25px 0 0 5rem;
}
.cabecalhoTres{
 display: flex;
    align-items: center;
    gap: 10px;
    padding: 17px;
h2{
    font-size: 1.8rem;
}
}
.ginecologista p{
    color: #696666;
    font-size: 1.5rem;
    padding: 0 17px;
     line-height: 1.5;
}
Aqui
.servicos .medicoFamilia{
    background-color: white;
    border-radius: 4px;
    width: 418px;
    height: 432px;
    margin: 25px 0 0 5rem;
}
.cabecalhoQuatro{
 display: flex;
    align-items: center;
    gap: 10px;
    padding: 17px;
h2{
    font-size: 1.8rem;
}
}
.medicoFamilia p{
    color: #696666;
    font-size: 1.5rem;
    padding: 0 17px;
     line-height: 1.5;
}

.servicos{
    background-color: #f5f5f5;
    justify-content: space-between;
    display: flex;
    margin: 0 0 3rem 0;
}
.servicos .medicoFamilia{
    background-color: white;
    border-radius: 4px;
    width: 418px;
    height: 432px;
    margin: 25px 0 0 5rem;
}
.cabecalhoQuatro{
 display: flex;
    align-items: center;
    gap: 10px;
    padding: 17px;
h2{
    font-size: 1.8rem;
}
}
.medicoFamilia p{
    color: #696666;
    font-size: 1.5rem;
    padding: 0 17px;
     line-height: 1.5;
}


</style>
