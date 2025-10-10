"use client"

import { useState } from "react"
import { useTranslation } from "@/hooks/useTranslation"

export function VideoSection() {
  const { t, language } = useTranslation()

  return (
    <section className="py-16 w-full">
      <div className="w-full px-4 flex justify-center">
        <div className="w-[1300px] max-w-full">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/DMhskZ9on4o"
              title={
                language === "en" 
                  ? "KAIJA Tire in Action" 
                  : language === "es" 
                  ? "Neumático KAIJA en Acción"
                  : "Pneumatico KAIJA in Azione"
              }
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="text-center mt-6 md:mt-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">{t.video.title}</h3>
            <p className="text-muted-foreground text-gray-600 text-sm md:text-base">{t.video.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
