<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUsuario } from '@/composables/usePaciente'

const API_URL = 'http://localhost:3000'
const usuarios = ref([])
const loading = ref(true)

async function carregarDados() {
  try {
    const [pacientesResponse, medicosResponse] = await Promise.all([
      fetch(`${API_URL}/pacientes`),
      fetch(`${API_URL}/medicos`)
    ])

    const pacientes = pacientesResponse.ok ? await pacientesResponse.json() : []
    const medicos = medicosResponse.ok ? await medicosResponse.json() : []

    usuarios.value = [...pacientes, ...medicos]
  } catch (error) {
    console.error('Erro ao carregar usuários do JSON Server:', error)
    usuarios.value = []
  } finally {
    loading.value = false
  }
}

onMounted(carregarDados)

const router = useRouter()
const { usuarioLogado, chaveUsuario, gerarChaveUsuario } = useUsuario()

const usuarioDaSessao = computed(() => {
  const usuarioId = sessionStorage.getItem('usuarioId')

  if (usuarioId) {
    const usuarioEncontrado = usuarios.value.find((usuario) => String(usuario.id) === String(usuarioId))
    if (usuarioEncontrado) return usuarioEncontrado
  }

  const chave = sessionStorage.getItem('usuarioChave')
  if (!chave) return null

  if (chave.startsWith('id_')) {
    const id = chave.replace('id_', '')
    return usuarios.value.find((usuario) => String(usuario.id) === String(id)) || null
  }

  return null
})

if (usuarioDaSessao.value) {
  usuarioLogado.value = usuarioDaSessao.value
}

const email = ref('')
const senha = ref('')
const mostrarMensagem = ref(false)
const erroLogin = ref('')

async function login() {
  const emailDigitado = email.value.trim().toLowerCase()
  const senhaDigitada = senha.value

  if (!emailDigitado || !senhaDigitada) {
    erroLogin.value = 'Informe e-mail e senha.'
    mostrarMensagem.value = false
    return
  }

  try {
    const [pacientesResponse, medicosResponse] = await Promise.all([
      fetch(`${API_URL}/pacientes?email=${encodeURIComponent(emailDigitado)}&senha=${encodeURIComponent(senhaDigitada)}`),
      fetch(`${API_URL}/medicos?email=${encodeURIComponent(emailDigitado)}&senha=${encodeURIComponent(senhaDigitada)}`)
    ])

    const pacientes = pacientesResponse.ok ? await pacientesResponse.json() : []
    const medicos = medicosResponse.ok ? await medicosResponse.json() : []
    const usuarioEncontrado = [...pacientes, ...medicos].find((usuario) => {
      const emailBanco = usuario.email?.trim().toLowerCase()
      return emailBanco === emailDigitado && usuario.senha === senhaDigitada
    })

    if (!usuarioEncontrado) {
      erroLogin.value = 'E-mail ou senha incorretos.'
      mostrarMensagem.value = false
      return
    }

    const chavePrimaria = `id_${usuarioEncontrado.id}`
    const chaveLegacy = gerarChaveUsuario?.(usuarioEncontrado.cpf ?? '', usuarioEncontrado.email ?? '')

    chaveUsuario.value = chavePrimaria
    sessionStorage.setItem('usuarioId', String(usuarioEncontrado.id))
    sessionStorage.setItem('usuarioChave', chavePrimaria)

    if (chaveLegacy) {
      sessionStorage.setItem('usuarioChaveLegacy', chaveLegacy)
    }

    usuarioLogado.value = usuarioEncontrado
    mostrarMensagem.value = true
    erroLogin.value = ''
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error)
    erroLogin.value = 'Não foi possível realizar o login no momento.'
    mostrarMensagem.value = false
  }
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
