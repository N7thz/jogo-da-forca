import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'
import { BackgroundProvider } from '@/context/backgroundContext'
import { ErrosProvider } from '@/context/errosContext'
import { PalavraProvider } from '@/context/palavraContext'

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
      <body className='min-h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-purple-200 via-purple-400 to-purple-800'>
        <BackgroundProvider>
          <ErrosProvider>
            <PalavraProvider>
              {children}
            </PalavraProvider>
          </ErrosProvider>
        </BackgroundProvider>
      </body>
    </html>
  )
}
