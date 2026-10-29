export interface EbookCapitulo {
  id: string
  titulo: string
  resumo: string
}

export interface Ebook {
  id: string
  titulo: string
  subtitulo: string
  capaEmoji: string
  categoria: 'alimentacao' | 'treino'
  capitulos: EbookCapitulo[]
}

export const ebooksMock: Ebook[] = [
  {
    id: 'guia-alimentacao',
    titulo: 'Guia de Alimentação Saudável',
    subtitulo: '50+ receitas, planos semanais e lista de compras',
    capaEmoji: '📘',
    categoria: 'alimentacao',
    capitulos: [
      { id: '1', titulo: 'Fundamentos da nutrição', resumo: 'Macronutrientes, micronutrientes e como o corpo usa cada um.' },
      { id: '2', titulo: 'Montando o prato ideal', resumo: 'Método do prato: proporções e combinações que funcionam.' },
      { id: '3', titulo: 'Planejamento semanal', resumo: 'Como organizar refeições da semana em 1 hora.' },
      { id: '4', titulo: '50+ receitas práticas', resumo: 'Café da manhã, almoço, jantar e snacks saudáveis.' },
      { id: '5', titulo: 'Lista de compras inteligente', resumo: 'O que comprar, onde economizar e como armazenar.' },
    ],
  },
  {
    id: 'guia-treino',
    titulo: 'Guia de Treino em Casa',
    subtitulo: 'Treinos completos sem academia, com progressão de carga',
    capaEmoji: '🏋️‍♀️',
    categoria: 'treino',
    capitulos: [
      { id: '1', titulo: 'Fundamentos do treino', resumo: 'Séries, repetições, descanso e por que cada um importa.' },
      { id: '2', titulo: 'Treino sem equipamento', resumo: 'Como treinar em casa usando só o peso do corpo.' },
      { id: '3', titulo: 'Treino com elástico', resumo: 'Exercícios completos com faixas elásticas para todos os grupos.' },
      { id: '4', titulo: 'Progressão de carga', resumo: 'Como aumentar a intensidade sem se lesionar.' },
      { id: '5', titulo: 'Treino e recuperação', resumo: 'Alongamento, mobilidade e sono: o que ninguém te conta.' },
    ],
  },
]

// compatibilidade com imports antigos
export const ebookMock = ebooksMock[0]