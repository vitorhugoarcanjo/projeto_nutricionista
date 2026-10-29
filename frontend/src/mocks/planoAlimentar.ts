export interface Alimento {
  nome: string
  quantidade: string
  substituicoes: string[]
}

export interface Refeicao {
  id: string
  nome: string
  horario: string
  icone: string
  alimentos: Alimento[]
}

export interface PlanoAlimentar {
  pacienteId: string
  titulo: string
  observacoes: string
  refeicoes: Refeicao[]
}

export const planosMock: Record<string, PlanoAlimentar> = {
  '1': {
    pacienteId: '1',
    titulo: 'Plano de emagrecimento saudável',
    observacoes:
      'Beber pelo menos 2L de água por dia. Evitar refrigerantes e sucos industrializados. Fazer 5 refeições ao dia, sem pular nenhuma.',
    refeicoes: [
      {
        id: 'cafe',
        nome: 'Café da manhã',
        horario: '07:00',
        icone: '☕',
        alimentos: [
          {
            nome: 'Pão integral',
            quantidade: '2 fatias',
            substituicoes: ['Tapioca (2 colheres)', 'Aveia em flocos (3 colheres)'],
          },
          {
            nome: 'Ovo mexido',
            quantidade: '2 unidades',
            substituicoes: ['Queijo branco (2 fatias)', 'Iogurte natural (1 pote)'],
          },
          {
            nome: 'Mamão',
            quantidade: '1 fatia',
            substituicoes: ['Banana (1 unidade)', 'Melão (1 fatia)'],
          },
        ],
      },
      {
        id: 'lanche-manha',
        nome: 'Lanche da manhã',
        horario: '10:00',
        icone: '🍎',
        alimentos: [
          {
            nome: 'Castanhas',
            quantidade: '5 unidades',
            substituicoes: ['Amêndoas (5 unidades)', 'Nozes (3 unidades)'],
          },
          {
            nome: 'Maçã',
            quantidade: '1 unidade',
            substituicoes: ['Pera (1 unidade)', 'Laranja (1 unidade)'],
          },
        ],
      },
      {
        id: 'almoco',
        nome: 'Almoço',
        horario: '12:30',
        icone: '🍽️',
        alimentos: [
          {
            nome: 'Arroz integral',
            quantidade: '4 colheres de sopa',
            substituicoes: ['Batata-doce (1 unidade média)', 'Quinoa (4 colheres)'],
          },
          {
            nome: 'Feijão',
            quantidade: '1 concha',
            substituicoes: ['Lentilha (1 concha)', 'Grão-de-bico (1 concha)'],
          },
          {
            nome: 'Frango grelhado',
            quantidade: '1 filé médio',
            substituicoes: ['Peixe (1 filé)', 'Carne magra (1 bife pequeno)'],
          },
          {
            nome: 'Salada verde',
            quantidade: 'À vontade',
            substituicoes: ['Legumes cozidos', 'Vegetais refogados'],
          },
        ],
      },
      {
        id: 'lanche-tarde',
        nome: 'Lanche da tarde',
        horario: '16:00',
        icone: '🥤',
        alimentos: [
          {
            nome: 'Iogurte natural',
            quantidade: '1 pote',
            substituicoes: ['Vitamina de fruta', 'Queijo branco (2 fatias)'],
          },
          {
            nome: 'Granola sem açúcar',
            quantidade: '2 colheres de sopa',
            substituicoes: ['Aveia (2 colheres)', 'Chia (1 colher)'],
          },
        ],
      },
      {
        id: 'jantar',
        nome: 'Jantar',
        horario: '19:30',
        icone: '🌙',
        alimentos: [
          {
            nome: 'Omelete de legumes',
            quantidade: '2 ovos',
            substituicoes: ['Frango desfiado', 'Sopa de legumes'],
          },
          {
            nome: 'Salada de folhas',
            quantidade: 'À vontade',
            substituicoes: ['Legumes no vapor', 'Abobrinha grelhada'],
          },
        ],
      },
    ],
  },
  '2': {
    pacienteId: '2',
    titulo: 'Plano de ganho de massa muscular',
    observacoes:
      'Priorizar proteína em todas as refeições. Comer a cada 3 horas. Suplementar com whey protein após o treino (opcional).',
    refeicoes: [
      {
        id: 'cafe',
        nome: 'Café da manhã',
        horario: '06:30',
        icone: '☕',
        alimentos: [
          {
            nome: 'Ovos inteiros',
            quantidade: '3 unidades',
            substituicoes: ['Omelete com queijo', 'Iogurte com granola'],
          },
          {
            nome: 'Pão integral',
            quantidade: '3 fatias',
            substituicoes: ['Tapioca (3 colheres)', 'Cuscuz (1 porção)'],
          },
          {
            nome: 'Banana com aveia',
            quantidade: '1 unidade + 2 colheres',
            substituicoes: ['Mamão com chia', 'Maçã com pasta de amendoim'],
          },
        ],
      },
      {
        id: 'lanche-manha',
        nome: 'Lanche da manhã',
        horario: '09:30',
        icone: '🥜',
        alimentos: [
          {
            nome: 'Pasta de amendoim',
            quantidade: '1 colher de sopa',
            substituicoes: ['Castanhas (1 punhado)', 'Amêndoas (1 punhado)'],
          },
          {
            nome: 'Torrada integral',
            quantidade: '2 unidades',
            substituicoes: ['Pão integral (2 fatias)', 'Biscoito de arroz (4 unidades)'],
          },
        ],
      },
      {
        id: 'almoco',
        nome: 'Almoço',
        horario: '12:00',
        icone: '🍽️',
        alimentos: [
          {
            nome: 'Arroz branco',
            quantidade: '6 colheres de sopa',
            substituicoes: ['Macarrão (1 prato)', 'Batata (2 unidades)'],
          },
          {
            nome: 'Feijão',
            quantidade: '1 concha',
            substituicoes: ['Lentilha (1 concha)', 'Grão-de-bico (1 concha)'],
          },
          {
            nome: 'Carne vermelha magra',
            quantidade: '1 bife grande',
            substituicoes: ['Frango (1 filé grande)', 'Peixe (1 filé grande)'],
          },
          {
            nome: 'Legumes',
            quantidade: 'À vontade',
            substituicoes: ['Salada crua', 'Legumes refogados'],
          },
        ],
      },
      {
        id: 'pre-treino',
        nome: 'Pré-treino',
        horario: '16:00',
        icone: '💪',
        alimentos: [
          {
            nome: 'Batata-doce',
            quantidade: '1 unidade média',
            substituicoes: ['Mandioca (1 pedaço)', 'Banana (1 unidade)'],
          },
          {
            nome: 'Frango desfiado',
            quantidade: '3 colheres de sopa',
            substituicoes: ['Ovos cozidos (2 unidades)', 'Atum (1 lata)'],
          },
        ],
      },
      {
        id: 'jantar',
        nome: 'Jantar',
        horario: '20:00',
        icone: '🌙',
        alimentos: [
          {
            nome: 'Salmão grelhado',
            quantidade: '1 filé grande',
            substituicoes: ['Tilápia (1 filé grande)', 'Frango (1 filé grande)'],
          },
          {
            nome: 'Arroz integral',
            quantidade: '4 colheres de sopa',
            substituicoes: ['Quinoa (4 colheres)', 'Batata-doce (1 unidade)'],
          },
          {
            nome: 'Brócolis',
            quantidade: 'À vontade',
            substituicoes: ['Couve-flor', 'Abobrinha'],
          },
        ],
      },
    ],
  },
  '3': {
    pacienteId: '3',
    titulo: 'Plano de controle de diabetes',
    observacoes:
      'Evitar açúcar, frituras e alimentos ultraprocessados. Priorizar carboidratos de baixo índice glicêmico. Fracionar refeições em 6 por dia.',
    refeicoes: [
      {
        id: 'cafe',
        nome: 'Café da manhã',
        horario: '07:30',
        icone: '☕',
        alimentos: [
          {
            nome: 'Pão integral',
            quantidade: '2 fatias',
            substituicoes: ['Tapioca (2 colheres)', 'Ovo mexido (2 unidades)'],
          },
          {
            nome: 'Queijo branco',
            quantidade: '2 fatias',
            substituicoes: ['Ovo cozido (1 unidade)', 'Iogurte natural (1 pote)'],
          },
          {
            nome: 'Café sem açúcar',
            quantidade: '1 xícara',
            substituicoes: ['Chá verde', 'Chá de camomila'],
          },
        ],
      },
      {
        id: 'lanche-manha',
        nome: 'Lanche da manhã',
        horario: '10:00',
        icone: '🥒',
        alimentos: [
          {
            nome: 'Cenoura crua',
            quantidade: '1 unidade',
            substituicoes: ['Pepino (1 unidade)', 'Tomate-cereja (1 punhado)'],
          },
          {
            nome: 'Castanhas',
            quantidade: '3 unidades',
            substituicoes: ['Amêndoas (5 unidades)', 'Nozes (3 unidades)'],
          },
        ],
      },
      {
        id: 'almoco',
        nome: 'Almoço',
        horario: '12:30',
        icone: '🍽️',
        alimentos: [
          {
            nome: 'Arroz integral',
            quantidade: '3 colheres de sopa',
            substituicoes: ['Quinoa (3 colheres)', 'Batata-doce (1 unidade pequena)'],
          },
          {
            nome: 'Feijão',
            quantidade: '1 concha pequena',
            substituicoes: ['Lentilha (1 concha pequena)', 'Grão-de-bico (1 concha pequena)'],
          },
          {
            nome: 'Frango grelhado',
            quantidade: '1 filé médio',
            substituicoes: ['Peixe (1 filé)', 'Ovos (2 unidades)'],
          },
          {
            nome: 'Salada de folhas',
            quantidade: 'À vontade',
            substituicoes: ['Legumes no vapor', 'Brócolis refogado'],
          },
        ],
      },
      {
        id: 'lanche-tarde',
        nome: 'Lanche da tarde',
        horario: '15:30',
        icone: '🍓',
        alimentos: [
          {
            nome: 'Morango',
            quantidade: '1 xícara',
            substituicoes: ['Framboesa (1 xícara)', 'Amora (1 xícara)'],
          },
          {
            nome: 'Iogurte natural',
            quantidade: '1 pote',
            substituicoes: ['Queijo branco (2 fatias)', 'Ovo cozido (1 unidade)'],
          },
        ],
      },
      {
        id: 'jantar',
        nome: 'Jantar',
        horario: '19:00',
        icone: '🌙',
        alimentos: [
          {
            nome: 'Omelete de legumes',
            quantidade: '2 ovos',
            substituicoes: ['Frango desfiado', 'Sopa de legumes'],
          },
          {
            nome: 'Salada de folhas',
            quantidade: 'À vontade',
            substituicoes: ['Abobrinha grelhada', 'Berinjela assada'],
          },
        ],
      },
      {
        id: 'ceia',
        nome: 'Ceia',
        horario: '21:30',
        icone: '🌛',
        alimentos: [
          {
            nome: 'Chá de camomila',
            quantidade: '1 xícara',
            substituicoes: ['Chá de erva-doce', 'Chá de hortelã'],
          },
          {
            nome: 'Castanhas',
            quantidade: '3 unidades',
            substituicoes: ['Amêndoas (5 unidades)', 'Nozes (3 unidades)'],
          },
        ],
      },
    ],
  },
}