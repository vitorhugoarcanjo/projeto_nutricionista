import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../../components/layout/Layout'
import { Button } from '../../../components/ui/Button/Button'
import { pacientesMock } from '../../../mocks/pacientes'
import { conteudosMock } from '../../../mocks/conteudos'
import { planosMock } from '../../../mocks/planoAlimentar'
import { treinosMock } from '../../../mocks/treinos'
import { ebooksMock } from '../../../mocks/ebook'
import styles from './DashboardPage.module.css'

type Tab = 'pacientes' | 'alimentacao' | 'treino' | 'ebook' | 'premium'

export default function DashboardPage() {
  const [nomeUsuario, setNomeUsuario] = useState('')
  const [premiumAtivo, setPremiumAtivo] = useState(false)
  const [tabAtiva, setTabAtiva] = useState<Tab>('pacientes')
  const [pacienteAlimentacao, setPacienteAlimentacao] = useState<string>(pacientesMock[0].id)
  const [pacienteTreino, setPacienteTreino] = useState<string>(pacientesMock[0].id)

  useEffect(() => {
    const email = localStorage.getItem('auth_user') || ''
    setNomeUsuario(email.split('@')[0])
    setPremiumAtivo(localStorage.getItem('premium_ativo') === 'true')
  }, [])

  const gratuitos = conteudosMock.filter((c) => c.gratuito)
  const pagos = conteudosMock.filter((c) => !c.gratuito)

  const planoSelecionado = planosMock[pacienteAlimentacao]
  const pacienteDoPlano = pacientesMock.find((p) => p.id === pacienteAlimentacao)

  const treinoSelecionado = treinosMock[pacienteTreino]
  const pacienteDoTreino = pacientesMock.find((p) => p.id === pacienteTreino)

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'pacientes', label: 'Pacientes', icon: '👥' },
    { id: 'alimentacao', label: 'Alimentação', icon: '🥗' },
    { id: 'treino', label: 'Treino', icon: '🏋️' },
    { id: 'ebook', label: 'Ebook', icon: '📘' },
    { id: 'premium', label: 'Premium', icon: '⭐' },
  ]

  return (
    <Layout>
      <div className={`container ${styles.page}`}>
        <header className={styles.header}>
          <div>
            <div className={styles.masterBadge}>
              <span className={styles.masterDot} />
              Painel Master
            </div>
            <h1 className={styles.title}>Olá, {nomeUsuario || 'visitante'}</h1>
            <p className={styles.subtitle}>Gerencie seus pacientes, planos e conteúdos.</p>
          </div>
          <div className={styles.headerActions}>
            <Link to="/app/paciente-visao">
              <Button variant="ghost" size="sm">👁️ Ver como paciente</Button>
            </Link>
          </div>
        </header>

        <nav className={styles.tabs} role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tabAtiva === t.id}
              className={`${styles.tab} ${tabAtiva === t.id ? styles.tabActive : ''}`}
              onClick={() => setTabAtiva(t.id)}
            >
              <span className={styles.tabIcon}>{t.icon}</span>
              <span className={styles.tabLabel}>{t.label}</span>
            </button>
          ))}
        </nav>

        {/* ===== TAB PACIENTES ===== */}
        {tabAtiva === 'pacientes' && (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Meus pacientes</h2>
              <span className={styles.sectionCount}>{pacientesMock.length} ativos</span>
            </div>
            <div className={styles.pacientesGrid}>
              {pacientesMock.map((p) => (
                <div key={p.id} className={styles.pacienteCard}>
                  <div className={styles.pacienteHeader}>
                    <div className={styles.avatar} style={{ background: getCorAvatar(p.nome) }}>
                      {p.nome.charAt(0)}
                    </div>
                    <div>
                      <h3 className={styles.pacienteNome}>{p.nome}</h3>
                      <p className={styles.pacienteInfo}>{p.idade} anos • {p.objetivo}</p>
                    </div>
                  </div>
                  <div className={styles.pacienteActions}>
                    <Link to={`/app/paciente/${p.id}`} className={styles.actionBtn}>
                      <span>👤</span>
                      <span className={styles.actionLabel}>Ficha</span>
                    </Link>
                    <Link to={`/app/plano-alimentar/${p.id}`} className={styles.actionBtn}>
                      <span>🥗</span>
                      <span className={styles.actionLabel}>Dieta</span>
                    </Link>
                    <Link to={`/app/treino/${p.id}`} className={styles.actionBtn}>
                      <span>🏋️</span>
                      <span className={styles.actionLabel}>Treino</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== TAB ALIMENTAÇÃO ===== */}
        {tabAtiva === 'alimentacao' && (
          <>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Plano alimentar por paciente</h2>
              </div>

              <div className={styles.pillsRow}>
                {pacientesMock.map((p) => (
                  <button
                    key={p.id}
                    className={`${styles.pill} ${pacienteAlimentacao === p.id ? styles.pillActive : ''}`}
                    onClick={() => setPacienteAlimentacao(p.id)}
                  >
                    {p.nome.split(' ')[0]}
                  </button>
                ))}
              </div>

              {planoSelecionado && pacienteDoPlano && (
                <div className={styles.previewCard}>
                  <div className={styles.previewHeader}>
                    <div>
                      <h3 className={styles.previewTitle}>{planoSelecionado.titulo}</h3>
                      <p className={styles.previewSubtitle}>
                        {pacienteDoPlano.nome} • {pacienteDoPlano.objetivo}
                      </p>
                    </div>
                    <Link to={`/app/plano-alimentar/${pacienteDoPlano.id}`}>
                      <Button variant="secondary" size="sm">Ver completo →</Button>
                    </Link>
                  </div>
                  <div className={styles.previewRefeicoes}>
                    {planoSelecionado.refeicoes.map((r) => (
                      <div key={r.id} className={styles.previewRefeicaoItem}>
                        <span className={styles.previewRefeicaoIcon}>{r.icone}</span>
                        <div>
                          <span className={styles.previewRefeicaoNome}>{r.nome}</span>
                          <span className={styles.previewRefeicaoInfo}>
                            {r.horario} • {r.alimentos.length} alimento{r.alimentos.length > 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
                            <Button variant="primary" size="sm">Acessar</Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </>
        )}

        {/* ===== TAB TREINO ===== */}
        {tabAtiva === 'treino' && (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Treino por paciente</h2>
            </div>

            <div className={styles.pillsRow}>
              {pacientesMock.map((p) => (
                <button
                  key={p.id}
                  className={`${styles.pill} ${pacienteTreino === p.id ? styles.pillActive : ''}`}
                  onClick={() => setPacienteTreino(p.id)}
                >
                  {p.nome.split(' ')[0]}
                </button>
              ))}
            </div>

            {treinoSelecionado && pacienteDoTreino && (
              <div className={styles.previewCard}>
                <div className={styles.previewHeader}>
                  <div>
                    <h3 className={styles.previewTitle}>{treinoSelecionado.titulo}</h3>
                    <p className={styles.previewSubtitle}>
                      {pacienteDoTreino.nome} • {treinoSelecionado.frequenciaSemanal} • {treinoSelecionado.duracao}
                    </p>
                  </div>
                  <Link to={`/app/treino/${pacienteDoTreino.id}`}>
                    <Button variant="secondary" size="sm">Ver completo →</Button>
                  </Link>
                </div>
                <div className={styles.previewRefeicoes}>
                  {treinoSelecionado.blocos.map((bloco) => (
                    <div key={bloco.id} className={styles.previewRefeicaoItem}>
                      <span className={styles.previewRefeicaoIcon}>{bloco.icone}</span>
                      <div>
                        <span className={styles.previewRefeicaoNome}>{bloco.nome}</span>
                        <span className={styles.previewRefeicaoInfo}>
                          {bloco.exercicios.length} exercício{bloco.exercicios.length > 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ===== TAB EBOOK ===== */}
        {tabAtiva === 'ebook' && (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Ebooks</h2>
            </div>
            <div className={styles.ebooksGrid}>
              {ebooksMock.map((e) => (
                <div key={e.id} className={styles.ebookCard}>
                  <div className={styles.ebookIcon}>{e.capaEmoji}</div>
                  <div className={styles.ebookBody}>
                    <span className={styles.ebookCategoria}>
                      {e.categoria === 'alimentacao' ? 'Alimentação' : 'Treino'}
                    </span>
                    <h3 className={styles.ebookTitle}>{e.titulo}</h3>
                    <p className={styles.ebookDesc}>
                      {e.subtitulo}
                      {!premiumAtivo && ' Conteúdo exclusivo do Plano Premium.'}
                    </p>
                  </div>
                  <Link to="/app/ebook">
                    <Button variant={premiumAtivo ? 'primary' : 'secondary'} size="sm">
                      {premiumAtivo ? 'Acessar' : '🔒 Ver detalhes'}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== TAB PREMIUM ===== */}
        {tabAtiva === 'premium' && (
          <section className={styles.section}>
            <div className={styles.premiumBox}>
              <div className={styles.premiumHeader}>
                <span className={styles.premiumIcon}>⭐</span>
                <div>
                  <h2 className={styles.premiumTitle}>
                    {premiumAtivo ? 'Plano Premium ativo' : 'Plano Premium'}
                  </h2>
                  <p className={styles.premiumSubtitle}>
                    {premiumAtivo
                      ? 'Você tem acesso a todos os conteúdos e funcionalidades.'
                      : 'Desbloqueie todo o conteúdo, planos e acompanhamento.'}
                  </p>
                </div>
              </div>

              <ul className={styles.premiumBeneficios}>
                <li>✓ Acesso completo aos ebooks (alimentação + treino)</li>
                <li>✓ Planos alimentares personalizados</li>
                <li>✓ Planos de treino sob medida</li>
                <li>✓ Acompanhamento mensal</li>
                <li>✓ Conteúdos exclusivos</li>
              </ul>

              {premiumAtivo ? (
                <div className={styles.premiumStatus}>
                  ✓ Ativo — você já tem todos os benefícios.
                </div>
              ) : (
                <Link to="/app/checkout">
                  <Button size="lg" fullWidth>Assinar Premium</Button>
                </Link>
              )}
            </div>
          </section>
        )}
      </div>
    </Layout>
  )
}

function getCorAvatar(nome: string): string {
  const paleta = [
    'linear-gradient(135deg, #c9c2e0 0%, #8b7fb8 100%)',
    'linear-gradient(135deg, #fbe4d4 0%, #e8a87c 100%)',
    'linear-gradient(135deg, #e8d5e0 0%, #b88fa8 100%)',
    'linear-gradient(135deg, #d4e0e8 0%, #8fa8b8 100%)',
    'linear-gradient(135deg, #e8dcc4 0%, #b8a478 100%)',
  ]
  let hash = 0
  for (let i = 0; i < nome.length; i++) {
    hash = nome.charCodeAt(i) + ((hash << 5) - hash)
  }
  return paleta[Math.abs(hash) % paleta.length]
}