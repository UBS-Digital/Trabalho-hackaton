<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
  <div class="h1-icon">  <RouterLink to="/">
      <img src="../../../public/logoUBSDigital.png" alt="Logo UBS Digital" width="80px" class="logo">
    </RouterLink>

    <div class="h1eP">
  <h1>UBS Digital</h1> 
    <p class="mini">Saúde ao seu alcance

</p>
  </div>
    </div>
    <nav>

      <div class="listas">
       <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/agendar-consulta">Agendar-Consulta</RouterLink> 
      <RouterLink to="/agendar-exame">Agendar-Exame</RouterLink>
      <RouterLink to="/medico-familiar">Medico-Familiar</RouterLink> 
      <RouterLink to="/especialidades">Especialidades</RouterLink>
      <RouterLink to="/contato-site">Contato</RouterLink>
     </div>
 
 

        <div class="botoes">
          <RouterLink to="/MinhaArea" class="btn"> <img src="/src/imagem//icon-minha-area.svg" alt="" class="imgiconzinho">Minha Área</RouterLink>
          <RouterLink to="/AgendarAgora" class="btn-2">Agendar Agora</RouterLink>
        </div>
    </nav>
  </header>

  


</template>

<style scoped>



header {
font-family: "Nunito Sans", sans-serif;  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vw;
  color: #5281e6;

}
.logo {
  width: 3vw;
  border-radius: 20px;
  margin-top: 0.5vw;
}



h1{
  font-size: 20px;
  margin: 0.1px;
}

.h1-icon {
  
  color: black;
  display: flex;
  padding-right: 2vw;
}



.h1eP {
display: block;
margin-top: 0.7vw;
}


.mini {
  font-size: 12px;
  color: #5f6061;
}

a{
  color: #828385;
  font-size: 15px;
}



nav {
  display: flex;
  align-items: center;
  
}
.botoes {
  display: flex;
  padding-left: 1vw;
  
}
.atual {
  color: rgb(4, 132, 51);
}
.imgiconzinho {
  height: 1vw;
  width: 1vw;
  margin-right: 1px;
  
}


.listas {
  
  display: flex;
  gap:  0.7vw;

}
.btn {
  position: relative;
  overflow: hidden;
  border: 0.3px solid #5281e6;
  padding: 0.35vw 1.2vw;
  margin: 7px;
  border-radius: 0.4vw;
  align-items: center;
  display: flex;
  gap: 0.3vw;
  color: #5281e6;
  font-size: 1vw;
  transition: color 0.3s ease;
  z-index: 1;
}

.btn::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #5281e6;
  transition: height 0.3s ease;
  z-index: -1;
}

.btn:hover::before {
  height: 100%;
}

.btn:hover {
  color: white;
}



.btn-2 {
  border: 0.5px solid #5281e6;
  padding: 0.35vw 1.2vw;
  margin: 6px;
  border-radius: 0.4vw;
  align-items: center;
  display: flex;
  gap: 0.3vw;
  background-color: #3a70e2;
  color: white;
  font-size: 1vw;
  transition: 0.2s ease;
}

.btn-2:hover {
  background-color: #285fc9;
  transform: scale(0.95);
}



</style>
