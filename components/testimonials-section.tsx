"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/hooks/useTranslation"

export function TestimonialsSection() {
  const { t } = useTranslation()
  
  const testimonials = [
    {
      name: t.testimonials.mike.name,
      location: t.testimonials.mike.location,
      rating: 5,
      text: t.testimonials.mike.text,
      image: "/mountain-biker-profile-photo.png",
    },
    {
      name: t.testimonials.sarah.name,
      location: t.testimonials.sarah.location,
      rating: 5,
      text: t.testimonials.sarah.text,
      image: "/female-cyclist-profile-photo.png",
    },
    {
      name: t.testimonials.alex.name,
      location: t.testimonials.alex.location,
      rating: 5,
      text: t.testimonials.alex.text,
      image: "/adventure-cyclist-profile-photo.png",
    },
    {
      name: t.testimonials.emma.name,
      location: t.testimonials.emma.location,
      rating: 5,
      text: t.testimonials.emma.text,
      image: "/mountain-bike-rider-profile-photo.png",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
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

    // 如果滑动距离超过50像素，则切换评价
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // 向左滑动，显示下一个评价
        nextTestimonial()
      } else {
        // 向右滑动，显示上一个评价
        prevTestimonial()
      }
    }

    setIsDragging(false)
  }

  return (
    <section className="py-16 bg-card">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance leading-tight">{t.testimonials.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto w-full">
          <Card className="relative">
            <CardContent 
              className="p-6 sm:p-8 md:p-12"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              ref={cardRef}
            >
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <Button variant="ghost" size="icon" onClick={prevTestimonial}>
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>

                <div className="text-center flex-1 px-4">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 text-pretty">
                    &quot;{testimonials[currentIndex].text}&quot;
                  </blockquote>

                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                    <div className="text-left">
                      <div className="font-semibold text-sm sm:text-base">{testimonials[currentIndex].name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{testimonials[currentIndex].location}</div>
                    </div>
                  </div>
                </div>

                <Button variant="ghost" size="icon" onClick={nextTestimonial}>
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-1 sm:gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors cursor-pointer ${
                      index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
