import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MobileMenu from '@/components/MobileMenu'
import DesktopMenu from '@/components/DesktopMenu'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'Open Consulting | Yevhenii Grui',
  description: 'Profesjonalne usługi rekrutacyjne i consultingowe w Katowicach. Specjalizujemy się w wyszukiwaniu miejsc pracy i pozyskiwaniu pracowników.',
  keywords: 'rekrutacja, consulting, Katowice, miejsca pracy, zarządzanie nieruchomościami',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-40 py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-blue-600">Open Consulting</a>
            <DesktopMenu />
            <MobileMenu />
          </div>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 