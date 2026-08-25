
<script setup></script>
<template>
  <div class="agendar-exame">
    <h1>Agendar Exame</h1>
    <form>
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="telefone">Telefone:</label>
      <input type="tel" id="telefone" name="telefone" required>

      <label for="exame">Exame:</label>
      <select id="exame" name="exame" required>
        <option value="">Selecione um exame</option>
        <option value="sangue">Exame de Sangue</option>
        <option value="urina">Exame de Urina</option>
        <option value="raio-x">Raio-X</option>
        <!-- Adicione mais opções de exames conforme necessário -->
      </select>RouterView

      <label for="data">Data:</label>
      <input type="date" id="data" name="data" required>

      <button type="submit">Agendar</button>
    </form>
  </div>
</template>

<style scoped>
</style>
