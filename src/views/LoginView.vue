<script setup>
</script>
<template>
  <section class="cadastro">
    <div class="formulario">
      <h2>Cadastre-se:</h2>
      <form action="cadastroUs">
        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" placeholder="Nome Completo*" required>
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" placeholder="CPF*">
        <label for="telefone">Telefone:</label>
        <input type="text" id="telefone" placeholder="Número de Telefone*">
        <div class="gen">
          <p>Gênero:</p>
          <label for="genero">M</label>
          <input type="radio" id="genero" name="genero" value="1">
          <label for="genero">F</label>
          <input type="radio" name="genero" id="genero" value="2">
        </div>
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" required placeholder="Email*">
        <label for="">Criar Senha</label>
        <input type="password" name="senha" id="senha" required placeholder="Criar Senha*">
      </form>
      <button class="submeter">Cadastrar</button>
    </div>
  </section>
</template>

<style scoped>
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
  padding: 15px 15px;
  border-radius: 10px;
  border: 1px solid rgb(43, 43, 43);
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
  margin: 2vw 0 0 0;
  font-weight: bold;
}
</style>
