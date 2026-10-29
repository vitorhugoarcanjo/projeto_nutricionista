import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Layout } from '../../../components/layout/Layout'
import { Button } from '../../../components/ui/Button/Button'
import { pacientesMock } from '../../../mocks/pacientes'
import { treinosMock } from '../../../mocks/treinos'
import styles from './TreinoPage.module.css'

export default function TreinoPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const paciente = pacientesMock.find((p) => p.id === id)
  const treino = id ? treinosMock[id] : undefined

  const [blocoAberto, setBlocoAberto] = useState<string | null>(null)

  if (!paciente || !treino) {
    return (
      <Layout>
        <div className={`container ${styles.notFound}`}>
          <h1>Treino não encontrado</h1>
          <p>Não há treino para o paciente com id "{id}".</p>
          <Link to="/app">
            <Button variant="secondary">Voltar para o dashboard</Button>
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className={`container ${styles.page}`}>
        {/* Topbar */}
        <div className={styles.topbar}>
          <Button variant="ghost" size="sm" onClick={() => navigate('/app')}>
            ← Voltar
          </Button>
          <Link to={`/app/plano-alimentar/${paciente.id}`}>
            <Button size="sm">Ver plano alimentar →</Button>
          </Link>
        </div>

        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link to="/app">Dashboard</Link>
          <span>/</span>
          <Link to={`/app/paciente/${paciente.id}`}>{paciente.nome}</Link>
          <span>/</span>
          <span>Treino</span>
        </nav>

        {/* Cabeçalho */}
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>{treino.titulo}</h1>
            <p className={styles.subtitle}>
              Paciente: <strong>{paciente.nome}</strong> • {treino.objetivo}
            </p>
          </div>
        </header>

        {/* Metas */}
        <section className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Frequência</span>
            <span className={styles.metaValue}>{treino.frequenciaSemanal}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Duração</span>
            <span className={styles.metaValue}>{treino.duracao}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Objetivo</span>
            <span className={styles.metaValue}>{treino.objetivo}</span>
          </div>
        </section>

        {/* Observações */}
        <div className={styles.observacoes}>
          <span className={styles.observacoesIcon}>📌</span>
          <div>
            <strong>Observações</strong>
            <p>{treino.observacoes}</p>
          </div>
        </div>

        {/* Blocos */}
        <section className={styles.blocosSection}>
          <h2 className={styles.sectionTitle}>Blocos do treino</h2>
          <div className={styles.blocosList}>
            {treino.blocos.map((bloco) => {
              const aberto = blocoAberto === bloco.id
              return (
                <div key={bloco.id} className={styles.blocoCard}>
                  <button
                    className={styles.blocoHeader}
                    onClick={() => setBlocoAberto(aberto ? null : bloco.id)}
                    aria-expanded={aberto}
                  >
                    <div className={styles.blocoHeaderLeft}>
                      <span className={styles.blocoIcone}>{bloco.icone}</span>
                      <div>
                        <h3 className={styles.blocoNome}>{bloco.nome}</h3>
                        <p className={styles.blocoInfo}>
                          {bloco.exercicios.length} exercício{bloco.exercicios.length > 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    <span className={`${styles.chevron} ${aberto ? styles.chevronAberto : ''}`}>
                      ▾
                    </span>
                  </button>

                  {aberto && (
                    <div className={styles.blocoBody}>
                      {bloco.exercicios.map((ex, idx) => (
                        <div key={idx} className={styles.exercicioItem}>
                          <div className={styles.exercicioHeader}>
                            <span className={styles.exercicioNome}>{ex.nome}</span>
                          </div>
                          <div className={styles.exercicioDetalhes}>
                            <span><strong>{ex.series}</strong> séries</span>
                            <span><strong>{ex.repeticoes}</strong> reps</span>
                            {ex.descanso !== '—' && <span>Descanso: <strong>{ex.descanso}</strong></span>}
                          </div>
                          {ex.observacao && (
                            <p className={styles.exercicioObs}>💡 {ex.observacao}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Rodapé: Voltar + ação secundária */}
        <div className={styles.footerActions}>
          <Button variant="ghost" size="sm" onClick={() => navigate('/app')}>
            ← Voltar para o dashboard
          </Button>
          <Link to={`/app/paciente/${paciente.id}`}>
            <Button variant="secondary" size="sm">Ver ficha do paciente →</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}