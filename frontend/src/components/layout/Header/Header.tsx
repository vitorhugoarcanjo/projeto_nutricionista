import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../ui/Button/Button'
import styles from './Header.module.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [premiumAtivo, setPremiumAtivo] = useState(false)
  const navigate = useNavigate()
  const isLogged = Boolean(localStorage.getItem('auth_token'))

  useEffect(() => {
    setPremiumAtivo(localStorage.getItem('premium_ativo') === 'true')
  }, [])

  function handleLogout() {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_user')
    setMenuOpen(false)
    navigate('/')
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to={isLogged ? '/app' : '/'} className={styles.logo} onClick={closeMenu}>
          Nutri <span className={styles.logoAccent}>& Fit</span>
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {isLogged ? (
            <>
              {premiumAtivo ? (
                <span className={`${styles.planBadge} ${styles.planPremium}`}>⭐ Premium</span>
              ) : (
                <span className={`${styles.planBadge} ${styles.planFree}`}>Gratuito</span>
              )}
              <Link to="/app" className={styles.navLink} onClick={closeMenu}>
                Dashboard
              </Link>
              <Link to="/app/paciente/1" className={styles.navLink} onClick={closeMenu}>
                Pacientes
              </Link>
              <Link to="/app/ebook" className={styles.navLink} onClick={closeMenu}>
                Ebook
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                Sair
              </Button>
            </>
          ) : (
            <>
              <Link to="/" className={styles.navLink} onClick={closeMenu}>
                Início
              </Link>
              <a href="/#sobre" className={styles.navLink} onClick={closeMenu}>
                Sobre
              </a>
              <a href="/#conteudos" className={styles.navLink} onClick={closeMenu}>
                Conteúdos
              </a>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  closeMenu()
                  navigate('/login')
                }}
              >
                Entrar
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}