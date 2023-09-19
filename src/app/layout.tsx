import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Providers } from './providers'
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';

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
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
      <body className={poppins.className}>
        <Nav></Nav>
        <Providers>
          {children}
        </Providers>
        <Footer></Footer>
      </body>
    </html>
  )
}
