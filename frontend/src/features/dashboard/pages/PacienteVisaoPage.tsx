import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../../components/layout/Layout'
import { Button } from '../../../components/ui/Button/Button'
import { pacientesMock } from '../../../mocks/pacientes'
import { conteudosMock } from '../../../mocks/conteudos'
import { planosMock } from '../../../mocks/planoAlimentar'
import { treinosMock } from '../../../mocks/treinos'
import { ebooksMock } from '../../../mocks/ebook'
import styles from './PacienteVisaoPage.module.css'

type Tab = 'hoje' | 'plano' | 'treino' | 'conteudos' | 'ebook'

export default function PacienteVisaoPage() {
  const [premiumAtivo, setPremiumAtivo] = useState(false)
  const [tabAtiva, setTabAtiva] = useState<Tab>('hoje')

  const paciente = pacientesMock[0]
  const plano = planosMock[paciente.id]
  const treino = treinosMock[paciente.id]
  const gratuitos = conteudosMock.filter((c) => c.gratuito)

  useEffect(() => {
    setPremiumAtivo(localStorage.getItem('premium_ativo') === 'true')
  }, [])

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'hoje', label: 'Hoje', icon: '☀️' },
    { id: 'plano', label: 'Plano', icon: '🥗' },
    { id: 'treino', label: 'Treino', icon: '🏋️' },
    { id: 'conteudos', label: 'Conteúdos', icon: '📚' },
    { id: 'ebook', label: 'Ebook', icon: '📘' },
  ]

  return (
    <Layout>
      <div className={`container ${styles.page}`}>
        <div className={styles.previewBanner}>
          <div>
            <strong>👁️ Você está vendo como paciente</strong>
            <p>Esta é a visão que a Maria veria ao logar na área dela.</p>
          </div>
          <Link to="/app">
            <Button variant="secondary" size="sm">
              ← Voltar para visão master
            </Button>
          </Link>
        </div>

        <header className={styles.header}>
          <h1 className={styles.title}>Olá, {paciente.nome.split(' ')[0]} 👋</h1>
          <p className={styles.subtitle}>Aqui está o seu plano de hoje e seus conteúdos.</p>
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

        {/* ===== TAB HOJE ===== */}
        {tabAtiva === 'hoje' && (
          <>
            <section className={styles.stats}>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>Objetivo</span>
                <span className={styles.statValue}>{paciente.objetivo}</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>Próxima consulta</span>
                <span className={styles.statValue}>{formatarData(paciente.proximaConsulta)}</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>Plano</span>
                <span className={`${styles.statValue} ${premiumAtivo ? styles.statPremium : ''}`}>
                  {premiumAtivo ? 'Premium' : 'Gratuito'}
                </span>
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Hoje — Alimentação</h2>
                <button className={styles.linkBtn} onClick={() => setTabAtiva('plano')}>
                  Ver plano completo →
                </button>
              </div>
              <div className={styles.refeicoesGrid}>
                {plano.refeicoes.slice(0, 2).map((r) => (
                  <div key={r.id} className={styles.refeicaoCard}>
                    <div className={styles.refeicaoHeader}>
                      <span className={styles.refeicaoIcon}>{r.icone}</span>
                      <div>
                        <h3 className={styles.refeicaoNome}>{r.nome}</h3>
                        <p className={styles.refeicaoHorario}>{r.horario}</p>
                      </div>
                    </div>
                    <ul className={styles.alimentosList}>
                      {r.alimentos.slice(0, 3).map((a, idx) => (
                        <li key={idx} className={styles.alimentoItem}>
                          <span>{a.nome}</span>
                          <span className={styles.alimentoQtd}>{a.quantidade}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Hoje — Treino</h2>
                <button className={styles.linkBtn} onClick={() => setTabAtiva('treino')}>
                  Ver treino completo →
                </button>
              </div>
              <div className={styles.refeicoesGrid}>
                {treino.blocos.slice(0, 2).map((bloco) => (
                  <div key={bloco.id} className={styles.refeicaoCard}>
                    <div className={styles.refeicaoHeader}>
                      <span className={styles.refeicaoIcon}>{bloco.icone}</span>
                      <div>
                        <h3 className={styles.refeicaoNome}>{bloco.nome}</h3>
                        <p className={styles.refeicaoHorario}>
                          {bloco.exercicios.length} exercício{bloco.exercicios.length > 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    <ul className={styles.alimentosList}>
                      {bloco.exercicios.slice(0, 3).map((ex, idx) => (
                        <li key={idx} className={styles.alimentoItem}>
                          <span>{ex.nome}</span>
                          <span className={styles.alimentoQtd}>{ex.series}x{ex.repeticoes}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ===== TAB PLANO ===== */}
        {tabAtiva === 'plano' && (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Seu plano alimentar</h2>
              <Link to={`/app/plano-alimentar/${paciente.id}`}>
                <Button variant="secondary" size="sm">Ver detalhes completos</Button>
              </Link>
            </div>
            <div className={styles.refeicoesGrid}>
              {plano.refeicoes.map((r) => (
                <div key={r.id} className={styles.refeicaoCard}>
                  <div className={styles.refeicaoHeader}>
                    <span className={styles.refeicaoIcon}>{r.icone}</span>
                    <div>
                      <h3 className={styles.refeicaoNome}>{r.nome}</h3>
                      <p className={styles.refeicaoHorario}>{r.horario}</p>
                    </div>
                  </div>
                  <ul className={styles.alimentosList}>
                    {r.alimentos.map((a, idx) => (
                      <li key={idx} className={styles.alimentoItem}>
                        <span>{a.nome}</span>
                        <span className={styles.alimentoQtd}>{a.quantidade}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== TAB TREINO ===== */}
        {tabAtiva === 'treino' && (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Seu treino</h2>
              <Link to={`/app/treino/${paciente.id}`}>
                <Button variant="secondary" size="sm">Ver detalhes completos</Button>
              </Link>
            </div>
            <div className={styles.refeicoesGrid}>
              {treino.blocos.map((bloco) => (
                <div key={bloco.id} className={styles.refeicaoCard}>
                  <div className={styles.refeicaoHeader}>
                    <span className={styles.refeicaoIcon}>{bloco.icone}</span>
                    <div>
                      <h3 className={styles.refeicaoNome}>{bloco.nome}</h3>
                      <p className={styles.refeicaoHorario}>
                        {bloco.exercicios.length} exercício{bloco.exercicios.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  <ul className={styles.alimentosList}>
                    {bloco.exercicios.map((ex, idx) => (
                      <li key={idx} className={styles.alimentoItem}>
                        <span>{ex.nome}</span>
                        <span className={styles.alimentoQtd}>{ex.series}x{ex.repeticoes}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== TAB CONTEÚDOS ===== */}
        {tabAtiva === 'conteudos' && (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Conteúdos pra você</h2>
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
                      {premiumAtivo ? 'Acessar' : '🔒 Saber mais'}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  )
}

function formatarData(iso: string): string {
  const [ano, mes, dia] = iso.split('-')
  return `${dia}/${mes}/${ano}`
}