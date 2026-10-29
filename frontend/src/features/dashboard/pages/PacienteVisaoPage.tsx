import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../../components/layout/Layout'
import { Button } from '../../../components/ui/Button/Button'
import { pacientesMock } from '../../../mocks/pacientes'
import { conteudosMock } from '../../../mocks/conteudos'
import { planosMock } from '../../../mocks/planoAlimentar'
import styles from './PacienteVisaoPage.module.css'

export default function PacienteVisaoPage() {
  const [premiumAtivo, setPremiumAtivo] = useState(false)

  const paciente = pacientesMock[0]
  const plano = planosMock[paciente.id]
  const gratuitos = conteudosMock.filter((c) => c.gratuito)

  useEffect(() => {
    setPremiumAtivo(localStorage.getItem('premium_ativo') === 'true')
  }, [])

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
          <h1 className={styles.title}>
            Olá, {paciente.nome.split(' ')[0]} 👋
          </h1>
          <p className={styles.subtitle}>
            Aqui está o seu plano de hoje e seus conteúdos.
          </p>
        </header>

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
            <h2 className={styles.sectionTitle}>Seu plano alimentar</h2>
            <Link to={`/app/plano-alimentar/${paciente.id}`}>
              <Button variant="secondary" size="sm">Ver plano completo</Button>
            </Link>
          </div>
          <div className={styles.refeicoesGrid}>
            {plano.refeicoes.slice(0, 3).map((r) => (
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

        <section className={styles.section}>
          <div className={styles.ebookCard}>
            <div className={styles.ebookIcon}>📘</div>
            <div className={styles.ebookBody}>
              <h3 className={styles.ebookTitle}>Ebook: Guia de Alimentação Saudável</h3>
              <p className={styles.ebookDesc}>
                {premiumAtivo
                  ? 'Você já tem acesso ao conteúdo completo do ebook.'
                  : 'Conteúdo exclusivo do Plano Premium.'}
              </p>
            </div>
            <Link to="/app/ebook">
              <Button variant={premiumAtivo ? 'primary' : 'secondary'} size="sm">
                {premiumAtivo ? 'Acessar ebook' : '🔒 Saber mais'}
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

function formatarData(iso: string): string {
  const [ano, mes, dia] = iso.split('-')
  return `${dia}/${mes}/${ano}`
}