import { ref, computed } from 'vue'
import { medicosBase, pacientesBase } from '@/components/data/data'

export const chaveUsuario = ref(sessionStorage.getItem('usuarioChave') || null)
export const usuarioLogado = ref(null)

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

const usuarioAtual = computed(() => {
  const chaveAtual = chaveUsuario.value || sessionStorage.getItem('usuarioChave')
  if (!chaveAtual) return null

  return [...pacientesBase, ...medicosBase].find((usuario) => {
    const chaveGerada = gerarChaveUsuario(usuario.cpf, usuario.email)
    return chaveGerada === chaveAtual
  })
});



export function useUsuario() {
  return {
    chaveUsuario,
    usuarioLogado,
    usuarioAtual,
    gerarChaveUsuario,
    iniciarSessao,
  }
}



