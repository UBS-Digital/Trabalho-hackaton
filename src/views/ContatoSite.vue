<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <main>
    <section class="banner">

      <h2>
        <RouterLink to="/">-&gt; Voltar</RouterLink>
      </h2>
      <p>
        Entre em contato ou visite nossa unidade. Queremos te ajudar.
      </p>
    </section>
    <section class="formulario">
      <form action="">
        <div class="tituloForm">
          <img src="../../public/formIcone.png" alt="">
          <h3>Envie sua mensagem</h3>
        </div>

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
        <div class="botao">
          <button type="submit"><span>Enviar Formulário</span><img src="../../public/mensagem.png" alt=""></button>
        </div>
      </form>
    </section>
    <section class="informacoes">
      <ul>
        <li>
          <img src="../../public/Group 3.png" alt="Local">
          <h4>Endereço</h4>
          <p>
            Rua da Saúde, 1234
          </p>
          <p>
            Centro - São Paulo, SP
          </p>
        </li>
        <li>
          <img src="../../public/Email.png" alt="Email">
          <h4>Email</h4>
          <p>
            contato@ubsdigital.gov.br
          </p>
        </li>
        <li>
          <img src="../../public/Horário.png" alt="Horário de Atendimento">
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
          <img src="../../public/telefone.png" alt="Telefone">
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

main h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

main a {
  color: white;
  text-decoration: none;
  margin: 0 0 1vw 0;
}

.formulario {
  box-shadow: 1px 5px 5px #00000050;
}

.tituloForm {
  display: flex;
  align-items: center;
  gap: 1vw;
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

.lado .email,
.lado .telefone {
  width: 46%;
}

.mensagem input {
  padding: 1vw 1.5vw 10vw 1.5vw;
}

.formulario .botao {
  display: flex;
  justify-content: center;
  margin: 2vw 0 0 0;
}

.formulario form button {
  background-color: #4D41EF;
  color: white;
  padding: 0.5vw 2.5vw 0.5vw 3vw;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.formulario form button span {
  font-weight: bold;
  font-size: 1.2rem;
}

.formulario form button img {
  width: 25%;
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
  padding: 4vw;
  min-height: 20vw;
  box-shadow: 1px 5px 5px #00000050;
}

.informacoes ul li h4 {
  font-size: 2rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  p {
    font-size: 1rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  img {
    width: 45%;
  }

  .informacoes ul {
    grid-template-columns: 1fr;
    gap: 2vw 0;
  }

  .informacoes ul li {
    min-height: 8vw;
    margin: 2vw 0 2vw 0;
  }

}
</style>
