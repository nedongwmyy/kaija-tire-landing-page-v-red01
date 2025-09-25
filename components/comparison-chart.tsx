"use client"

import { Check, X } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export function ComparisonChart() {
  const { t, language } = useTranslation()

  const comparisonData = [
    {
      feature: t.comparison.punctureProtection,
      kaija: t.comparison.kaijaPuncture,
      traditional: t.comparison.traditionalPuncture,
      kaijaGood: true,
      traditionalGood: false,
    },
    {
      feature: t.comparison.emergencyRiding,
      kaija: t.comparison.kaijaEmergency,
      traditional: t.comparison.traditionalEmergency,
      kaijaGood: true,
      traditionalGood: false,
    },
    {
      feature: t.comparison.weight,
      kaija: t.comparison.kaijaWeight,
      traditional: t.comparison.traditionalWeight,
      kaijaGood: false,
      traditionalGood: true,
    },
    {
      feature: t.comparison.comfortLevel,
      kaija: t.comparison.kaijaComfort,
      traditional: t.comparison.traditionalComfort,
      kaijaGood: true,
      traditionalGood: false,
    },
    {
      feature: t.comparison.maintenanceCost,
      kaija: t.comparison.kaijaMaintenance,
      traditional: t.comparison.traditionalMaintenance,
      kaijaGood: true,
      traditionalGood: false,
    },
    {
      feature: t.comparison.environmentalImpact,
      kaija: t.comparison.kaijaEnvironmental,
      traditional: t.comparison.traditionalEnvironmental,
      kaijaGood: true,
      traditionalGood: false,
    },
  ]

  // 获取语言特定的标签
  const getLanguageLabels = () => {
    switch (language) {
      case "en":
        return { feature: "Feature", kaija: "KAIJA Tire", traditional: "Traditional Tire" };
      case "es":
        return { feature: "Característica", kaija: "Neumático KAIJA", traditional: "Neumático Tradicional" };
      case "it":
        return { feature: "Caratteristica", kaija: "Pneumatico KAIJA", traditional: "Pneumatico Tradizionale" };
      default:
        return { feature: "Feature", kaija: "KAIJA Tire", traditional: "Traditional Tire" };
    }
  };

  const labels = getLanguageLabels();

  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance leading-tight">{t.comparison.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.comparison.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto w-full">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 sm:p-4 font-semibold">{labels.feature}</th>
                  <th className="text-center p-3 sm:p-4 font-semibold text-primary">{labels.kaija}</th>
                  <th className="text-center p-3 sm:p-4 font-semibold">{labels.traditional}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50 transition-colors cursor-pointer">
                    <td className="p-3 sm:p-4 font-medium text-sm sm:text-base text-left">{row.feature}</td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex items-center justify-center gap-1 sm:gap-2">
                        {row.kaijaGood ? (
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        ) : (
                          <X className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                        )}
                        <span className={`text-sm sm:text-base ${row.kaijaGood ? "text-primary font-medium" : "text-muted-foreground"}`}>
                          {row.kaija}
                        </span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex items-center justify-center gap-1 sm:gap-2">
                        {row.traditionalGood ? (
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                        ) : (
                          <X className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                        )}
                        <span className={`text-sm sm:text-base ${row.traditionalGood ? "text-accent font-medium" : "text-muted-foreground"}`}>
                          {row.traditional}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
