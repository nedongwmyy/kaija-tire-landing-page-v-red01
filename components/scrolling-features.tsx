"use client"

import { useState } from "react"
import { Shield, Zap, Heart, Scale } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

const features = [
  {
    icon: Shield,
    titleKey: "features.superiorProtection.title",
    descriptionKey: "features.superiorProtection.description",
    image: "https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/H23e78933c49b42.png",
  },
  {
    icon: Zap,
    titleKey: "features.snakeBites.title",
    descriptionKey: "features.snakeBites.description",
    image: "https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/6d0dea862aedc14dcec231849bb85114",
  },
  {
    icon: Heart,
    titleKey: "features.comfort.title",
    descriptionKey: "features.comfort.description",
    image: "https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/ee3c04646ffa99fd18052378ca71aea4",
  },
  {
    icon: Scale,
    titleKey: "features.dragonScale.title",
    descriptionKey: "features.dragonScale.description",
    image: "https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/52f89bca29f89806c06c12e65956193d",
  },
]

export function ScrollingFeatures() {
  const { t, translate } = useTranslation()
  const [activeFeature, setActiveFeature] = useState(0)

  // Function to handle feature selection
  const handleFeatureSelect = (index: number) => {
    setActiveFeature(index)
  }

  return (
    <section id="scrolling-features" className="py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-gray-900 leading-tight">
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`p-4 md:p-6 rounded-xl transition-all duration-500 cursor-pointer ${
                    index === activeFeature
                      ? "bg-red-600 text-white shadow-lg scale-[1.02]"
                      : "bg-gray-100"
                  }`}
                  onMouseEnter={() => handleFeatureSelect(index)}
                  onClick={() => handleFeatureSelect(index)}
                  onTouchStart={() => handleFeatureSelect(index)}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div
                      className={`p-2 md:p-3 rounded-lg ${
                        index === activeFeature ? "bg-red-700/20" : "bg-red-600/10"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 md:h-6 md:w-6 ${index === activeFeature ? "text-white" : "text-red-600"}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 leading-tight">
                        {translate(feature.titleKey)}
                      </h3>
                      <p
                        className={`${
                          index === activeFeature ? "text-white/90" : "text-gray-600"
                        } text-pretty leading-relaxed`}
                      >
                        {translate(feature.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Media Content */}
          <div className="sticky top-24">
            <div className="rounded-xl overflow-hidden bg-white shadow-2xl">
              <img
                src={features[activeFeature].image}
                alt={translate(features[activeFeature].titleKey)}
                className="w-full max-w-none h-auto object-cover transition-all duration-500 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
