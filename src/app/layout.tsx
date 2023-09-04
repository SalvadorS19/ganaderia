import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'El Ganado Feliz',
  description: 'Un bienestar que se saborea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='light'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
