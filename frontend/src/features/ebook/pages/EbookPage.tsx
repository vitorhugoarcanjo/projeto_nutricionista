import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../../components/layout/Layout'
import { Button } from '../../../components/ui/Button/Button'
import { ebooksMock } from '../../../mocks/ebook'
import styles from './EbookPage.module.css'

export default function EbookPage() {
  const [premiumAtivo, setPremiumAtivo] = useState(false)
  const [ebookAtivoId, setEbookAtivoId] = useState<string>(ebooksMock[0].id)
  const [capituloAberto, setCapituloAberto] = useState<string | null>(null)

  useEffect(() => {
    setPremiumAtivo(localStorage.getItem('premium_ativo') === 'true')
  }, [])

  const ebook = ebooksMock.find((e) => e.id === ebookAtivoId) ?? ebooksMock[0]

  function handleAssinar() {
    localStorage.setItem('premium_ativo', 'true')
    setPremiumAtivo(true)
    alert('Plano Premium ativado! (simulação)')
  }

  function trocarEbook(id: string) {
    setEbookAtivoId(id)
    setCapituloAberto(null)
  }

  return (
    <Layout>
      <div className={`container ${styles.page}`}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link to="/app">Dashboard</Link>
          <span>/</span>
          <span>Ebooks</span>
        </nav>

        {/* Seletor de ebook */}
        <div className={styles.selector}>
          {ebooksMock.map((e) => (
            <button
              key={e.id}
              className={`${styles.selectorBtn} ${ebookAtivoId === e.id ? styles.selectorBtnActive : ''}`}
              onClick={() => trocarEbook(e.id)}
            >
              <span className={styles.selectorIcon}>{e.capaEmoji}</span>
              <div className={styles.selectorText}>
                <span className={styles.selectorCategoria}>
                  {e.categoria === 'alimentacao' ? 'Alimentação' : 'Treino'}
                </span>
                <span className={styles.selectorTitulo}>{e.titulo}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Capa */}
        <header className={styles.capa}>
          <div className={styles.capaInfo}>
            <span className={`${styles.badge} ${premiumAtivo ? styles.badgeAtivo : styles.badgeBloqueado}`}>
              {premiumAtivo ? '✓ Premium ativo' : '🔒 Conteúdo Premium'}
            </span>
            <h1 className={styles.title}>{ebook.titulo}</h1>
            <p className={styles.subtitle}>{ebook.subtitulo}</p>

            {!premiumAtivo && (
              <div className={styles.ctaBox}>
                <p className={styles.ctaText}>
                  Este conteúdo faz parte do Plano Premium. Assine pra liberar o ebook completo.
                </p>
                <Button onClick={handleAssinar} size="lg">
                  Assinar Premium
                </Button>
              </div>
            )}
          </div>
        </header>

        {/* Capítulos */}
        <section className={styles.capitulosSection}>
          <h2 className={styles.sectionTitle}>
            Capítulos <span className={styles.capitulosCount}>({ebook.capitulos.length})</span>
          </h2>
          <div className={styles.capitulosList}>
            {ebook.capitulos.map((cap, idx) => {
              const bloqueado = !premiumAtivo
              const aberto = capituloAberto === cap.id

              return (
                <div
                  key={cap.id}
                  className={`${styles.capituloCard} ${bloqueado ? styles.capituloBloqueado : ''}`}
                >
                  <button
                    className={styles.capituloHeader}
                    onClick={() => {
                      if (bloqueado) {
                        handleAssinar()
                        return
                      }
                      setCapituloAberto(aberto ? null : cap.id)
                    }}
                    aria-expanded={aberto}
                  >
                    <div className={styles.capituloHeaderLeft}>
                      <span className={styles.capituloNumero}>{idx + 1}</span>
                      <div>
                        <h3 className={styles.capituloTitulo}>{cap.titulo}</h3>
                        <p className={styles.capituloResumo}>{cap.resumo}</p>
                      </div>
                    </div>
                    {bloqueado ? (
                      <span className={styles.lock}>🔒</span>
                    ) : (
                      <span className={`${styles.chevron} ${aberto ? styles.chevronAberto : ''}`}>
                        ▾
                      </span>
                    )}
                  </button>

                  {aberto && !bloqueado && (
                    <div className={styles.capituloBody}>
                      <p className={styles.conteudoSimulado}>
                        <strong>Capítulo {idx + 1}: {cap.titulo}</strong>
                      </p>
                      <p className={styles.conteudoSimulado}>{cap.resumo}</p>
                      <p className={styles.conteudoSimulado}>
                        Este é o conteúdo completo do capítulo (simulado para preview). Na versão final,
                        aqui viria o texto, imagens, receitas, listas e tudo que faz parte deste capítulo
                        do ebook.
                      </p>
                      <div className={styles.conteudoPlaceholder}>
                        📖 Conteúdo completo do capítulo disponível na versão final
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Ações */}
        <div className={styles.actions}>
          <Link to="/app">
            <Button variant="ghost">← Voltar para o dashboard</Button>
          </Link>
          {premiumAtivo && (
            <Button
              variant="secondary"
              onClick={() => {
                localStorage.removeItem('premium_ativo')
                setPremiumAtivo(false)
                alert('Premium desativado (simulação)')
              }}
            >
              Desativar Premium (teste)
            </Button>
          )}
        </div>
      </div>
    </Layout>
  )
}