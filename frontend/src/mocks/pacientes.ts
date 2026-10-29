export interface Paciente {
  id: string
  nome: string
  idade: number
  email: string
  telefone: string
  objetivo: string
  restricoes: string[]
  pesoAtual: number
  altura: number
  ultimaConsulta: string
  proximaConsulta: string
}

export const pacientesMock: Paciente[] = [
  {
    id: '1',
    nome: 'Maria Silva',
    idade: 34,
    email: 'maria.silva@email.com',
    telefone: '(11) 98765-4321',
    objetivo: 'Emagrecimento saudável',
    restricoes: ['Intolerância à lactose'],
    pesoAtual: 72.5,
    altura: 1.65,
    ultimaConsulta: '2026-10-15',
    proximaConsulta: '2026-11-15',
  },
  {
    id: '2',
    nome: 'João Santos',
    idade: 28,
    email: 'joao.santos@email.com',
    telefone: '(11) 91234-5678',
    objetivo: 'Ganho de massa muscular',
    restricoes: [],
    pesoAtual: 78.0,
    altura: 1.78,
    ultimaConsulta: '2026-10-20',
    proximaConsulta: '2026-11-20',
  },
  {
    id: '3',
    nome: 'Ana Costa',
    idade: 42,
    email: 'ana.costa@email.com',
    telefone: '(11) 99876-5432',
    objetivo: 'Controle de diabetes',
    restricoes: ['Açúcar', 'Frituras'],
    pesoAtual: 68.3,
    altura: 1.60,
    ultimaConsulta: '2026-10-22',
    proximaConsulta: '2026-11-05',
  },
]