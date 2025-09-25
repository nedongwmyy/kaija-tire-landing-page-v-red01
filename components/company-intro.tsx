"use client"

import React from 'react';

import { useTranslation } from "@/hooks/useTranslation"

export function CompanyIntro() {
  const { t } = useTranslation()

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance leading-tight">
            {t.company.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.company.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-pretty">
            {t.company.description}
          </p>
        </div>
      </div>
    </section>
  )
}