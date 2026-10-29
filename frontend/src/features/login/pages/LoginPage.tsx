import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../../components/ui/Button/Button'
import styles from './LoginPage.module.css'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  function validar(): string | null {
    if (!email.trim()) return 'Informe seu email.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Email inválido.'
    if (!senha.trim()) return 'Informe sua senha.'
    if (senha.length < 4) return 'Senha deve ter pelo menos 4 caracteres.'
    return null
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setErro('')

    const erroValidacao = validar()
    if (erroValidacao) {
      setErro(erroValidacao)
      return
    }

    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 800))

    localStorage.setItem('auth_token', 'fake-token-123')
    localStorage.setItem('auth_user', email)

    setLoading(false)
    navigate('/app')
  }

  return (
    <div className={styles.page}>
      {/* Lado esquerdo — marca/destaque */}
      <aside className={styles.aside}>
        <Link to="/" className={styles.logoAside}>
          Nutri<span>Lauany</span>
        </Link>

        <div className={styles.asideContent}>
          <h2 className={styles.asideTitle}>
            Sua jornada de saúde começa aqui.
          </h2>
          <p className={styles.asideText}>
            Acesse seus conteúdos, plano alimentar e acompanhamento em um só lugar.
            Tudo pensado pra caber na sua rotina.
          </p>

          <ul className={styles.asideList}>
            <li>
              <span className={styles.checkIcon}>✓</span>
              Plano alimentar personalizado
            </li>
            <li>
              <span className={styles.checkIcon}>✓</span>
              Conteúdos exclusivos
            </li>
            <li>
              <span className={styles.checkIcon}>✓</span>
              Acompanhamento próximo
            </li>
          </ul>
        </div>

        <p className={styles.asideFooter}>
          © {new Date().getFullYear()} NutriLauany
        </p>
      </aside>

      {/* Lado direito — formulário */}
      <main className={styles.main}>
        <div className={styles.formWrapper}>
          <div className={styles.mobileLogo}>
            <Link to="/" className={styles.logoMobile}>
              Nutri<span>Lauany</span>
            </Link>
          </div>

          <div className={styles.formHeader}>
            <h1 className={styles.title}>Entrar</h1>
            <p className={styles.subtitle}>Acesse sua área com email e senha.</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                id="email"
                type="email"
                className={styles.input}
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                disabled={loading}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="senha" className={styles.label}>Senha</label>
              <input
                id="senha"
                type="password"
                className={styles.input}
                placeholder="••••••••"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                autoComplete="current-password"
                disabled={loading}
              />
            </div>

            {erro && <p className={styles.error}>{erro}</p>}

            <Button type="submit" size="lg" fullWidth disabled={loading}>
              {loading ? 'Entrando…' : 'Entrar'}
            </Button>

            <div className={styles.links}>
              <a href="#" className={styles.link} onClick={(e) => e.preventDefault()}>
                Esqueci minha senha
              </a>
            </div>
          </form>

          <p className={styles.backLink}>
            <Link to="/">← Voltar para a página inicial</Link>
          </p>

          <div className={styles.hint}>
            <strong>Preview:</strong> use qualquer email válido e senha com 4+ caracteres.
          </div>
        </div>
      </main>
    </div>
  )
}