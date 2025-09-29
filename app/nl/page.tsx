import type { Metadata } from 'next'
import CarsMarketingPage from '../page'

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
    title: 'Cars Marketing - Professionele Automotive Digitale Marketing Diensten',
    description: 'Versnel uw automotive bedrijf met bewezen digitale marketing strategieën. Professionele Auto Marketing diensten voor dealers, merken en automotive bedrijven.',
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

export default function DutchPage() {
  return <CarsMarketingPage />
}
