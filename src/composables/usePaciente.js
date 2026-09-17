import { computed, ref } from 'vue'
import { medicosBase, pacientesBase } from '@/components/data/data'

const chaveUsuario = ref(sessionStorage.getItem('usuarioChave') || null)
const usuarioLogado = ref(null)
const USUARIOS_STORAGE_KEY = 'usuariosCadastrados'

function lerUsuariosCadastrados() {
  try {
    return JSON.parse(localStorage.getItem(USUARIOS_STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

function salvarUsuariosCadastrados(usuarios) {
  localStorage.setItem(USUARIOS_STORAGE_KEY, JSON.stringify(usuarios))
}

function restaurarUsuariosCadastrados() {
  lerUsuariosCadastrados().forEach(({ tipo, usuario }) => {
    const base = tipo === 'medico' ? medicosBase : pacientesBase
    const jaExiste = base.some(
      (item) => item.email.trim().toLowerCase() === usuario.email.trim().toLowerCase()
    )

    if (!jaExiste) base.push(usuario)
  })
}

restaurarUsuariosCadastrados()

function normalizarCpf(cpf) {
  return cpf ? cpf.replace(/\D/g, '') : ''
}

function gerarChaveUsuario(cpf, emailUsuario) {
  const cpfLimpo = normalizarCpf(cpf)
  return `${cpfLimpo}_${emailUsuario.trim().toLowerCase()}`
}

function iniciarSessao(usuario) {
  const chave = gerarChaveUsuario(usuario.cpf, usuario.email)
  chaveUsuario.value = chave
  usuarioLogado.value = usuario
  sessionStorage.setItem('usuarioChave', chave)
}

function registrarUsuario(usuario, tipo = 'paciente') {
  const base = tipo === 'medico' ? medicosBase : pacientesBase
  base.push(usuario)

  const usuariosCadastrados = lerUsuariosCadastrados()
  usuariosCadastrados.push({ tipo, usuario })
  salvarUsuariosCadastrados(usuariosCadastrados)

  return usuario
}

function encontrarUsuario(email, senha) {
  return [...pacientesBase, ...medicosBase].find(
    (usuario) =>
      usuario.email.trim().toLowerCase() === email.trim().toLowerCase() &&
      usuario.senha === senha
  )
}

const usuarioAtual = computed(() => {
  const chaveAtual = chaveUsuario.value || sessionStorage.getItem('usuarioChave')

  if (!chaveAtual) return null

  return [...pacientesBase, ...medicosBase].find((usuario) => {
    const chaveGerada = gerarChaveUsuario(usuario.cpf, usuario.email)
    return chaveGerada === chaveAtual
  })
})

export function useUsuario() {
  return {
    chaveUsuario,
    usuarioAtual,
    usuarioLogado,
    gerarChaveUsuario,
    iniciarSessao,
    registrarUsuario,
    encontrarUsuario,
  }
}
