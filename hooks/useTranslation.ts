import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export function useTranslation() {
  const { language } = useLanguage()
  const t = translations[language]
  
  const translate = (key: string) => {
    return key.split('.').reduce((obj: any, k) => obj?.[k], t) || key
  }
  
  return { t, translate, language }
}