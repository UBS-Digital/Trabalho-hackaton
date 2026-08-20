<script setup>
 import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="banner">
        <div class="voltar">
            <RouterLink to="/"><- Voltar</RouterLink>
        </div>
        <h2>
            Especialidades Médicas
        </h2>
        <p>
            Conheça todas as especialidades disponíveis na UBS Digital e agende sua consulta
        </p>
    </div>
    <section>
        <ul>
            <li>
                <img src="../imagem/geral.png" alt="">
                <h3>
                    Clínico Geral
                </h3>
                <p>
                   Atendimento completo para diagnóstico e tratamento de doenças comuns, prevenção e promoção da saúde.
                </p>
                <h4>
                    Serviços:
                </h4>
                <ul>
                    <li>
                        • Consultas de rotina
                    </li>
                    <li>
                        • Check-ups
                    </li>
                    <li>
                        • Atestados médicos
                    </li>
                    <li>
                        • Receitas
                    </li>
                </ul>
                <button>Agendar Consulta</button>
            </li>
            <li>
                <img src="../imagem/pediatra.png" alt="">
                <h3>
                    Pediatra
                </h3>
                <p>
                    Cuidado especializado para a saúde e desenvolvimento das crianças de 0 a 18 anos.
                </p>
                <h4>
                    Serviços:
                </h4>
                <ul>
                    <li>
                        • Puericultura
                    </li>
                    <li>
                        • Vacinação
                    </li>
                    <li>
                        • Crescimento e desenvolvimento
                    </li>
                    <li>
                        • Doenças infantis
                    </li>
                </ul>
                <button>Agendar Consulta</button>
            </li>
            <li>
                <img src="../imagem/ginecologia.png" alt="">
                <h3>
                    Ginecologia
                </h3>
                <p>
                    Saúde da mulher com atendimento humanizado, preventivo e tratamento de doenças.
                </p>
                <h4>
                    Serviços:
                </h4>
                <ul>
                    <li>
                        • Preventivo
                    </li>
                    <li>
                        • Planejamento familiar
                    </li>
                    <li>
                        • Pré-natal
                    </li>
                    <li>
                        • Climatério
                    </li>
                </ul>
                <button>Agendar Consulta</button>
            </li>
            <li>
                <img src="../imagem/familia.png" alt="">
                <h3>
                    Médico da Família
                </h3>
                <p>
                    Acompanhamento contínuo e integral de toda sua família com foco preventivo.
                </p>
                <h4>
                    Serviços:
                </h4>
                <ul>
                    <li>
                        • Acompanhamento familiar
                    </li>
                    <li>
                        • Doenças crônicas
                    </li>
                    <li>
                        • Saúde mental
                    </li>
                    <li>
                        • Visitas domiciliares
                    </li>
                </ul>
                <button>Agendar Consulta</button>
            </li>
            <li>
                <img src="../imagem/cardiologia.png" alt="">
                <h3>
                    cardiologia
                </h3>
                <p>
                    Prevenção e tratamento de doenças cardiovasculares com acompanhamento especializado.
                </p>
                <h4>
                    Serviços:
                </h4>
                <ul>
                    <li>
                        • Hipertensão
                    </li>
                    <li>
                        • Arritmias
                    </li>
                    <li>
                        • Doenças coronárias
                    </li>
                    <li>
                        • Check-up cardíaco
                    </li>
                </ul>
                <button>Agendar Consulta</button>
            </li>
            <li>
                <img src="../imagem/oftalmologia.png" alt="">
                <h3>
                    Oftalmologia
                </h3>
                <p>
                    Cuidados com a saúde dos olhos, prevenção e tratamento de problemas visuais.
                </p>
                <h4>
                    Serviços:
                </h4>
                <ul>
                    <li>
                        • Exame de vista
                    </li>
                    <li>
                        • Prescrição de óculos
                    </li>
                    <li>
                        • Glaucoma
                    </li>
                    <li>
                        • Catarata
                    </li>
                </ul>
                <button>Agendar Consulta</button>
            </li>
            <li>
                <img src="../imagem/dermatologia.png" alt="">
                <h3>
                    Dermatologia
                </h3>
                <p>
                    Diagnóstico, tratamento e prevenção de doenças de pele, cabelo, unhas e mucosas.
                </p>
                <h4>
                    Serviços:
                </h4>
                <ul>
                    <li>
                        • Acne
                    </li>
                    <li>
                        • Dermatite
                    </li>
                    <li>
                        • Micoses
                    </li>
                    <li>
                        • Prevenção de câncer de pele
                    </li>
                </ul>
                <button>Agendar Consulta</button>
            </li>
            <li>
                <img src="../imagem/endocrinologia.png" alt="">
                <h3>
                    Endocrinologia
                </h3>
                <p>
                    Tratamento de distúrbios hormonais e metabólicos como diabetes e tireoide.
                </p>
                <h4>
                    Serviços:
                </h4>
                <ul>
                    <li>
                        • Diabetes
                    </li>
                    <li>
                        • Tireoide
                    </li>
                    <li>
                        • Obesidade                    
                    </li>
                    <li>
                        • Distúrbios hormonais
                    </li>
                </ul>
                <button>Agendar Consulta</button>
            </li>
        </ul>
    </section>
</template>
<style scoped>
.banner {
    padding: 1VW 0.85VW 5vw 3vw;
    background: linear-gradient(170deg, #2053ac, #447CDB, #267154, #267154, #37c22f);
    color: whitesmoke;
}
.banner a {
    color: white;
}
h2 {
    font-size: 1.67rem;
    font-weight: bolder;
    margin: 3vw 1vw 0 2.5vw;
}
p {
    font-size: 1.1rem;
    margin: 0.3vw 0 0 0;
}
ul{
    justify-content: space-between;
    padding: 3.4vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1vw;
}

li {
    border-radius: 6px;
    padding: 2.3vw;
    box-shadow: 1px 1px 1px 1px #00000050;
}
button {
    color: white;
    border: none;
    background-color: #447CDB;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #00000050;
    padding: 1vw 9.9vw 1vw 9.6vw;
    text-align: center;
    cursor: pointer;
    font-weight: bolder;
}
button:hover {
    background-color: #2f7bff;
}
ul li p{
    padding: 0px;
}
ul li ul{
    display: block;
    padding: 0;
}
ul li ul li{
    padding: 5px;
    box-shadow: none;
}
</style>
