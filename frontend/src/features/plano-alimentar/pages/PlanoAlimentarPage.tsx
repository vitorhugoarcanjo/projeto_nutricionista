import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Layout } from '../../../components/layout/Layout'
import { Button } from '../../../components/ui/Button/Button'
import { pacientesMock } from '../../../mocks/pacientes'
import { planosMock } from '../../../mocks/planoAlimentar'
import styles from './PlanoAlimentarPage.module.css'

export default function PlanoAlimentarPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const paciente = pacientesMock.find((p) => p.id === id)
  const plano = id ? planosMock[id] : undefined

  const [refeicaoAberta, setRefeicaoAberta] = useState<string | null>(null)

  if (!paciente || !plano) {
    return (
      <Layout>
        <div className={`container ${styles.notFound}`}>
          <h1>Plano não encontrado</h1>
          <p>Não há plano alimentar para o paciente com id "{id}".</p>
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
          <Link to={`/app/treino/${paciente.id}`}>
            <Button size="sm">Ver treino →</Button>
          </Link>
        </div>

        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link to="/app">Dashboard</Link>
          <span>/</span>
          <Link to={`/app/paciente/${paciente.id}`}>{paciente.nome}</Link>
          <span>/</span>
          <span>Plano alimentar</span>
        </nav>

        {/* Cabeçalho */}
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>{plano.titulo}</h1>
            <p className={styles.subtitle}>
              Paciente: <strong>{paciente.nome}</strong> • {paciente.objetivo}
            </p>
          </div>
        </header>

        {/* Observações */}
        <div className={styles.observacoes}>
          <span className={styles.observacoesIcon}>📌</span>
          <div>
            <strong>Observações</strong>
            <p>{plano.observacoes}</p>
          </div>
        </div>

        {/* Refeições */}
        <section className={styles.refeicoesSection}>
          <h2 className={styles.sectionTitle}>Refeições do dia</h2>
          <div className={styles.refeicoesList}>
            {plano.refeicoes.map((refeicao) => {
              const aberta = refeicaoAberta === refeicao.id
              return (
                <div key={refeicao.id} className={styles.refeicaoCard}>
                  <button
                    className={styles.refeicaoHeader}
                    onClick={() => setRefeicaoAberta(aberta ? null : refeicao.id)}
                    aria-expanded={aberta}
                  >
                    <div className={styles.refeicaoHeaderLeft}>
                      <span className={styles.refeicaoIcone}>{refeicao.icone}</span>
                      <div>
                        <h3 className={styles.refeicaoNome}>{refeicao.nome}</h3>
                        <p className={styles.refeicaoHorario}>{refeicao.horario}</p>
                      </div>
                    </div>
                    <span className={`${styles.chevron} ${aberta ? styles.chevronAberto : ''}`}>
                      ▾
                    </span>
                  </button>

                  {aberta && (
                    <div className={styles.refeicaoBody}>
                      {refeicao.alimentos.map((alimento, idx) => (
                        <div key={idx} className={styles.alimentoItem}>
                          <div className={styles.alimentoHeader}>
                            <span className={styles.alimentoNome}>{alimento.nome}</span>
                            <span className={styles.alimentoQtd}>{alimento.quantidade}</span>
                          </div>
                          {alimento.substituicoes.length > 0 && (
                            <div className={styles.substituicoes}>
                              <span className={styles.substituicoesLabel}>Substituições:</span>
                              <div className={styles.substituicoesList}>
                                {alimento.substituicoes.map((s) => (
                                  <span key={s} className={styles.substituicaoTag}>{s}</span>
                                ))}
                              </div>
                            </div>
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