import { ref } from 'vue';
const paginas = [
  {
    pagina: 'agendarConsulta',
    titulo: 'Agendar consulta',
    subtitulo: 'Escolha a especialidade, profissional e horário'
  },
  {
    pagina: 'agendarExame',
    titulo: 'Agendar Exame',
    subtitulo: 'Escolha o exame e horário que melhor se adequa à sua necessidade'
  },
  {
    pagina: 'contato',
    titulo: 'Contato',
    subtitulo: 'Entre em contato ou visite nossa unidade. Queremos te ajudar.'
  },
  {
    pagina: 'medicoFamiliar',
    titulo: 'Médico da Família',
    subtitulo: 'Acompanhamento contínuo e integral da saúde de você e sua família com atendimento humanizado e personalizado. '
  },
  {
    pagina: 'especialidades',
    titulo: 'Especialidades Médicas',
    subtitulo: 'Conheça todas as especialidades disponíveis na UBS Digital e agende sua consulta'
  }
];
const pacientesBase = [
  {
    nome: 'Gamaliel',
    peso: 72,
    genero: 'M',
    cpf: '123.456.789-00', //CPF de exemplo
    email: 'gamaliel@gmail.com', //esqueci seu email, Gama, foi mal
    tel: '4002-8922', //telefone de exemplo
    senha: 'senha', //Essa parte define o que será mostrado na páginah Minha Área ao realizar o login
    medicamentos: [
      {
        nome: 'Losartana',
        dose: 50,
        vezes: 1,
        horarios: ['noite']
      },
      {
        nome: 'Metformina',
        dose: 850,
        vezes: 2,
        horarios: ['manhã', 'noite']
      }
    ],
    medicoFamiliar: 'Dr. Carlos Mendes',
    exames: [
      {
        tipo: 'Hemograma Completo',
        data: '02 de maio de 2026',
        medico: 'Dr. Carlos Mendes'
      },
      {
        tipo: 'Raio-X Tórax',
        data: '20 de abril de 2026',
        medico: 'Dr. Paulo Costa'
      }
    ],
    consultas: [
      {
        motivo: 'Dor no Abdômen',
        data: '02 de maio de 2026',
        medico: 'Dr. Carlos Mendes'
      }
    ]
  },
  {
    nome: 'Lucas',
    peso: 75,
    genero: 'M',
    cpf: '183.156.459-90', //CPF de exemplo
    email: 'lucaseliel15032010@gamil.com',
    tel: '47 99183-3045',
    senha: 'Senha2',
    medicamentos: [
      {
        nome: 'PuranT4',
        dose: 37.5,
        vezes: 1,
        horarios: ['Manhã']
      },
      {
        nome: 'Symbicort',
        dose: 200,
        vezes: 2,
        horarios: ['manhã', 'noite']
      }
    ],
    medicoFamiliar: 'Dr. Marcos',
    exames: [
      {
        tipo: 'Hemograma Completo',
        data: '02 de maio de 2026',
        medico: 'Dr. Carlos Mendes'
      },
    ],
    consultas: [
      {
        especialidade: 'Pneumologista',
        motivo: 'Dificuldade para respirar',
        data: '02 de maio de 2026',
        medico: 'Dr. Carlos Mendes'
      }
    ]
  }
]
const medicosBase = ref([
  {
    nome: 'Dr. Carlos Mendes',
    certificado: '', //inserir url de um certificado
    email: 'carlosmender@gmail.com', //email de exemplo. Não existe
    tel: '423-8922', //telefone de exemplo. Não funciona
    senha: 'senha', //Essa parte define o que será mostrado na páginah Minha Área ao realizar o login
    especialidades: ['Clínico Geral'],
    familiasAssociadas: [
      {
        familia: 'Silva',
        membros: ['Pedro Silva', 'Gabriel Silva'],
        id: '1'
      }
    ],
    exames: [
      {
        tipo: 'Hemograma Completo',
        data: '02 de maio de 2026',
        paciente: 'Samuel Costa'
      },
      {
        tipo: 'Raio-X Tórax',
        data: '20 de abril de 2026',
        paciente: 'Paulo Vieira'
      }
    ],
    consultas: [
      {
        motivo: 'Dor no Abdômen',
        data: '02 de maio de 2026',
        paciente: 'Romário Gomes'
      }
    ]
  },
  {
    nome: 'Dr. Paulo Henrique Viana',
    certificado: '', //inserir url de um certificado
    email: 'carlosmender@gmail.com', //email de exemplo. Não existe
    tel: '613-8032', //telefone de exemplo. Não funciona
    senha: 'senha2', //Essa parte define o que será mostrado na páginah Minha Área ao realizar o login
    especialidades: ['Pediatria', 'Pneumologia'], //Informações com base no(s) certificado(s)
    familiasAssociadas: [
      {
        familia: 'Costa',
        membros: ['Samuel Costa', 'Henrique Costa'],
        id: '1'
      }
    ],
    exames: [
      {
        tipo: 'Exame de Urina',
        data: '12 de março de 2026',
        paciente: 'Samuel Costa'
      },
      {
        tipo: 'Glicemia em Jejum',
        data: '20 de junho de 2026',
        paciente: 'Marco Dias'
      }
    ],
    consultas: [
      {
        motivo: 'Problemaas para respirar',
        data: '02 de maio de 2026',
        paciente: 'Lucas'
      }
    ]
  }
])

export const horarios = ref([
  {
    id: 1,
    dia: 'Segunda-feira',
    horariosDisponiveis: ['08:00 - 20:00'],
  },
  {
    id: 2,
    dia: 'Terça-feira',
    horariosDisponiveis: ['08:00 - 20:00'],
  },
  {
    id: 3,
    dia: 'Quarta-feira',
    horariosDisponiveis: ['08:00 - 20:00'],
  },
  {
    id: 4,
    dia: 'Quinta-feira',
    horariosDisponiveis: ['08:00 - 20:00'],
  },
  {
    id: 5,
    dia: 'Sexta-feira',
    horariosDisponiveis: ['08:00 - 20:00'],
  },
  {
    id: 6,
    dia: 'Sabado',
    horariosDisponiveis: ['08:00 - 17:00'],
  },
  {
    id: 7,
    dia: 'Domingo',
    horariosDisponiveis: ['FECHADO'],
  }
])

export default paginas;
export { pacientesBase };
export { medicosBase }
