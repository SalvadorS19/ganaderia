import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Providers } from './providers'

const poppins = Poppins(
  { weight: ['300','400', '500', '700', '800'],
  subsets: ['latin']
});

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
      <body className={poppins.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
