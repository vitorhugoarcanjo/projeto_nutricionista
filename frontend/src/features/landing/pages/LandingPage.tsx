import { Link } from 'react-router-dom'
import { Layout } from '../../../components/layout/Layout'
import { Button } from '../../../components/ui/Button/Button'
import { conteudosMock } from '../../../mocks/conteudos'
import styles from './LandingPage.module.css'

export default function LandingPage() {
  const gratuitos = conteudosMock.filter((c) => c.gratuito)
  const pagos = conteudosMock.filter((c) => !c.gratuito)

  return (
    <Layout>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.badge}>Nutrição personalizada</span>
          <h1 className={styles.heroTitle}>
            Transforme sua alimentação em <span className={styles.heroAccent}>qualidade de vida</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Planos alimentares feitos sob medida pra sua rotina, seu objetivo e seu paladar.
            Acompanhamento próximo, sem dietas malucas.
          </p>
          <div className={styles.heroActions}>
            <Link to="/login">
              <Button size="lg">Começar agora</Button>
            </Link>
            <a href="#conteudos">
              <Button size="lg" variant="secondary">Ver conteúdos</Button>
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className={styles.sobre}>
        <div className="container">
          <div className={styles.sobreCard}>
            <h2 className={styles.sectionTitle}>Sobre a Lauany</h2>
            <p>
              Nutricionista formada com especialização em nutrição clínica e comportamento alimentar.
              Há mais de 8 anos ajudando pessoas a construírem uma relação saudável com a comida,
              sem terrorismo nutricional e sem dietas restritivas.
            </p>
            <p>
              Meu método é baseado em três pilares: <strong>individualidade</strong>,{' '}
              <strong>consistência</strong> e <strong>prazer</strong>. Cada plano é único, porque
              cada pessoa é única.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDOS GRATUITOS */}
      <section id="conteudos" className={styles.conteudos}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Conteúdos gratuitos</h2>
            <p className={styles.sectionSubtitle}>
              Dicas rápidas pra você começar a aplicar hoje mesmo, sem complicação.
            </p>
          </div>
          <div className={styles.grid}>
            {gratuitos.map((c) => (
              <div key={c.id} className={styles.card}>
                <div className={styles.cardIcon}>{c.icone}</div>
                <h3 className={styles.cardTitle}>{c.titulo}</h3>
                <p className={styles.cardDescription}>{c.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANO PREMIUM */}
      <section className={styles.premium}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Plano Premium</h2>
            <p className={styles.sectionSubtitle}>
              Pra quem quer ir além: conteúdo completo, plano personalizado e acompanhamento.
            </p>
          </div>
          <div className={styles.grid}>
            {pagos.map((c) => (
              <div key={c.id} className={`${styles.card} ${styles.cardPremium}`}>
                <div className={styles.cardLock}>🔒</div>
                <div className={styles.cardIcon}>{c.icone}</div>
                <h3 className={styles.cardTitle}>{c.titulo}</h3>
                <p className={styles.cardDescription}>{c.descricao}</p>
                <Link to="/login">
                  <Button variant="primary" size="sm" fullWidth>
                    Saber mais
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Pronto pra começar?</h2>
            <p className={styles.ctaSubtitle}>
              Entre na sua área e acesse seus conteúdos, plano alimentar e acompanhamento.
            </p>
            <Link to="/login">
              <Button size="lg" variant="primary">Entrar na minha área</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}