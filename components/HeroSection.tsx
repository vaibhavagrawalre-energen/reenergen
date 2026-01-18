"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const products = [
  { name: "Rooftop Solar Panels", image: "/rooftop.jpeg" },
  { name: "Industrial Solar Setup", image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop" },
  { name: "Residential Solar System", image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop" },
]

export default function HeroSection() {
  const { t, language } = useLanguage()
  const [index, setIndex] = useState(0)
  const [prevIndexState, setPrevIndexState] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right' | null>(null)
  const [paused, setPaused] = useState(false)
  const startXRef = useRef<number | null>(null)

  const prev = () => {
    setDirection('right')
    setPrevIndexState(index)
    setIndex((i) => (i === 0 ? products.length - 1 : i - 1))
  }

  const next = () => {
    setDirection('left')
    setPrevIndexState(index)
    setIndex((i) => (i === products.length - 1 ? 0 : i + 1))
  }

  const prevIndex = (index - 1 + products.length) % products.length
  const nextIndex = (index + 1) % products.length

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setDirection('left')
      setPrevIndexState(index)
      setIndex((i) => (i === products.length - 1 ? 0 : i + 1))
    }, 6000)
    return () => clearInterval(id)
  }, [paused, index])

  useEffect(() => {
    const images = [products[prevIndex].image, products[nextIndex].image]
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [index, prevIndex, nextIndex])

  // Reset direction after animation
  useEffect(() => {
    if (direction) {
      const timer = setTimeout(() => setDirection(null), 800)
      return () => clearTimeout(timer)
    }
  }, [direction])

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-14 md:py-20 overflow-hidden">
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
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:w-[30%] text-center lg:text-left animate-fade-in-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              {t.hero.title}
            </h1>

            <p className="text-lg text-slate-300 mb-8">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/50">
                <Phone className="w-4 h-4" />
                {t.hero.getStarted}
              </button>

              <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-lg font-semibold transition-all duration-300">
                {t.hero.learnMore}
              </button>
            </div>
          </div>

          {/* RIGHT GALLERY */}
          <div className="lg:w-[70%] relative flex flex-col items-center animate-fade-in-right overflow-hidden">

            <div
              className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] flex items-center justify-center outline-none perspective-container"
              role="region"
              aria-roledescription="carousel"
              aria-label={language === "en" ? "Product gallery" : "उत्पाद गैलरी"}
              tabIndex={0}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") prev()
                if (e.key === "ArrowRight") next()
              }}
              onPointerDown={(e) => {
                startXRef.current = e.clientX
              }}
              onPointerUp={(e) => {
                const start = startXRef.current
                if (start == null) return
                const delta = e.clientX - start
                startXRef.current = null
                if (Math.abs(delta) > 30) {
                  if (delta < 0) next()
                  else prev()
                }
              }}
              onTouchStart={(e) => {
                startXRef.current = e.touches[0]?.clientX ?? null
              }}
              onTouchEnd={(e) => {
                const start = startXRef.current
                const endX = e.changedTouches[0]?.clientX
                startXRef.current = null
                if (start != null && endX != null) {
                  const delta = endX - start
                  if (Math.abs(delta) > 30) {
                    if (delta < 0) next()
                    else prev()
                  }
                }
              }}
            >

              {/* LEFT BLUR - Enhanced Animation */}
              <div 
                className={`absolute left-6 top-1/2 -translate-y-1/2 w-[25%] h-[80%] z-0 transition-all duration-700 ease-out ${
                  direction === 'left' ? 'opacity-0 -translate-x-12 scale-90' : 
                  direction === 'right' ? 'opacity-80 translate-x-4 scale-95' : 
                  'opacity-70'
                }`}
              >
                <img
                  src={products[prevIndex].image}
                  alt=""
                  className="w-full h-full object-cover rounded-xl blur-sm transition-all duration-700"
                />
              </div>

              {/* RIGHT BLUR - Enhanced Animation */}
              <div 
                className={`absolute right-6 top-1/2 -translate-y-1/2 w-[25%] h-[80%] z-0 transition-all duration-700 ease-out ${
                  direction === 'right' ? 'opacity-0 translate-x-12 scale-90' : 
                  direction === 'left' ? 'opacity-80 -translate-x-4 scale-95' : 
                  'opacity-70'
                }`}
              >
                <img
                  src={products[nextIndex].image}
                  alt=""
                  className="w-full h-full object-cover rounded-xl blur-sm transition-all duration-700"
                />
              </div>

              {/* PREVIOUS IMAGE - Sliding Out */}
              {direction && prevIndexState !== index && (
                <div
                  className={`absolute z-5 w-[70%] h-full ${
                    direction === 'left' 
                      ? 'animate-slide-out-left' 
                      : 'animate-slide-out-right'
                  }`}
                >
                  <img
                    src={products[prevIndexState].image}
                    alt=""
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              )}

              {/* CENTER IMAGE - Smooth Slide Animation */}
              <div
                key={index}
                className={`relative z-10 w-[70%] h-full will-change-transform ${
                  direction === 'left' 
                    ? 'animate-slide-in-left' 
                    : direction === 'right' 
                    ? 'animate-slide-in-right' 
                    : ''
                }`}
              >
                <div className="relative w-full h-full group">
                  <img
                    src={products[index].image}
                    alt={products[index].name}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-emerald-500/20"
                    style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
                  />
                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
                    style={{
                      backgroundSize: '200% 100%',
                      animation: 'shine 3s infinite'
                    }}
                  />
                </div>
              </div>

              {/* CONTROLS - Modern Design */}
              <button
                onClick={prev}
                className="absolute left-3 z-20 p-3 rounded-full bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-xl shadow-xl border border-white/20 hover:from-emerald-500 hover:to-emerald-600 hover:text-white transition-all duration-500 hover:scale-110 hover:-translate-x-1 active:scale-100 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 group"
                aria-label={language === "en" ? "Previous" : "पिछला"}
              >
                <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>

              <button
                onClick={next}
                className="absolute right-3 z-20 p-3 rounded-full bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-xl shadow-xl border border-white/20 hover:from-emerald-500 hover:to-emerald-600 hover:text-white transition-all duration-500 hover:scale-110 hover:translate-x-1 active:scale-100 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 group"
                aria-label={language === "en" ? "Next" : "अगला"}
              >
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* PRODUCT NAME - Fade Animation */}
            <p 
              key={`name-${index}`}
              className="mt-4 text-lg font-semibold text-white animate-fade-in" 
              aria-live="polite"
            >
              {products[index].name}
            </p>

            {/* DOTS - Enhanced Styling */}
            <div className="mt-2 flex items-center gap-2">
              {products.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 'left' : 'right')
                    setIndex(i)
                  }}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === index 
                      ? "bg-emerald-500 w-8 shadow-md shadow-emerald-500/40" 
                      : "bg-white/40 hover:bg-white/60 w-2 hover:w-3"
                  }`}
                  aria-label={
                    language === "en"
                      ? `Go to slide ${i + 1}`
                      : `स्लाइड ${i + 1} पर जाएँ`
                  }
                  aria-current={i === index ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(120%) scale(0.8) rotateY(-15deg);
            filter: blur(10px);
          }
          60% {
            opacity: 1;
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotateY(0deg);
            filter: blur(0px);
          }
        }
        
        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(-120%) scale(0.8) rotateY(15deg);
            filter: blur(10px);
          }
          60% {
            opacity: 1;
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotateY(0deg);
            filter: blur(0px);
          }
        }

        @keyframes slide-out-left {
          0% {
            opacity: 1;
            transform: translateX(0) scale(1) rotateY(0deg);
            filter: blur(0px);
          }
          100% {
            opacity: 0;
            transform: translateX(-120%) scale(0.8) rotateY(-15deg);
            filter: blur(10px);
          }
        }

        @keyframes slide-out-right {
          0% {
            opacity: 1;
            transform: translateX(0) scale(1) rotateY(0deg);
            filter: blur(0px);
          }
          100% {
            opacity: 0;
            transform: translateX(120%) scale(0.8) rotateY(15deg);
            filter: blur(10px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.5);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slide-out-left {
          animation: slide-out-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slide-out-right {
          animation: slide-out-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .perspective-container {
          perspective: 2000px;
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  )
}