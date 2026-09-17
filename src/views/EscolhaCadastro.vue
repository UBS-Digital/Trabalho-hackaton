<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const mostrarOpcoesCadastro = ref(false)
</script>

<template>
  <main class="acesso">
    <section class="apresentacao">
      <div class="conteudo-apresentacao">
        <p class="etiqueta">Cuidado que aproxima</p>
        <h1>UBS Digital</h1>
        <p class="descricao">
          A sua saúde mais perto, com atendimento simples, humano e acessível. Encontre serviços,
          agende consultas e acompanhe seus cuidados em um só lugar.
        </p>
        <div class="acoes">
          <button
            type="button"
            class="botao-primario"
            @click="mostrarOpcoesCadastro = !mostrarOpcoesCadastro"
          >
            Criar cadastro
          </button>
          <RouterLink to="/login-usuario" class="botao-secundario">Entrar</RouterLink>
        </div>
      </div>

      <div class="destaque" aria-label="Serviços da UBS Digital">
        <span class="numero">01</span>
        <div>
          <strong>Saúde ao seu alcance</strong>
          <p>Agendamentos, exames e acompanhamento de forma prática.</p>
        </div>
      </div>
    </section>

    <section v-if="mostrarOpcoesCadastro" class="opcoes-cadastro" aria-labelledby="titulo-cadastro">
      <div class="cabecalho-opcoes">
        <div>
          <p class="etiqueta">Primeiro passo</p>
          <h2 id="titulo-cadastro">Qual cadastro você deseja criar?</h2>
        </div>
        <button
          type="button"
          class="fechar"
          aria-label="Fechar opções de cadastro"
          @click="mostrarOpcoesCadastro = false"
        >
          Fechar
        </button>
      </div>

      <div class="cartoes">
        <RouterLink to="/cadastro-usuario" class="cartao">
          <span class="icone">P</span>
          <span>
            <strong>Sou paciente</strong>
            <small>Agende consultas, exames e acompanhe sua saúde.</small>
          </span>
          <span class="seta" aria-hidden="true">&#8594;</span>
        </RouterLink>

        <RouterLink to="/cadastro-medico" class="cartao">
          <span class="icone medico">M</span>
          <span>
            <strong>Sou médico</strong>
            <small>Crie seu perfil profissional e organize seus atendimentos.</small>
          </span>
          <span class="seta" aria-hidden="true">&#8594;</span>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.acesso {
  min-height: 70vh;
  padding: 5rem 8vw 6rem;
  background: #f4f8f6;
  color: #153b39;
}

.apresentacao {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(240px, 0.7fr);
  gap: 4rem;
  align-items: end;
  max-width: 1120px;
  margin: 0 auto;
  padding: 5rem 5vw 4rem;
  overflow: hidden;
  background: linear-gradient(120deg, #d8eee7 8%, #d0f2df 45%, #c0fcc2 90%);
  background-repeat: no-repeat;
  border-radius: 2px;
}

.apresentacao::after {
  content: '';
  position: absolute;
  right: -90px;
  top: -120px;
  width: 330px;
  height: 330px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
}

.conteudo-apresentacao,
.destaque {
  position: relative;
  z-index: 1;
}

.etiqueta {
  margin-bottom: 1rem;
  color: #000000;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1 {
  margin-bottom: 1.3rem;
  color: black;
  font-size: clamp(3.5rem, 9vw, 7.5rem);
  font-weight: 800;
  letter-spacing: -0.06em;
  line-height: 0.88;
}

.descricao {
  max-width: 560px;
  color: #315653;
  font-size: 1.15rem;
  line-height: 1.6;
}

.acoes {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.2rem;
}

.botao-primario,
.botao-secundario {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.8rem 1.5rem;
  border: 1px solid #153b39;
  border-radius: 2px;
  font: inherit;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
}

.botao-primario {
  background: #1787d6;
  color: rgb(255, 255, 255);
}

.botao-secundario {
  background: transparent;
  color: #153b39;
}

.botao-primario:hover,
.botao-secundario:hover,
.cartao:hover {
  transform: translateY(-2px);
}

.destaque {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.4rem;
  padding: 1.5rem;
  border-left: 1px solid rgba(21, 59, 57, 0.3);
}

.numero {
  color: #000000;
  font-size: 3rem;
  font-weight: 800;
}

.destaque strong {
  font-size: 1.3rem;
}

.destaque p {
  margin-top: 0.5rem;
  color: #315653;
  line-height: 1.5;
}

.opcoes-cadastro {
  max-width: 1120px;
  margin: 2rem auto 0;
  padding: 2.5rem 5vw;
  background: white;
  border-top: 4px solid #d8eee7;
}

.cabecalho-opcoes {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: start;
}

h2 {
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  color: black;
}

.fechar {
  border: 0;
  background: transparent;
  color: #000000;
  font: inherit;
  font-weight: 800;
  cursor: pointer;
}

.cartoes {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.cartao {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1.2rem;
  border: 1px solid #d4e1dc;
  color: #153b39;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.icone {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #d8eee7;
  font-weight: 800;
}

.icone.medico {
  background: #f6e4d8;
}

.cartao strong,
.cartao small {
  display: block;
}

.cartao small {
  margin-top: 0.4rem;
  color: #52716d;
  line-height: 1.4;
}

.seta {
  color: #000000;
  font-size: 1.5rem;
}

@media (max-width: 700px) {
  .acesso {
    padding: 2rem 1rem 4rem;
  }

  .apresentacao {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 1.5rem;
  }

  .destaque {
    border-top: 1px solid rgba(21, 59, 57, 0.3);
    border-left: 0;
    padding: 1.5rem 0 0;
  }

  .cartoes {
    grid-template-columns: 1fr;
  }
}
</style>
