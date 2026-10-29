import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Layout } from '../../../components/layout/Layout'
import { Button } from '../../../components/ui/Button/Button'
import styles from './CheckoutPage.module.css'

export default function CheckoutPage() {
  const navigate = useNavigate()
  const [numero, setNumero] = useState('')
  const [nome, setNome] = useState('')
  const [validade, setValidade] = useState('')
  const [cvv, setCvv] = useState('')
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  function formatarNumero(valor: string): string {
    const limpo = valor.replace(/\D/g, '').slice(0, 16)
    return limpo.replace(/(\d{4})(?=\d)/g, '$1 ')
  }

  function formatarValidade(valor: string): string {
    const limpo = valor.replace(/\D/g, '').slice(0, 4)
    if (limpo.length <= 2) return limpo
    return `${limpo.slice(0, 2)}/${limpo.slice(2)}`
  }

  function validar(): string | null {
    if (numero.replace(/\s/g, '').length < 16) return 'Número do cartão inválido.'
    if (!nome.trim()) return 'Informe o nome impresso no cartão.'
    if (validade.length < 5) return 'Validade inválida (MM/AA).'
    if (cvv.length < 3) return 'CVV inválido.'
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
    await new Promise((resolve) => setTimeout(resolve, 1500))

    localStorage.setItem('premium_ativo', 'true')
    setLoading(false)
    navigate('/app')
  }

  return (
    <Layout>
      <div className={`container ${styles.page}`}>
        <div className={styles.breadcrumb}>
          <Link to="/app">Dashboard</Link>
          <span>/</span>
          <span>Checkout</span>
        </div>

        <div className={styles.grid}>
          {/* Resumo do pedido */}
          <aside className={styles.resumo}>
            <h2 className={styles.resumoTitulo}>Resumo do pedido</h2>

            <div className={styles.resumoItem}>
              <div>
                <strong>Plano Premium</strong>
                <p className={styles.resumoDesc}>Acesso completo a todos os conteúdos</p>
              </div>
            </div>

            <ul className={styles.resumoBeneficios}>
              <li>✓ Ebook completo</li>
              <li>✓ Planos alimentares personalizados</li>
              <li>✓ Planos de treino sob medida</li>
              <li>✓ Acompanhamento mensal</li>
            </ul>

            <div className={styles.resumoTotal}>
              <span>Total</span>
              <span className={styles.resumoValor}>R$ 49,90/mês</span>
            </div>

            <div className={styles.seguranca}>
              🔒 Pagamento seguro · Cancele quando quiser
            </div>
          </aside>

          {/* Formulário */}
          <main className={styles.formArea}>
            <div className={styles.previewBanner}>
              <strong>Preview:</strong> nenhum pagamento real é processado. Use qualquer cartão fake.
            </div>

            <h1 className={styles.formTitulo}>Dados do cartão</h1>

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.field}>
                <label htmlFor="numero" className={styles.label}>Número do cartão</label>
                <input
                  id="numero"
                  type="text"
                  inputMode="numeric"
                  className={styles.input}
                  placeholder="0000 0000 0000 0000"
                  value={numero}
                  onChange={(e) => setNumero(formatarNumero(e.target.value))}
                  disabled={loading}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="nome" className={styles.label}>Nome impresso no cartão</label>
                <input
                  id="nome"
                  type="text"
                  className={styles.input}
                  placeholder="Como está no cartão"
                  value={nome}
                  onChange={(e) => setNome(e.target.value.toUpperCase())}
                  disabled={loading}
                />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="validade" className={styles.label}>Validade</label>
                  <input
                    id="validade"
                    type="text"
                    inputMode="numeric"
                    className={styles.input}
                    placeholder="MM/AA"
                    value={validade}
                    onChange={(e) => setValidade(formatarValidade(e.target.value))}
                    disabled={loading}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="cvv" className={styles.label}>CVV</label>
                  <input
                    id="cvv"
                    type="text"
                    inputMode="numeric"
                    className={styles.input}
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    disabled={loading}
                  />
                </div>
              </div>

              {erro && <p className={styles.error}>{erro}</p>}

              <Button type="submit" size="lg" fullWidth disabled={loading}>
                {loading ? 'Processando…' : 'Confirmar pagamento — R$ 49,90/mês'}
              </Button>

              <Link to="/app" className={styles.cancelar}>
                ← Cancelar e voltar ao dashboard
              </Link>
            </form>
          </main>
        </div>
      </div>
    </Layout>
  )
}