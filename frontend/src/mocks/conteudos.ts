export interface Conteudo {
  id: string
  titulo: string
  descricao: string
  icone: string
  gratuito: boolean
}

export const conteudosMock: Conteudo[] = [
  {
    id: '1',
    titulo: 'Como montar um prato equilibrado',
    descricao: 'Aprenda a divisão ideal entre proteínas, carboidratos e vegetais.',
    icone: '🥗',
    gratuito: true,
  },
  {
    id: '2',
    titulo: 'Hidratação no dia a dia',
    descricao: 'Quanto de água você realmente precisa beber? Mitos e verdades.',
    icone: '💧',
    gratuito: true,
  },
  {
    id: '3',
    titulo: 'Leitura de rótulos',
    descricao: 'Saiba identificar o que realmente importa nos rótulos dos alimentos.',
    icone: '📋',
    gratuito: true,
  },
  {
    id: '4',
    titulo: 'Ebook completo: Guia de Alimentação Saudável',
    descricao: 'Guia com mais de 50 receitas, planos semanais e lista de compras.',
    icone: '📘',
    gratuito: false,
  },
  {
    id: '5',
    titulo: 'Plano alimentar personalizado',
    descricao: 'Plano mensal feito sob medida pro seu objetivo e rotina.',
    icone: '🎯',
    gratuito: false,
  },
  {
    id: '6',
    titulo: 'Acompanhamento mensal',
    descricao: 'Consultas mensais + ajustes contínuos no plano.',
    icone: '💬',
    gratuito: false,
  },
]