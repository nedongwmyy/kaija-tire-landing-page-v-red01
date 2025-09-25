"use client"

import { useTranslation } from "@/hooks/useTranslation"

export function ImpactText() {
  const { t } = useTranslation()

  return (
    <section className="py-16 sm:py-24 bg-red-600 text-white w-full">
      <div className="max-w-[1300px] mx-auto px-4 text-center">
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
          {t.impactText.percentage}
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">{t.impactText.title}</p>
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
          {t.impactText.description}
        </p>
      </div>
    </section>
  )
}
