"use client"

import { usePathname } from 'next/navigation'

export default function StructuredData() {
  const pathname = usePathname()
  const isDutch = pathname.startsWith('/nl')
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cars Marketing",
    "description": isDutch 
      ? "Professionele automotive digitale marketing diensten voor dealers, merken en automotive bedrijven in Nederland."
      : "Professional automotive digital marketing services for dealerships, brands, and automotive businesses.",
    "url": "https://cars-marketing.com",
    "logo": "https://cars-marketing.com/CM-Weblogo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+31687999505",
      "contactType": "customer service",
      "email": "info@cars-marketing.com",
      "availableLanguage": ["English", "Dutch"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": isDutch ? "NL" : "US",
      "addressRegion": isDutch ? "Zuid-Holland" : "MC",
      "addressLocality": isDutch ? "Nederland" : "Marketing City"
    },
    "sameAs": [
      "https://www.facebook.com/certified.marketing.professionals",
      "https://www.instagram.com/certified.marketing.pro"
    ],
    "service": [
      {
        "@type": "Service",
        "name": isDutch ? "Digitale Marketing" : "Digital Marketing",
        "description": isDutch 
          ? "Professionele digitale marketing strategieën voor automotive bedrijven"
          : "Professional digital marketing strategies for automotive businesses"
      },
      {
        "@type": "Service", 
        "name": isDutch ? "Sociale Media Marketing" : "Social Media Marketing",
        "description": isDutch
          ? "Effectieve sociale media campagnes voor automotive merken"
          : "Effective social media campaigns for automotive brands"
      },
      {
        "@type": "Service",
        "name": isDutch ? "SEO Optimalisatie" : "SEO Optimization", 
        "description": isDutch
          ? "Zoekmachine optimalisatie voor automotive websites"
          : "Search engine optimization for automotive websites"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Netherlands"
      },
      {
        "@type": "Country", 
        "name": "United States"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
