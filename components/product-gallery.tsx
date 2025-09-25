"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, ZoomIn, Star, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useTranslation } from "@/hooks/useTranslation"

const mediaItems = [
  {
    type: "image",
    src: "https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/8c1d4376586acd648d683b736bc5b4d4",
    alt: "KAIJA Tire Dragon Scale Pattern",
    title: "Dragon Scale Design",
  },  
  {
    type: "image",
    src: "https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/7243e61f6067163f47fc85541656eeee",
    alt: "Cross-section showing 15mm protection layer",
    title: "15mm Protection Layer",
  },
  {
    type: "image",
    src: "https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/882f554ce77e243cbeee12ea45defba8",
    alt: "Installation Video",
    title: "Installation Guide",
  },
  {
    type: "image",
    src: "https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/f13f156c6647fd5bf0a900aa972fc9f9",
    alt: "Puncture Resistance Demo",
    title: "Puncture Test",
  },
  {
    type: "image",
    src: "https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/93815102ce32519ccbecb3e42f0100c4",
    alt: "KAIJA Tire on Mountain Bike",
    title: "Real-World Application",
  },
]

export function ProductGallery() {
  const { t, language } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const galleryRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  }

  // 处理触摸开始事件
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  // 处理触摸移动事件
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
  }

  // 处理触摸结束事件
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return
    const endX = e.changedTouches[0].clientX
    const diff = startX - endX

    // 如果滑动距离超过50像素，则切换图片
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // 向左滑动，显示下一张
        nextSlide()
      } else {
        // 向右滑动，显示上一张
        prevSlide()
      }
    }

    setIsDragging(false)
  }

  return (
    <section className="py-16 bg-card">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div 
              className="relative aspect-square rounded-lg overflow-hidden bg-white"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={mediaItems[currentIndex].src}
                alt={mediaItems[currentIndex].alt}
                className="w-full h-full object-cover"
              />

              {/* Media Type Indicator */}
              {mediaItems[currentIndex].type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-12 h-12 sm:w-16 sm:h-16">
                    <Play className="h-5 w-5 sm:h-6 sm:w-6 ml-0.5 sm:ml-1" />
                  </Button>
                </div>
              )}

              {/* Zoom Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="icon" variant="secondary" className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/80 hover:bg-white border border-gray-300">
                    <ZoomIn className="h-4 w-4 text-black" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img 
                    src={mediaItems[currentIndex].src} 
                    alt={mediaItems[currentIndex].alt} 
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>

              {/* Navigation Arrows */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4 bg-white/80 hover:bg-white border border-gray-300"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4 text-black" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 sm:right-4 bg-white/80 hover:bg-white border border-gray-300"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4 text-black" />
              </Button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {mediaItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${
                    index === currentIndex ? "border-primary" : "border-border"
                  }`}
                >
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Play className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.9 (2,847 reviews)</span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-balance text-gray-900 leading-tight">
                {t.productGallery.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t.productGallery.subtitle}
              </p>
            </div>

            {/* Purchase Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button 
                size="lg" 
                className="flex-1 min-w-[150px] text-lg py-6 cursor-pointer"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open('https://api.whatsapp.com/send?phone=8613902337334', '_blank');
                  }
                }}
              >
                {t.productGallery.cta1}
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="flex-1 min-w-[150px] text-lg py-6 cursor-pointer"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open('https://api.whatsapp.com/send?phone=8613902337334', '_blank');
                  }
                }}
              >
                {t.productGallery.cta2}
              </Button>
            </div>

            {/* Product Description */}
            <div className="space-y-4 pt-6 border-t">
              <h3 className="font-semibold">{t.productGallery.highlights}</h3>
              <p className="text-muted-foreground text-pretty">
                {t.productGallery.highlightsText}
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-accent" />
                <span>{t.productGallery.easyReturns}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-accent" />
                <span>{t.productGallery.rohsCertified}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
