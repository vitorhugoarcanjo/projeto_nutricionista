export interface Exercicio {
  nome: string
  series: string
  repeticoes: string
  descanso: string
  observacao?: string
}

export interface BlocoTreino {
  id: string
  nome: string
  icone: string
  exercicios: Exercicio[]
}

export interface Treino {
  pacienteId: string
  titulo: string
  objetivo: string
  frequenciaSemanal: string
  duracao: string
  observacoes: string
  blocos: BlocoTreino[]
}

export const treinosMock: Record<string, Treino> = {
  '1': {
    pacienteId: '1',
    titulo: 'Treino de emagrecimento e tonificação',
    objetivo: 'Redução de gordura com preservação de massa magra',
    frequenciaSemanal: '4x por semana',
    duracao: '50 min por sessão',
    observacoes:
      'Aquecer 5-10 min antes de cada treino. Manter hidratação durante toda a sessão. Progressão de carga a cada 2 semanas.',
    blocos: [
      {
        id: 'aquecimento',
        nome: 'Aquecimento',
        icone: '🔥',
        exercicios: [
          { nome: 'Caminhada na esteira', series: '1', repeticoes: '5 min', descanso: '—' },
          { nome: 'Mobilidade de quadril', series: '2', repeticoes: '10 reps', descanso: '30s' },
          { nome: 'Rotação de ombros', series: '2', repeticoes: '15 reps', descanso: '30s' },
        ],
      },
      {
        id: 'forca',
        nome: 'Força — membros inferiores',
        icone: '🦵',
        exercicios: [
          {
            nome: 'Agachamento livre',
            series: '4',
            repeticoes: '12',
            descanso: '60s',
            observacao: 'Cuidar da postura, joelhos alinhados aos pés',
          },
          { nome: 'Leg press', series: '3', repeticoes: '15', descanso: '60s' },
          { nome: 'Cadeira extensora', series: '3', repeticoes: '12', descanso: '45s' },
          { nome: 'Panturrilha em pé', series: '3', repeticoes: '20', descanso: '30s' },
        ],
      },
      {
        id: 'cardio',
        nome: 'Cardio final',
        icone: '🏃‍♀️',
        exercicios: [
          {
            nome: 'HIIT na esteira',
            series: '8',
            repeticoes: '30s intenso / 30s leve',
            descanso: '—',
            observacao: 'Alternar entre trote e caminhada rápida',
          },
        ],
      },
      {
        id: 'alongamento',
        nome: 'Alongamento',
        icone: '🧘‍♀️',
        exercicios: [
          { nome: 'Alongamento de posterior', series: '1', repeticoes: '30s cada lado', descanso: '—' },
          { nome: 'Alongamento de quadríceps', series: '1', repeticoes: '30s cada lado', descanso: '—' },
        ],
      },
    ],
  },
  '2': {
    pacienteId: '2',
    titulo: 'Treino de hipertrofia',
    objetivo: 'Ganho de massa muscular com foco em membros superiores',
    frequenciaSemanal: '5x por semana',
    duracao: '60 min por sessão',
    observacoes:
      'Progressão de carga semanal. Focar na execução correta antes de aumentar peso. Suplementar com whey após o treino (opcional).',
    blocos: [
      {
        id: 'aquecimento',
        nome: 'Aquecimento',
        icone: '🔥',
        exercicios: [
          { nome: 'Bike ergométrica', series: '1', repeticoes: '5 min', descanso: '—' },
          { nome: 'Rotação de punhos', series: '2', repeticoes: '15 reps', descanso: '30s' },
        ],
      },
      {
        id: 'peito-triceps',
        nome: 'Peito e tríceps',
        icone: '💪',
        exercicios: [
          { nome: 'Supino reto', series: '4', repeticoes: '8-10', descanso: '90s' },
          { nome: 'Supino inclinado com halteres', series: '3', repeticoes: '10', descanso: '60s' },
          { nome: 'Crucifixo', series: '3', repeticoes: '12', descanso: '60s' },
          { nome: 'Tríceps corda', series: '3', repeticoes: '12', descanso: '45s' },
          { nome: 'Tríceps francês', series: '3', repeticoes: '10', descanso: '45s' },
        ],
      },
      {
        id: 'costas-biceps',
        nome: 'Costas e bíceps',
        icone: '🏋️‍♂️',
        exercicios: [
          { nome: 'Puxada frontal', series: '4', repeticoes: '10', descanso: '90s' },
          { nome: 'Remada curvada', series: '3', repeticoes: '10', descanso: '60s' },
          { nome: 'Rosca direta', series: '3', repeticoes: '12', descanso: '45s' },
          { nome: 'Rosca martelo', series: '3', repeticoes: '10', descanso: '45s' },
        ],
      },
    ],
  },
  '3': {
    pacienteId: '3',
    titulo: 'Treino funcional de baixo impacto',
    objetivo: 'Condicionamento físico e controle glicêmico',
    frequenciaSemanal: '3x por semana',
    duracao: '40 min por sessão',
    observacoes:
      'Monitorar glicemia antes e depois do treino. Manter intensidade moderada. Hidratação constante.',
    blocos: [
      {
        id: 'aquecimento',
        nome: 'Aquecimento',
        icone: '🔥',
        exercicios: [
          { nome: 'Caminhada', series: '1', repeticoes: '8 min', descanso: '—' },
          { nome: 'Mobilidade geral', series: '1', repeticoes: '5 min', descanso: '—' },
        ],
      },
      {
        id: 'circuito',
        nome: 'Circuito funcional',
        icone: '⚡',
        exercicios: [
          { nome: 'Agachamento com cadeira', series: '3', repeticoes: '12', descanso: '45s' },
          { nome: 'Elevação lateral de braços', series: '3', repeticoes: '12', descanso: '45s' },
          { nome: 'Remada com elástico', series: '3', repeticoes: '12', descanso: '45s' },
          { nome: 'Ponte de glúteo', series: '3', repeticoes: '15', descanso: '45s' },
        ],
      },
      {
        id: 'alongamento',
        nome: 'Alongamento final',
        icone: '🧘‍♀️',
        exercicios: [
          { nome: 'Alongamento geral', series: '1', repeticoes: '10 min', descanso: '—' },
        ],
      },
    ],
  },
}