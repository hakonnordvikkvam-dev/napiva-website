import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});
const _geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'Napiva | AI Automation Agency',
  description: 'High-end AI systems, automations, and websites built to help businesses scale.',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Napiva | AI Automation Agency',
    description: 'High-end AI systems, automations, and websites built to help businesses scale.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Napiva | AI Automation Agency',
    description: 'High-end AI systems, automations, and websites built to help businesses scale.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${_inter.variable} ${_geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
