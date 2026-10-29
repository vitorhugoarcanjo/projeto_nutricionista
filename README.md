# NutriLauany

Preview navegável de um sistema de nutrição personalizada — feito para validar o fluxo com a cliente antes de construir o backend.

## 🎯 O que tem aqui

Preview **100% frontend, com dados mockados**:

- **Landing page** pública (hero, sobre, conteúdos, plano premium)
- **Login** fake (qualquer email válido + senha com 4+ caracteres)
- **Dashboard** com pacientes, conteúdos gratuitos e premium
- **Ficha do paciente** (dados, medidas, IMC, restrições, histórico)
- **Plano alimentar** (refeições colapsáveis com substituições)
- **Ebook** premium (capítulos bloqueados/liberados)

Tudo **responsivo** (mobile-first).

## 🚀 Rodar localmente

### Backend (ainda não implementado)

Vai ficar em `backend/` com Flask. Por enquanto, o frontend não consome API real.

### Frontend

```powershell
cd frontend
npm install
npm run dev