import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flexible',
  description: 'Showcase and discover remarkeable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
