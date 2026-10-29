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
  capitulos: EbookCapitulo[]
}

export const ebookMock: Ebook = {
  id: 'guia-alimentacao',
  titulo: 'Guia de Alimentação Saudável',
  subtitulo: '50+ receitas, planos semanais e lista de compras',
  capaEmoji: '📘',
  capitulos: [
    { id: '1', titulo: 'Fundamentos da nutrição', resumo: 'Macronutrientes, micronutrientes e como o corpo usa cada um.' },
    { id: '2', titulo: 'Montando o prato ideal', resumo: 'Método do prato: proporções e combinações que funcionam.' },
    { id: '3', titulo: 'Planejamento semanal', resumo: 'Como organizar refeições da semana em 1 hora.' },
    { id: '4', titulo: '50+ receitas práticas', resumo: 'Café da manhã, almoço, jantar e snacks saudáveis.' },
    { id: '5', titulo: 'Lista de compras inteligente', resumo: 'O que comprar, onde economizar e como armazenar.' },
  ],
}