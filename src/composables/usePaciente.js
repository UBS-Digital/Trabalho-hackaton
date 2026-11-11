import { ref, computed } from 'vue'

const API_URL = 'http://localhost:3000'

export const chaveUsuario = ref(sessionStorage.getItem('usuarioChave') || null)
export const usuarioLogado = ref(null)

/* Modelo antigo, mantido em comentário para facilitar desfazer:
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
 }; */

export async function carregarUsuarioPorId() {
  const usuarioId = sessionStorage.getItem('usuarioId')

  if (!usuarioId) {
    usuarioLogado.value = null
    return null
  }

  try {
    const respostaPaciente = await fetch(`${API_URL}/pacientes/${usuarioId}`)
    if (respostaPaciente.ok) {
      const paciente = await respostaPaciente.json()
      usuarioLogado.value = { ...paciente, tipo: 'paciente' }
      return usuarioLogado.value
    }

    const respostaMedico = await fetch(`${API_URL}/medicos/${usuarioId}`)
    if (respostaMedico.ok) {
      const medico = await respostaMedico.json()
      usuarioLogado.value = { ...medico, tipo: 'medico' }
      return usuarioLogado.value
    }

    usuarioLogado.value = null
    return null
  } catch (error) {
    console.error('Erro ao carregar usuário pela sessão:', error)
    usuarioLogado.value = null
    return null
  }
}

const usuarioAtual = computed(() => usuarioLogado.value)

export function useUsuario() {
  return {
    chaveUsuario,
    usuarioLogado,
    usuarioAtual,
    carregarUsuarioPorId,
  }
}



