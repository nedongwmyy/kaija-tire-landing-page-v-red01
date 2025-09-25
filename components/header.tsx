"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, Search, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { language, setLanguage } = useLanguage()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 关闭下拉菜单时的处理
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 获取当前语言的标签
  const getLanguageLabel = () => {
    switch (language) {
      case "en":
        return "English";
      case "es":
        return "Español";
      case "it":
        return "Italiano";
      default:
        return "English";
    }
  };

  // 设置语言并关闭下拉菜单
  const handleLanguageChange = (lang: "en" | "es" | "it") => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="max-w-[1300px] mx-auto flex h-14 sm:h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-xl sm:text-2xl font-bold text-red-600">NEDONG</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-1 justify-center">
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-red-600 transition-colors cursor-pointer">
            {language === "en" ? "KAIJA TIRE" : language === "es" ? "NEUMÁTICO KAIJA" : "PNEUMATICO KAIJA"}
          </a>
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-red-600 transition-colors cursor-pointer">
            {language === "en" ? "Industry Solutions" : language === "es" ? "Soluciones Industriales" : "Soluzioni Industriali"}
          </a>
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-red-600 transition-colors cursor-pointer">
            {language === "en" ? "Technology" : language === "es" ? "Tecnología" : "Tecnologia"}
          </a>
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-red-600 transition-colors cursor-pointer">
            {language === "en" ? "Dealer Map" : language === "es" ? "Mapa de Distribuidores" : "Mappa Rivenditori"}
          </a>
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-red-600 transition-colors cursor-pointer">
            {language === "en" ? "Support & FAQ" : language === "es" ? "Soporte y Preguntas Frecuentes" : "Supporto e FAQ"}
          </a>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
            <Search className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          
          {/* Language Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center space-x-1 px-2"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              <span className="text-sm font-medium">{getLanguageLabel()}</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="py-1">
                  <button
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      language === "en" ? "bg-gray-100 font-medium" : ""
                    }`}
                    onClick={() => handleLanguageChange("en")}
                  >
                    English
                  </button>
                  <button
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      language === "es" ? "bg-gray-100 font-medium" : ""
                    }`}
                    onClick={() => handleLanguageChange("es")}
                  >
                    Español
                  </button>
                  <button
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      language === "it" ? "bg-gray-100 font-medium" : ""
                    }`}
                    onClick={() => handleLanguageChange("it")}
                  >
                    Italiano
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-80">
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="#" className="text-lg font-medium hover:text-primary transition-colors cursor-pointer">
                  {language === "en" ? "KAIJA TIRE" : language === "es" ? "NEUMÁTICO KAIJA" : "PNEUMATICO KAIJA"}
                </a>
                <a href="#" className="text-lg font-medium hover:text-primary transition-colors cursor-pointer">
                  {language === "en" ? "Industry Solutions" : language === "es" ? "Soluciones Industriales" : "Soluzioni Industriali"}
                </a>
                <a href="#" className="text-lg font-medium hover:text-primary transition-colors cursor-pointer">
                  {language === "en" ? "Technology" : language === "es" ? "Tecnología" : "Tecnologia"}
                </a>
                <a href="#" className="text-lg font-medium hover:text-primary transition-colors cursor-pointer">
                  {language === "en" ? "Dealer Map" : language === "es" ? "Mapa de Distribuidores" : "Mappa Rivenditori"}
                </a>
                <a href="#" className="text-lg font-medium hover:text-primary transition-colors cursor-pointer">
                  {language === "en" ? "Support & FAQ" : language === "es" ? "Soporte y Preguntas Frecuentes" : "Supporto e FAQ"}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur z-50">
          <div className="container px-4 py-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                {language === "en" ? "Search" : language === "es" ? "Buscar" : "Cerca"}
              </h2>
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <input
              type="text"
              placeholder={
                language === "en" 
                  ? "Search for products..." 
                  : language === "es" 
                  ? "Buscar productos..." 
                  : "Cerca prodotti..."
              }
              className="w-full p-4 text-lg border rounded-lg bg-input"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  )
}
