"use client";

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Clock, CheckCircle, Zap, Sun } from "lucide-react"

export default function ContactPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const { language } = useLanguage()
  const isEn = language === "en"

  const PHONE_PRIMARY = "+91-9203407300"
  const PHONE_SECOND = "+91-9203407301"
  const EMAIL_PRIMARY = "info@re-energen.com"
  const WHATSAPP = "https://wa.me/919201962695"
  const ADDRESS = "5th Floor, Currency Tower, V.I.P. Road, Raipur 492001"

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    ADDRESS + ", India"
  )}`

  const contactMethods = [
    {
      icon: Phone,
      title: isEn ? "Call Us" : "कॉल करें",
      desc: isEn ? "Speak directly with our solar experts" : "हमारे सौर विशेषज्ञों से सीधे बात करें",
      action: isEn ? "Call Now" : "कॉल करें",
      href: `tel:${PHONE_PRIMARY}`,
      color: "emerald",
      primary: true
    },
    {
      icon: MessageCircle,
      title: isEn ? "WhatsApp" : "WhatsApp",
      desc: isEn ? "Quick chat for instant responses" : "त्वरित प्रतिक्रिया के लिए चैट करें",
      action: isEn ? "Chat Now" : "चैट करें",
      href: WHATSAPP,
      color: "teal",
      external: true
    },
    {
      icon: Mail,
      title: isEn ? "Email" : "ईमेल",
      desc: isEn ? "Send us detailed inquiries" : "विस्तृत पूछताछ भेजें",
      action: isEn ? "Send Email" : "ईमेल भेजें",
      href: `mailto:${EMAIL_PRIMARY}`,
      color: "blue"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
        {/* Solar Panel Background with Smooth Parallax */}
      <div 
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.3}px, 0) scale(${1 + scrollY * 0.0001})`,
        }}
      >
        <img 
          src="/bg2.jpg" 
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
        
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">We're Here to Help</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              {isEn ? "Get in Touch" : "संपर्क करें"}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {isEn
                ? "Questions? Call, message or request a free site visit. We usually respond within 24 hours."
                : "प्रश्न? कॉल करें, संदेश भेजें या नि:शुल्क साइट विज़िट का अनुरोध करें। हम सामान्यतः 24 घंटे के भीतर उत्तर देते हैं।"}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {isEn ? "Choose Your Preferred Way to Connect" : "संपर्क का अपना पसंदीदा तरीका चुनें"}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {isEn
                ? "Our team is ready to assist you with all your solar energy needs"
                : "हमारी टीम आपकी सभी सौर ऊर्जा आवश्यकताओं में सहायता के लिए तैयार है"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noreferrer" : undefined}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative block"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r from-${method.color}-500 to-${method.color}-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300`} />
                <div className={`relative bg-white border-2 ${method.primary ? 'border-emerald-200' : 'border-slate-200'} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full ${method.primary ? 'ring-2 ring-emerald-500/20' : ''}`}>
                  <div className={`w-14 h-14 bg-${method.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <method.icon className={`w-7 h-7 text-${method.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{method.desc}</p>
                  
                  <div className={`flex items-center gap-2 text-${method.color}-600 font-semibold group-hover:gap-3 transition-all`}>
                    <span>{method.action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Details & Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Office Location */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">
                        {isEn ? "Visit Our Office" : "हमारे कार्यालय पर आएं"}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">
                        {ADDRESS}
                      </p>
                      <a
                        href={mapsHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700 font-medium group/link"
                      >
                        {isEn ? "Get Directions" : "दिशा-निर्देश प्राप्त करें"}
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">
                        {isEn ? "Call Us" : "हमें कॉल करें"}
                      </h3>
                      <div className="space-y-2">
                        <a href={`tel:${PHONE_PRIMARY}`} className="block text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                          {PHONE_PRIMARY}
                        </a>
                        <a href={`tel:${PHONE_SECOND}`} className="block text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                          {PHONE_SECOND}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">
                        {isEn ? "Email Us" : "हमें ईमेल करें"}
                      </h3>
                      <a href={`mailto:${EMAIL_PRIMARY}`} className="text-sm text-slate-600 hover:text-emerald-600 transition-colors break-all">
                        {EMAIL_PRIMARY}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Hours */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative bg-gradient-to-br from-slate-900 to-emerald-900 text-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Clock className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">
                        {isEn ? "Support Hours" : "समर्थन समय"}
                      </h3>
                      <p className="text-sm text-slate-300 mb-2">
                        Mon–Sat: 9:00 — 18:00
                      </p>
                      <p className="text-sm text-emerald-400">
                        {isEn ? "Emergency support available 24/7" : "आपातकालीन सहायता 24/7 उपलब्ध"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="lg:col-span-2">
              <div className="group relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity" />
                <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl h-full min-h-[500px] lg:min-h-[600px]">
                  <iframe
                    title="ReEnergen Office Location"
                    className="w-full h-full"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      ADDRESS + ", Raipur, India"
                    )}&output=embed`}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Sun className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {isEn ? "Planning a Visit?" : "विज़िट की योजना बना रहे हैं?"}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {isEn
                    ? "We recommend scheduling a site visit before coming in person so our team can prepare and ensure availability. Call us to book your free consultation and roof inspection."
                    : "हम व्यक्तिगत रूप से आने से पहले साइट विज़िट शेड्यूल करने की सलाह देते हैं ताकि हमारी टीम तैयार रह सके। अपनी मुफ्त परामर्श और छत निरीक्षण बुक करने के लिए हमें कॉल करें।"}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={`tel:${PHONE_PRIMARY}`}>
                    <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <Phone className="w-4 h-4" />
                      {isEn ? "Schedule Visit" : "विज़िट शेड्यूल करें"}
                    </button>
                  </a>
                  <a href={mapsHref} target="_blank" rel="noreferrer">
                    <button className="flex items-center gap-2 bg-white border-2 border-emerald-200 hover:border-emerald-300 text-emerald-600 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <MapPin className="w-4 h-4" />
                      {isEn ? "Get Directions" : "दिशा-निर्देश प्राप्त करें"}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Quick Response Guaranteed</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isEn ? "Ready to Go Solar?" : "सौर ऊर्जा के लिए तैयार हैं?"}
          </h2>
          
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            {isEn
              ? "Contact us today for a free consultation and site inspection. Our experts will guide you through every step of your solar journey."
              : "नि:शुल्क परामर्श और साइट निरीक्षण के लिए आज ही संपर्क करें। हमारे विशेषज्ञ आपकी सौर यात्रा के हर कदम में आपका मार्गदर्शन करेंगे।"}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${PHONE_PRIMARY}`}>
              <button className="group flex items-center gap-2 bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <Phone className="w-5 h-5" />
                {isEn ? "Call Now" : "अभी कॉल करें"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <button className="flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300 hover:-translate-y-1">
                <MessageCircle className="w-5 h-5" />
                {isEn ? "WhatsApp Us" : "WhatsApp करें"}
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
