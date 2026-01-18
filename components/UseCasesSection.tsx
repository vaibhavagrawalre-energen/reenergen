"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export default function UseCasesSection() {
  const { t } = useLanguage()
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const useCases = [
    {
      icon: "🏠",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      href: "/productspage",
      data: t.useCases.homeowners
    },
    {
      icon: "🏢",
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      href: "/productspage",
      data: t.useCases.businesses
    },
    {
      icon: "⚡",
      gradient: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100",
      href: "/productspage",
      data: t.useCases.energyIndependence
    },
    {
      icon: "🌍",
      gradient: "from-green-500 to-lime-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      href: "/about",
      data: t.useCases.environmentalImpact
    }
  ]

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(16, 185, 129) 1px, transparent 1px), linear-gradient(to bottom, rgb(16, 185, 129) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.useCases.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            {t.useCases.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              index={index}
              icon={useCase.icon}
              gradient={useCase.gradient}
              bgColor={useCase.bgColor}
              iconBg={useCase.iconBg}
              href={useCase.href}
              title={useCase.data.title}
              description={useCase.data.description}
              features={[
                useCase.data.savings || useCase.data.roi || useCase.data.powerAvailability || useCase.data.carbonOffset,
                useCase.data.taxCredits || useCase.data.costReduction || useCase.data.zeroDowntime || useCase.data.supportRenewable,
                useCase.data.energyIndependence || useCase.data.sustainability || useCase.data.smartManagement || useCase.data.cleanPower
              ]}
              cta={useCase.data.explore || useCase.data.joinMission}
              isActive={activeCard === index}
              onHover={() => setActiveCard(index)}
              onLeave={() => setActiveCard(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- USE CASE CARD ---------------- */

function UseCaseCard({
  index,
  icon,
  gradient,
  iconBg,
  href,
  title,
  description,
  features,
  cta,
  isActive,
  onHover,
  onLeave,
}: {
  index: number
  icon: string
  gradient: string
  bgColor: string
  iconBg: string
  href: string
  title: string
  description: string
  features: string[]
  cta: string
  isActive: boolean
  onHover: () => void
  onLeave: () => void
}) {
  return (
    <a
      href={href}
      className="group block h-full"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="relative h-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:border-emerald-400 hover:shadow-xl hover:bg-white/15">
        {/* Gradient Background - Appears on Hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Top Accent Bar */}
        <div 
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
        />

        <div className="relative p-6 md:p-8 flex flex-col h-full">
          {/* Icon - Increased Size */}
          <div className={`w-20 h-20 rounded-xl ${iconBg} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
            <span className="text-4xl">{icon}</span>
          </div>

          {/* Title - Increased Size */}
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 transition-colors duration-300">
            {title}
          </h3>

          {/* Description - Increased Size */}
          <p className="text-base md:text-lg text-slate-300 mb-6 leading-relaxed">
            {description}
          </p>

          {/* Features List - Increased Size */}
          <ul className="space-y-4 mb-6 flex-grow">
            {features.map((feature, idx) => (
              <li 
                key={idx}
                className={`flex items-start gap-3 text-base text-slate-200 transition-all duration-300 ${
                  isActive 
                    ? 'translate-x-1 opacity-100' 
                    : 'translate-x-0 opacity-90'
                }`}
                style={{
                  transitionDelay: isActive ? `${idx * 50}ms` : '0ms'
                }}
              >
                <svg 
                  className={`w-6 h-6 flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                    isActive ? 'text-emerald-400' : 'text-slate-400'
                  }`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA - Increased Size */}
          <div className="flex items-center justify-between pt-4 border-t border-white/20 group-hover:border-emerald-400 transition-colors duration-300">
            <span className="text-base font-medium text-white">
              {cta}
            </span>
            <div className={`w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-all duration-300`}>
              <span className="text-white text-lg">→</span>
            </div>
          </div>
        </div>

        {/* Corner Decoration */}
        <div 
          className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${gradient} opacity-0 group-hover:opacity-20 rounded-tl-full transition-all duration-500 transform translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0`}
        />
      </div>
    </a>
  )
}