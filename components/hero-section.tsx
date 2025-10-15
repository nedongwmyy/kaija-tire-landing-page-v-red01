"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/useTranslation"

export function HeroSection() {
  const { t } = useTranslation()
  const [backgroundStyle, setBackgroundStyle] = useState({})

  const backgroundImage = "https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/header3.png";
  
  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth >= 1440) {
        setBackgroundStyle({
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '70% auto',
          backgroundPosition: 'left center',
        })
      } else {
        setBackgroundStyle({
          backgroundImage: 'none',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
        })
      }
    }

    // Initial check
    updateBackground()
    
    // Add resize listener
    window.addEventListener('resize', updateBackground)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateBackground)
    }
  }, [backgroundImage])

  return (
    <section 
      className="relative w-full pt-[100px] pb-[100px] flex items-center overflow-hidden 
                 bg-red-600"
      style={{ 
        ...backgroundStyle,
        minHeight: '650px' 
      }}
    >
      {/* 渐变遮罩层，让文本更清晰，同时保留背景图可见性 */}
      
      {/* 内容容器 */}
      <div 
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-white 
                   flex flex-col items-center text-center 
                   2xl:flex-row 2xl:justify-end 2xl:items-center 2xl:text-right"
        style={{ minHeight: 'inherit' }}
      >
        <div className="max-w-xl w-full mt-[100px] 2xl:mt-0 2xl:max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 text-balance leading-tight tracking-tight text-white">
            {t.hero.title}
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-white/90 max-w-xl md:max-w-2xl mx-auto 2xl:ml-auto text-pretty leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA 按钮容器 */}
          <div className="flex justify-center 2xl:justify-end mb-6">
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