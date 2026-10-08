import { ref, computed } from 'vue'
import { medicosBase, pacientesBase } from '@/components/data/data'

export const chaveUsuario = ref(sessionStorage.getItem('usuarioChave') || null)
export const usuarioLogado = ref(null);
const USUARIOS_STORAGE_KEY = 'usuariosCadastrados'
function lerUsuariosCadastrados() {
  try {
    return JSON.parse(localStorage.getItem(USUARIOS_STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

function normalizarCpf(cpf) {
  return cpf ? cpf.replace(/\D/g, '') : ''
}

function gerarChaveUsuario(cpf, emailUsuario) {
  return `${normalizarCpf(cpf)}_${emailUsuario}`
}

function iniciarSessao(usuario) {
  const chave = gerarChaveUsuario(usuario.cpf, usuario.email)
  chaveUsuario.value = chave
  usuarioLogado.value = usuario
  sessionStorage.setItem('usuarioChave', chave)
}
function salvarUsuariosCadastrados(usuarios) {
  localStorage.setItem(USUARIOS_STORAGE_KEY, JSON.stringify(usuarios))
}

const usuarioAtual = computed(() => {
  const chaveAtual = chaveUsuario.value || sessionStorage.getItem('usuarioChave')
  if (!chaveAtual) return null

  return [...pacientesBase, ...medicosBase].find((usuario) => {
    const chaveGerada = gerarChaveUsuario(usuario.cpf, usuario.email)
    return chaveGerada === chaveAtual
  })
});

function registrarUsuario(usuario, tipo = 'paciente') {
  const base = tipo === 'medico' ? medicosBase : pacientesBase
  base.push(usuario)

  const usuariosCadastrados = lerUsuariosCadastrados()
  usuariosCadastrados.push({ tipo, usuario })
  salvarUsuariosCadastrados(usuariosCadastrados)
  iniciarSessao(usuario)
};

export function useUsuario() {
  return {
    chaveUsuario,
    usuarioLogado,
    usuarioAtual,
    gerarChaveUsuario,
    iniciarSessao,
    registrarUsuario,
  }
}



