import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React Learning Hub - Master React & Next.js',
  description: 'Comprehensive React and Next.js learning platform with 15 interactive modules covering everything from fundamentals to advanced concepts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6 ml-64">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
