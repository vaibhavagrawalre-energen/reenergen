"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, Battery, Zap, Clock, Shield, AlertCircle, CheckCircle } from "lucide-react"

export default function BatteryGuidePage() {
  const { language } = useLanguage()
  const isEn = language === "en"

  const batteryTypes = [
    {
      name: isEn ? "Lithium-ion" : "लिथियम-आयन",
      efficiency: "95%",
      lifespan: isEn ? "10-15 years" : "10-15 साल",
      features: [
        isEn ? "Compact size" : "कॉम्पैक्ट आकार",
        isEn ? "Minimal maintenance" : "न्यूनतम रखरखाव",
        isEn ? "High efficiency" : "उच्च दक्षता"
      ],
      gradient: "from-blue-500 to-cyan-500",
      recommended: true
    },
    {
      name: isEn ? "Lead-acid" : "लेड-एसिड",
      efficiency: "80%",
      lifespan: isEn ? "3-5 years" : "3-5 साल",
      features: [
        isEn ? "Budget-friendly" : "बजट-अनुकूल",
        isEn ? "Proven technology" : "सिद्ध तकनीक",
        isEn ? "Widely available" : "व्यापक रूप से उपलब्ध"
      ],
      gradient: "from-slate-500 to-slate-600",
      recommended: false
    }
  ]

  const capacitySizes = [
    { size: "3-5 kWh", duration: isEn ? "4-6 hours" : "4-6 घंटे", use: isEn ? "Essential appliances" : "आवश्यक उपकरण" },
    { size: "5-8 kWh", duration: isEn ? "6-8 hours" : "6-8 घंटे", use: isEn ? "Most household needs" : "अधिकांश घरेलू जरूरतें" },
    { size: "8-10 kWh", duration: isEn ? "8-12 hours" : "8-12 घंटे", use: isEn ? "Full home backup" : "पूर्ण घर बैकअप" }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <Link href="/resources" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">{isEn ? "Back to Resources" : "संसाधन पर वापस जाएं"}</span>
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl mb-6 shadow-lg">
              <Battery className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {isEn ? "Choosing the Right Battery" : "सही बैटरी चुनना"}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {isEn
                ? "Understand battery types, backup time, capacity, and lifecycle to make the best choice for your home."
                : "अपने घर के लिए सही विकल्प बनाने के लिए बैटरी के प्रकार, बैकअप समय, क्षमता, और जीवनकाल को समझें।"}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Battery Types */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {isEn ? "Battery Types" : "बैटरी के प्रकार"}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {batteryTypes.map((battery, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl border-2 border-slate-200 hover:border-emerald-400 transition-all duration-300 overflow-hidden group hover:shadow-2xl"
                >
                  {battery.recommended && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {isEn ? "Recommended" : "अनुशंसित"}
                    </div>
                  )}
                  
                  <div className={`h-2 bg-gradient-to-r ${battery.gradient}`} />
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{battery.name}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-sm text-slate-600 mb-1">{isEn ? "Efficiency" : "दक्षता"}</p>
                        <p className="text-2xl font-bold text-emerald-600">{battery.efficiency}</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-sm text-slate-600 mb-1">{isEn ? "Lifespan" : "जीवनकाल"}</p>
                        <p className="text-2xl font-bold text-slate-900">{battery.lifespan}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {battery.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capacity Sizing */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {isEn ? "Capacity Sizing" : "क्षमता आकार"}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {capacitySizes.map((capacity, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border-2 border-slate-200 hover:border-emerald-400 transition-all duration-300 p-6 hover:shadow-xl group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{capacity.size}</h3>
                  <div className="flex items-center gap-2 text-emerald-600 mb-3">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">{capacity.duration}</span>
                  </div>
                  <p className="text-slate-600">{capacity.use}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    {isEn
                      ? "Battery capacity is measured in kWh (kilowatt-hours). A typical 3-5 kWh battery can power essential appliances (lights, fans, refrigerator) for 4-6 hours during outages. Larger homes may need 8-10 kWh for extended backup."
                      : "बैटरी क्षमता को kWh (किलोवाट-घंटे) में मापा जाता है। एक विशिष्ट 3-5 kWh बैटरी आउटेज के दौरान 4-6 घंटे के लिए आवश्यक उपकरणों को बिजली दे सकती है।"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Backup Time */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {isEn ? "Backup Time" : "बैकअप समय"}
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {isEn
                  ? "Backup time depends on battery capacity and daily consumption. With solar + battery: during day (all solar), at night (battery discharge), overcast days (combination). Most customers target 4-6 hours of backup to cover evening peak usage."
                  : "बैकअप समय बैटरी क्षमता और दैनिक खपत पर निर्भर करता है। सोलर + बैटरी के साथ: दिन में (सभी सोलर), रात में (बैटरी डिस्चार्ज), बादल के दिन (संयोजन)।"}
              </p>
            </div>

            {/* Lifecycle & Warranty */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {isEn ? "Lifecycle & Warranty" : "जीवनकाल और वारंटी"}
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {isEn
                  ? "Lithium batteries typically come with 10-year warranties. Cycle life (charge-discharge cycles) is typically 3000-4000 for quality batteries. Proper installation and maintenance extend lifespan significantly."
                  : "लिथियम बैटरी आमतौर पर 10 साल की वारंटी के साथ आती हैं। चक्र जीवन (चार्ज-डिस्चार्ज चक्र) गुणवत्ता वाली बैटरी के लिए आमतौर पर 3000-4000 है।"}
              </p>
            </div>
          </div>

          {/* Installation & Safety */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 rounded-2xl p-8 md:p-12 text-white mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-bold">
                  {isEn ? "Installation & Safety" : "स्थापना और सुरक्षा"}
                </h3>
              </div>
              <p className="text-slate-200 leading-relaxed text-lg">
                {isEn
                  ? "Batteries must be installed in a cool, dry, well-ventilated space. Professional installation ensures proper electrical connections and safety compliance. A working DCDB (Direct Current Distribution Box) and proper wiring are essential."
                  : "बैटरी को एक ठंडे, सूखे, अच्छी तरह हवादार स्थान पर स्थापित किया जाना चाहिए। व्यावसायिक स्थापन उचित विद्युत कनेक्शन और सुरक्षा अनुपालन सुनिश्चित करता है।"}
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {isEn
                ? "Unsure which battery fits your needs?"
                : "निश्चित नहीं हैं कि कौन सी बैटरी आपकी जरूरतों के अनुकूल है?"}
            </h3>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              {isEn
                ? "Our energy experts will recommend the perfect battery system based on your consumption and budget."
                : "हमारे ऊर्जा विशेषज्ञ आपकी खपत और बजट के आधार पर सही बैटरी सिस्टम की सिफारिश करेंगे।"}
            </p>
            <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              {isEn ? "Get Battery Recommendation" : "बैटरी अनुशंसा प्राप्त करें"}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
