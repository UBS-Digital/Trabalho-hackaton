<script setup>

import { RouterLink } from 'vue-router'

</script>

<template>

   <img src="" alt="">

    <div class="banner">

        <div class="primeira_parte">
            <p class="fundo">Atendimento disponivel</p>

            <h2>Seu atendimento de saúde mais <span>rápido</span> e <span>acessivel</span></h2>
            <p>Agende consultas e exames online sem filas. Cuidado humanizado e tecnologia para você e sua família.</p>


          <div class="a">
            <RouterLink to="/login" class="botaoum">Agendar consultas </RouterLink>
            <RouterLink to="/agendar-exame" class="botao">Agendar exames<img src="/src/imagem/hospital.png" alt=""></RouterLink>
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
    <a href="#" class="saibaMais">Saiba Mais <span>→</span></a>
  </div>


  <div class="pediatra">
    <div class="cabecalhoDois">
      <img src="/src/imagem/pediatra.png" alt="">
      <h2>Pediatria</h2>
    </div>

    <p>Cuidado especializado para a saúde e desenvolvimento das crianças</p>
    <a href="#" class="saibaMais">Saiba Mais <span>→</span></a>
  </div>


  <div class="ginecologista">
    <div class="cabecalhoTres">
      <img src="/src/imagem/ginecologista.png" alt="">
      <h2>Ginecologia</h2>
    </div>

    <p>Saúde da mulher com atendimento humanizado e preventivo</p>
    <a href="" class="saibaMais">Saiba Mais <span>→</span></a>
  </div>


  <div class="medicoFamilia">
    <div class="cabecalhoQuatro">
      <img src="/src/imagem/medicoFamilia.png" alt="">
      <h2>Médico da Família</h2>
    </div>

    <p>Acompanhamento contínuo e integral de toda sua família </p>
    <a href="" class="saibaMais">Saiba Mais <span>→</span></a>
  </div>


  <div class="vacinacao">
    <div class="cabecalhoCinco">
      <img src="/src/imagem/Vacina.png" alt="">
      <h2>Vacinação</h2>
    </div>

    <p>Vacinas disponíveis para todas as idades e campanhas</p>
    <a href="" class="saibaMais">Saiba Mais <span>→</span></a>
  </div>


  <div class="examesLaboratoriais">
    <div class="cabecalhoSeis">
      <img src="/src/imagem/ExamesLabotoriais.png" alt="">
      <h2>Exames Laboratoriais</h2>
    </div>

    <p>Coleta e análises clínicas com resultados rápidos</p>
    <a href="" class="saibaMais">Saiba Mais <span>→</span></a>
  </div>


  <div class="examesImagem">
    <div class="cabecalhoSete">
      <img src="/src/imagem/ExameDeImagem.png" alt="">
      <h2>Exames de Imagem</h2>
    </div>

    <p>Raio-X, ultrassom e outros exames diagnósticos</p>
    <a href="" class="saibaMais">Saiba Mais <span>→</span></a>
  </div>


  <div class="atendimentoPreventivo">
    <div class="cabecalhoOito">
      <img src="/src/imagem/AtendimentoPreventivo.png" alt="">
      <h2>Atendimento Preventivo</h2>
    </div>

    <p>Programas de prevenção e promoção da saúde</p>
    <a href="" class="saibaMais">Saiba Mais <span>→</span></a>
  </div>

</div>



<div class="corpoDepoimentos">

    <h2>O que dizem nossos pacientes ?</h2>
    <p>Depoimentos de quem confia na nossa equipe</p>

    <div class="caixaComentario">
        <input type="text" placeholder="Comente aqui a sua opinião sobre o site, atendimento, consultas e o que você quiser mas lembre-se de sempre manter a educação com todos 😊">
    </div>

</div>

<div class="depoimentos">

  <div class="depoimento">
    <p class="estrelas">★★★★★</p>
    <p class="fala">"O atendimento online facilitou muito minha vida. Consigo agendar consultas para toda família sem sair de casa"</p>
    <div class="autor">
      <img src="/src/imagem/moco.png" alt="">
      <div>
        <p class="nome">Maria Silva</p>
        <p class="tipo">Paciente</p>
      </div>
    </div>
  </div>

  <div class="depoimento">
    <p class="estrelas">★★★★★</p>
    <p class="fala">"Equipe atenciosa e sistema muito prático. Recomendo para todos"</p>
    <div class="autor">
      <img src="/src/imagem/moco.png" alt="">
      <div>
        <p class="nome">João Santos</p>
        <p class="tipo">Paciente</p>
      </div>
    </div>
  </div>

  <div class="depoimento">
    <p class="estrelas">★★★★★</p>
    <p class="fala">"Excelente! Consegui agendar exames rapidamente e o resultado saiu no prazo"</p>
    <div class="autor">
      <img src="/src/imagem/moco.png" alt="">
      <div>
        <p class="nome">Ana Paula</p>
        <p class="tipo">Paciente</p>
      </div>
    </div>
  </div>

