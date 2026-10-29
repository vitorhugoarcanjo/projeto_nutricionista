import type { ReactNode } from 'react'
import { Header } from './Header/Header'
import styles from './Layout.module.css'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className="container">
          <p>© {new Date().getFullYear()} Nutri & Fit by Lauany</p>
        </div>
      </footer>
    </div>
  )
}