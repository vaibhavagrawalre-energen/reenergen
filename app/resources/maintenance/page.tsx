"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, Calendar, Droplets, Battery, Cpu, Shield, Wrench, CheckCircle, AlertTriangle } from "lucide-react"

export default function MaintenancePage() {
  const { language } = useLanguage()
  const isEn = language === "en"

  const maintenanceSteps = [
    {
      number: "1",
      title: isEn ? "Monthly Health Check" : "मासिक स्वास्थ्य जांच",
      icon: Calendar,
      gradient: "from-blue-500 to-cyan-500",
      checks: [
        isEn
          ? "Monitor daily energy generation using your solar app or inverter display, especially on sunny days."
          : "धूप वाले दिनों में अपने सोलर ऐप या इन्वर्टर डिस्प्ले पर दैनिक बिजली उत्पादन की निगरानी करें।",
        isEn
          ? "Check inverter screen for any warning or error codes."
          : "इन्वर्टर स्क्रीन पर किसी भी चेतावनी या त्रुटि कोड की जांच करें।",
        isEn
          ? "Inspect visible wiring and junction boxes for wear, loose connections, or animal interference."
          : "दिखाई देने वाली वायरिंग और जंक्शन बॉक्स की ढीले कनेक्शन या जानवरों के हस्तक्षेप के लिए जांच करें।",
        isEn
          ? "If you have batteries, monitor voltage and state-of-health indicators."
          : "यदि आपके पास बैटरी हैं, तो वोल्टेज और स्वास्थ्य संकेतकों की निगरानी करें।"
      ]
    },
    {
      number: "2",
      title: isEn ? "Panel Cleaning" : "पैनल की सफाई",
      icon: Droplets,
      gradient: "from-emerald-500 to-teal-500",
      description: isEn
        ? "Dust, bird droppings, and pollution can reduce efficiency by up to 25%. Clean panels every 2–3 months or when visible dust appears. Use soft water and a microfiber cloth — never use soap, harsh brushes, or during peak sunlight hours."
        : "धूल, पक्षियों की बीट और प्रदूषण दक्षता को 25% तक कम कर सकते हैं। हर 2–3 महीने में या जब धूल दिखाई दे, तब पैनल की सफाई करें। मुलायम पानी और माइक्रोफाइबर कपड़े का उपयोग करें — साबुन या कठोर ब्रश का उपयोग न करें और दोपहर की धूप में सफाई न करें।"
    },
    {
      number: "3",
      title: isEn ? "Battery Care" : "बैटरी की देखभाल",
      icon: Battery,
      gradient: "from-purple-500 to-pink-500",
      description: isEn
        ? "Modern lithium-ion batteries are largely maintenance-free, but ensure proper ventilation around the unit. Keep the area dry, clean, and shaded from direct sunlight. Ideal operating temperature is between 15°C and 30°C."
        : "आधुनिक लिथियम-आयन बैटरी लगभग रखरखाव-मुक्त होती हैं, लेकिन यूनिट के आसपास उचित वेंटिलेशन सुनिश्चित करें। क्षेत्र को सूखा, स्वच्छ और सीधी धूप से दूर रखें। आदर्श तापमान 15°C से 30°C के बीच होता है।"
    },
    {
      number: "4",
      title: isEn ? "Inverter Maintenance" : "इन्वर्टर रखरखाव",
      icon: Cpu,
      gradient: "from-orange-500 to-red-500",
      description: isEn
        ? "Your inverter is the brain of the solar system. Keep it dust-free and ensure open airflow. Clean air vents monthly. If you notice unusual noises, flickering lights, or frequent shutdowns — call a technician immediately."
        : "इन्वर्टर सोलर सिस्टम का मस्तिष्क है। इसे धूल-मुक्त रखें और पर्याप्त वायु प्रवाह सुनिश्चित करें। हवा के वेंट्स की मासिक सफाई करें। यदि असामान्य आवाज़, झपकती लाइटें या बार-बार बंद होना दिखे — तुरंत तकनीशियन से संपर्क करें।"
    },
    {
      number: "5",
      title: isEn ? "Electrical Safety" : "विद्युत सुरक्षा",
      icon: Shield,
      gradient: "from-amber-500 to-yellow-500",
      description: isEn
        ? "Never open or touch any live electrical part. Turn off the system during heavy rain, lightning, or maintenance work. Check earthing points annually — proper grounding is essential for both safety and performance."
        : "कभी भी किसी जीवित विद्युत भाग को न छुएं। भारी बारिश, बिजली गिरने या रखरखाव के दौरान सिस्टम बंद कर दें। अर्थिंग पॉइंट्स की वार्षिक जांच करें — सही अर्थिंग सुरक्षा और प्रदर्शन दोनों के लिए आवश्यक है।"
    },
    {
      number: "6",
      title: isEn ? "Annual Professional Check-up" : "वार्षिक व्यावसायिक जांच",
      icon: Wrench,
      gradient: "from-indigo-500 to-blue-500",
      description: isEn
        ? "A professional inspection once a year helps ensure your system runs efficiently. Technicians verify wiring, insulation, inverter calibration, and system output. Regular servicing prevents long-term damage and maintains your warranty."
        : "वर्ष में एक बार पेशेवर निरीक्षण सुनिश्चित करता है कि आपका सिस्टम कुशलता से काम कर रहा है। तकनीशियन वायरिंग, इंसुलेशन, इन्वर्टर कैलिब्रेशन और सिस्टम आउटपुट की जांच करते हैं। नियमित सेवा दीर्घकालिक क्षति को रोकती है और आपकी वारंटी बनाए रखती है।"
    }
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
              <Wrench className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {isEn ? "Solar System Maintenance Guide" : "सोलर सिस्टम रखरखाव गाइड"}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {isEn
                ? "Simple and practical maintenance steps to help your solar system stay efficient, safe, and long-lasting — for you and the planet."
                : "आपके सोलर सिस्टम को कुशल, सुरक्षित और टिकाऊ बनाए रखने के लिए सरल और व्यावहारिक रखरखाव सुझाव — आपके और पर्यावरण के लिए।"}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="bg-white rounded-xl border-2 border-slate-200 p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">25%</div>
              <p className="text-slate-600 text-sm">{isEn ? "Efficiency loss from dust" : "धूल से दक्षता हानि"}</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-slate-200 p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">2-3</div>
              <p className="text-slate-600 text-sm">{isEn ? "Months between cleanings" : "सफाई के बीच महीने"}</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-slate-200 p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">1x</div>
              <p className="text-slate-600 text-sm">{isEn ? "Annual professional check" : "वार्षिक व्यावसायिक जांच"}</p>
            </div>
          </div>

          {/* Maintenance Steps */}
          <div className="space-y-8">
            {maintenanceSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border-2 border-slate-200 hover:border-emerald-400 transition-all duration-300 overflow-hidden hover:shadow-2xl group"
                >
                  <div className={`h-2 bg-gradient-to-r ${step.gradient}`} />
                  
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      {/* Number Badge */}
                      <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                        {step.number}
                      </div>

                      <div className="flex-1">
                        {/* Title with Icon */}
                        <div className="flex items-center gap-3 mb-4">
                          <Icon className="w-6 h-6 text-emerald-600" />
                          <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                        </div>

                        {/* Description or Checklist */}
                        {step.checks ? (
                          <ul className="space-y-3">
                            {step.checks.map((check, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700 leading-relaxed">{check}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-slate-700 leading-relaxed">{step.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Safety Warning */}
          <div className="mt-12 bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-amber-900 mb-2">
                  {isEn ? "Safety First!" : "सुरक्षा पहले!"}
                </h4>
                <p className="text-amber-800 leading-relaxed">
                  {isEn
                    ? "Always turn off your solar system before any maintenance work. Never touch live electrical components. If you're unsure about any maintenance task, contact a certified technician."
                    : "किसी भी रखरखाव कार्य से पहले हमेशा अपना सोलर सिस्टम बंद कर दें। कभी भी जीवित विद्युत घटकों को न छुएं। यदि आप किसी रखरखाव कार्य के बारे में अनिश्चित हैं, तो प्रमाणित तकनीशियन से संपर्क करें।"}
                </p>
              </div>
            </div>
          </div>

          {/* Temperature Tip */}
          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <Battery className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-blue-900 mb-2">
                  {isEn ? "Optimal Temperature Range" : "इष्टतम तापमान सीमा"}
                </h4>
                <p className="text-blue-800 leading-relaxed">
                  {isEn
                    ? "Keep your battery system between 15°C and 30°C for best performance. Extreme temperatures can reduce efficiency and lifespan."
                    : "सर्वोत्तम प्रदर्शन के लिए अपनी बैटरी सिस्टम को 15°C और 30°C के बीच रखें। अत्यधिक तापमान दक्षता और जीवनकाल को कम कर सकता है।"}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl mb-6">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {isEn ? "Want a hassle-free maintenance plan?" : "बिना झंझट रखरखाव चाहते हैं?"}
            </h3>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              {isEn
                ? "Our team provides affordable annual maintenance contracts, including system inspection, cleaning, and performance testing — keeping your solar investment protected all year."
                : "हमारी टीम सस्ती वार्षिक रखरखाव सेवाएं प्रदान करती है — जिसमें सिस्टम निरीक्षण, सफाई और प्रदर्शन परीक्षण शामिल हैं, ताकि आपका सोलर निवेश पूरे साल सुरक्षित रहे।"}
            </p>
            <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              {isEn ? "Book a Service Visit" : "सेवा विजिट बुक करें"}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
