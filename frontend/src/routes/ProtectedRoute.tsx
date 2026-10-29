import { Navigate, Outlet } from 'react-router-dom'

// Fake auth: na preview, qualquer "login" grava um token no localStorage
export function ProtectedRoute() {
  const isLogged = Boolean(localStorage.getItem('auth_token'))

  if (!isLogged) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}