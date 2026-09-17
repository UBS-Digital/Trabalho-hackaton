<script setup>
import { pacientesBase } from '@/components/data/data';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const nomePaciente = ref('');
const cpfPaciente = ref('');
const telPaciente = ref('');
const genPaciente = ref('');
const emailPaciente = ref('');
const senhaPaciente = ref('');
const cadastroFeito = ref(false);

const erros = ref({});

function limparErros() {
  erros.value = {};
}

function validarFormulario() {
  limparErros();

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailPaciente.value);
  const cpfValido = cpfPaciente.value.replace(/\D/g, '').length === 11;
  const telValido = telPaciente.value.replace(/\D/g, '').length >= 10;

  if (!nomePaciente.value.trim()) {
    erros.value.nome = 'Informe o nome completo.';
  }

  if (!cpfValido) {
    erros.value.cpf = 'CPF inválido. Digite 11 números.';
  }

  if (!telValido) {
    erros.value.telefone = 'Telefone inválido.';
  }

  if (!genPaciente.value) {
    erros.value.genero = 'Selecione o gênero.';
  }

  if (!emailValido) {
    erros.value.email = 'Informe um e-mail válido.';
  }

  if (!senhaPaciente.value || senhaPaciente.value.length < 6) {
    erros.value.senha = 'A senha deve ter pelo menos 6 caracteres.';
  }

  return Object.keys(erros.value).length === 0;
}

function cadastrarConsulta() {
  if (!validarFormulario()) {
    return;
  }

  pacientesBase.push({
    nome: nomePaciente.value,
    peso: '',
    genero: genPaciente.value,
    email: emailPaciente.value,
    senha: senhaPaciente.value,
    tel: telPaciente.value,
    cpf: cpfPaciente.value
  });

  cadastroFeito.value = true;
}
</script>
<template>
  <section class="cadastro">
    <div class="formulario" v-if="!cadastroFeito">
      <h2>Cadastre-se:</h2>



      <form @submit.prevent="cadastrarConsulta">
        <label for="nome">Nome Completo:</label>
        <input id="nome" v-model="nomePaciente" placeholder="Nome Completo*" />
        <small v-if="erros.nome" class="erro">{{ erros.nome }}</small>

        <label for="cpf">CPF:</label>
        <input id="cpf" v-model="cpfPaciente" placeholder="CPF*" />
        <small v-if="erros.cpf" class="erro">{{ erros.cpf }}</small>

        <label for="telefone">Telefone:</label>
        <input id="telefone" v-model="telPaciente" placeholder="Número de Telefone*" />
        <small v-if="erros.telefone" class="erro">{{ erros.telefone }}</small>

        <div class="gen">
          <p>Gênero:</p>
          <label><input type="radio" name="genero" value="M" v-model="genPaciente" /> M</label>
          <label><input type="radio" name="genero" value="F" v-model="genPaciente" /> F</label>
        </div>
        <small v-if="erros.genero" class="erro">{{ erros.genero }}</small>

        <label for="email">E-mail</label>
        <input id="email" type="email" v-model="emailPaciente" placeholder="Email*" />
        <small v-if="erros.email" class="erro">{{ erros.email }}</small>

        <label for="senha">Criar Senha</label>
        <input id="senha" type="password" v-model="senhaPaciente" placeholder="Criar Senha*" />
        <small v-if="erros.senha" class="erro">{{ erros.senha }}</small>

        <button type="submit" class="submeter">Cadastrar</button>
        <button type="button" class="cancelar" @click="router.push('/escolha-cadastro')">Cancelar</button>

      </form>
    </div>
    <div class="feito" v-else>
      <img src="../../public/ant-design--check-circle-twotone.png" alt="check" width="100px" height="100px">
      <h2>Cadastro Feito!</h2>
      <p>Analisaremos usas informações para completar o cadastro.</p>
      <p><span>O cadastro será confirmado por email.</span></p>
      <RouterLink to="/home" class="voltar-home">Voltar para a página inicial</RouterLink>
    </div>
  </section>

</template>

<style scoped>

.voltar-home {
  margin-top: 20px;
  display: inline-block;
  border-radius: 0%;
  padding: 10px 20px;
  background-color: #4D41EF;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.voltar-home:hover {
  background-color: #3930c5;
}

.cadastro {
  background-color: #F4F3F3;
  padding: 2vw 20%;
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
  margin: 1vw 0 0 0;
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
  font-size: 1.7rem;
}
.feito p span {
  font-size: 1.3rem;
}

.erro {
  color: #d32f2f;
  font-size: 1rem;
  margin-top: 0.3rem;
  display: block;
}
</style>
