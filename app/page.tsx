"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"
import FAQSection from "@/components/faq-section"
import TestimonialsSection from "@/components/testimonials-section"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import HeroSection from "@/components/HeroSection"
import ProductsSection from "@/components/ProductsSection"
import UseCasesSection from "@/components/UseCasesSection"
import ProjectsSection from "@/components/ProjectsSection"
import BenefitsSection from "@/components/BenefitsSection"
import FrontSection from "@/components/front"
import StatsSection from "@/components/stats"
import VendorsFinanceSection from "@/components/VendorsFinanceSection"


export default function HomePage() {
  const { language, t } = useLanguage()
  const isEn = language === "en"

  const projectsAnimation = useScrollAnimation({ threshold: 0.1 })
  const benefitsAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <main className="min-h-screen">

      <FrontSection />
      
      <StatsSection />

      <HeroSection />

      <ProductsSection />

      <UseCasesSection />

      {/* Our Projects Section */}
      <ProjectsSection t={t} /> 

      {/* Benefits Section */}
      <BenefitsSection t={t} /> 

      <VendorsFinanceSection />

      /*{/* Testimonials */}
      <TestimonialsSection t={t} />*/
    </main>
  )
}
