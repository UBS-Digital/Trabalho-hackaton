<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <RouterLink to="/">
      <img src="../../../public/logoUBSDigital.png" alt="Logo UBS Digital" width="80px">
    </RouterLink>
    <nav>
       <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/agendar-consulta">Agendar-Consulta</RouterLink> 
      <RouterLink to="/agendar-exame">Agendar-Exame</RouterLink>
      <RouterLink to="/medico-familiar">Medico-Familiar</RouterLink> 
      <RouterLink to="/especialidades">Especialidades</RouterLink>
      <RouterLink to="/contato-site">Contato</RouterLink>
        <div class="botoes">
          <RouterLink to="/MinhaArea" class="btn"> <img src="/src/imagem//icon-minha-area.svg" alt="" class="imgiconzinho">Minha Área</RouterLink>
          <RouterLink to="/AgendarAgora" class="btn">Agendar Agora</RouterLink>
        </div>
    </nav>
  </header>

  


</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2vw;
  color: #2563eb;
}
.btn {
  border: 0.5px solid #2563eb;
  padding: 0.2vw 0.7vw;
  margin: 5px;
  border-radius: 0.5vw;
  align-items: center;
  display: flex;
  gap: 0.3vw;
  color: #2563eb;
  
}



nav {
  display: flex;
  align-items: center;
}
.botoes {
  display: flex;
}
.atual {
  color: rgb(4, 132, 51);
}
.imgiconzinho {
  height: 1vw;
  width: 1vw;
  margin-right: 1px;
  
}

</style>
