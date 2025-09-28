import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '../globals.css'
import StructuredData from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Cars Marketing - Professionele Automotive Digitale Marketing Diensten',
  description: 'Versnel uw automotive bedrijf met bewezen digitale marketing strategieën. Professionele Auto Marketing diensten voor dealers, merken en automotive bedrijven.',
  keywords: ['automotive marketing', 'auto dealer marketing', 'digitale marketing', 'sociale media marketing', 'SEO', 'PPC', 'automotive advertenties', 'auto verkoop marketing', 'Nederland', 'Dutch'],
  authors: [{ name: 'Cars Marketing' }],
  creator: 'Cars Marketing',
  publisher: 'Cars Marketing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cars-marketing.com'),
  alternates: {
    canonical: '/nl',
    languages: {
      'en': '/',
      'nl': '/nl',
    },
  },
  openGraph: {
    title: 'Cars Marketing - Professionele Automotive Digitale Marketing Diensten',
    description: 'Versnel uw automotive bedrijf met bewezen digitale marketing strategieën. Professionele Auto Marketing diensten voor dealers, merken en automotive bedrijven.',
    url: 'https://cars-marketing.com/nl',
    siteName: 'Cars Marketing',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cars Marketing - Professionele Automotive Digitale Marketing Diensten',
    description: 'Versnel uw automotive bedrijf met bewezen digitale marketing strategieën. Professionele Auto Marketing diensten voor dealers, merken en automotive bedrijven.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function DutchLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <head>
        <StructuredData />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
