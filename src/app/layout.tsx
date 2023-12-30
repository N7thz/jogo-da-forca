import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'
import { BackgroundProvider } from '@/context/backgroundContext'

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
          {children}
        </BackgroundProvider>
      </body>
    </html>
  )
}
