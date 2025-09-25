import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductGallery } from "@/components/product-gallery"
import { ImpactText } from "@/components/impact-text"
import { VideoSection } from "@/components/video-section"
import { ScrollingFeatures } from "@/components/scrolling-features"
import { ComparisonChart } from "@/components/comparison-chart"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { CompanyIntro } from "@/components/company-intro"
import { FAQSection } from "@/components/faq-section"

export default function KaijaTirePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="pb-[30px]">
          <HeroSection />
        </div>
        <div className="main-content pt-[30px] -mt-10">
          <ProductGallery />
          <ImpactText />
          <VideoSection />
          <ScrollingFeatures />
          <ComparisonChart />
          <TestimonialsSection />
          <div id="company">
            <CompanyIntro />
          </div>
          <div id="faq">
            <FAQSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
