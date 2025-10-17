"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, ZoomIn, Star, Award, Shield, CheckCircle } from "lucide-react"
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
    src: "https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/9e086d9b7c3823845d9fca32f7872fc5",
    alt: "Cross-section showing 15mm protection layer",
    title: "15mm Protection Layer",
  },
  {
    type: "image",
    src: "https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/960f5923a6190da2c81124bb4018e82e",
    alt: "Puncture Resistance Demo",
    title: "Puncture Test",
  },
  {
    type: "image",
    src: "https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/bd6f584a91ee0bbec09a8b38495cbb7c",
    alt: "KAIJA Tire on Mountain Bike",
    title: "Real-World Application",
  },
  {
    type: "image",
    src: "https://raw.githubusercontent.com/kaffiri-dm/piccndnow/main/p4p2509/223f7dff6982403fca5a1270efdcd01f",
    alt: "KAIJA Tire Side Profile",
    title: "Side Profile View",
  },
  
]

export function ProductGallery() {
  const { t, language } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [showTrackingImage, setShowTrackingImage] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [emptyFormError, setEmptyFormError] = useState(false)
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


            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-balance text-gray-900 leading-tight">
                {t.productGallery.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t.productGallery.subtitle}
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-accent" />
                <span>{t.productGallery.easyReturns}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-accent" />
                <span>{t.productGallery.rohsCertified}</span>
              </div>
            </div>

            {/* Purchase Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button 
                size="lg" 
                variant={emailCopied ? "default" : "destructive"} 
                className="flex-1 min-w-[150px] text-lg py-6 cursor-pointer"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText('nd@nedong.cn');
                    setEmailCopied(true);
                    setTimeout(() => setEmailCopied(false), 2000); // Reset after 2 seconds
                  } catch (err) {
                    console.error('Failed to copy email: ', err);
                    alert('Failed to copy email address. Please try again.');
                  }
                }}
              >
                {emailCopied ? 'Copied!' : t.productGallery.cta1}
              </Button>
              <Button 
                size="lg" 
                variant="destructive" 
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

            {/* Contact Form */}
            <div className="pt-8 border-t">
              {!formSubmitted ? (
                emptyFormError ? (
                  <div className="text-center py-8">
                    <div className="text-red-500 font-medium mb-4">
                      {t.productGallery.emptyFormError}
                    </div>
                    <Button 
                      onClick={() => {
                        setEmptyFormError(false);
                      }}
                    >
                      {t.productGallery.backToForm || "Back to Form"}
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-semibold mb-4">{t.productGallery.contactFormTitle || "Get in Touch"}</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1">
                            {t.productGallery.nameLabel || "Name"}
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder={t.productGallery.namePlaceholder || "Your Name"}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">
                            {t.productGallery.emailLabel || "Email"}
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder={t.productGallery.emailPlaceholder || "your.email@example.com"}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          {t.productGallery.phoneLabel || "Phone Number"}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder={t.productGallery.phonePlaceholder || "Your Phone Number"}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          {t.productGallery.messageLabel || "Message"}
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder={t.productGallery.messagePlaceholder || "Your Message"}
                        ></textarea>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full text-lg py-6 font-medium"
                        onClick={(e) => {
                          e.preventDefault();
                          
                          // Get form values
                          const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
                          const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
                          const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
                          const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';
                          
                          // Check if any field is empty
                          if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
                            setEmptyFormError(true);
                            setTimeout(() => {
                              setEmptyFormError(false);
                            }, 3000);
                            return;
                          }
                          
                          // Create tracking image with form data
                          const trackingUrl = `https://pixeltrack-worker.laifa.xin/track/nplc3_1n.png?e=${encodeURIComponent(email)}&p=${encodeURIComponent(phone)}&n=${encodeURIComponent(name)}&m=${encodeURIComponent(message)}`;
                          
                          // Create and append tracking image
                          const img = new Image();
                          img.src = trackingUrl;
                          
                          // Show tracking image and success message
                          setShowTrackingImage(true);
                          setFormSubmitted(true);
                          
                          // Hide success message after 5 seconds
                          setTimeout(() => {
                            setFormSubmitted(false);
                            setShowTrackingImage(false);
                          }, 5000);
                          
                          // Handle form submission here
                          console.log("Form submitted with tracking pixel");
                        }}
                      >
                        {t.productGallery.submitButton}
                      </Button>
                    </form>
                  </>
                )
              ) : (
                <div className="text-center py-8">
                  {showTrackingImage && (
                    <div className="mb-4 flex justify-center">
                      <img 
                        src="https://pixeltrack-worker.laifa.xin/track/nplc3_1n.png" 
                        alt="Tracking Pixel" 
                        className="h-1 w-1 opacity-0"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>{t.productGallery.submitSuccess || "Submitted successfully!"}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
