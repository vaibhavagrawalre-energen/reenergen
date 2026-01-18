"use client"

import { useState, useEffect, useRef } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react"

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

interface Testimonial {
  author: string
  role: string
  content: string
  rating: number
  location: string
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[]
  title?: string
  description?: string
  t?: any
}

/* -------------------------------------------------------------------------- */
/*                              MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

export default function TestimonialsSection({
  testimonials: propTestimonials,
  title = "What Our Customers Say",
  description = "Real stories from real people who made the switch to solar",
  t,
}: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const headerTitle = t?.testimonials?.title ?? title
  const headerDescription = t?.testimonials?.subtitle ?? description

  /* ----------------------- SAFE CTA FALLBACK ----------------------- */
  const cta = t?.cta ?? {
    title: "Ready to Switch to Solar?",
    subtitle: "Talk to our experts and get a customized solar solution today",
  }

  const contact = t?.contact ?? {
    callNow: "Call Now",
    chatWhatsApp: "Chat on WhatsApp",
  }

  /* ----------------------- TESTIMONIAL DATA ------------------------ */

  const defaultTestimonials: Testimonial[] = [
    {
      author: "Rajesh Kumar",
      role: "Homeowner",
      location: "Raipur",
      content:
        "Akshat Sales installed our 5kW system last year. Our electricity bill dropped by 70% immediately. Professional service from start to finish.",
      rating: 5,
    },
    {
      author: "Priya Sharma",
      role: "Business Owner",
      location: "Bhilai",
      content:
        "We installed a 50kW commercial system for our factory. The ROI was better than expected and the team handled all the paperwork smoothly.",
      rating: 5,
    },
    {
      author: "Amit Verma",
      role: "Homeowner",
      location: "Durg",
      content:
        "Great experience with battery storage installation. Now we have power backup during outages. Highly recommended!",
      rating: 5,
    },
  ]

  const testimonials = propTestimonials || defaultTestimonials

  /* ------------------------ PROGRESS BAR ------------------------ */

  useEffect(() => {
    if (!isAutoPlaying || isHovering) {
      setProgress(0)
      return
    }

    setProgress(0)
    const startTime = Date.now()
    const duration = 2000 // 2 seconds

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(newProgress)

      if (newProgress >= 100) {
        clearInterval(progressInterval)
      }
    }, 16) // ~60fps

    return () => clearInterval(progressInterval)
  }, [activeIndex, isAutoPlaying, isHovering])

  /* ---------------------------- AUTO PLAY ---------------------------- */

  useEffect(() => {
    if (!isAutoPlaying || isHovering) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 2000) // 2 seconds
    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovering, testimonials.length])

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
    pauseAutoPlay()
  }

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
    pauseAutoPlay()
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
    pauseAutoPlay()
  }

  /* -------------------------------------------------------------------------- */

  return (
    <section 
      className="relative py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
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
            {headerTitle}
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {headerDescription}
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
            {/* ---------------- LEFT: TESTIMONIAL SLIDER ---------------- */}
            <div className="relative order-2 lg:order-1 lg:col-span-7">
              <div 
                ref={containerRef} 
                className="relative h-[500px]"
                style={{ perspective: "1200px" }}
              >
                {testimonials.map((testimonial, index) => {
                  const isActive = index === activeIndex
                  const offset = (index - activeIndex + testimonials.length) % testimonials.length
                  
                  let transformStyle = ""
                  let opacity = 0
                  let zIndex = 0
                  let pointerEvents: "none" | "auto" = "none"

                  if (isActive) {
                    transformStyle = "translateX(0) translateZ(0) rotateY(0deg) scale(1)"
                    opacity = 1
                    zIndex = 30
                    pointerEvents = "auto"
                  } else if (offset === 1) {
                    transformStyle = "translateX(40%) translateZ(-100px) rotateY(-8deg) scale(0.9)"
                    opacity = 0.4
                    zIndex = 20
                  } else if (offset === testimonials.length - 1) {
                    transformStyle = "translateX(-40%) translateZ(-100px) rotateY(8deg) scale(0.9)"
                    opacity = 0.4
                    zIndex = 20
                  } else {
                    transformStyle = "translateX(100%) translateZ(-200px) rotateY(-15deg) scale(0.8)"
                    opacity = 0
                    zIndex = 10
                  }

                  return (
                    <div
                      key={index}
                      className="absolute inset-0 transition-all duration-700 ease-out"
                      style={{ 
                        transform: transformStyle,
                        opacity,
                        zIndex,
                        pointerEvents,
                      }}
                    >
                      <div className="h-full bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-white/20 shadow-2xl hover:shadow-emerald-500/30 hover:border-emerald-400/50 transition-all duration-500 p-10 flex flex-col relative overflow-hidden group">
                        
                        {/* Gradient top accent */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500" />
                        
                        {/* Quote Icon */}
                        <Quote className="absolute top-8 right-8 w-16 h-16 text-emerald-400/20 group-hover:text-emerald-400/30 transition-colors duration-500" />
                        
                        <div className="relative z-10 flex flex-col h-full">
                          {/* Avatar */}
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-xl font-bold shadow-lg mb-6">
                            {testimonial.author.charAt(0)}
                          </div>

                          {/* Author Info */}
                          <div className="mb-5">
                            <h4 className="font-bold text-xl text-white mb-1">
                              {testimonial.author}
                            </h4>
                            <div className="text-sm text-slate-300 flex items-center gap-2">
                              <span>{testimonial.role}</span>
                              <span className="w-1 h-1 rounded-full bg-slate-500" />
                              <span>{testimonial.location}</span>
                            </div>
                          </div>

                          {/* Rating */}
                          <div className="flex gap-1 mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-emerald-400 fill-current" />
                            ))}
                          </div>

                          {/* Content */}
                          <blockquote className="text-lg text-slate-100 leading-relaxed flex-1">
                            "{testimonial.content}"
                          </blockquote>

                          {/* Verified Badge */}
                          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            {t?.testimonials?.verified ?? "Verified Customer"}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {/* Navigation */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/20 shadow-lg hover:shadow-emerald-500/50 hover:scale-110 hover:border-emerald-400 transition-all duration-300 flex items-center justify-center group z-40"
                >
                  <ChevronLeft className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/20 shadow-lg hover:shadow-emerald-500/50 hover:scale-110 hover:border-emerald-400 transition-all duration-300 flex items-center justify-center group z-40"
                >
                  <ChevronRight className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
                </button>
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative transition-all duration-300 rounded-full overflow-hidden ${
                      index === activeIndex
                        ? "w-12 h-2.5 bg-white/20"
                        : "w-2.5 h-2.5 bg-white/30 hover:bg-emerald-400/50"
                    }`}
                  >
                    {index === activeIndex && (
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-75 ease-linear"
                        style={{ 
                          width: `${progress}%`,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* ---------------- RIGHT: CTA CARD ---------------- */}
            <div className="order-1 lg:order-2 lg:col-span-4 lg:translate-x-[55px] lg:translate-y-[15px]">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl p-8 lg:p-10 shadow-2xl lg:sticky lg:top-24 border border-emerald-400/30">
                
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                    {cta.title}
                  </h3>
                  <p className="text-base text-emerald-50 leading-relaxed">
                    {cta.subtitle}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <button
                    className="w-full bg-white text-emerald-600 hover:bg-emerald-50 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 h-12 text-base rounded-lg flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    {contact.callNow}
                  </button>

                  <button
                    className="w-full bg-transparent text-white border-2 border-white hover:bg-white hover:text-emerald-600 font-semibold hover:scale-105 transition-all duration-300 h-12 text-base rounded-lg flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {contact.chatWhatsApp}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
