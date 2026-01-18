"use client";

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Phone, MessageCircle, Mail, ArrowRight,Building2,Handshake,BarChart3,Wrench,CheckCircle2, CheckCircle, Award, Users,Sparkles, Zap, Shield, Clock, TrendingUp, Sun, Leaf, DollarSign } from "lucide-react"

export default function AboutPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const { language } = useLanguage()
  const isEn = language === "en"

  const PHONE_1 = "+91-9203407300"
  const WHATSAPP = "https://wa.me/919201962695"

  const features = [
    {
      icon: Shield,
      title: isEn ? "Government approved brands" : "सरकारी-मान्यता प्राप्त ब्रांड",
      desc: isEn ? "Panels, inverters and batteries from MNRE and DISCOM approved companies only." : "MNRE और DISCOM द्वारा स्वीकृत कंपनियों के पैनल, इन्वर्टर और बैटरियाँ।",
      color: "emerald"
    },
    {
      icon: Award,
      title: isEn ? "30 year panel warranty" : "30 साल की पैनल वारंटी",
      desc: isEn ? "Tier one panels with strong performance warranty and service support." : "टियर-वन पैनल, बेहतर परफॉर्मेंस वारंटी और सर्विस सपोर्ट के साथ।",
      color: "blue"
    },
    {
      icon: Zap,
      title: isEn ? "Neat installation" : "साफ-सुथरा इंस्टॉलेशन",
      desc: isEn ? "Trained local team, proper structure and tidy cable management on your roof." : "प्रशिक्षित लोकल टीम, सही स्ट्रक्चर और साफ-सुथरा केबल मैनेजमेंट।",
      color: "orange"
    },
    {
      icon: DollarSign,
      title: isEn ? "PM Surya Ghar guidance" : "पीएम सूर्य घर मार्गदर्शन",
      desc: isEn ? "Help with online portal, documents and subsidy claim under PM Surya Ghar Yojana." : "ऑनलाइन पोर्टल, डॉक्यूमेंट्स और PM Surya Ghar योजना के तहत सब्सिडी क्लेम में सहायता।",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: isEn ? "Honest, simple quotes" : "ईमानदार, सरल कोट",
      desc: isEn ? "Clear pricing without hidden charges so you know exactly what you are paying for." : "स्पष्ट कीमतें, बिना छुपे हुए चार्ज — ताकि आप सही से जान सकें कि आप क्या भुगतान कर रहे हैं।",
      color: "teal"
    },
    {
      icon: Clock,
      title: isEn ? "Regular maintenance" : "नियमित रखरखाव",
      desc: isEn ? "Annual service and on call support to keep your system running smoothly." : "सिस्टम को स्मूथ चलाने के लिए वार्षिक सर्विस और ऑन-कॉल सपोर्ट।",
      color: "indigo"
    }
  ]

  const stats = [
    { number: "500+", label: isEn ? "Happy Customers" : "खुश ग्राहक", icon: Users },
    { number: "2MW+", label: isEn ? "Solar Installed" : "स्थापित सोलर", icon: Sun },
    { number: "98%", label: isEn ? "Satisfaction Rate" : "संतुष्टि दर", icon: CheckCircle },
    { number: "24/7", label: isEn ? "Support Available" : "24/7 सपोर्ट", icon: Clock }
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
          src="/bg3.jpg" 
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
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">{isEn ? "Clean Energy Partner" : "स्वच्छ ऊर्जा साथी"}</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                {isEn ? "About Re-Energen" : "री-एनर्जेन के बारे में"}
              </h1>
              
              <div className="flex items-center justify-center gap-3 text-emerald-400 font-semibold text-lg md:text-xl">
                <span className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  {isEn ? "Renewable" : "नवीकरणीय"}
                </span>
                <span className="text-emerald-300/50">•</span>
                <span className="flex items-center gap-2">
                  <Sun className="w-5 h-5" />
                  {isEn ? "Energy" : "ऊर्जा"}
                </span>
                <span className="text-emerald-300/50">•</span>
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {isEn ? "Generation" : "उत्पादन"}
                </span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
                <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                  {isEn
                    ? "ReEnergen is not just a name, it represents our commitment to clean energy generation built on trust, quality, and long-term performance. Every project reflects our promise to deliver solar solutions that last for decades, not just installations that look good on day one."
                    : "री-एनर्जेन सिर्फ एक नाम नहीं है, यह विश्वास, गुणवत्ता और दीर्घकालिक प्रदर्शन पर आधारित स्वच्छ ऊर्जा उत्पादन के प्रति हमारी प्रतिबद्धता का प्रतीक है। हर परियोजना दशकों तक चलने वाले सौर समाधान प्रदान करने के हमारे वादे को दर्शाती है, न कि सिर्फ पहले दिन अच्छी दिखने वाली इंस्टॉलेशन।"}
                </p>
              </div>

              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                {isEn
                  ? "Backed by decades of business excellence through the MK Group, we deliver high-quality solar installations designed for long-term performance, savings, and sustainability across homes, businesses, and industries throughout India."
                  : "एमके ग्रुप की दशकों की व्यावसायिक उत्कृष्टता के समर्थन के साथ, हम भारत भर में घरों, व्यवसायों और उद्योगों के लिए दीर्घकालिक प्रदर्शन, बचत और स्थिरता को ध्यान में रखकर उच्च-गुणवत्ता वाली सोलर इंस्टॉलेशन सेवाएँ प्रदान करते हैं।"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">

              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                {isEn ? "Making Solar Simple for Families" : "परिवारों के लिए सोलर को सरल बनाना"}
              </h2>
              
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  {isEn
                    ? "We started Re-Energen to make solar simple for families. Instead of confusing packages and hidden charges, we help you understand what size system you actually need, how much you can save and which subsidy you can get under the PM Surya Ghar Yojana."
                    : "हमने परिवारों के लिए सोलर को सरल बनाने के उद्देश्य से री-एनर्जेन शुरू किया। उलझन भरे पैकेज और छुपे हुए चार्जेज के बजाय, हम बताते हैं कि आपको किस साइज़ का सिस्टम चाहिए, आप कितनी बचत कर सकते हैं और PM Surya Ghar योजना के तहत कौन सी सब्सिडी मिल सकती है।"}
                </p>
                <p>
                  {isEn
                    ? "Our team handles everything from site visit and design to paperwork, installation and after sales service, so that you deal with a single trusted partner."
                    : "हमारी टीम साइट विज़िट और डिज़ाइन से लेकर पेपरवर्क, इंस्टॉलेशन और आफ्टर-सेल्स सर्विस तक सब संभालती है — ताकि आपको एक ही विश्वसनीय पार्टनर से काम करना पड़े।"}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">{isEn ? "Single Point Contact" : "सिंगल प्वाइंट संपर्क"}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">{isEn ? "End-to-End Support" : "एंड-टू-एंड सपोर्ट"}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">{isEn ? "Transparent Pricing" : "पारदर्शी मूल्य निर्धारण"}</span>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity" />
              <img
                src="/family-with-solar.png"
                alt="Customer family with rooftop solar"
                className="relative w-full rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>
      {/* Mission, Vision & Why Choose Us — Unified Section */}
<section className="relative py-16 md:py-28 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white overflow-hidden">

  {/* Continuous Grid Pattern Background */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(16, 185, 129) 1px, transparent 1px), linear-gradient(to bottom, rgb(16, 185, 129) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* ================= Mission & Vision ================= */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {isEn ? "Our Mission & Vision" : "हमारा मिशन और विज़न"}
      </h2>
      <p className="text-slate-300 max-w-2xl mx-auto">
        {isEn
          ? "Driving the clean energy revolution, one rooftop at a time"
          : "स्वच्छ ऊर्जा क्रांति को हर रूफटॉप तक पहुँचाना"}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-stretch">

      {/* Mission */}
      <div className="group relative h-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500" />
        <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/12 transition-all duration-500 ease-out">
          <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-[1.02] transition-transform duration-500 ease-out">
            <Zap className="w-7 h-7 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            {isEn ? "Our Mission" : "हमारा मिशन"}
          </h3>
          <p className="text-slate-300 leading-relaxed">
            {isEn
              ? "To be a trusted leader in India’s renewable energy transition by making solar power reliable, affordable, and long-lasting."
              : "भारत की नवीकरणीय ऊर्जा परिवर्तन प्रक्रिया में एक विश्वसनीय अग्रणी बनना, सौर ऊर्जा को भरोसेमंद, किफायती और दीर्घकालिक बनाकर।"}
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="group relative h-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500" />
        <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/12 transition-all duration-500 ease-out">
          <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-[1.02] transition-transform duration-500 ease-out">
            <Sun className="w-7 h-7 text-teal-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            {isEn ? "Our Vision" : "हमारा विज़न"}
          </h3>
          <p className="text-slate-300 leading-relaxed">
            {isEn
              ? "To deliver dependable, high-quality solar energy solutions that help individuals and businesses reduce costs, embrace sustainability, and move confidently toward a cleaner future."
              : "विश्वसनीय और उच्च-गुणवत्ता वाली सौर ऊर्जा समाधान प्रदान करना, जो व्यक्तियों और व्यवसायों को लागत कम करने, स्थिरता अपनाने और एक स्वच्छ भविष्य की ओर आत्मविश्वास के साथ आगे बढ़ने में सहायता करें।"}
          </p>
        </div>
      </div>
    </div>

    {/* ================= Why Choose Us ================= */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {isEn ? "Why Choose Re-Energen?" : "री-एनर्जेन क्यों चुनें?"}
      </h2>
      <p className="text-slate-300 max-w-2xl mx-auto">
        {isEn
          ? "Your trusted partner for clean, reliable solar energy solutions"
          : "स्वच्छ, भरोसेमंद सौर ऊर्जा समाधान के लिए आपका विश्वसनीय पार्टनर"}
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="group relative h-full"
        >
          <div
            className={`absolute -inset-1 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 rounded-2xl opacity-0 group-hover:opacity-35 blur-sm transition-opacity duration-500`}
          />
          <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/12 transition-all duration-500 ease-out">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-[1.02] transition-transform duration-500 ease-out">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {feature.desc}
            </p>

            <div className="mt-4 flex items-center gap-2 text-emerald-300 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
              <span className="text-sm font-medium">
                {isEn ? "Learn more" : "और जानें"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* Leadership Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
  {/* Subtle Background Pattern */}
  <div className="absolute inset-0 opacity-[0.03]">
    <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)', backgroundSize: '40px 40px'}} />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16 md:mb-24">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
        {isEn ? "Meet Our Founders" : "हमारे संस्थापकों से मिलें"}
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        {isEn 
          ? "Combining decades of business expertise with a vision for sustainable energy" 
          : "टिकाऊ ऊर्जा के दृष्टिकोण के साथ दशकों की व्यावसायिक विशेषज्ञता का संयोजन"}
      </p>
    </div>

    {/* Founder 1 - Rakesh Goyal */}
    <div className="mb-24 md:mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Content Column - Left */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {isEn ? "Mr. Rakesh Goyal" : "श्री राकेश गोयल"}
            </h3>
            <p className="text-emerald-600 font-semibold text-lg">
              {isEn ? "Co-Founder, Re-Energen" : "सह-संस्थापक, री-एनर्जेन"}
            </p>
            <p className="text-slate-500 text-sm">
              {isEn ? "Founder – Furnika" : "संस्थापक – फर्निका"}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">
                  {isEn ? "20+ Years of Business Leadership" : "20+ वर्ष का व्यावसायिक नेतृत्व"}
                </h4>
                <p className="text-sm text-slate-600">
                  {isEn 
                    ? "Entrepreneur with diversified business leadership in Chhattisgarh"
                    : "छत्तीसगढ़ में विविध व्यवसाय नेतृत्व के साथ उद्यमी"}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">
                  {isEn ? "Multi-Sector Business Experience" : "बहु-क्षेत्र व्यावसायिक अनुभव"}
                </h4>
                <p className="text-sm text-slate-600">
                  {isEn 
                    ? "Furniture manufacturing, government supply contracts (CSPDCL, CREDA), pharma & FMCG distribution"
                    : "फर्नीचर निर्माण, सरकारी आपूर्ति अनुबंध (CSPDCL, CREDA), फार्मा और FMCG वितरण"}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">
                  {isEn ? "Brand & Institutional Exposure" : "ब्रांड और संस्थागत अनुभव"}
                </h4>
                <p className="text-sm text-slate-600">
                  {isEn 
                    ? "Worked with leading brands including Amul, Nirma, and Britannia"
                    : "अमूल, निर्मा और ब्रिटानिया सहित प्रमुख ब्रांडों के साथ काम किया"}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">
                  {isEn ? "Operations & Consumer Insight Leader" : "संचालन और उपभोक्ता अंतर्दृष्टि नेता"}
                </h4>
                <p className="text-sm text-slate-600">
                  {isEn 
                    ? "Strong execution, deep market understanding, and trusted industry relationships"
                    : "मजबूत निष्पादन, गहरी बाजार समझ और विश्वसनीय उद्योग संबंध"}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">
                  {isEn ? "Community-Driven Business Leader" : "समुदाय-संचालित व्यवसाय नेता"}
                </h4>
                <p className="text-sm text-slate-600">
                  {isEn 
                    ? "Recognized by local chambers; actively contributes to regional growth and social initiatives"
                    : "स्थानीय चैंबर्स द्वारा मान्यता प्राप्त; क्षेत्रीय विकास और सामाजिक पहलों में सक्रिय योगदान"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Column - Right */}
<div className="lg:col-span-5">
  <div className="sticky top-10">
    <div className="relative group max-w-md mx-auto">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />

      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        
        {/* Image */}
        <div className="h-[520px] w-full">
          <img
            src="/rakesh-goyal.png"
            alt="Mr. Rakesh Goyal"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Quote */}
        <div className="p-5 bg-gradient-to-r from-emerald-500 to-teal-500">
          <div className="flex items-start gap-2">
            <span className="text-4xl text-white/60 leading-none">"</span>
            <p className="text-white font-medium text-sm leading-relaxed pt-1">
              {isEn
                ? "Our vision is clean, accessible solar energy powering every Indian home."
                : "हमारा विज़न स्वच्छ, सुलभ सौर ऊर्जा है जो हर भारतीय घर को शक्ति प्रदान करे।"}
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
      </div>
    </div>

    {/* Founder 2 - Praveen Agrawal */}
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Image Column - Left */}
<div className="lg:col-span-5 order-2 lg:order-1">
  <div className="sticky top-10">
    <div className="relative group max-w-md mx-auto">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />

      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        
        {/* Image */}
        <div className="h-[500px] w-full">
          <img
            src="/praveen-agrawal.png"
            alt="Mr. Praveen Agrawal"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Quote */}
        <div className="p-5 bg-gradient-to-r from-emerald-500 to-teal-500">
          <div className="flex items-start gap-2">
            <span className="text-4xl text-white/60 leading-none">"</span>
            <p className="text-white font-medium text-sm leading-relaxed pt-1">
              {isEn
                ? "We aim to make solar simple, affordable, and transformative for all."
                : "हम सोलर को सरल, किफायती और सभी के लिए परिवर्तनकारी बनाने का लक्ष्य रखते हैं।"}
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

        {/* Content Column - Right */}
        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {isEn ? "Mr. Praveen Agrawal" : "श्री प्रवीण अग्रवाल"}
            </h3>
            <p className="text-emerald-600 font-semibold text-lg">
              {isEn ? "Co-Founder, Re-Energen" : "सह-संस्थापक, री-एनर्जेन"}
            </p>
            <p className="text-slate-500 text-sm">
              {isEn ? "Founder – Vaibhav Traders & Akshat Sales" : "संस्थापक – वैभव ट्रेडर्स और अक्षत सेल्स"}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Sun className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">
                  {isEn ? "Renewable Energy Focus" : "नवीकरणीय ऊर्जा पर ध्यान"}
                </h4>
                <p className="text-sm text-slate-600">
                  {isEn 
                    ? "Co-Founder of Re-Energen focused on renewable energy and sustainable business initiatives"
                    : "नवीकरणीय ऊर्जा और टिकाऊ व्यवसाय पहलों पर केंद्रित री-एनर्जेन के सह-संस्थापक"}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">
                  {isEn ? "Construction Materials Expertise" : "निर्माण सामग्री विशेषज्ञता"}
                </h4>
                <p className="text-sm text-slate-600">
                  {isEn 
                    ? "Built & scaled construction material businesses from retail to regional distribution since 2014"
                    : "2014 से खुदरा से क्षेत्रीय वितरण तक निर्माण सामग्री व्यवसाय बनाया और बढ़ाया"}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">
                  {isEn ? "Construction & Energy Supply Specialist" : "निर्माण और ऊर्जा आपूर्ति विशेषज्ञ"}
                </h4>
                <p className="text-sm text-slate-600">
                  {isEn 
                    ? "Cement, TMT, Tiles, Solar Panels | Retail, Wholesale & Project Supply"
                    : "सीमेंट, TMT, टाइल्स, सोलर पैनल | खुदरा, थोक और परियोजना आपूर्ति"}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">
                  {isEn ? "10+ Years of Entrepreneurial Leadership" : "10+ वर्ष का उद्यमशीलता नेतृत्व"}
                </h4>
                <p className="text-sm text-slate-600">
                  {isEn 
                    ? "Hands-on operations, steady growth, strong partner and vendor network"
                    : "हाथों-हाथ संचालन, स्थिर विकास, मजबूत भागीदार और विक्रेता नेटवर्क"}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">
                  {isEn ? "Regional Operations Headquartered in Basna, Chhattisgarh" : "बासना, छत्तीसगढ़ में क्षेत्रीय संचालन मुख्यालय"}
                </h4>
                <p className="text-sm text-slate-600">
                  {isEn 
                    ? "Serving multiple regions with reliability and consistency"
                    : "विश्वसनीयता और स्थिरता के साथ कई क्षेत्रों की सेवा"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>

      {/*Backed by section*/}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-20 md:py-32 overflow-hidden">
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
        
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {isEn ? "Backed by Decades of Excellence" : "दशकों की उत्कृष्टता द्वारा समर्थित"}
            </h2>
            
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              {isEn
                ? "ReEnergen's strength comes from its association with established enterprises that bring financial stability, operational expertise, and a proven track record of execution."
                : "री-एनर्जेन की ताकत स्थापित उद्यमों के साथ इसके जुड़ाव से आती है जो वित्तीय स्थिरता, परिचालन विशेषज्ञता और निष्पादन का सिद्ध ट्रैक रिकॉर्ड लाते हैं।"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* MK Group Card */}
            <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">40+ {isEn ? "Years" : "वर्ष"}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">MK Group</h3>
                  <p className="text-sm text-emerald-400 font-medium mb-4">{isEn ? "The Strength Behind ReEnergen" : "री-एनर्जेन के पीछे की ताकत"}</p>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {isEn
                    ? "A diversified business group with over four decades of excellence across iron & steel, construction, mining & alumina, and food processing sectors."
                    : "लोहा और इस्पात, निर्माण, खनन और एल्यूमिना, और खाद्य प्रसंस्करण क्षेत्रों में चार दशकों से अधिक की उत्कृष्टता के साथ एक विविध व्यापार समूह।"}
                </p>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-semibold">3,500+ {isEn ? "Employees" : "कर्मचारी"}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs bg-white/5 text-slate-300 px-3 py-1 rounded-full border border-white/10">{isEn ? "Financial Strength" : "वित्तीय ताकत"}</span>
                  <span className="text-xs bg-white/5 text-slate-300 px-3 py-1 rounded-full border border-white/10">{isEn ? "Ethical Practices" : "नैतिक प्रथाएं"}</span>
                  <span className="text-xs bg-white/5 text-slate-300 px-3 py-1 rounded-full border border-white/10">{isEn ? "Proven Execution" : "सिद्ध निष्पादन"}</span>
                </div>
              </div>
            </div>

            {/* R.R. Unitrade Card */}
            <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">{isEn ? "Trading" : "व्यापार"}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">R.R. Unitrade</h3>
                  <p className="text-sm text-blue-400 font-medium mb-4">{isEn ? "The Financial Backbone" : "वित्तीय रीढ़"}</p>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {isEn
                    ? "A financially robust trading enterprise providing strategic stability, procurement excellence, and supply chain expertise to ReEnergen's operations."
                    : "एक वित्तीय रूप से मजबूत व्यापार उद्यम जो री-एनर्जेन के संचालन को रणनीतिक स्थिरता, खरीद उत्कृष्टता और आपूर्ति श्रृंखला विशेषज्ञता प्रदान करता है।"}
                </p>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-slate-200">
                    <DollarSign className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">{isEn ? "Financial Stability" : "वित्तीय स्थिरता"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Handshake className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">{isEn ? "Strong Vendor Relations" : "मजबूत विक्रेता संबंध"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <BarChart3 className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">{isEn ? "Risk Management" : "जोखिम प्रबंधन"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Akshat Sales Card */}
            <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Wrench className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">{isEn ? "Execution" : "निष्पादन"}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Akshat Sales</h3>
                  <p className="text-sm text-teal-400 font-medium mb-4">{isEn ? "Execution & Service Excellence" : "निष्पादन और सेवा उत्कृष्टता"}</p>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {isEn
                    ? "A trusted service partner bringing years of ground-level execution experience, ensuring smooth installations and reliable customer support."
                    : "एक विश्वसनीय सेवा भागीदार जो वर्षों के जमीनी स्तर के निष्पादन अनुभव को लाता है, सुचारू इंस्टॉलेशन और विश्वसनीय ग्राहक सहायता सुनिश्चित करता है।"}
                </p>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span className="text-sm">{isEn ? "Smooth Execution" : "सुचारू निष्पादन"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Clock className="w-4 h-4 text-teal-400" />
                    <span className="text-sm">{isEn ? "Reliable Timelines" : "विश्वसनीय समयसीमा"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Award className="w-4 h-4 text-teal-400" />
                    <span className="text-sm">{isEn ? "Post-Install Support" : "इंस्टॉल के बाद सहायता"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 max-w-4xl">
              <p className="text-slate-200 text-lg leading-relaxed">
                {isEn
                  ? "This powerful combination of industrial experience, financial strength, and execution capability allows ReEnergen to deliver solar solutions with confidence, transparency, and long-term reliability."
                  : "औद्योगिक अनुभव, वित्तीय ताकत और निष्पादन क्षमता का यह शक्तिशाली संयोजन री-एनर्जेन को आत्मविश्वास, पारदर्शिता और दीर्घकालिक विश्वसनीयता के साथ सौर समाधान प्रदान करने की अनुमति देता है।"}
              </p>
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
            <span className="text-sm font-medium">{isEn ? "Ready to Get Started?" : "शुरू करने के लिए तैयार?"}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isEn ? "Ready to explore solar for your home?" : "अपने घर के लिए सोलर एक्सप्लोर करने के लिए तैयार?"}
          </h2>
          
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            {isEn
              ? "Call us or request a free site visit. We will inspect your roof, explain subsidy options and share a clear proposal."
              : "हमें कॉल करें या नि:शुल्क साइट विज़िट का अनुरोध करें। हम आपकी छत का निरीक्षण करेंगे, सब्सिडी विकल्प समझाएँगे और स्पष्ट प्रस्ताव साझा करेंगे।"}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${PHONE_1}`}>
              <button className="group flex items-center gap-2 bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <Phone className="w-5 h-5" />
                {isEn ? "Call Now" : "अभी कॉल करें"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <button className="flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300 hover:-translate-y-1">
                <MessageCircle className="w-5 h-5" />
                {isEn ? "WhatsApp Us" : "WhatsApp पर संपर्क करें"}
              </button>
            </a>

            <a href="/contact">
              <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300 hover:-translate-y-1">
                <Mail className="w-5 h-5" />
                {isEn ? "Contact Page" : "संपर्क पेज"}
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
