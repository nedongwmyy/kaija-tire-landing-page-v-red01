"use client"

import { Star, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/useTranslation"

export function HeroSection() {
  const { t, language } = useTranslation()

  return (
    <section className="relative w-full pt-[100px] pb-[100px] flex items-center overflow-hidden">
      {/* Red Background */}
      <div className="absolute inset-0 w-full h-full bg-red-600"></div>
      
      {/* Full-screen Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/header.png"
          alt={
            language === "en" 
              ? "KAIJA TIRE - Advanced Puncture-Resistant Liner System Background" 
              : language === "es" 
              ? "NEUMÁTICO KAIJA - Fondo del Sistema de Forro Resistente a Perforaciones Avanzado"
              : "PNEUMATICO KAIJA - Sfondo del Sistema di Protezione Antipuntura Avanzato"
          }
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // 如果图片加载失败，隐藏图片元素
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
      </div>

      {/* Content - Centered vertically, right-aligned horizontally */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-white flex items-center justify-end" style={{ minHeight: '550px' }}>
        <div className="max-w-[1300px] w-full text-right mt-[100px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 text-balance leading-tight tracking-tight text-white">
            {t.hero.title}
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-white/90 max-w-2xl md:max-w-3xl ml-auto text-pretty leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA Button */}
          <div className="flex justify-end mb-6">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open('https://api.whatsapp.com/send?phone=8613902337334', '_blank');
                }
              }}
            >
              {t.hero.cta}
            </Button>
          </div>

        </div>
      </div>

      
    </section>
  )
}
