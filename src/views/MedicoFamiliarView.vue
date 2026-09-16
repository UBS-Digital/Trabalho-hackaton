<script setup>

import AppBanner from '@/components/Produtos/AppBanner.vue';
import paginas, { horarios } from '@/components/data/data';
import chart1 from '../imagem/img1.jpg';
import chart2 from  '../imagem/image2.jpg';

</script>

<template>
   <AppBanner key="paginas[3].pagina" :titulo="paginas[3].titulo" :subtitulo="paginas[3].subtitulo"/>
  <div class="pagina-medico">
    <main class="recipiente">
      <section class="conteudo">
        <div class="cartao-perfil">
          <div class="cabecalho-perfil">
            <div class="imagem-perfil">PLACEHOLDER</div>
            <div class="informacoes-perfil">
              <h2>Dr. Carlos Mendes</h2>
              <p class="subtitulo">Médico da Família • 15 anos de experiência</p>
              <p class="descricao">
                Especialista em Medicina de Família e Comunidade, com foco em atendimento integral e preventivo. Acompanha você e sua família desde Janeiro de 2024.
              </p>
              <div class="acoes">
                <RouterLink to="/agendar-consulta" class="botao primario">Agendar Consulta</RouterLink>
                <RouterLink to="/contato-site" class="botao contorno">Contato</RouterLink>
              </div>
            </div>
          </div>

          <div class="graficos">
            <h2>Acompanhamento de Saúde</h2>
            <div class="painel espaco-imagem">
              <h3>Evolução peso (kg)</h3>
              <img class="grafico" :src="chart1" alt="Gráfico 1 - Pressão" />
            </div>

            <div class="painel espaco-imagem">
              <h3>Evolução pressão arterial (mmHg)</h3>
              <img class="grafico" :src="chart2" alt="Gráfico 2 - Pressão" />
            </div>
          </div>

          <div class="historico">
            <h3>Histórico de Consultas</h3>
            <div class="item-historico">
              <div>
                <strong>Consulta de Rotina</strong>
                <div class="informacao-adicional">02 Mai 2024 · Pressão arterial controlada. Manter medicação.</div>
              </div>
              <button class="botao pequeno">Ver Detalhes</button>
            </div>
            <div class="item-historico">
              <div>
                <strong>Consulta de Rotina</strong>
                <div class="informacao-adicional">01 Mar 2024 · Pressão arterial controlada. Manter medicação.</div>
              </div>
              <button class="botao pequeno">Ver Detalhes</button>
            </div>
          </div>
        </div>

        <aside class="barra-lateral">
          <div class="cartao contato">
            <h4>Informações de Contato</h4>
            <p>Tel: (11) 3456-7890</p>
            <p>Email: dr.carlos@ubsdigital.gov.br</p>
          </div>

          <div class="cartao horarios-atendimento">
            <h4>Horário de Atendimento</h4>
            <ul>
              <li v-for="horario in horarios" :key="horario.id">
                {{ horario.dia }}:
                <span>{{ horario.horariosDisponiveis.join(', ') }}</span>
              </li>
            </ul>
          </div>

          <div class="cartao chamada-acao">
            <h4>Programa Família Saudável</h4>
            <button class="botao primario cheio">Saiba Mais</button>
          </div>
        </aside>
      </section>
    </main>
  </div>
</template>



<style scoped>

.recipiente {
  max-width: 1440px;
  margin: 34px auto;
  padding: 0 24px;
}
.conteudo {
  display: flex;
  gap: 30px;
}
.cartao-perfil {
  flex: 1;
  background: #ffffff;
  border-radius: 10px;
  padding: 22px;

}
.cabecalho-perfil {
  display: flex;
  gap: 20px;
  align-items: center;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  padding: 20px;
}
.imagem-perfil {
  width: 144px;
  height: 144px;
  background: #eee;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 22px;
}
.informacoes-perfil h2 {
  margin: 0;
  font-size: 32px;
}
.subtitulo {
  color: #666;
  margin: 6px 0;
}
.descricao {
  color: #444;
  margin: 6px 0 12px;
}
.acoes {
  display: flex;
  gap: 10px;
}
.botao {
  padding: 12px 20px;
  border-radius: 10px;
  border: 1px solid #d0d7de;
  background: white;
  cursor: pointer;
  font-size: 18px;
}
.botao.primario {
  background: #1a9df7;
  color: white;
  border-color: #1787d6;
}
.botao.contorno {
  background: white;
}
.botao.pequeno {
  padding: 6px 10px;
  font-size: 13px;
}
.graficos {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 26px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  padding: 20px;
  padding-left: 30px;
}

.graficos h2 {
  align-self: center;
  font-size: 2rem;
}

.graficos h3 {
  padding-left: 30px;
  font-size: 1.5rem;
}

.painel {
  width: 70%;
  background: #ffffff;
  border-radius: 8px;
  padding: 12px;
}
.grafico {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.06);
}
.grafico-linha {
  width: 100%;
  height: 100%;
}
.historico {
  margin-top: 18px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  padding: 10px;
}
.item-historico {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 6px;
  margin-top: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);

}

.barra-lateral {
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.03);
}
.cartao {
  background: #fff;
  padding: 14px;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
}
.horarios-atendimento h4 {
  margin: 0 0 8px;
}

.horarios-atendimento ul li {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
}

.horarios-atendimento ul li span {
  font-weight: bold;
}

.botao.cheio {
  width: 100%;
}

@media (max-width: 900px) {
  .conteudo {
    flex-direction: column;
  }
  .barra-lateral {
    width: 100%;
  }
}
</style>
