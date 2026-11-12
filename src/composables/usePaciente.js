import { ref, computed } from 'vue'

const API_URL = 'http://localhost:3000'

export const chaveUsuario = ref(sessionStorage.getItem('usuarioChave') || null)
export const usuarioLogado = ref(null)

// Código antigo, mantido em comentário para facilitar a reversão:
// const USUARIOS_STORAGE_KEY = 'usuariosCadastrados'
// function lerUsuariosCadastrados() {
//   try {
//     return JSON.parse(localStorage.getItem(USUARIOS_STORAGE_KEY) || '[]')
//   } catch {
//     return []
//   }
// }
//
// function normalizarCpf(cpf) {
//   return cpf ? cpf.replace(/\D/g, '') : ''
// }
//
// function gerarChaveUsuario(cpf, emailUsuario) {
//   return `${normalizarCpf(cpf)}_${emailUsuario}`
// }
//
// const usuarioAtual = computed(() => usuarioLogado.value)
//
// export async function carregarUsuarioPorId() {
//   const usuarioId = sessionStorage.getItem('usuarioId')
//
//   if (!usuarioId) {
//     usuarioLogado.value = null
//     return null
//   }
//
//   try {
//     const respostaPaciente = await fetch(`${API_URL}/pacientes/${usuarioId}`)
//     if (respostaPaciente.ok) {
//       const paciente = await respostaPaciente.json()
//       usuarioLogado.value = { ...paciente, tipo: 'paciente' }
//       return usuarioLogado.value
//     }
//
//     const respostaMedico = await fetch(`${API_URL}/medicos/${usuarioId}`)
//     if (respostaMedico.ok) {
//       const medico = await respostaMedico.json()
//       usuarioLogado.value = { ...medico, tipo: 'medico' }
//       return usuarioLogado.value
//     }
//
//     usuarioLogado.value = null
//     return null
//   } catch (error) {
//     console.error('Erro ao carregar usuário pela sessão:', error)
//     usuarioLogado.value = null
//     return null
//   }
// }

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

function normalizarPacienteId(valor) {
  return valor === null || valor === undefined ? '' : String(valor).trim()
}

function filtrarPorPacienteId(lista, pacienteId) {
  if (!Array.isArray(lista)) {
    return []
  }

  return lista.filter((item) => normalizarPacienteId(item?.pacienteId) === normalizarPacienteId(pacienteId))
}

export async function carregarDadosPaciente() {
  const usuarioId = sessionStorage.getItem('usuarioId')
  const pacienteIdNormalizado = normalizarPacienteId(usuarioId)

  if (!pacienteIdNormalizado) {
    return {
      paciente: null,
      consultas: [],
      exames: [],
      medicamentos: []
    }
  }

  try {
    const [pacienteRes, consultasRes, examesRes, medicamentosRes] = await Promise.all([
      fetch(`${API_URL}/pacientes/${ pacienteIdNormalizado }`),
      fetch(`${API_URL}/consultas`),
      fetch(`${API_URL}/exames`),
      fetch(`${API_URL}/medicamentos`)
    ])

    const paciente = pacienteRes.ok ? await pacienteRes.json() : null
    const consultas = consultasRes.ok ? await consultasRes.json() : []
    const exames = examesRes.ok ? await examesRes.json() : []
    const medicamentos = medicamentosRes.ok ? await medicamentosRes.json() : []

    return {
      paciente,
      consultas: filtrarPorPacienteId(consultas, pacienteIdNormalizado),
      exames: filtrarPorPacienteId(exames, pacienteIdNormalizado),
      medicamentos: filtrarPorPacienteId(medicamentos, pacienteIdNormalizado)
    }
  } catch (error) {
    console.error('Erro ao carregar dados do paciente:', error)
    return {
      paciente: null,
      consultas: [],
      exames: [],
      medicamentos: []
    }
  }
}

export async function atualizarPesoPaciente(novoPeso) {
  const usuarioId = sessionStorage.getItem('usuarioId')

  if (!usuarioId || novoPeso === '' || novoPeso === null || novoPeso === undefined) {
    return null
  }

  try {
    const resposta = await fetch(`${API_URL}/pacientes/${usuarioId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ peso: Number(novoPeso) })
    })

    if (!resposta.ok) {
      throw new Error('Não foi possível atualizar o peso.')
    }

    const pacienteAtualizado = await resposta.json()
    usuarioLogado.value = { ...usuarioLogado.value, ...pacienteAtualizado, tipo: 'paciente' }
    return pacienteAtualizado
  } catch (error) {
    console.error('Erro ao atualizar peso do paciente:', error)
    return null
  }
}

export async function deletarRegistroPorId(tipo, id) {
  const registroId = Number(id)

  if (!tipo || !registroId) {
    return false
  }

  try {
    const resposta = await fetch(`${API_URL}/${tipo}/${registroId}`, {
      method: 'DELETE'
    })

    return resposta.ok
  } catch (error) {
    console.error(`Erro ao excluir ${tipo} com id ${registroId}:`, error)
    return false
  }
}

const usuarioAtual = computed(() => usuarioLogado.value)

export function useUsuario() {
  return {
    chaveUsuario,
    usuarioLogado,
    usuarioAtual,
    carregarUsuarioPorId,
    carregarDadosPaciente,
    atualizarPesoPaciente,
    deletarRegistroPorId,
  }
}



