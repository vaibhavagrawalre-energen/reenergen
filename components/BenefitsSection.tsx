"use client"

import { useState, useEffect } from "react"

// Mock translation object - replace with your actual t prop
const mockTranslations = {
  benefits: {
    title: "Why Choose Solar Energy",
    subtitle: "Proven advantages backed by real-world results",
    lowerBills: {
      title: "Lower Energy Bills",
      description: "Reduce your monthly electricity costs by up to 70% with solar power generation"
    },
    ecoFriendly: {
      title: "Eco-Friendly",
      description: "Significantly reduce your carbon footprint and contribute to a cleaner environment"
    },
    increaseProperty: {
      title: "Increase Property Value",
      description: "Homes with solar installations see an average property value increase of 4.1%"
    },
    warranty: {
      title: "25-Year Warranty",
      description: "Industry-leading warranty coverage on all panels and comprehensive system protection"
    }
  }
}

interface BenefitsSectionProps {
  t?: any
}

export default function BenefitsSection({ t = mockTranslations }: BenefitsSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Auto-rotate through benefits
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const benefits = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      stat: "70%",
      statLabel: "Savings",
      title: t.benefits.lowerBills.title,
      description: t.benefits.lowerBills.description,
      particles: ["₹", "₹", "₹"]
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      stat: "100%",
      statLabel: "Clean",
      title: t.benefits.ecoFriendly.title,
      description: t.benefits.ecoFriendly.description,
      particles: ["🌱", "🌿", "🍃"]
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
      stat: "+4.1%",
      statLabel: "Value",
      title: t.benefits.increaseProperty.title,
      description: t.benefits.increaseProperty.description,
      particles: ["↗", "↗", "↗"]
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: "from-orange-400 via-amber-500 to-yellow-600",
      stat: "25",
      statLabel: "Years",
      title: t.benefits.warranty.title,
      description: t.benefits.warranty.description,
      particles: ["✓", "✓", "✓"]
    }
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
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

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.benefits.title}
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* Interactive Benefits Display */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseMove={handleMouseMove}
        >
          {/* Main Display Card */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl mb-6">
            {/* Spotlight Effect */}
            <div 
              className="absolute inset-0 opacity-20 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`
              }}
            />

            <div className="relative p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left: Icon & Stats */}
                <div className="relative">

                  {/* Main Icon */}
                  <div className="relative w-48 h-48 mx-auto">
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefits[activeIndex].gradient} rounded-full blur-2xl opacity-30 animate-pulse`} />
                    <div className={`relative w-full h-full bg-gradient-to-br ${benefits[activeIndex].gradient} rounded-full p-12 transform transition-transform duration-700 hover:scale-110 hover:rotate-12`}>
                      <div className="text-white">
                        {benefits[activeIndex].icon}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="text-center mt-6">
                    <div className={`text-6xl font-bold bg-gradient-to-r ${benefits[activeIndex].gradient} bg-clip-text text-transparent`}>
                      {benefits[activeIndex].stat}
                    </div>
                    <div className="text-slate-300 text-sm uppercase tracking-wider mt-1">
                      {benefits[activeIndex].statLabel}
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {benefits[activeIndex].title}
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {benefits[activeIndex].description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="pt-4">
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${benefits[activeIndex].gradient} transition-all duration-500`}
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3">
            {benefits.map((benefit, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group relative"
              >
                <div className={`w-16 h-16 rounded-xl border-2 transition-all duration-300 ${
                  activeIndex === index 
                    ? 'border-emerald-400 bg-emerald-500/20 scale-110 shadow-lg shadow-emerald-500/30' 
                    : 'border-white/30 bg-white/10 hover:border-emerald-400 hover:scale-105 hover:shadow-md'
                }`}>
                  <div className={`w-full h-full p-3 transition-colors duration-300 ${
                    activeIndex === index ? 'text-emerald-400' : 'text-slate-400 group-hover:text-emerald-400'
                  }`}>
                    {benefit.icon}
                  </div>
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {benefit.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}