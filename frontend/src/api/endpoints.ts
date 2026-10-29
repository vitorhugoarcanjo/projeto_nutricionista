export const ENDPOINTS = {
  auth: {
    login: '/auth/login',
    me: '/auth/me',
  },
  pacientes: {
    list: '/pacientes',
    byId: (id: string) => `/pacientes/${id}`,
  },
  planoAlimentar: {
    byPaciente: (id: string) => `/pacientes/${id}/plano-alimentar`,
  },
  ebook: {
    list: '/ebooks',
    byId: (id: string) => `/ebooks/${id}`,
  },
} as const