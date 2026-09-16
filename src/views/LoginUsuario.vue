<script setup>

import { ref } from 'vue';
import { medicosBase, pacientesBase } from '@/components/data/data';
const email = ref('');
const senha = ref('');
const chaveUsuario = ref(sessionStorage.getItem('usuarioChave') || null);
const usuarioLogado = ref(null);
const mostrarMensagem = ref(false);
const erroLogin = ref('');

function normalizarCpf(cpf) {
  return cpf ? cpf.replace(/\D/g, '') : '';
}

function gerarChaveUsuario(cpf, emailUsuario) {
  return `${normalizarCpf(cpf)}_${emailUsuario.trim().toLowerCase()}`;
}

function login() {
  const usuarioEncontrado = [...pacientesBase, ...medicosBase.value].find(
    (paciente) =>
      paciente.email.trim().toLowerCase() === email.value.trim().toLowerCase() &&
      paciente.senha === senha.value
  );

  if (!usuarioEncontrado) {
    erroLogin.value = 'E-mail ou senha incorretos.';
    mostrarMensagem.value = false;
    return;
  }

  const chave = gerarChaveUsuario(usuarioEncontrado.cpf, usuarioEncontrado.email);

  chaveUsuario.value = chave;
  sessionStorage.setItem('usuarioChave', chave);
  usuarioLogado.value = usuarioEncontrado;
  mostrarMensagem.value = true;
 dev


  return usuarioLogado.value;
}
</script>

<template>
  <section class="login">
    <div class="formulario" v-if="!mostrarMensagem">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="email" required />

        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="senha" required />

        <button type="submit" class="submeter">Entrar</button>
      </form>

      <p v-if="erroLogin" class="erro">{{ erroLogin }}</p>
    </div>

    <div class="feito" v-else-if="usuarioLogado">
      <h2>Login bem-sucedido!</h2>
      <p><span>Bem-vindo(a), {{ usuarioLogado.nome }}!</span></p>
      <p>Agora você pode acessar a página 'Minha Área' com suas informações.</p>
    </div>
  </section>
</template>

<style scoped>
.login {
  background-color: #F4F3F3;
  padding: 5vw 20%;
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
  font-size: 1.5rem;
}

.feito p span {
  font-size: 1.7rem;
  font-weight: bold;
}

.erro {
  color: #d32f2f;
  font-size: 1rem;
  margin-top: 0.3rem;
  display: block;
}
</style>
