import type { ReactNode } from 'react'

import { Inter, Source_Serif_4, IBM_Plex_Mono } from 'next/font/google'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'

import { cn } from '@/lib/utils'

import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const sourceSerif4 = Source_Serif_4({
  variable: '--font-source-serif-4',
  subsets: ['latin']
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: {
    template: '',
    default: 'aMer - Portofolio Website'
  },
  description: 'Portofolio Website Muhammad Amer',
  robots: 'index,follow',
  keywords: ['Muhammad Amer', 'amer45', 'aMrz', 'Amer'],
  icons: {
    icon: [
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        url: '/favicon/android-chrome-192x192.png',
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        rel: 'icon',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`),
  openGraph: {
    title: {
      template: '',
      default: 'aMer: - Portofolio Website'
    },
    description: 'Portofolio Website Muhammad Amer',
    type: 'website',
    siteName: 'aMer - Portofolio Website',
    url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`,
    images: [
      {
        url: '',
        type: '',
        width: 1200,
        height: 630,
        alt: ''
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '',
      default: 'aMer - Portofolio Website'
    },
    description: 'Portofolio Website Muhammad Amer'
  }
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang='en'
      className={cn(
        inter.variable,
        sourceSerif4.variable,
        ibmPlexMono.variable,
        'flex min-h-full w-full scroll-smooth antialiased'
      )}
      suppressHydrationWarning
    >
      <head>
        <script async crossOrigin='anonymous' src='https://tweakcn.com/live-preview.min.js' />
      </head>
      <body className='flex min-h-full w-full flex-auto flex-col'>
        <ThemeProvider attribute='class' enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
