"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Book, FileText, Calculator, Battery, Wrench, CheckCircle, ArrowRight, Sparkles, BookOpen, DollarSign, Zap, Sun, HelpCircle, Download } from "lucide-react"

export default function ResourcesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | string | null>(null)
  const { language } = useLanguage()
  const isEn = language === "en"

  const guides = [
    {
      icon: Zap,
      title: isEn ? "How residential solar works" : "घरेलू सोलर कैसे काम करता है",
      desc: isEn
        ? "A short overview of panels, inverters, batteries and net metering."
        : "पैनल, इन्वर्टर, बैटरी और नेट मीटरिंग का संक्षिप्त परिचय।",
      href: "/resources/residential-guide",
      color: "emerald"
    },
    {
      icon: DollarSign,
      title: isEn ? "Subsidy & paperwork" : "सब्सिडी और कागजी कार्य",
      desc: isEn
        ? "Practical steps for subsidy applications and approvals."
        : "सब्सिडी आवेदन और अप्रूवल के लिए व्यावहारिक कदम।",
      href: "/resources/subsidy-guide",
      color: "blue"
    },
    {
      icon: Battery,
      title: isEn ? "Choosing the right battery" : "सही बैटरी चुनना",
      desc: isEn
        ? "Battery types, backup time and lifecycle explained."
        : "बैटरी प्रकार, बैकअप समय और जीवनकाल समझाया गया।",
      href: "/resources/battery-guide",
      color: "purple"
    },
    {
      icon: Wrench,
      title: isEn ? "Maintenance tips" : "रखरखाव सुझाव",
      desc: isEn
        ? "Simple checks to keep your system performing well."
        : "सिस्टम का प्रदर्शन बनाए रखने के सरल जांच।",
      href: "/resources/maintenance",
      color: "orange"
    }
  ]

  const faqs = [
    {
      q: isEn ? "How much will I save with solar?" : "सोलर से मुझे कितनी बचत होगी?",
      a: isEn
        ? "Savings depend on your current electricity bill, system size, and sunlight availability. Most residential customers see 60-80% reduction in their monthly bills within the first year."
        : "बचत आपके वर्तमान बिजली बिल, सिस्टम आकार और सूर्य के प्रकाश की उपलब्धता पर निर्भर करती है। अधिकांश आवासीय ग्राहक पहले वर्ष में अपने मासिक बिलों में 60-80% की कमी देखते हैं।"
    },
    {
      q: isEn ? "How long does installation take?" : "स्थापना में कितना समय लगता है?",
      a: isEn
        ? "Physical installation typically takes 1-3 days depending on system size. However, approvals and net metering setup can take 2-4 weeks total."
        : "भौतिक स्थापना सिस्टम के आकार के आधार पर आमतौर पर 1-3 दिन लगते हैं। हालांकि, अनुमोदन और नेट मीटरिंग सेटअप में कुल 2-4 सप्ताह लग सकते हैं।"
    },
    {
      q: isEn ? "What maintenance is required?" : "कौन सा रखरखाव आवश्यक है?",
      a: isEn
        ? "Solar panels require minimal maintenance - mainly periodic cleaning and annual inspections. We recommend professional cleaning 2-3 times per year for optimal performance."
        : "सोलर पैनलों को न्यूनतम रखरखाव की आवश्यकता होती है - मुख्य रूप से आवधिक सफाई और वार्षिक निरीक्षण। इष्टतम प्रदर्शन के लिए हम वर्ष में 2-3 बार पेशेवर सफाई की सिफारिश करते हैं।"
    },
    {
      q: isEn ? "What is PM Surya Ghar Yojana?" : "पीएम सूर्य घर योजना क्या है?",
      a: isEn
        ? "PM Surya Ghar is a government subsidy scheme offering up to ₹78,000 for residential solar installations. We help you with the complete application and documentation process."
        : "पीएम सूर्य घर एक सरकारी सब्सिडी योजना है जो आवासीय सौर प्रतिष्ठानों के लिए ₹78,000 तक प्रदान करती है। हम पूरी आवेदन और दस्तावेज़ीकरण प्रक्रिया में आपकी मदद करते हैं।"
    },
    {
      q: isEn ? "Do solar panels work during power cuts?" : "क्या बिजली कटौती के दौरान सोलर पैनल काम करते हैं?",
      a: isEn
        ? "Standard grid-tied systems don't work during outages. However, hybrid systems with battery backup continue to provide power during cuts, ensuring uninterrupted electricity supply."
        : "मानक ग्रिड-टाइड सिस्टम आउटेज के दौरान काम नहीं करते हैं। हालांकि, बैटरी बैकअप के साथ हाइब्रिड सिस्टम कटौती के दौरान बिजली प्रदान करना जारी रखते हैं।"
    },
    {
      q: isEn ? "What warranty do you provide?" : "आप क्या वारंटी प्रदान करते हैं?",
      a: isEn
        ? "We provide 25-30 year performance warranty on panels, 5-10 years on inverters, and 5-7 years on batteries. Installation workmanship is guaranteed for 5 years."
        : "हम पैनलों पर 25-30 साल की प्रदर्शन वारंटी, इन्वर्टर पर 5-10 साल, और बैटरी पर 5-7 साल प्रदान करते हैं। स्थापना कारीगरी 5 साल के लिए गारंटीकृत है।"
    }
  ]

  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [monthlyBill, setMonthlyBill] = useState(3000)
  const [systemSize, setSystemSize] = useState(5)

  // Calculate savings automatically
  const calculateSavings = () => {
    const annualBill = monthlyBill * 12
    const estimatedGeneration = systemSize * 4.5 * 365 // kW * avg sun hours * days
    const unitsGenerated = estimatedGeneration
    const savings = Math.min(unitsGenerated * 6, annualBill * 0.8) // ₹6 per unit, max 80% savings
    const monthlySavings = Math.round(savings / 12)
    const paybackYears = Math.round((systemSize * 70000) / savings * 10) / 10 // ₹70k per kW
    
    return {
      monthlySavings,
      annualSavings: Math.round(savings),
      paybackYears: paybackYears > 0 ? paybackYears : 4.5
    }
  }

  const savings = calculateSavings()

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
          src="/bg4.jpg" 
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
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">Knowledge Hub</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              {isEn ? "Resources & FAQ" : "संसाधन और पूछे जाने वाले प्रश्न"}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {isEn
                ? "Guides, FAQs and a quick savings calculator to help you decide"
                : "निर्णय में मदद के लिए गाइड, FAQ और त्वरित बचत कैलकुलेटर"}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Guides & FAQ */}
            <div className="lg:col-span-2 space-y-12">
              {/* Starter Guides */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Book className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    {isEn ? "Starter Guides" : "शुरूआती गाइड"}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {guides.map((guide, idx) => (
                    <a
                      key={idx}
                      href={guide.href}
                      onMouseEnter={() => setHoveredCard(idx)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="group relative block"
                    >
                      <div className={`absolute -inset-1 bg-gradient-to-r from-${guide.color}-500 to-${guide.color}-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300`} />
                      <div className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                        <div className={`w-12 h-12 bg-${guide.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <guide.icon className={`w-6 h-6 text-${guide.color}-600`} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{guide.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">{guide.desc}</p>
                        
                        <div className={`flex items-center gap-2 text-${guide.color}-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity`}>
                          <span className="text-sm">{isEn ? "Read guide" : "गाइड पढ़ें"}</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    {isEn ? "Frequently Asked Questions" : "अक्सर पूछे जाने वाले प्रश्न"}
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="group relative"
                      onMouseEnter={() => setHoveredCard(`faq-${idx}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
                      <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                        <button
                          onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                          className="w-full text-left p-6 flex items-start justify-between gap-4"
                        >
                          <div className="flex-1">
                            <h3 className="font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                              {faq.q}
                            </h3>
                            {openFAQ === idx && (
                              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                                {faq.a}
                              </p>
                            )}
                          </div>
                          <div className={`w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ${openFAQ === idx ? 'rotate-45' : ''}`}>
                            <span className="text-emerald-600 text-xl font-light">+</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Calculator & Downloads */}
            <div className="space-y-6">
              {/* Quick Calculator */}
              <div className="group relative sticky top-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity" />
                <div className="relative bg-gradient-to-br from-slate-900 to-emerald-900 text-white rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold">
                      {isEn ? "Savings Calculator" : "बचत कैलकुलेटर"}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-slate-300 mb-2 block">
                        {isEn ? "Monthly Electricity Bill (₹)" : "मासिक बिजली बिल (₹)"}
                      </label>
                      <input
                        type="number"
                        value={monthlyBill}
                        onChange={(e) => setMonthlyBill(Number(e.target.value) || 0)}
                        placeholder="e.g. 3000"
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="text-sm text-slate-300 mb-2 block">
                        {isEn ? "System Size (kW)" : "सिस्टम आकार (kW)"}
                      </label>
                      <select 
                        value={systemSize}
                        onChange={(e) => setSystemSize(Number(e.target.value))}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      >
                        <option value="3" className="bg-slate-900">3 kW</option>
                        <option value="5" className="bg-slate-900">5 kW</option>
                        <option value="7" className="bg-slate-900">7 kW</option>
                        <option value="10" className="bg-slate-900">10 kW</option>
                      </select>
                    </div>

                    {/* Results Display */}
                    <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-300">{isEn ? "Monthly Savings:" : "मासिक बचत:"}</span>
                        <span className="text-lg font-bold text-emerald-400">₹{savings.monthlySavings.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-300">{isEn ? "Annual Savings:" : "वार्षिक बचत:"}</span>
                        <span className="text-lg font-bold text-emerald-400">₹{savings.annualSavings.toLocaleString()}</span>
                      </div>
                      <div className="pt-3 border-t border-white/20">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-300">{isEn ? "Payback Period:" : "पेबैक अवधि:"}</span>
                          <span className="text-lg font-bold text-white">{savings.paybackYears} {isEn ? "years" : "साल"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-2 text-emerald-400 text-sm">
                      <Sparkles className="w-4 h-4" />
                      <span>{isEn ? "Results update automatically" : "परिणाम स्वचालित रूप से अपडेट होते हैं"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Tip */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sun className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">
                      {isEn ? "Need Help Deciding?" : "निर्णय लेने में मदद चाहिए?"}
                    </h4>
                    <p className="text-sm text-slate-600 mb-3">
                      {isEn
                        ? "Our team can help you choose the right system size and components for your needs."
                        : "हमारी टीम आपकी आवश्यकताओं के लिए सही सिस्टम आकार और घटक चुनने में मदद कर सकती है।"}
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700"
                    >
                      {isEn ? "Contact Us" : "संपर्क करें"}
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
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
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Still Have Questions?</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isEn ? "Let's Talk About Your Solar Journey" : "आइए अपनी सोलर यात्रा के बारे में बात करें"}
          </h2>
          
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            {isEn
              ? "Our experts are ready to answer your questions and help you get started with clean energy."
              : "हमारे विशेषज्ञ आपके प्रश्नों का उत्तर देने और स्वच्छ ऊर्जा के साथ शुरुआत करने में आपकी मदद के लिए तैयार हैं।"}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact">
              <button className="group flex items-center gap-2 bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                {isEn ? "Contact Us" : "संपर्क करें"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            <a href="tel:+91-9203407300">
              <button className="flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300 hover:-translate-y-1">
                {isEn ? "Call Now" : "अभी कॉल करें"}
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
