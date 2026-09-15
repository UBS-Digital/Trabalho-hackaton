<script setup>
import { ref } from 'vue';
import { pacientesBase } from '@/components/data/data';


const email = ref('');
const senha = ref('');
const chaveUsuario = ref(null);
let mostrarMensagem = ref(false);

function normalizarCpf(cpf) {
  return cpf ? cpf.replace(/\D/g, '') : '';
}

function gerarChaveUsuario(cpf, emailUsuario) {
  const cpfLimpo = normalizarCpf(cpf);
  return `${cpfLimpo}_${emailUsuario.trim().toLowerCase()}`;
}

function login() {
  const usuarioEncontrado = pacientesBase.find(
    (paciente) => paciente.email === email.value && paciente.senha === senha.value
  );
  if(usuarioEncontrado) {
    chaveUsuario.value = usuarioEncontrado.cpf;
    mostrarMensagem.value = true;
  } else {
    alert('E-mail ou senha incorretos.');
  }
}

function obterUsuario() {
  const chaveSalva = sessionStorage.getItem('usuarioChave');

  if (!chaveSalva) return null;

  return pacientesBase.find((paciente) => {
    const chaveGerada = gerarChaveUsuario(paciente.cpf, paciente.email);
    return chaveGerada === chaveSalva;
  });
}
</script>
<template>
  <section class="login">
    <div class="formulario">
      <h2>Login</h2>
      <form>
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="email" required />

        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="senha" required />

        <button type="submit" class="submeter" @click.prevent="login()">Entrar</button>
      </form>
    </div>
    <div class="feito" v-if="mostrarMensagem">
      <h2>Login bem-sucedido!</h2>
      <p>Bem-vindo(a), {{ obterUsuario().nome }}!</p>
      <p>Seu CPF é: {{ obterUsuario().cpf }}</p>
      </div>
  </section>

</template>

<style scoped>
.login {
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

.feito {
  text-align: center;
  margin: 20% 0 20% 0;
}
.feito h2 {
  font-size: 2rem;
  margin: 0 0 20px 0;
}
.feito p {
  font-size: 1.7rem;
}
.feito p span {
  font-size: 1.3rem;
}

.erro {
  color: #d32f2f;
  font-size: 1rem;
  margin-top: 0.3rem;
  display: block;
}
</style>
