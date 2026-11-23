import { ref, computed } from 'vue'
import { medicosBase, pacientesBase } from '@/components/data/data'
import { API_URL } from '@/services/api'

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

function encerrarSessao() {
  chaveUsuario.value = null
  usuarioLogado.value = null
  sessionStorage.removeItem('usuarioChave')
}

// DELETE: exclui a conta do usuário logado (API + dados locais + sessão)
async function excluirConta() {
  const usuario = usuarioAtual.value
  if (!usuario) throw new Error('Nenhum usuário logado.')

  const ehMedico = medicosBase.includes(usuario)
  const colecao = ehMedico ? 'medicos' : 'pacientes'

  // 1) consulta o registro na API pelo e-mail para descobrir o id
  const busca = await fetch(`${API_URL}/${colecao}?email=${encodeURIComponent(usuario.email)}`)
  if (!busca.ok) throw new Error(`Não foi possível localizar a conta (código ${busca.status}).`)
  const registro = (await busca.json())[0]

  // 2) exclui na API (contas criadas só no cadastro local podem não existir lá)
  if (registro) {
    const resposta = await fetch(`${API_URL}/${colecao}/${registro.id}`, { method: 'DELETE' })
    if (!resposta.ok) throw new Error(`A API recusou a exclusão (código ${resposta.status}).`)
  }

  // 3) remove dos dados locais e encerra a sessão
  const base = ehMedico ? medicosBase : pacientesBase
  const indice = base.indexOf(usuario)
  if (indice !== -1) base.splice(indice, 1)
  salvarUsuariosCadastrados(
    lerUsuariosCadastrados().filter((item) => item.usuario?.email !== usuario.email)
  )
  encerrarSessao()
}

export function useUsuario() {
  return {
    chaveUsuario,
    usuarioLogado,
    usuarioAtual,
    gerarChaveUsuario,
    iniciarSessao,
    registrarUsuario,
    excluirConta,
  }
}
