"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Image from "next/image"

const languages = [
  { code: 'en', name: 'English', flag: '/flags/gb.svg', path: '/' },
  { code: 'nl', name: 'Nederlands', flag: '/flags/nl.svg', path: '/nl' }
]

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  
  // Determine current language based on pathname
  const currentLang = pathname.startsWith('/nl') ? 'nl' : 'en'
  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0]

  const handleLanguageChange = (language: typeof languages[0]) => {
    router.push(language.path)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 lg:space-x-2 text-xs lg:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
      >
        <Image
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          width={16}
          height={12}
          className="rounded-sm lg:w-5 lg:h-4"
        />
        <span className="font-medium text-xs lg:text-sm">{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 lg:w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className={`w-full flex items-center space-x-2 lg:space-x-3 px-2 lg:px-3 py-1.5 lg:py-2 text-xs lg:text-sm hover:bg-gray-50 transition-colors duration-200 ${
                currentLang === language.code ? 'bg-teal-50 text-teal-700' : 'text-gray-700'
              }`}
            >
              <Image
                src={language.flag}
                alt={language.name}
                width={16}
                height={12}
                className="rounded-sm lg:w-5 lg:h-4"
              />
              <span className="font-medium text-xs lg:text-sm">{language.name}</span>
              {currentLang === language.code && (
                <svg className="w-3 h-3 lg:w-4 lg:h-4 ml-auto text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
