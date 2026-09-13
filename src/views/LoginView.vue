<script setup>
</script>
<template>
<section class="login">
  <div>
    <h2>Cadastre-se:</h2>
    <form action="login">
      <label for="nome">Nome Completo:</label>
      <input type="text" id="nome" placeholder="Nome Completo*" required>
      <label for="cpf">CPF:</label>
      <input type="text" id="cpf" placeholder="CPF*">
      <label for="telefone">Telefone:</label>
      <input type="number" id="telefone" placeholder="Número de Telefone*">
      <p>Gênero</p>
      <label for="genero">M</label>
      <input type="radio" id="genero" name="genero" value="1">
      <label for="genero">F</label>
      <input type="radio" name="genero" id="genero" value="2">
      <label for="email">E-mail</label>
      <input type="email" name="email" id="email" required placeholder="Email*">
      <label for="">Crar Senha</label>
      <input type="password" name="senha" id="senha" required placeholder="Criar Senha*">
    </form>
  </div>
</section>
</template>
<style scoped>
</style>
