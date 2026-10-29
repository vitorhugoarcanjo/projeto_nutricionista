import { Link, useParams } from 'react-router-dom'
import { Layout } from '../../../components/layout/Layout'
import { Button } from '../../../components/ui/Button/Button'
import { pacientesMock } from '../../../mocks/pacientes'
import styles from './PacientePage.module.css'

export default function PacientePage() {
  const { id } = useParams<{ id: string }>()
  const paciente = pacientesMock.find((p) => p.id === id)

  if (!paciente) {
    return (
      <Layout>
        <div className={`container ${styles.notFound}`}>
          <h1>Paciente não encontrado</h1>
          <p>O paciente com id "{id}" não existe na base.</p>
          <Link to="/app">
            <Button>Voltar para o dashboard</Button>
          </Link>
        </div>
      </Layout>
    )
  }

  const imc = (paciente.pesoAtual / (paciente.altura * paciente.altura)).toFixed(1)
  const imcNum = parseFloat(imc)
  const imcInfo = getImcInfo(imcNum)

  return (
    <Layout>
      <div className={`container ${styles.page}`}>
        <nav className={styles.breadcrumb}>
          <Link to="/app">Dashboard</Link>
          <span>/</span>
          <span>{paciente.nome}</span>
        </nav>

        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.avatar}>{paciente.nome.charAt(0)}</div>
            <div>
              <h1 className={styles.title}>{paciente.nome}</h1>
              <p className={styles.subtitle}>
                {paciente.idade} anos • {paciente.objetivo}
              </p>
            </div>
          </div>
          <div className={styles.headerActions}>
            <Link to={`/app/plano-alimentar/${paciente.id}`}>
              <Button>Ver plano alimentar</Button>
            </Link>
          </div>
        </header>

        <div className={styles.grid}>
          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Dados pessoais</h2>
            <dl className={styles.infoList}>
              <div className={styles.infoItem}>
                <dt>Email</dt>
                <dd>{paciente.email}</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>Telefone</dt>
                <dd>{paciente.telefone}</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>Última consulta</dt>
                <dd>{formatarData(paciente.ultimaConsulta)}</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>Próxima consulta</dt>
                <dd>{formatarData(paciente.proximaConsulta)}</dd>
              </div>
            </dl>
          </section>

          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Medidas</h2>
            <dl className={styles.infoList}>
              <div className={styles.infoItem}>
                <dt>Peso atual</dt>
                <dd>{paciente.pesoAtual} kg</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>Altura</dt>
                <dd>{paciente.altura.toFixed(2)} m</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>IMC</dt>
                <dd>
                  {imc}{' '}
                  <span
                    className={styles.imcBadge}
                    style={{ backgroundColor: imcInfo.bg, color: imcInfo.color }}
                  >
                    {imcInfo.label}
                  </span>
                </dd>
              </div>
            </dl>
          </section>

          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Restrições alimentares</h2>
            {paciente.restricoes.length === 0 ? (
              <p className={styles.empty}>Nenhuma restrição registrada.</p>
            ) : (
              <ul className={styles.tags}>
                {paciente.restricoes.map((r) => (
                  <li key={r} className={styles.tag}>{r}</li>
                ))}
              </ul>
            )}
          </section>

          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Objetivo</h2>
            <p className={styles.objetivo}>{paciente.objetivo}</p>
          </section>
        </div>

        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Histórico de consultas</h2>
          <div className={styles.historicoList}>
            <div className={styles.historicoItem}>
              <div className={styles.historicoData}>{formatarData(paciente.ultimaConsulta)}</div>
              <div>
                <strong>Consulta de acompanhamento</strong>
                <p className={styles.historicoDesc}>
                  Avaliação de medidas, ajuste no plano alimentar e orientações gerais.
                </p>
              </div>
            </div>
            <div className={styles.historicoItem}>
              <div className={styles.historicoData}>15/09/2026</div>
              <div>
                <strong>Primeira consulta</strong>
                <p className={styles.historicoDesc}>
                  Anamnese completa, definição de objetivo e primeiro plano alimentar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.actions}>
          <Link to="/app">
            <Button variant="ghost">← Voltar para o dashboard</Button>
          </Link>
          <Link to={`/app/plano-alimentar/${paciente.id}`}>
            <Button>Ver plano alimentar →</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

function formatarData(iso: string): string {
  const [ano, mes, dia] = iso.split('-')
  return `${dia}/${mes}/${ano}`
}

function getImcInfo(imc: number): { label: string; color: string; bg: string } {
  if (imc < 18.5) return { label: 'Abaixo do peso', color: '#c05621', bg: '#feebc8' }
  if (imc < 25) return { label: 'Peso normal', color: '#276749', bg: '#c6f6d5' }
  if (imc < 30) return { label: 'Sobrepeso', color: '#c05621', bg: '#feebc8' }
  return { label: 'Obesidade', color: '#c53030', bg: '#fed7d7' }
}