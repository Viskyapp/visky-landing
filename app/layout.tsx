import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Visky — Seu copiloto de trade',
  description: 'O Visky foi criado pra te impedir de operar no emocional e proteger seu capital quando você perde o controle.',
  openGraph: {
    title: 'Visky — Seu copiloto de trade',
    description: 'Gestão de risco, controle emocional e disciplina no mesmo lugar.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
