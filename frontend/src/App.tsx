/* frontend\src\App.tsx */
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProtectedRoute } from './routes/ProtectedRoute'

// Lazy: cada página vira um chunk separado
const Landing = lazy(() => import('./features/landing/pages/LandingPage'))
const Login = lazy(() => import('./features/login/pages/LoginPage'))
const Dashboard = lazy(() => import('./features/dashboard/pages/DashboardPage'))
const PacienteVisao = lazy(() => import('./features/dashboard/pages/PacienteVisaoPage'))
const Paciente = lazy(() => import('./features/paciente/pages/PacientePage'))
const PlanoAlimentar = lazy(() => import('./features/plano-alimentar/pages/PlanoAlimentarPage'))
const Ebook = lazy(() => import('./features/ebook/pages/EbookPage'))
const Treino = lazy(() => import('./features/treino/pages/TreinoPage'))
const Checkout = lazy(() => import('./features/checkout/pages/CheckoutPage'))

function PageLoader() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <p>Carregando…</p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />

          {/* Rotas protegidas (preview: auth fake) */}
          <Route element={<ProtectedRoute />}>
            <Route path="/app" element={<Dashboard />} />
            <Route path="/app/paciente/:id" element={<Paciente />} />
            <Route path="/app/plano-alimentar/:id" element={<PlanoAlimentar />} />
            <Route path="/app/ebook" element={<Ebook />} />
            <Route path="/app/paciente-visao" element={<PacienteVisao />} />
            <Route path="/app/treino/:id" element={<Treino />} />
            <Route path="/app/checkout" element={<Checkout />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}