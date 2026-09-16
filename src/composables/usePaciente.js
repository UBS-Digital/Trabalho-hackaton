import { computed, ref } from 'vue'
import { pacientesBase } from '@/components/data/data'

const chaveUsuario = ref(sessionStorage.getItem('usuarioChave') || null)
const usuarioLogado = ref(null)

function normalizarCpf(cpf) {
  return cpf ? cpf.replace(/\D/g, '') : ''
}

function gerarChaveUsuario(cpf, emailUsuario) {
  const cpfLimpo = normalizarCpf(cpf)
  return `${cpfLimpo}_${emailUsuario.trim().toLowerCase()}`
}

const usuarioAtual = computed(() => {
  const chaveAtual = chaveUsuario.value || sessionStorage.getItem('usuarioChave')

  if (!chaveAtual) return null

  return pacientesBase.find((paciente) => {
    const chaveGerada = gerarChaveUsuario(paciente.cpf, paciente.email)
    return chaveGerada === chaveAtual
  })
})

export function useUsuario() {
  return {
    chaveUsuario,
    usuarioAtual,
    usuarioLogado,
    gerarChaveUsuario,
  }
}
