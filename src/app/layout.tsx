import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'
import { BackgroundProvider } from '@/context/backgroundContext'
import { ErrosProvider } from '@/context/errosContext'

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
      <body className='min-h-screen'>
        <BackgroundProvider>
          <ErrosProvider>
            {children}
          </ErrosProvider>
        </BackgroundProvider>
      </body>
    </html>
  )
}
