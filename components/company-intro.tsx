"use client"

import React from 'react';

import { useTranslation } from "@/hooks/useTranslation"

export function CompanyIntro() {
  const { t } = useTranslation()

  return (
    <section 
      className="py-16 sm:py-24 min-h-[600px]"
      style={{
        backgroundImage: `url('https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/740ecd86638358c31851c299ad0efbb1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-[1300px] mx-auto px-4 h-full flex flex-col justify-center">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance leading-tight text-white drop-shadow-lg">
            {t.company.title}
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-pretty leading-relaxed text-white drop-shadow-md">
            {t.company.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-300 shadow-2xl">
          <p className="text-lg leading-relaxed text-pretty text-black whitespace-pre-line font-medium">
            {t.company.description}
          </p>
        </div>
      </div>
    </section>
  )
}