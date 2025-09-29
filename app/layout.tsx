import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import StructuredData from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Cars Marketing - Professional Automotive Digital Marketing Services',
  description: 'Accelerate your automotive business with proven digital marketing strategies. Professional Cars Marketing services for dealerships, brands, and automotive businesses.',
  keywords: ['automotive marketing', 'car dealership marketing', 'digital marketing', 'social media marketing', 'SEO', 'PPC', 'automotive advertising', 'car sales marketing'],
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
    canonical: '/',
    languages: {
      'en': '/',
      'nl': '/nl',
    },
  },
  openGraph: {
    title: 'Cars Marketing - Professional Automotive Digital Marketing Services',
    description: 'Accelerate your automotive business with proven digital marketing strategies. Professional Cars Marketing services for dealerships, brands, and automotive businesses.',
    url: 'https://cars-marketing.com',
    siteName: 'Cars Marketing',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://cars-marketing.com/CM-Weblogo.png',
        width: 1200,
        height: 630,
        alt: 'Cars Marketing Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cars Marketing - Professional Automotive Digital Marketing Services',
    description: 'Accelerate your automotive business with proven digital marketing strategies. Professional Cars Marketing services for dealerships, brands, and automotive businesses.',
    images: ['https://cars-marketing.com/CM-Weblogo.png'],
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
  icons: {
    icon: '/CM-Favicon.png',
    shortcut: '/CM-Favicon.png',
    apple: '/CM-Favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
