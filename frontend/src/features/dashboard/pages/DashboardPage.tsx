import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../../components/layout/Layout'
import { Button } from '../../../components/ui/Button/Button'
import { pacientesMock } from '../../../mocks/pacientes'
import { conteudosMock } from '../../../mocks/conteudos'
import styles from './DashboardPage.module.css'

export default function DashboardPage() {
  const [nomeUsuario, setNomeUsuario] = useState('')
  const [premiumAtivo, setPremiumAtivo] = useState(false)

  useEffect(() => {
    const email = localStorage.getItem('auth_user') || ''
    setNomeUsuario(email.split('@')[0])
    setPremiumAtivo(localStorage.getItem('premium_ativo') === 'true')
  }, [])

  const gratuitos = conteudosMock.filter((c) => c.gratuito)
  const pagos = conteudosMock.filter((c) => !c.gratuito)

  function handleAssinar() {
    localStorage.setItem('premium_ativo', 'true')
    setPremiumAtivo(true)
    alert('Plano Premium ativado! (simulação)')
  }

  return (
    <Layout>
      <div className={`container ${styles.page}`}>
        <header className={styles.header}>
          <div>
            <div className={styles.masterBadge}>
              <span className={styles.masterDot} />
              Painel Master
            </div>
            <h1 className={styles.title}>
              Olá, {nomeUsuario || 'visitante'}
            </h1>
            <p className={styles.subtitle}>
              Gerencie seus pacientes, planos e conteúdos.
            </p>
          </div>
          <div className={styles.headerActions}>
            <Link to="/app/paciente-visao">
              <Button variant="ghost" size="sm">
                👁️ Ver como paciente
              </Button>
            </Link>
            {!premiumAtivo && (
              <Button onClick={handleAssinar} size="sm">
                ⭐ Assinar Premium
              </Button>
            )}
          </div>
        </header>

        <section className={styles.stats}>
          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.statIconGreen}`}>👥</div>
            <div className={styles.statContent}>
              <span className={styles.statLabel}>Pacientes ativos</span>
              <span className={styles.statValue}>{pacientesMock.length}</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.statIconAccent}`}>📅</div>
            <div className={styles.statContent}>
              <span className={styles.statLabel}>Próximas consultas</span>
              <span className={styles.statValue}>{pacientesMock.length}</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Meus pacientes</h2>
          </div>
          <div className={styles.pacientesGrid}>
            {pacientesMock.map((p) => (
              <div key={p.id} className={styles.pacienteCard}>
                <div className={styles.pacienteHeader}>
                  <div
                    className={styles.avatar}
                    style={{ background: getCorAvatar(p.nome) }}
                  >
                    {p.nome.charAt(0)}
                  </div>
                  <div>
                    <h3 className={styles.pacienteNome}>{p.nome}</h3>
                    <p className={styles.pacienteInfo}>{p.idade} anos • {p.objetivo}</p>
                  </div>
                </div>
                <div className={styles.pacienteActions}>
                  <Link to={`/app/paciente/${p.id}`}>
                    <Button variant="secondary" size="sm" fullWidth>
                      Ver ficha
                    </Button>
                  </Link>
                  <Link to={`/app/plano-alimentar/${p.id}`}>
                    <Button variant="ghost" size="sm" fullWidth>
                      Plano
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Conteúdos gratuitos</h2>
          </div>
          <div className={styles.conteudosGrid}>
            {gratuitos.map((c) => (
              <div key={c.id} className={styles.conteudoCard}>
                <span className={styles.conteudoIcon}>{c.icone}</span>
                <div>
                  <h3 className={styles.conteudoTitle}>{c.titulo}</h3>
                  <p className={styles.conteudoDesc}>{c.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Conteúdos Premium</h2>
            {premiumAtivo && <span className={styles.badgeAtivo}>✓ Ativo</span>}
          </div>
          <div className={styles.conteudosGrid}>
            {pagos.map((c) => {
              const bloqueado = !premiumAtivo
              return (
                <div
                  key={c.id}
                  className={`${styles.conteudoCard} ${bloqueado ? styles.conteudoBloqueado : ''}`}
                >
                  <span className={styles.conteudoIcon}>{c.icone}</span>
                  <div className={styles.conteudoBody}>
                    <h3 className={styles.conteudoTitle}>{c.titulo}</h3>
                    <p className={styles.conteudoDesc}>{c.descricao}</p>
                    {bloqueado ? (
                      <span className={styles.lockLabel}>🔒 Premium</span>
                    ) : (
                      <Link to="/app/ebook">
                        <Button variant="primary" size="sm">
                          Acessar
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

function getCorAvatar(nome: string): string {
  const paleta = [
    'linear-gradient(135deg, #a8d5ba 0%, #5b8a72 100%)',
    'linear-gradient(135deg, #f5c6bf 0%, #d4857f 100%)',
    'linear-gradient(135deg, #f0d9b5 0%, #d4a574 100%)',
    'linear-gradient(135deg, #c9c2e0 0%, #8a7fb8 100%)',
    'linear-gradient(135deg, #b8d4e0 0%, #6b9bb0 100%)',
  ]
  let hash = 0
  for (let i = 0; i < nome.length; i++) {
    hash = nome.charCodeAt(i) + ((hash << 5) - hash)
  }
  return paleta[Math.abs(hash) % paleta.length]
}