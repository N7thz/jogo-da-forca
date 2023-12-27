import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'

const oswald = Oswald({

  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {

  title: 'Forca'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className={oswald.variable}
    >
      <body>{children}</body>
    </html>
  )
}
