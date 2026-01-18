"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, Sun, Zap, Battery, ArrowLeftRight, ClipboardCheck, Lightbulb, TrendingUp, Droplets, Wrench, Calendar, Shield } from "lucide-react"

export default function ResidentialGuidePage() {
  const { language } = useLanguage()
  const isEn = language === "en"

  const solarSteps = [
    {
      number: "1",
      title: isEn ? "Solar Panels" : "सोलर पैनल",
      icon: Sun,
      gradient: "from-yellow-400 to-orange-500",
      stat: "540-650W",
      statLabel: isEn ? "Per Panel" : "प्रति पैनल",
      description: isEn
        ? "Solar panels are made of photovoltaic (PV) cells that convert sunlight directly into electricity. When sunlight hits these silicon-based cells, electrons move, generating direct current (DC). A typical residential panel produces 540–650 watts of power."
        : "सोलर पैनल फोटोवोल्टिक (PV) सेल से बने होते हैं जो सूर्य के प्रकाश को सीधे बिजली में बदलते हैं। जब सूर्य की रोशनी इन सिलिकॉन आधारित कोशिकाओं पर पड़ती है, तो इलेक्ट्रॉन गति करते हैं और सीधी धारा (DC) उत्पन्न होती है। एक सामान्य घरेलू पैनल 540–650 वॉट बिजली उत्पन्न करता है।"
    },
    {
      number: "2",
      title: isEn ? "Inverters" : "इन्वर्टर",
      icon: Zap,
      gradient: "from-blue-400 to-indigo-500",
      stat: "DC→AC",
      statLabel: isEn ? "Conversion" : "रूपांतरण",
      description: isEn
        ? "Inverters convert DC electricity from the panels into AC electricity, the type used by home appliances. They also track system performance and ensure grid synchronization. Most homes use either a single string inverter or multiple microinverters for better efficiency."
        : "इन्वर्टर पैनल से उत्पन्न DC बिजली को AC में बदलते हैं वही बिजली जो घर के उपकरणों में उपयोग होती है। वे सिस्टम के प्रदर्शन की निगरानी करते हैं और ग्रिड सिंक्रोनाइजेशन सुनिश्चित करते हैं। अधिकांश घर एक स्ट्रिंग इन्वर्टर या कई माइक्रोइन्वर्टर का उपयोग करते हैं ताकि दक्षता बेहतर हो सके।"
    },
    {
      number: "3",
      title: isEn ? "Batteries (Optional)" : "बैटरी (वैकल्पिक)",
      icon: Battery,
      gradient: "from-emerald-400 to-teal-500",
      stat: "5-10 kWh",
      statLabel: isEn ? "Storage" : "भंडारण",
      description: isEn
        ? "Batteries store extra solar energy generated during the day, so you can use it at night or on cloudy days. Lithium-ion batteries are preferred for their long lifespan, fast charging, and higher efficiency. A typical home system uses 5–10 kWh of battery storage."
        : "बैटरी दिन में उत्पन्न अतिरिक्त सौर ऊर्जा को संग्रहीत करती हैं ताकि आप रात में या बादल वाले दिनों में इसका उपयोग कर सकें। लिथियम-आयन बैटरी उनकी लंबी उम्र, तेज़ चार्जिंग और अधिक दक्षता के कारण लोकप्रिय हैं। एक सामान्य घरेलू सिस्टम में 5–10 kWh की बैटरी स्टोरेज होती है।"
    },
    {
      number: "4",
      title: isEn ? "Net Metering" : "नेट मीटरिंग",
      icon: ArrowLeftRight,
      gradient: "from-purple-400 to-pink-500",
      stat: "↔",
      statLabel: isEn ? "Two-Way" : "दोतरफा",
      description: isEn
        ? "Net metering lets you send extra electricity back to the grid. When your panels produce more power than you use, your electricity meter runs backward, giving you credits that reduce your future bills. A bidirectional net-meter is installed by your DISCOM to track both import and export of power."
        : "नेट मीटरिंग आपको अतिरिक्त बिजली को ग्रिड में वापस भेजने की अनुमति देती है। जब आपके पैनल आपकी आवश्यकता से अधिक बिजली उत्पन्न करते हैं, तो आपका बिजली मीटर उल्टा चलता है और आपको भविष्य के बिलों पर क्रेडिट मिलता है। आपके डिस्कॉम द्वारा बिजली के आयात और निर्यात दोनों को ट्रैक करने के लिए एक द्विदिशात्मक नेट-मीटर स्थापित किया जाता है।"
    },
    {
      number: "5",
      title: isEn ? "System Design & Site Inspection" : "सिस्टम डिज़ाइन और साइट निरीक्षण",
      icon: ClipboardCheck,
      gradient: "from-red-400 to-orange-500",
      stat: "100%",
      statLabel: isEn ? "Custom" : "अनुकूलित",
      description: isEn
        ? "A proper system design depends on your daily power usage, roof area, and local sunlight availability. During a site inspection, engineers assess roof strength, shadow areas, and electrical setup to recommend the most efficient and cost-effective system."
        : "एक सही सिस्टम डिज़ाइन आपकी दैनिक बिजली खपत, छत के क्षेत्र और स्थानीय धूप की उपलब्धता पर निर्भर करता है। साइट निरीक्षण के दौरान, इंजीनियर छत की मजबूती, छाया वाले क्षेत्र और विद्युत सेटअप का मूल्यांकन करते हैं ताकि सबसे कुशल और किफायती सिस्टम सुझाया जा सके।"
    }
  ]

  const systemTypes = [
    {
      title: isEn ? "On-Grid (Grid-Tied) Systems" : "ऑन-ग्रिड सिस्टम",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
      description: isEn
        ? "Connected to the local utility grid. Excess generation earns billing credits, and the home draws from the grid when solar output is low. These systems require only panels, an inverter, and a certified bidirectional net meter. Most cost-effective for urban homes."
        : "स्थानीय उपयोगिता ग्रिड से जुड़ा हुआ। अतिरिक्त उत्पादन बिलिंग क्रेडिट अर्जित करता है, और जब सौर उत्पादन कम होता है तो घर ग्रिड से बिजली लेता है। इन सिस्टम को केवल पैनल, एक इन्वर्टर और एक प्रमाणित द्विदिशात्मक नेट मीटर की आवश्यकता होती है। शहरी घरों के लिए सबसे किफायती।",
      features: isEn
        ? ["No battery needed", "Grid backup available", "Subsidy eligible", "Lower installation cost"]
        : ["बैटरी की आवश्यकता नहीं", "ग्रिड बैकअप उपलब्ध", "सब्सिडी के लिए पात्र", "कम इंस्टॉलेशन लागत"]
    },
    {
      title: isEn ? "Off-Grid (Standalone) Systems" : "ऑफ-ग्रिड सिस्टम",
      icon: Battery,
      gradient: "from-emerald-500 to-teal-500",
      description: isEn
        ? "Operates independently without grid connection. Must include a battery bank and usually a backup generator because it cannot tap the utility for backup power. More complex and costly but provides complete energy independence."
        : "ग्रिड कनेक्शन के बिना स्वतंत्र रूप से संचालित होता है। बैटरी बैंक और आमतौर पर बैकअप जनरेटर शामिल होना चाहिए क्योंकि यह बैकअप बिजली के लिए उपयोगिता का उपयोग नहीं कर सकता। अधिक जटिल और महंगा लेकिन पूर्ण ऊर्जा स्वतंत्रता प्रदान करता है।",
      features: isEn
        ? ["Complete independence", "Battery backup required", "Ideal for remote areas", "No subsidy available"]
        : ["पूर्ण स्वतंत्रता", "बैटरी बैकअप आवश्यक", "दूरदराज के क्षेत्रों के लिए आदर्श", "कोई सब्सिडी उपलब्ध नहीं"]
    }
  ]

  const maintenanceTips = [
    {
      icon: Droplets,
      title: isEn ? "Regular Cleaning" : "नियमित सफाई",
      description: isEn
        ? "Lightly hose panels with soft water in the cool morning to remove dust, debris or bird droppings. Avoid harsh chemicals or abrasive materials that could damage the panel surface."
        : "धूल, मलबा या पक्षियों की बीट को हटाने के लिए ठंडी सुबह में नरम पानी से पैनलों को हल्के से धोएं। कठोर रसायनों या घर्षण सामग्री से बचें जो पैनल की सतह को नुकसान पहुंचा सकते हैं।"
    },
    {
      icon: Shield,
      title: isEn ? "Visual Inspection" : "दृश्य निरीक्षण",
      description: isEn
        ? "Periodically inspect panels and hardware for cracked glass, loose wiring, or shade from growing vegetation. Check mounting racks for rust or loosening of bolts, especially after storms."
        : "टूटे हुए कांच, ढीली वायरिंग, या बढ़ती वनस्पति से छाया के लिए समय-समय पर पैनल और हार्डवेयर का निरीक्षण करें। विशेष रूप से तूफान के बाद जंग या बोल्ट के ढीले होने के लिए माउंटिंग रैक की जांच करें।"
    },
    {
      icon: TrendingUp,
      title: isEn ? "Performance Monitoring" : "प्रदर्शन निगरानी",
      description: isEn
        ? "Monitor your system's daily output through the inverter display or mobile app. A sudden unexplained drop in kWh/day often signals a problem like dirty panels or inverter trouble."
        : "इन्वर्टर डिस्प्ले या मोबाइल ऐप के माध्यम से अपने सिस्टम के दैनिक उत्पादन की निगरानी करें। kWh/दिन में अचानक अस्पष्ट गिरावट अक्सर गंदे पैनल या इन्वर्टर की समस्या का संकेत देती है।"
    },
    {
      icon: Wrench,
      title: isEn ? "Professional Service" : "पेशेवर सेवा",
      description: isEn
        ? "Schedule a professional inspection at least annually or after major storms to check electrical connections, inverter health, and overall system integrity. This ensures long-term efficiency."
        : "विद्युत कनेक्शन, इन्वर्टर की सेहत और समग्र सिस्टम अखंडता की जांच के लिए कम से कम वार्षिक रूप से या बड़े तूफान के बाद एक पेशेवर निरीक्षण शेड्यूल करें। यह दीर्घकालिक दक्षता सुनिश्चित करता है।"
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: isEn ? "Lower Bills" : "कम बिल",
      description: isEn ? "Save up to 70% on electricity" : "बिजली पर 70% तक बचत"
    },
    {
      icon: Sun,
      title: isEn ? "Clean Energy" : "स्वच्छ ऊर्जा",
      description: isEn ? "Reduce carbon footprint" : "कार्बन फुटप्रिंट कम करें"
    },
    {
      icon: Lightbulb,
      title: isEn ? "Energy Independence" : "ऊर्जा स्वतंत्रता",
      description: isEn ? "Less reliance on grid power" : "ग्रिड पर कम निर्भरता"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
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

        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/resources" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">{isEn ? "Back to Resources" : "संसाधन पर वापस जाएं"}</span>
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mb-6 shadow-lg">
              <Sun className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {isEn ? "How Residential Solar Works" : "घरेलू सोलर कैसे काम करता है"}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {isEn
                ? "Learn how sunlight is turned into usable electricity for your home. This guide explains solar panels, inverters, batteries, and net metering in simple, practical terms."
                : "जानें कि सूर्य की रोशनी आपके घर के लिए उपयोगी बिजली में कैसे बदलती है। यह गाइड सोलर पैनल, इन्वर्टर, बैटरी और नेट मीटरिंग को सरल शब्दों में समझाता है।"}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Benefits Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border-2 border-slate-200 hover:border-emerald-400 p-6 text-center hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          {/* How It Works */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {isEn ? "How It Works" : "यह कैसे काम करता है"}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full" />
          </div>

          {/* Solar Steps */}
          <div className="space-y-8 mb-20">
            {solarSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border-2 border-slate-200 hover:border-emerald-400 transition-all duration-300 overflow-hidden hover:shadow-2xl group"
                >
                  <div className={`h-2 bg-gradient-to-r ${step.gradient}`} />
                  
                  <div className="p-8">
                    <div className="grid md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-3 text-center">
                        <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-xl items-center justify-center text-white text-2xl font-bold shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                          {step.number}
                        </div>

                        <div className="w-20 h-20 bg-slate-50 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                          <Icon className="w-10 h-10 text-slate-700 group-hover:text-emerald-600 transition-colors" />
                        </div>

                        <div className={`text-3xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent mb-1`}>
                          {step.stat}
                        </div>
                        <div className="text-sm text-slate-600 font-medium">
                          {step.statLabel}
                        </div>
                      </div>

                      <div className="md:col-span-9">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                        <p className="text-slate-700 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* System Types */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {isEn ? "System Types" : "सिस्टम प्रकार"}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {systemTypes.map((type, index) => {
                const Icon = type.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border-2 border-slate-200 hover:border-emerald-400 transition-all duration-300 overflow-hidden hover:shadow-2xl group"
                  >
                    <div className={`h-2 bg-gradient-to-r ${type.gradient}`} />
                    
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${type.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">{type.title}</h3>
                      </div>
                      
                      <p className="text-slate-700 leading-relaxed mb-6">{type.description}</p>
                      
                      <div className="space-y-2">
                        {type.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${type.gradient}`} />
                            <span className="text-slate-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Visual Flow Diagram */}
          <div className="mb-20 bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              {isEn ? "Energy Flow" : "ऊर्जा प्रवाह"}
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg mb-3">
                  <Sun className="w-10 h-10 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-700">{isEn ? "Solar Panel" : "सोलर पैनल"}</span>
                <span className="text-xs text-slate-500">DC Power</span>
              </div>

              <div className="rotate-90 md:rotate-0">
                <ArrowLeftRight className="w-8 h-8 text-emerald-500" />
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg mb-3">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-700">{isEn ? "Inverter" : "इन्वर्टर"}</span>
                <span className="text-xs text-slate-500">AC Power</span>
              </div>

              <div className="rotate-90 md:rotate-0">
                <ArrowLeftRight className="w-8 h-8 text-emerald-500" />
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg mb-3">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-700">{isEn ? "Your Home" : "आपका घर"}</span>
                <span className="text-xs text-slate-500">{isEn ? "Appliances" : "उपकरण"}</span>
              </div>
            </div>
          </div>

          {/* Maintenance Tips */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {isEn ? "Maintenance Tips" : "रखरखाव युक्तियाँ"}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full" />
              <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                {isEn
                  ? "Solar PV systems require minimal upkeep but should not be ignored. Follow these simple maintenance practices to keep your system efficient and prolong its lifespan."
                  : "सोलर पीवी सिस्टम को न्यूनतम रखरखाव की आवश्यकता होती है लेकिन इसे नज़रअंदाज़ नहीं किया जाना चाहिए। अपने सिस्टम को कुशल रखने और इसकी आयु बढ़ाने के लिए इन सरल रखरखाव प्रथाओं का पालन करें।"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {maintenanceTips.map((tip, index) => {
                const Icon = tip.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border-2 border-slate-200 hover:border-emerald-400 p-6 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">{tip.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl mb-6">
              <ClipboardCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {isEn ? "Thinking about switching to solar?" : "क्या आप सोलर अपनाने के बारे में सोच रहे हैं?"}
            </h3>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              {isEn
                ? "Schedule a free site visit. Our team will evaluate your roof, consumption pattern, and give a clear cost-saving estimate."
                : "एक नि:शुल्क साइट विज़िट शेड्यूल करें, हमारी टीम आपकछत, बिजली उपयोग और बचत का सटीक अनुमान देगी।"}
</p>
<button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
{isEn ? "Book a Free Consultation" : "मुफ्त परामर्श बुक करें"}
</button>
</div>
</div>
</section>
</main>
)
}