"use client"

import { usePathname } from "next/navigation"
import { translations } from "@/lib/translations"

export function useTranslations() {
  const pathname = usePathname()
  const language = pathname.startsWith('/nl') ? 'nl' : 'en'
  return translations[language]
}
