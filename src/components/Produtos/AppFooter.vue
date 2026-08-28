<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <footer>
    <div class="ubs">
      <RouterLink to="/">
        <!--Não consigo alterar essa parte no CSS, então estou usando o style diretamente-->
        <span class="logo" style="display: flex; align-items: center; color: white;">
          <img src="/logoUBSDigital.png" alt="logo UBS Digital" width="80px"/>
          <h2>UBS Digital</h2>
        </span>
      </RouterLink>
      <p>
        Atendimento humanizado e
        tecnologia para cuidar da sua saúde e da sua família com qualidade e agilidade.
      </p>
  </div>
    <div class="links">
      <h3>Links Rápidos</h3>
      <nav>
        <ul>
          <li><RouterLink to="/"> Home </RouterLink></li>
          <li><RouterLink to="/AgendarConsulta" >Agendar Consulta</RouterLink></li>
          <li><RouterLink to="/AgendarExame" >Agendar Exame</RouterLink></li>
          <li><RouterLink to="/MedicoFamilia" >Médico da familia</RouterLink></li>
          <li><RouterLink to="/Especialidades" >Especialidades</RouterLink></li>
          <li><RouterLink to="/Contato" > Contato</RouterLink></li>
        </ul>
      </nav>
    </div>
    <div class="contato">
      <h3>Contato</h3>
      <p>
        Rua da Saúde, 1234
        Centro - São Paulo, SP
      </p>
      <p>
        (11) 3456-7890
      </p>
      <p>
        contato@ubsdigital.gov.br
      </p>
    </div>
    <div class="horarios">
      <h3>Horário de Atendimento</h3>
      <p>
         Segunda a Sexta
          7h às 19h
      </p>
      <p>
        Sábados
        7h às 12h
      </p>
    </div>
  </footer>

</template>
<style scoped>
  footer {
    background-color: #0E315E;
    background: linear-gradient(90deg, #0E315E, #2462B4);
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    color: white;
    padding: 2vw 2vw 3vw 2vw;
    align-items: first baseline;
    gap: 20px;
    min-width: 90%;

  }
  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
  .ubs {
    display: block;
    padding: 10px 0 20px 0;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin: 10px 0 0 0;
    padding: 0 6vw;
  }
  a {
    text-decoration: underline;
    color: white;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 2;
  }
  .links {
    padding: 0 6vw;
  }
  .ubs p {
    padding: 0;
  }
  @media (max-width: 768px) {
    footer {
      display: block;
      padding: 5vw 10px 5vw 10px;
      margin: 0;
    }
    footer div {
      margin: 20px 0 20px 0;
      padding: 20px 10px 30px 10px;
      border-bottom: 1px solid rgba(120, 181, 255, 0.473);
    }
    footer .ubs {
      gap: 0px;
    }
    footer .ubs a {
      margin: 0;
      line-height: 0.9;
    }
    footer .ubs p {
      margin: 0;
    }
    footer .links a {
      font-size: 1.2rem;
      margin: 10px 0 10px 0;
    }
  }
</style>
