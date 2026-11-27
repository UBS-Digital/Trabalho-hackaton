import { ref, computed } from 'vue'

const API_URL = 'http://localhost:3000'

export const chaveUsuario = ref(sessionStorage.getItem('usuarioChave') || null)
export const usuarioLogado = ref(null)

export async function carregarUsuarioPorId() {
  const usuarioId = sessionStorage.getItem('usuarioId')

  if (!usuarioId) {
    usuarioLogado.value = null
    return null
  }

  try {
    const tipoUsuario = sessionStorage.getItem('usuarioTipo')

    if (tipoUsuario === 'medico') {
      const respostaMedico = await fetch(`${API_URL}/medicos/${usuarioId}`)
      if (respostaMedico.ok) {
        const medico = await respostaMedico.json()
        usuarioLogado.value = { ...medico, tipo: 'medico' }
        return usuarioLogado.value
      }
    }

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

  return lista.filter(
    (item) => normalizarPacienteId(item?.pacienteId) === normalizarPacienteId(pacienteId),
  )
}

export async function carregarDadosPaciente() {
  const usuarioId = sessionStorage.getItem('usuarioId')
  const pacienteIdNormalizado = normalizarPacienteId(usuarioId)

  if (!pacienteIdNormalizado) {
    return {
      paciente: null,
      consultas: [],
      exames: [],
      medicamentos: [],
    }
  }

  try {
    const [pacienteRes, consultasRes, examesRes, medicamentosRes] = await Promise.all([
      fetch(`${API_URL}/pacientes/${pacienteIdNormalizado}`),
      fetch(`${API_URL}/consultas`),
      fetch(`${API_URL}/exames`),
      fetch(`${API_URL}/medicamentos`),
    ])

    const paciente = pacienteRes.ok ? await pacienteRes.json() : null
    const consultas = consultasRes.ok ? await consultasRes.json() : []
    const exames = examesRes.ok ? await examesRes.json() : []
    const medicamentos = medicamentosRes.ok ? await medicamentosRes.json() : []

    return {
      paciente,
      consultas: filtrarPorPacienteId(consultas, pacienteIdNormalizado),
      exames: filtrarPorPacienteId(exames, pacienteIdNormalizado),
      medicamentos: filtrarPorPacienteId(medicamentos, pacienteIdNormalizado),
    }
  } catch (error) {
    console.error('Erro ao carregar dados do paciente:', error)
    return {
      paciente: null,
      consultas: [],
      exames: [],
      medicamentos: [],
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
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ peso: Number(novoPeso) }),
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
      method: 'DELETE',
    })

    return resposta.ok
  } catch (error) {
    console.error(`Erro ao excluir ${tipo} com id ${registroId}:`, error)
    return false
  }
}

const usuarioAtual = computed(() => usuarioLogado.value)

export async function registrarUsuario(usuario, tipo = 'paciente') {
  const colecao = tipo === 'medico' ? 'medicos' : 'pacientes'
  const email = usuario.email?.trim().toLowerCase()

  if (!email) throw new Error('Informe um e-mail válido.')

  const busca = await fetch(`${API_URL}/${colecao}?email=${encodeURIComponent(email)}`)
  if (!busca.ok) throw new Error('Não foi possível verificar o cadastro.')

  const existentes = await busca.json()
  if (existentes.length) throw new Error('Já existe uma conta cadastrada com este e-mail.')

  const resposta = await fetch(`${API_URL}/${colecao}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...usuario, email }),
  })

  if (!resposta.ok) throw new Error('Não foi possível cadastrar o usuário.')

  const usuarioCriado = await resposta.json()
  const usuarioComTipo = { ...usuarioCriado, tipo }

  usuarioLogado.value = usuarioComTipo
  chaveUsuario.value = `id_${usuarioCriado.id}`
  sessionStorage.setItem('usuarioId', String(usuarioCriado.id))
  sessionStorage.setItem('usuarioChave', `id_${usuarioCriado.id}`)
  sessionStorage.setItem('usuarioTipo', tipo)

  return usuarioComTipo
}

function encerrarSessao() {
  chaveUsuario.value = null
  usuarioLogado.value = null
  sessionStorage.removeItem('usuarioChave')
  sessionStorage.removeItem('usuarioChaveLegacy')
  sessionStorage.removeItem('usuarioId')
  sessionStorage.removeItem('usuarioTipo')
}

async function excluirConta() {
  const usuario = usuarioAtual.value
  if (!usuario) throw new Error('Nenhum usuário logado.')

  const tipo = usuario.tipo || sessionStorage.getItem('usuarioTipo') || 'paciente'
  const usuarioId = usuario.id || sessionStorage.getItem('usuarioId')
  const colecao = tipo === 'medico' ? 'medicos' : 'pacientes'

  if (!usuarioId) throw new Error('Não foi possível identificar o usuário atual.')

  const respostaConta = await fetch(`${API_URL}/${colecao}/${encodeURIComponent(usuarioId)}`, {
    method: 'DELETE',
  })
  if (!respostaConta.ok) {
    throw new Error(`A API recusou a exclusão (código ${respostaConta.status}).`)
  }

  if (tipo === 'paciente') {
    for (const colecaoRelacionada of ['consultas', 'exames', 'medicamentos']) {
      const busca = await fetch(
        `${API_URL}/${colecaoRelacionada}?pacienteId=${encodeURIComponent(usuarioId)}`,
      )
      if (!busca.ok) continue

      const registros = await busca.json()
      await Promise.all(
        registros.map((registro) =>
          fetch(`${API_URL}/${colecaoRelacionada}/${registro.id}`, { method: 'DELETE' }),
        ),
      )
    }
  }

  encerrarSessao()
}

export function useUsuario() {
  return {
    chaveUsuario,
    usuarioLogado,
    usuarioAtual,
    registrarUsuario,
    carregarUsuarioPorId,
    carregarDadosPaciente,
    atualizarPesoPaciente,
    deletarRegistroPorId,
    excluirConta,
  }
}
