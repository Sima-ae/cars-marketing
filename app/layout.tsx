import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

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
  },
  openGraph: {
    title: 'Cars Marketing - Professional Automotive Digital Marketing Services',
    description: 'Accelerate your automotive business with proven digital marketing strategies. Professional Cars Marketing services for dealerships, brands, and automotive businesses.',
    url: 'https://cars-marketing.com',
    siteName: 'Cars Marketing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cars Marketing - Professional Automotive Digital Marketing Services',
    description: 'Accelerate your automotive business with proven digital marketing strategies. Professional Cars Marketing services for dealerships, brands, and automotive businesses.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
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
