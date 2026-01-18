
"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, DollarSign, CheckCircle, FileText, ClipboardCheck, Zap, Building, TrendingUp, AlertCircle, Sparkles, Clock, Shield } from "lucide-react"

export default function SubsidyGuidePage() {
  const { language } = useLanguage()
  const isEn = language === "en"

  const steps = [
    {
      number: "1",
      title: isEn ? "Check Your Eligibility" : "अपनी पात्रता जांचें",
      icon: CheckCircle,
      gradient: "from-blue-500 to-indigo-500",
      description: isEn
        ? "Any Indian household owning a residential property with a valid electricity connection can apply. The property must have sufficient roof space and a sanctioned load that matches solar installation capacity. Note: Only grid-connected residential systems are eligible – off-grid systems do not qualify for this subsidy."
        : "कोई भी भारतीय परिवार जिसके पास वैध बिजली कनेक्शन वाली आवासीय संपत्ति है, आवेदन कर सकता है। संपत्ति में पर्याप्त छत की जगह होनी चाहिए और सोलर इंस्टॉलेशन क्षमता के अनुरूप लोड स्वीकृत होना चाहिए। नोट: केवल ग्रिड से जुड़े आवासीय सिस्टम पात्र हैं – ऑफ-ग्रिड सिस्टम इस सब्सिडी के लिए योग्य नहीं हैं।"
    },
    {
      number: "2",
      title: isEn ? "Registration & Application" : "पंजीकरण और आवेदन",
      icon: FileText,
      gradient: "from-emerald-500 to-teal-500",
      description: isEn
        ? "Apply directly through the official PM Surya Ghar portal (pmsuryaghar.gov.in). You will need your electricity bill, bank details, property proof, and a photo of your rooftop. Pick an approved vendor from the portal list. Alternatively, our team can assist with registration and complete documentation."
        : "आधिकारिक पीएम सूर्य घर पोर्टल (pmsuryaghar.gov.in) के माध्यम से सीधे आवेदन करें। इसके लिए बिजली बिल, बैंक विवरण, संपत्ति प्रमाण और छत की तस्वीर आवश्यक है। पोर्टल सूची से एक स्वीकृत विक्रेता चुनें। वैकल्पिक रूप से, हमारी टीम पंजीकरण और पूर्ण दस्तावेज़ीकरण में आपकी सहायता कर सकती है।"
    },
    {
      number: "3",
      title: isEn ? "Technical Inspection & Approval" : "तकनीकी निरीक्षण और स्वीकृति",
      icon: ClipboardCheck,
      gradient: "from-purple-500 to-pink-500",
      description: isEn
        ? "After application, DISCOM or MNRE-approved representatives will visit your site for technical verification, ensuring structural safety, load matching, and panel placement suitability. They'll also verify that your system design complies with safety standards and grid connection requirements."
        : "आवेदन के बाद, डिस्कॉम या MNRE-स्वीकृत प्रतिनिधि तकनीकी सत्यापन के लिए आपके स्थान का निरीक्षण करेंगे, जिसमें संरचनात्मक सुरक्षा, लोड मिलान और पैनल प्लेसमेंट की उपयुक्तता सुनिश्चित की जाती है। वे यह भी सत्यापित करेंगे कि आपका सिस्टम डिजाइन सुरक्षा मानकों और ग्रिड कनेक्शन आवश्यकताओं का पालन करता है।"
    },
    {
      number: "4",
      title: isEn ? "Installation & Net Metering" : "स्थापना और नेट मीटरिंग",
      icon: Zap,
      gradient: "from-orange-500 to-red-500",
      description: isEn
        ? "Once approved, installation is carried out by our certified technicians using government-approved equipment. The actual panel installation is usually completed in 1–3 days. Post-installation, you must apply to your local DISCOM for a bidirectional net-meter by submitting your electricity bill, ID/address proof, and system diagram. After technical inspection, the utility installs the net meter to track energy generation and grid export."
        : "अनुमोदन के बाद, हमारे प्रमाणित तकनीशियन सरकार-स्वीकृत उपकरणों के साथ स्थापना करते हैं। वास्तविक पैनल स्थापना आमतौर पर 1–3 दिनों में पूरी हो जाती है। स्थापना के बाद, आपको अपने बिजली बिल, आईडी/पता प्रमाण और सिस्टम आरेख जमा करके द्विदिशात्मक नेट-मीटर के लिए अपने स्थानीय डिस्कॉम में आवेदन करना होगा। तकनीकी निरीक्षण के बाद, उपयोगिता ऊर्जा उत्पादन और ग्रिड निर्यात को ट्रैक करने के लिए नेट मीटर स्थापित करती है।"
    },
    {
      number: "5",
      title: isEn ? "Subsidy Disbursement" : "सब्सिडी भुगतान",
      icon: DollarSign,
      gradient: "from-green-500 to-emerald-500",
      description: isEn
        ? "After final inspection and system activation, you receive permission to operate and offset your bill. The MNRE then transfers the subsidy amount (Central Financial Assistance) directly to your registered bank account — typically within 30–45 days of system commissioning. In practice, you pay only the cost minus subsidy."
        : "अंतिम निरीक्षण और सिस्टम सक्रिय होने के बाद, आपको संचालन की अनुमति मिलती है और बिल में छूट मिलती है। MNRE फिर सब्सिडी राशि (केंद्रीय वित्तीय सहायता) सीधे आपके पंजीकृत बैंक खाते में स्थानांतरित करता है — आमतौर पर सिस्टम कमीशनिंग के 30–45 दिनों के भीतर। व्यवहार में, आप केवल लागत घटा सब्सिडी का भुगतान करते हैं।"
    }
  ]

  const highlights = [
    {
      icon: DollarSign,
      text: isEn ? "Up to ₹1,08,000 subsidy under PM Surya Ghar Yojana" : "पीएम सूर्य घर योजना के तहत ₹1,08,000 तक सब्सिडी"
    },
    {
      icon: FileText,
      text: isEn ? "Complete documentation and approval support" : "पूर्ण दस्तावेज़ और अनुमोदन सहायता"
    },
    {
      icon: Building,
      text: isEn ? "End-to-end installation by certified local team" : "प्रमाणित स्थानीय टीम द्वारा संपूर्ण स्थापना"
    },
    {
      icon: CheckCircle,
      text: isEn ? "Hassle-free process managed by Akshat Sales" : "अक्षत सेल्स द्वारा झंझट-मुक्त प्रक्रिया"
    }
  ]

  const subsidyTiers = [
    { capacity: "1 kW", subsidy: "₹30,000", color: "from-blue-400 to-cyan-500" },
    { capacity: "2 kW", subsidy: "₹60,000", color: "from-emerald-400 to-teal-500" },
    { capacity: "3 kW", subsidy: "₹78,000", color: "from-purple-400 to-pink-500" },
    { capacity: "4+ kW", subsidy: "₹1,08,000", color: "from-orange-400 to-red-500" }
  ]

  const timeline = [
    {
      icon: FileText,
      title: isEn ? "Application & Approvals" : "आवेदन और स्वीकृति",
      duration: isEn ? "2-3 weeks" : "2-3 सप्ताह",
      description: isEn ? "Portal registration, document submission, and approval from local authorities and DISCOM" : "पोर्टल पंजीकरण, दस्तावेज़ जमा करना, और स्थानीय अधिकारियों और डिस्कॉम से अनुमोदन"
    },
    {
      icon: Zap,
      title: isEn ? "Installation" : "स्थापना",
      duration: isEn ? "1-3 days" : "1-3 दिन",
      description: isEn ? "Actual panel installation and system setup by certified technicians" : "प्रमाणित तकनीशियनों द्वारा वास्तविक पैनल स्थापना और सिस्टम सेटअप"
    },
    {
      icon: ClipboardCheck,
      title: isEn ? "Inspection & Commissioning" : "निरीक्षण और कमीशनिंग",
      duration: isEn ? "1-2 weeks" : "1-2 सप्ताह",
      description: isEn ? "Final technical inspection, net meter installation, and permission to operate" : "अंतिम तकनीकी निरीक्षण, नेट मीटर स्थापना, और संचालन की अनुमति"
    },
    {
      icon: DollarSign,
      title: isEn ? "Subsidy Transfer" : "सब्सिडी स्थानांतरण",
      duration: isEn ? "30-45 days" : "30-45 दिन",
      description: isEn ? "Direct bank transfer of subsidy amount after system activation" : "सिस्टम सक्रिय होने के बाद सब्सिडी राशि का सीधा बैंक स्थानांतरण"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl mb-6 shadow-lg">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {isEn ? "Subsidy & Paperwork Guide" : "सब्सिडी और कागजी कार्य गाइड"}
            </h1>
            <p className="text-lg text-emerald-400 font-semibold mb-4">
              {isEn ? "PM Surya Ghar Yojana" : "पीएम सूर्य घर योजना"}
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              {isEn
                ? "Everything you need to know about claiming your subsidy under the Government of India's PM Surya Ghar Muft Bijli Yojana, from eligibility to disbursement."
                : "भारत सरकार की पीएम सूर्य घर मुफ्त बिजली योजना के तहत सब्सिडी प्राप्त करने के लिए आवश्यक सभी जानकारी, पात्रता से लेकर भुगतान तक।"}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Scheme Overview */}
          <div className="mb-16 bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-12 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <Building className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                {isEn ? "About the PM Surya Ghar Yojana" : "पीएम सूर्य घर योजना के बारे में"}
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg mb-4">
              {isEn
                ? "The PM Surya Ghar Muft Bijli Yojana is a national initiative promoting residential rooftop solar systems across India. Under this scheme, homeowners can receive a government subsidy of up to ₹1,08,000 depending on system size and capacity."
                : "पीएम सूर्य घर मुफ्त बिजली योजना भारत भर में आवासीय रूफटॉप सोलर सिस्टम को बढ़ावा देने की एक राष्ट्रीय पहल है। इस योजना के तहत, घर-मालिक सिस्टम के आकार और क्षमता के अनुसार ₹1,08,000 तक की सरकारी सब्सिडी प्राप्त कर सकते हैं।"}
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              {isEn
                ? "Residential systems ≥3 kW receive a fixed ₹78,000 subsidy. Smaller systems get proportionally less, but any system above 3 kW caps at ₹78,000, while systems of 4 kW and above receive the maximum ₹1,08,000."
                : "3 kW से अधिक आवासीय प्रणालियों को ₹78,000 की निश्चित सब्सिडी मिलती है। छोटे सिस्टम को आनुपातिक रूप से कम मिलता है, लेकिन 3 kW से ऊपर के किसी भी सिस्टम की सीमा ₹78,000 है, जबकि 4 kW और उससे अधिक के सिस्टम को अधिकतम ₹1,08,000 मिलते हैं।"}
            </p>
          </div>

          {/* Subsidy Tiers */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {isEn ? "Subsidy Amount by System Size" : "सिस्टम आकार के अनुसार सब्सिडी राशि"}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {subsidyTiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border-2 border-slate-200 hover:border-emerald-400 transition-all duration-300 overflow-hidden hover:shadow-2xl group"
                >
                  <div className={`h-2 bg-gradient-to-r ${tier.color}`} />
                  <div className="p-6 text-center">
                    <div className="text-3xl font-bold text-slate-900 mb-2">{tier.capacity}</div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-2`}>
                      {tier.subsidy}
                    </div>
                    <div className="text-sm text-slate-600">{isEn ? "Subsidy" : "सब्सिडी"}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {isEn ? "Application Process" : "आवेदन प्रक्रिया"}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full" />
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border-2 border-slate-200 hover:border-emerald-400 transition-all duration-300 overflow-hidden hover:shadow-2xl group"
                  >
                    <div className={`h-2 bg-gradient-to-r ${step.gradient}`} />
                    
                    <div className="p-8">
                      <div className="flex items-start gap-6">
                        <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                          {step.number}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <Icon className="w-6 h-6 text-emerald-600" />
                            <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                          </div>

                          <p className="text-slate-700 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {isEn ? "Process Timeline" : "प्रक्रिया समयरेखा"}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border-2 border-slate-200 hover:border-emerald-400 p-6 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-semibold text-emerald-600">{item.duration}</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Quick Highlights */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {isEn ? "Quick Highlights" : "मुख्य विशेषताएँ"}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border-2 border-slate-200 hover:border-emerald-400 p-6 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-slate-700 leading-relaxed flex-1">{highlight.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Important Note */}
          <div className="mb-16 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-blue-900 mb-2">
                  {isEn ? "Important Information" : "महत्वपूर्ण जानकारी"}
                </h4>
                <p className="text-blue-800 leading-relaxed">
                  {isEn
                    ? "The subsidy is transferred directly to your bank account by MNRE after final inspection. The timeline typically ranges from 30-45 days post-commissioning. Ensure all documents are accurate to avoid delays. Throughout this process, approvals from local authorities and DISCOM, along with equipment delivery, typically take a few weeks."
                    : "सब्सिडी अंतिम निरीक्षण के बाद MNRE द्वारा सीधे आपके बैंक खाते में स्थानांतरित की जाती है। समयसीमा आमतौर पर कमीशनिंग के बाद 30-45 दिनों की होती है। देरी से बचने के लिए सभी दस्तावेज़ सटीक सुनिश्चित करें। इस प्रक्रिया के दौरान, स्थानीय अधिकारियों और डिस्कॉम से अनुमोदन, उपकरण वितरण के साथ, आमतौर पर कुछ सप्ताह लगते हैं।"}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {isEn ? "We'll handle the paperwork for you!" : "हम आपके लिए पूरा कागजी कार्य संभालेंगे!"}
            </h3>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              {isEn
                ? "Our team helps you register, submit documents, and get your subsidy approved — saving you time and effort."
                : "हमारी टीम आपको पंजीकरण, दस्तावेज़ जमा करने और आपकी सब्सिडी स्वीकृत कराने में मदद करती है — जिससे आपका समय और मेहनत दोनों बचते हैं।"}
            </p>
            <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              {isEn ? "Get Subsidy Assistance" : "सब्सिडी सहायता प्राप्त करें"}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}