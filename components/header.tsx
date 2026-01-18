"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle, Menu, X, Globe, Sparkles, Sun, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const { language, setLanguage } = useLanguage()
  const isEn = language === "en"
  const PHONE = "+91-9203407300"
  const WHATSAPP = "https://wa.me/919201962695"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Transparent when at very top (within first 20px), solid after
      setScrolled(window.scrollY > 20)
    }
    handleScroll() // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { href: "/", label: isEn ? "Home" : "होम" },
    { href: "/productspage", label: isEn ? "Products" : "उत्पाद" },
    { href: "/resources", label: isEn ? "Resources" : "संसाधन" },
    { href: "/about", label: isEn ? "About" : "हमारे बारे में" },
    { href: "/contact", label: isEn ? "Contact" : "संपर्क" }
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-xl shadow-slate-200/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo - Always Original Colors */}
            <a
              href="/"
              className="flex items-center group relative z-10"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 bg-gradient-to-r from-emerald-400 to-teal-400" />
                <img
                  src="/logo.png"
                  alt="Re Energen"
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain relative transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`group relative px-3 py-1.5 text-sm xl:text-base font-semibold transition-all duration-300 ${
                    scrolled 
                      ? "text-slate-700 hover:text-emerald-600" 
                      : "text-white hover:text-emerald-400"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100 ${
                    scrolled 
                      ? "bg-gradient-to-r from-emerald-50 to-teal-50" 
                      : "bg-white/10 backdrop-blur-sm"
                  }`} />
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full group-hover:w-4/5 transition-all duration-300 ${
                    scrolled 
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500" 
                      : "bg-gradient-to-r from-emerald-400 to-teal-400"
                  }`} />
                </a>
              ))}

              {/* Divider */}
              <div className={`h-8 w-px bg-gradient-to-b from-transparent to-transparent mx-2 ${
                scrolled ? "via-slate-300" : "via-white/30"
              }`} />

              {/* Quick Actions */}
              <div className="flex items-center gap-2 xl:gap-3">
                {/* Language Switcher */}
                <button
                  onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                  className={`group relative flex items-center gap-2 px-4 py-2.5 border-2 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${
                    scrolled
                      ? "bg-white border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-600"
                      : "bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 text-white hover:text-emerald-400"
                  }`}
                >
                  <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  <span className="text-sm font-semibold">{language === "en" ? "English" : "Hindi"}</span>
                </button>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                className={`flex items-center gap-1 px-3 py-2 border-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                  scrolled
                    ? "bg-white border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-600"
                    : "bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 text-white"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>{language === "en" ? "English" : "Hindi"}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  scrolled 
                    ? "hover:bg-slate-100 text-slate-700" 
                    : "hover:bg-white/10 text-white"
                }`}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 transition-all duration-500 ease-in-out ${
            mobileMenuOpen 
              ? "max-h-[calc(100vh-5rem)] opacity-100 shadow-2xl" 
              : "max-h-0 opacity-0 pointer-events-none"
          } overflow-y-auto`}
        >
          <div className="px-4 py-6 space-y-2">
            <a
              href="/"
              className="group block px-5 py-3.5 text-slate-700 hover:text-emerald-600 rounded-xl transition-all duration-300 font-semibold relative overflow-hidden"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-3">
                <Sun className="w-5 h-5" />
                {isEn ? "Home" : "होम"}
              </span>
            </a>

            {navLinks.filter((l) => l.href !== "/").map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="group block px-5 py-3.5 text-slate-700 hover:text-emerald-600 rounded-xl transition-all duration-300 font-semibold relative overflow-hidden"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}

            <div className="pt-6 mt-6 border-t border-slate-200 space-y-3">
              <a
                href={`tel:${PHONE}`}
                className="group relative overflow-hidden flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/50 hover:-translate-y-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="relative z-10">
                  <div className="text-xs text-emerald-100 font-medium">{isEn ? "Call Us Now" : "हमें कॉल करें"}</div>
                  <div className="font-bold text-base">{PHONE}</div>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-2xl transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/50 hover:-translate-y-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="relative z-10">
                  <div className="text-xs text-teal-100 font-medium">{isEn ? "Chat on" : "चैट करें"}</div>
                  <div className="font-bold text-base">WhatsApp</div>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Mobile CTA Banner */}
          <div className="px-4 pb-6">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 rounded-2xl p-6 text-white shadow-2xl">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgb(16, 185, 129) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />
              
              <div className="relative flex items-start gap-3">
                <div className="w-12 h-12 bg-emerald-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-400/30">
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base mb-1">
                    {isEn ? "Ready to Go Solar?" : "सौर ऊर्जा के लिए तैयार हैं?"}
                  </h3>
                  <p className="text-sm text-slate-300 mb-4">
                    {isEn
                      ? "Free consultation & site inspection"
                      : "नि:शुल्क परामर्श और साइट निरीक्षण"}
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-emerald-600 px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {isEn ? "Get Started" : "शुरू करें"}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* No spacer - let content go under header */}
    </>
  )
}