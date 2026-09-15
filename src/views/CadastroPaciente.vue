<script setup>
import { pacientesBase } from '@/components/data/data';
import { ref } from 'vue';

let i = 3;
const nomePaciente = ref('');
const cpfPaciente = ref('');
const telPaciente = ref('');
const genPaciente = ref('');
const emailPaciente = ref('');
const senhaPaciente = ref('');
let cadastroFeito = false;

function cadastrarConsulta() {
  pacientesBase.push({
    nome: nomePaciente,
    peso: '',
    email: emailPaciente,
    senha: senhaPaciente,
    tel: telPaciente
  })
  alert(pacientesBase[i].nome.value + " " + pacientesBase[i].email.value + " " + pacientesBase[i].senha.value + " " + pacientesBase[i].tel.value);
  i += 1;
  cadastroFeito = !cadastroFeito
}
</script>
<template>
  <section class="cadastro">
    <div class="formulario" v-if="!cadastroFeito">
      <h2>Cadastre-se:</h2>
      <form action="cadastroUs">
        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" placeholder="Nome Completo*" required v-model="nomePaciente">
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" placeholder="CPF*" v-model="cpfPaciente">
        <label for="telefone">Telefone:</label>
        <input type="text" id="telefone" placeholder="Número de Telefone*" v-model="telPaciente">
        <div class="gen">
          <p>Gênero:</p>
          <label for="genero">M</label>
          <input type="radio" id="genero" name="genero" value="'M'" v-model="genPaciente">
          <label for="genero">F</label>
          <input type="radio" name="genero" id="genero" value="'F'" v-model="genPaciente">
        </div>
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" required placeholder="Email*" v-model="emailPaciente">
        <label for="">Criar Senha</label>
        <input type="password" name="senha" id="senha" required placeholder="Criar Senha*" v-model="senhaPaciente">
      </form>
      <button class="submeter" @click="cadastrarConsulta">Cadastrar</button>
    </div>
    <div class="feito" v-if="cadastroFeito">
      <h2>Cadastro Feito!</h2>
      <p>Analisaremos usas informações para o cadastro.</p>
      <p><span>O cadastro será confirmado por email.</span></p>
    </div>
  </section>
</template>

<style scoped>
.cadastro {
  background-color: #F4F3F3;
  padding: 2vw 20%;
}

.formulario {
  background-color: white;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 25%);
  padding: 2vw 5vw;
}

.formulario h2 {
  font-size: 1.8rem;
  margin: 0 0 20px 0;
}

form {
  display: flex;
  flex-direction: column;
}
form label {
  font-weight: bold;
  font-size: 1rem;
  margin: 10px 0 0 0;
}
form input {

  padding: 1vw 1.5vw;
  border-radius: 5px;
  border: 1px solid #000;
  font-size: 1rem;
}
.submeter {
  background-color: #4D41EF;
  color: white;
  padding: 0.5vw 2.5vw 0.5vw 3vw;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2vw 0 0 0;
  font-weight: bold;
}
</style>