</div>


<div class="chamada">
    <h2>Pronto para cuidar da sua saúde ?</h2>
    <p>Agende sua consulta agora mesmo e tenha acesso a um atendimento de qualidade</p>

    <div class="a">
        <a href="" class="botaoAgendar">Agendar agora<img src="/src/imagem/Calendario.png" alt=""></a>
        <a href="" class="botaoConta">Criar conta</a>
    </div>
</div>




</template>
<style scoped>

div.banner{
    display: flex;
    background: linear-gradient(90deg, #2F6FDB, #418CEF, #4FA3FF);
    padding: 3rem;
}

div.banner .segunda_parte img{
    width: 600px;
    height: auto;
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
    gap: 20px;
    align-items: center;
    padding-top: 100px;
    padding-left: 125px;
    background-color: #f5f5f5;
}


.bloco {
    width: 400px;
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
    font-size: 1.3rem;
    font-weight: 500;
    color: #222;
    line-height: 1.2;
}

.bloco p {
    margin: 10px 0 0 0;
    padding: 0;
    font-size: 1.1rem;
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

/* ===== Nossos serviços (grade 4 colunas / 2 linhas) ===== */
.servicos{
    background-color: #f5f5f5;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    padding: 25px 5rem 4rem 5rem;
}

.servicos > div{
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    width: 250px;
    min-height: 190px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    transition: 0.2s;
}

.servicos > div:hover{
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.cabecalhoUm,
.cabecalhoDois,
.cabecalhoTres,
.cabecalhoQuatro,
.cabecalhoCinco,
.cabecalhoSeis,
.cabecalhoSete,
.cabecalhoOito{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 17px;
}

.cabecalhoUm img,
.cabecalhoDois img,
.cabecalhoTres img,
.cabecalhoQuatro img,
.cabecalhoCinco img,
.cabecalhoSeis img,
.cabecalhoSete img,
.cabecalhoOito img{
    width: 36px;
    height: 36px;
    object-fit: contain;
}

.cabecalhoUm h2,
.cabecalhoDois h2,
.cabecalhoTres h2,
.cabecalhoQuatro h2,
.cabecalhoCinco h2,
.cabecalhoSeis h2,
.cabecalhoSete h2,
.cabecalhoOito h2{
    font-size: 1.5rem;
    margin: 0;
}

.clinico p,
.pediatra p,
.ginecologista p,
.medicoFamilia p,
.vacinacao p,
.examesLaboratoriais p,
.examesImagem p,
.atendimentoPreventivo p{
    color: #696666;
    font-size: 1.3rem;
    padding: 0 17px;
    line-height: 1.5;
    flex-grow: 1;
}

.saibaMais{
    color: #418CEF;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 500;
    padding: 0 17px 17px 17px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
}

.saibaMais span{
    transition: 0.2s;
}

.saibaMais:hover span{
    transform: translateX(4px);
}

/* ===== Depoimentos ===== */
.corpoDepoimentos{
    background-color: #f5f5f5;
    text-align: center;
    padding: 0 5rem 2rem 5rem;
}

.corpoDepoimentos h2{
    font-weight: bold;
    font-size: 3.2rem;
}

.corpoDepoimentos > p{
    font-size: 1.6rem;
    color: #918686;
    margin-bottom: 2rem;
}

.caixaComentario{
    max-width: 700px;
    margin: 0 auto;
}

.caixaComentario input{
    width: 100%;
    box-sizing: border-box;
    padding: 1rem 1.3rem;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 1.2rem;
    font-family: inherit;
}

.depoimentos{
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
    padding: 2rem 5rem 4rem 5rem;
}

.depoimento{
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    width: 300px;
    padding: 20px;
    box-sizing: border-box;
}

.depoimento .estrelas{
    color: #FFC107;
    font-size: 1.3rem;
    margin: 0 0 10px 0;
}

.depoimento .fala{
    color: #555;
    font-size: 1.2rem;
    line-height: 1.5;
    min-height: 80px;
}

.depoimento .autor{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
}

.depoimento .autor img{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
}

.depoimento .nome{
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0;
    color: #222;
}

.depoimento .tipo{
    font-size: 1rem;
    color: #999;
    margin: 0;
}

/* ===== Chamada final ===== */
.chamada{
    background: linear-gradient(90deg, #2F6FDB, #24DF68);
    text-align: center;
    padding: 4rem 2rem;
    color: white;
}

.chamada h2{
    font-size: 2.6rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.chamada p{
    font-size: 1.4rem;
    margin-bottom: 2rem;
}

.chamada .a{
    display: flex;
    justify-content: center;
    gap: 25px;
}

.botaoAgendar,
.botaoConta{
    padding: 12px 28px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 8px;
}

.botaoAgendar{
    background-color: white;
    color: #2F6FDB;
    font-weight: 600;
}

.botaoAgendar img{
    width: 20px;
    height: 20px;
}

.botaoConta{
    color: white;
    border: 1px solid white;
}



</style>
