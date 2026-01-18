"use client"

import { useEffect, useState } from "react"
import { Zap, ArrowRight, Sparkles, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Front() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    // Trigger entrance animations
    setIsVisible(true)
  }, [])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const benefits = [
    { icon: "☀️", text: language === "en" ? "Zero Electricity Bills" : "शून्य बिजली बिल" },
    { icon: "🌱", text: language === "en" ? "100% Clean Energy" : "100% स्वच्छ ऊर्जा" },
    { icon: "💰", text: language === "en" ? "25+ Years Warranty" : "25+ वर्ष वारंटी" },
    { icon: "⚡", text: language === "en" ? "Quick Installation" : "त्वरित स्थापना" }
  ]

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Solar Panel Background with Smooth Parallax */}
      <div 
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.3}px, 0) scale(${1 + scrollY * 0.0001})`,
        }}
      >
        <img 
          src="/bg1.jpg" 
          alt="Solar panels"
          className="w-full h-full object-cover"
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />
        {/* Gradient Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-slate-900/60 to-emerald-900/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/50" />
        
        {/* Animated Light Rays - Optimized */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-emerald-400/0 via-emerald-400/60 to-emerald-400/0 animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-teal-400/0 via-teal-400/60 to-teal-400/0 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 min-h-screen flex items-center pt-32 pb-20">
        <div className="max-w-5xl">

          {/* Main Heading with staggered animation */}
          <div className="space-y-6 mb-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight">
              <span 
                className="block text-white mb-3 animate-fade-in-up"
                style={{ animationDelay: '0.3s' }}
              >
                {language === "en" ? "Powering India’s" : "भारत का सशक्त"}
              </span>
              <span 
                className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up animate-gradient"
                style={{ animationDelay: '0.4s' }}
              >
                {language === "en" ? "Solar Future" : "ऊर्जा भविष्य"}
              </span>
            </h1>

            {/* Tagline */}
            <p 
              className="text-xl sm:text-2xl lg:text-3xl text-slate-200 font-light leading-relaxed max-w-3xl animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              {language === "en" ? (
                <>
                  At <span className="font-bold text-white">Re-Energen</span>, 
                  we revolutionize energy. Harness the sun's unlimited power with cutting-edge solar technology—
                  <span className="font-semibold text-white"> clean, efficient, unstoppable.</span>
                </>
              ) : (
                <>
                  <span className="font-bold text-white">Re-Energen</span> में
                  हम ऊर्जा में क्रांति लाते हैं। अत्याधुनिक सोलर टेक्नोलॉजी के साथ सूर्य की असीम शक्ति का उपयोग करें—
                  <span className="font-semibold text-white"> स्वच्छ, कुशल, अजेय।</span>
                </>
              )}
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <a
              href="/contact"
              className="group relative px-8 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 flex items-center justify-center gap-3"
            >
                <Sparkles className="w-5 h-5 text-white/80 group-hover:animate-pulse" />
              <span className="relative z-10">{language === "en" ? "Contact Us" : "संपर्क करें"}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a
              href="/about"
              className="px-8 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 text-center text-white"
            >
              {language === "en" ? "Learn More" : "और जानें"}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}