<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUsuario } from '@/composables/usePaciente'
const router = useRouter()

const { usuarioLogado, iniciarSessao, encontrarUsuario } = useUsuario()

const email = ref('')
const senha = ref('')
const mostrarMensagem = ref(false)
const erroLogin = ref('')

function login() {
  const usuarioEncontrado = encontrarUsuario(email.value, senha.value)

  if (!usuarioEncontrado) {
    erroLogin.value = 'E-mail ou senha incorretos.'
    mostrarMensagem.value = false
    return
  }

  iniciarSessao(usuarioEncontrado)
  mostrarMensagem.value = true

  return usuarioLogado.value
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
        <button type="button" class="cancelar" @click="router.push('/escolha-cadastro')">
          Cancelar
        </button>
      </form>

      <p v-if="erroLogin" class="erro">{{ erroLogin }}</p>
    </div>

    <div class="feito" v-else-if="usuarioLogado">
      <h2>Login bem-sucedido!</h2>
      <p>
        <span>Bem-vindo(a), {{ usuarioLogado.nome }}!</span>
      </p>
      <p>Agora você pode acessar a página 'Minha Área' com suas informações.</p>
      <RouterLink to="/MinhaArea" class="area">Ir para Minha Área</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.area {
  margin-top: 10px;
  display: inline-block;
  border-radius: 0%;
  padding: 10px 20px;
  background-color: #4d41ef;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.login {
  background-color: #F4F3F3;
  background-color: #f4f3f3;
  padding: 5vw 20%;
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
  background-color: #4d41ef;
  color: white;
  padding: 0.5vw 2.5vw 0.5vw 3vw;
  border-radius: 10px;
  font-weight: bold;
}

.cancelar {
  background-color: #ef4141;
  color: white;
  padding: 0.5vw 2.5vw 0.5vw 3vw;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1vw 0 1vw 0;
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
