<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <main>
    <section class="banner">
      <a href="#"><RouterLink to="/"><- Voltar</RouterLink></a>
      <h2>Entre em Contato</h2>
      <p>
        Entre em contato ou visite nossa unidade. Queremos te ajudar.
      </p>
    </section>
    <section class="formulario">
      <form action="">
        <h3>Envie sua mensagem</h3>
        <label for="name" class="nome">
          <input type="text" id="name" for="name" placeholder="Nome Completo*" required>
        </label>
        <div class="lado">
          <label for="email" class="email">
          <input type="email" id="email" for="email" placeholder="E-mail*" required>
        </label>
        <label for="telefone" class="telefone">
          <input type="text" id="telefone" for="telefone" placeholder="Telefone*" required>
        </label>
        </div>
        <label for="assunto" class="assunto">
          <input type="text" id="assunto" for="assunto" placeholder="Assunto*" required>
        </label>
        <label for="mensagem" class="mensagem">
          <input type="text" id="mensagem" for="mensagem" placeholder="Mensagem*" required>
        </label>
      </form>
    </section>
    <section class="informacoes">
      <ul>
        <li>
          <h4>Endereço</h4>
          <p>
            Rua da Saúde, 1234
          </p>
          <p>
            Centro - São Paulo, SP
          </p>
        </li>
        <li>
          <h4>Email</h4>
          <p>
            contato@ubsdigital.gov.br
          </p>
        </li>
        <li>
          <h4>Horários de Atendimento</h4>
          <h5>Segunda a Sexta: </h5>
          <p>
            7h às 19h
          </p>
          <h5>Sábados:</h5>
          <p>
            7h às 12h
          </p>
          <h5>Domingos: </h5>
          <p>
            Fechado
          </p>
        </li>
        <li>
          <h4>Telefone</h4>
          <p>
            (11) 3456-7890
          </p>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>

  main {
    background-color: #f2f2f2;
    padding: 0 0 1vw 0;
  }
  section {
    margin: 2vw 15% 2vw 15%;
    padding: 5vw 7% 5vw 5%;
    background-color: white;
  }
  main .banner {
    background: linear-gradient(63deg, #447CDB, #267154, #4DDC45);
    padding: 1vw 2vw 3vw 2vw;
    color: white;
    margin: 0 0 0 0;
  }
  main h2 {
    font-size: 2rem;
    font-weight: bold;
  }
  main a {
    color: white;
    text-decoration: none;
    margin: 0 0 1vw 0;
  }
  input {
    padding: 1vw 1.5vw;
    width: 100%;
    margin: 1vw 0 1vw 0;
    border-radius: 5px;
    border: 1px solid #000;
    font-size: 1rem;
  }
  .lado {
    display: flex;
    justify-content: space-between;
  }
  .lado .email, .lado .telefone{
    width: 46%;
  }
  .mensagem input {
    padding: 1vw 1.5vw 10vw 1.5vw;
  }
  .informacoes {
    background-color: #f2f2f2;
    padding: 0 0 0 0;
  }
  .informacoes ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2vw 5vw;
    padding: 0 5vw;
  }
  .informacoes ul li {
    background-color: white;
    text-align: center;
    padding: 1vw;
    height: 15vw;
    box-shadow: 5px 5px 5px #00000029;
  }
</style>
