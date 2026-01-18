"use client"

import { useState } from "react"
import { Search, X, Phone, Download, FileText, Package, ArrowRight, CheckCircle, Zap, Home, Building2, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// Product data based on the provided specifications
const productsEn = [
  {
    id: "residential-3kw",
    name: "3 kW Residential Solar System",
    slug: "3kw-residential-solar",
    short: "Perfect small rooftop array for modest homes. Powers lights, fans, and occasional AC use with 8-10 panels.",
    description: "Complete on-grid solar system ideal for small homes with basic electricity needs. Eligible for government subsidy.",
    price: "₹2.3-2.5 Lakh",
    images: [
      "/products/3kw-system-1.jpg",
      "/products/3kw-system-2.jpg",
      "/products/3kw-system-3.jpg"
    ],
    category: "residential",
    features: [
      "8-10 solar panels",
      "12-15 kWh daily output",
      "360-450 kWh monthly generation",
      "₹78,000 government subsidy",
      "1-2 days installation",
      "Powers modest home appliances"
    ],
    specifications: {
      modules: "8-10 panels (560-580W each)",
      inverter: "3 kW On-grid Inverter",
      output: "360-450 kWh/month",
      panels: "8-10 panels"
    }
  },
  {
    id: "residential-5kw",
    name: "5 kW Residential Solar System",
    slug: "5kw-residential-solar",
    short: "Mid-size residential array for larger homes with more appliances. Generates 20-25 kWh daily with 12-16 panels.",
    description: "Comprehensive solar solution for medium to large homes with higher energy consumption. Qualifies for government subsidy.",
    price: "₹3.5-4.5 Lakh",
    images: [
      "/products/5k.jpeg",
      "/products/5k2.jpeg",
      "/products/5k3.jpeg"
    ],
    category: "residential",
    features: [
      "12-16 solar panels",
      "20-25 kWh daily output",
      "600-750 kWh monthly generation",
      "₹78,000 subsidy eligible",
      "1-3 days installation",
      "Supports multiple appliances"
    ],
    specifications: {
      modules: "12-16 panels (630-750W each)",
      inverter: "5 kW On-grid Inverter",
      output: "600-750 kWh/month",
      panels: "12-16 panels"
    }
  },
  {
    id: "residential-10kw",
    name: "10 kW Residential Solar System",
    slug: "10kw-residential-solar",
    short: "Large home or small business three-phase system. Perfect for villas and office complexes with high energy demands.",
    description: "High-capacity solar installation for large residences or small commercial establishments with significant power requirements.",
    price: "₹4.5-6.5 Lakh",
    images: [
      "/products/10kw-system-1.jpg",
      "/products/10kw-system-2.jpg",
      "/products/10kw-system-3.jpg"
    ],
    category: "residential",
    features: [
      "30-35 solar panels",
      "35-40 kWh daily output",
      "1,000-1,200 kWh monthly",
      "Three-phase connection",
      "₹78,000 subsidy cap",
      "2-3 days installation"
    ],
    specifications: {
      modules: "30-35× 1000W+ panels",
      inverter: "10 kW / Three 3.3 kW Inverters",
      output: "1,000-1,200 kWh/month",
      panels: "30-35 panels"
    }
  },
  {
    id: "waaree-radiance-3.2kw",
    name: "Waaree Radiance 3.2 kW Kit",
    slug: "waaree-3.2kw-kit",
    short: "Premium plug-and-play solar kit with TopCon bifacial technology. MNRE-approved with all hardware included.",
    description: "Factory-direct Waaree solar kit with premium bifacial panels and complete balance-of-system components for quick installation.",
    price: "₹1,78,124",
    images: [
      "/products/waaree-3.2kw-1.jpg",
      "/products/waaree-3.2kw-2.jpg"
    ],
    category: "residential",
    features: [
      "8× 560-580W bifacial modules",
      "12-15 kWh daily output",
      "MNRE-approved (PM Surya Ghar)",
      "Ships within 72 hours",
      "Delivery in 7-21 days",
      "Complete hardware kit included"
    ],
    specifications: {
      modules: "8× 560-580W Bifacial TopCon",
      inverter: "3.2 kW Inverter",
      output: "360-450 kWh/month",
      panels: "8 bifacial panels"
    }
  },
  {
    id: "waaree-radiance-4.5kw",
    name: "Waaree Radiance 4.5 kW Kit",
    slug: "waaree-4.5kw-kit",
    short: "Mid-range Waaree kit with high-efficiency 750W bifacial modules. Ideal for medium homes and small shops.",
    description: "Premium solar kit with advanced TopCon technology and all necessary components including AC/DC junction boxes and safety equipment.",
    price: "₹2,18,436",
    images: [
      "/products/waaree-4.5kw-1.jpg",
      "/products/waaree-4.5kw-2.jpg",
      "/products/waaree-4.5kw-3.jpg"
    ],
    category: "residential",
    features: [
      "6-8× 750W bifacial modules",
      "18-22 kWh daily output",
      "≈600 kWh monthly generation",
      "Factory-direct pricing",
      "Quick plug-and-play setup",
      "Warranty included"
    ],
    specifications: {
      modules: "6-8× 750W Bifacial TopCon",
      inverter: "4.5 kW Inverter",
      output: "~600 kWh/month",
      panels: "6-8 bifacial panels"
    }
  },
  {
    id: "waaree-radiance-5kw",
    name: "Waaree Radiance 5.0 kW Kit",
    slug: "waaree-5kw-kit",
    short: "High-capacity Waaree kit for larger homes and small offices. Complete with earthing kit and lightning protection.",
    description: "Comprehensive Waaree solar solution with premium bifacial panels and complete safety equipment for reliable operation.",
    price: "₹2,53,124",
    images: [
      "/products/waaree-5kw-1.jpg",
      "/products/waaree-5kw-2.jpg"
    ],
    category: "residential",
    features: [
      "8× 630W bifacial modules",
      "20-25 kWh daily output",
      "MNRE-approved system",
      "All hardware included",
      "Lightning arrestor included",
      "Professional warranty"
    ],
    specifications: {
      modules: "8× 630W Bifacial TopCon",
      inverter: "5.0 kW Inverter",
      output: "600-750 kWh/month",
      panels: "8 bifacial panels"
    }
  },
  {
    id: "commercial-112.5kw",
    name: "112.5 kW Commercial Cold Storage System",
    slug: "112kw-commercial-solar",
    short: "Large-scale industrial installation for warehouses and cold storage facilities. High-capacity three-phase system.",
    description: "Industrial-grade solar rooftop system with IP66-rated inverters designed for commercial operations and heavy-duty applications.",
    price: "₹60-80 Lakh",
    images: [
      "/products/commercial-112kw-1.jpg",
      "/products/commercial-112kw-2.jpg",
      "/products/commercial-112kw-3.jpg",
      "/products/commercial-112kw-4.jpg"
    ],
    category: "commercial",
    features: [
      "400-500 kWh daily output",
      "12,000-15,000 kWh monthly",
      "IP66-rated inverters",
      "100 kW string inverters",
      "Professional site survey",
      "Extended commissioning support"
    ],
    specifications: {
      modules: "Hundreds of high-capacity panels",
      inverter: "100 kW String Inverters (150 kW DC)",
      output: "12,000-15,000 kWh/month",
      installation: "2-4 weeks + 1 week setup"
    }
  }
]

const productsHi = [
  {
    id: "residential-3kw",
    name: "3 kW आवासीय सोलर सिस्टम",
    slug: "3kw-residential-solar",
    short: "छोटे घरों के लिए आदर्श। 8-10 पैनलों के साथ लाइट, पंखे और एसी चलाएं।",
    description: "छोटे घरों के लिए पूर्ण ऑन-ग्रिड सोलर सिस्टम। सरकारी सब्सिडी उपलब्ध।",
    price: "₹2.3-2.5 लाख",
    images: [
      "/products/3kw-system-1.jpg",
      "/products/3kw-system-2.jpg",
      "/products/3kw-system-3.jpg"
    ],
    category: "residential",
    features: [
      "8-10 सोलर पैनल",
      "12-15 यूनिट दैनिक उत्पादन",
      "360-450 यूनिट मासिक उत्पादन",
      "₹78,000 सरकारी सब्सिडी",
      "1-2 दिन में स्थापना",
      "घरेलू उपकरणों के लिए उपयुक्त"
    ],
    specifications: {
      modules: "8-10 पैनल (560-580W प्रत्येक)",
      inverter: "3 kW ऑन-ग्रिड इन्वर्टर",
      output: "360-450 यूनिट/माह",
      panels: "8-10 पैनल"
    }
  },
  {
    id: "residential-5kw",
    name: "5 kW आवासीय सोलर सिस्टम",
    slug: "5kw-residential-solar",
    short: "मध्यम घरों के लिए। 12-16 पैनलों के साथ 20-25 यूनिट दैनिक बिजली।",
    description: "अधिक बिजली खपत वाले मध्यम से बड़े घरों के लिए व्यापक सोलर समाधान। सरकारी सब्सिडी के लिए योग्य।",
    price: "₹3.5-4.5 लाख",
    images: [
      "/products/5kw-system-1.jpg",
      "/products/5kw-system-2.jpg",
      "/products/5kw-system-3.jpg"
    ],
    category: "residential",
    features: [
      "12-16 सोलर पैनल",
      "20-25 यूनिट दैनिक उत्पादन",
      "600-750 यूनिट मासिक उत्पादन",
      "₹78,000 सब्सिडी पात्र",
      "1-3 दिन में स्थापना",
      "कई उपकरणों का समर्थन"
    ],
    specifications: {
      modules: "12-16 पैनल (630-750W प्रत्येक)",
      inverter: "5 kW ऑन-ग्रिड इन्वर्टर",
      output: "600-750 यूनिट/माह",
      panels: "12-16 पैनल"
    }
  },
  {
    id: "residential-10kw",
    name: "10 kW आवासीय सोलर सिस्टम",
    slug: "10kw-residential-solar",
    short: "बड़े घर या छोटे व्यवसाय के लिए थ्री-फेज सिस्टम। विला और कार्यालयों के लिए उत्तम।",
    description: "महत्वपूर्ण बिजली आवश्यकताओं वाले बड़े आवासों या छोटे वाणिज्यिक प्रतिष्ठानों के लिए उच्च क्षमता वाला सोलर इंस्टॉलेशन।",
    price: "₹4.5-6.5 लाख",
    images: [
      "/products/10kw-system-1.jpg",
      "/products/10kw-system-2.jpg",
      "/products/10kw-system-3.jpg"
    ],
    category: "residential",
    features: [
      "30-35 सोलर पैनल",
      "35-40 यूनिट दैनिक उत्पादन",
      "1,000-1,200 यूनिट मासिक",
      "थ्री-फेज कनेक्शन",
      "₹78,000 सब्सिडी कैप",
      "2-3 दिन में स्थापना"
    ],
    specifications: {
      modules: "30-35× 1000W+ पैनल",
      inverter: "10 kW / तीन 3.3 kW इन्वर्टर",
      output: "1,000-1,200 यूनिट/माह",
      panels: "30-35 पैनल"
    }
  },
  {
    id: "waaree-radiance-3.2kw",
    name: "वारी रेडियंस 3.2 kW किट",
    slug: "waaree-3.2kw-kit",
    short: "TopCon बाइफेशियल तकनीक के साथ प्रीमियम प्लग-एंड-प्ले सोलर किट। MNRE-अनुमोदित।",
    description: "प्रीमियम बाइफेशियल पैनल और त्वरित स्थापना के लिए पूर्ण बैलेंस-ऑफ-सिस्टम घटकों के साथ फैक्ट्री-डायरेक्ट वारी सोलर किट।",
    price: "₹1,78,124",
    images: [
      "/products/waaree-3.2kw-1.jpg",
      "/products/waaree-3.2kw-2.jpg"
    ],
    category: "residential",
    features: [
      "8× 560-580W बाइफेशियल मॉड्यूल",
      "12-15 यूनिट दैनिक उत्पादन",
      "MNRE-अनुमोदित (पीएम सूर्य घर)",
      "72 घंटों के भीतर शिपिंग",
      "7-21 दिनों में डिलीवरी",
      "पूर्ण हार्डवेयर किट शामिल"
    ],
    specifications: {
      modules: "8× 560-580W बाइफेशियल TopCon",
      inverter: "3.2 kW इन्वर्टर",
      output: "360-450 यूनिट/माह",
      panels: "8 बाइफेशियल पैनल"
    }
  },
  {
    id: "waaree-radiance-4.5kw",
    name: "वारी रेडियंस 4.5 kW किट",
    slug: "waaree-4.5kw-kit",
    short: "उच्च दक्षता 750W बाइफेशियल मॉड्यूल के साथ मिड-रेंज वारी किट। मध्यम घरों के लिए आदर्श।",
    description: "उन्नत TopCon तकनीक और AC/DC जंक्शन बॉक्स और सुरक्षा उपकरणों सहित सभी आवश्यक घटकों के साथ प्रीमियम सोलर किट।",
    price: "₹2,18,436",
    images: [
      "/products/waaree-4.5kw-1.jpg",
      "/products/waaree-4.5kw-2.jpg",
      "/products/waaree-4.5kw-3.jpg"
    ],
    category: "residential",
    features: [
      "6-8× 750W बाइफेशियल मॉड्यूल",
      "18-22 यूनिट दैनिक उत्पादन",
      "≈600 यूनिट मासिक उत्पादन",
      "फैक्ट्री-डायरेक्ट मूल्य निर्धारण",
      "त्वरित प्लग-एंड-प्ले सेटअप",
      "वारंटी शामिल"
    ],
    specifications: {
      modules: "6-8× 750W बाइफेशियल TopCon",
      inverter: "4.5 kW इन्वर्टर",
      output: "~600 यूनिट/माह",
      panels: "6-8 बाइफेशियल पैनल"
    }
  },
  {
    id: "waaree-radiance-5kw",
    name: "वारी रेडियंस 5.0 kW किट",
    slug: "waaree-5kw-kit",
    short: "बड़े घरों और छोटे कार्यालयों के लिए उच्च क्षमता वाली वारी किट। अर्थिंग किट और लाइटनिंग प्रोटेक्शन के साथ।",
    description: "विश्वसनीय संचालन के लिए प्रीमियम बाइफेशियल पैनल और पूर्ण सुरक्षा उपकरणों के साथ व्यापक वारी सोलर समाधान।",
    price: "₹2,53,124",
    images: [
      "/products/waaree-5kw-1.jpg",
      "/products/waaree-5kw-2.jpg"
    ],
    category: "residential",
    features: [
      "8× 630W बाइफेशियल मॉड्यूल",
      "20-25 यूनिट दैनिक उत्पादन",
      "MNRE-अनुमोदित सिस्टम",
      "सभी हार्डवेयर शामिल",
      "लाइटनिंग अरेस्टर शामिल",
      "प्रोफेशनल वारंटी"
    ],
    specifications: {
      modules: "8× 630W बाइफेशियल TopCon",
      inverter: "5.0 kW इन्वर्टर",
      output: "600-750 यूनिट/माह",
      panels: "8 बाइफेशियल पैनल"
    }
  },
  {
    id: "commercial-112.5kw",
    name: "112.5 kW कमर्शियल कोल्ड स्टोरेज सिस्टम",
    slug: "112kw-commercial-solar",
    short: "गोदामों और कोल्ड स्टोरेज के लिए बड़े पैमाने पर औद्योगिक स्थापना। उच्च क्षमता वाला थ्री-फेज सिस्टम।",
    description: "वाणिज्यिक संचालन और भारी-भरकम अनुप्रयोगों के लिए डिज़ाइन किए गए IP66-रेटेड इनवर्टर के साथ औद्योगिक-ग्रेड सोलर रूफटॉप सिस्टम।",
    price: "₹60-80 लाख",
    images: [
      "/products/commercial-112kw-1.jpg",
      "/products/commercial-112kw-2.jpg",
      "/products/commercial-112kw-3.jpg",
      "/products/commercial-112kw-4.jpg"
    ],
    category: "commercial",
    features: [
      "400-500 यूनिट दैनिक उत्पादन",
      "12,000-15,000 यूनिट मासिक",
      "IP66-रेटेड इन्वर्टर",
      "100 kW स्ट्रिंग इन्वर्टर",
      "प्रोफेशनल साइट सर्वेक्षण",
      "विस्तारित कमीशनिंग समर्थन"
    ],
    specifications: {
      modules: "सैकड़ों उच्च क्षमता वाले पैनल",
      inverter: "100 kW स्ट्रिंग इन्वर्टर (150 kW DC)",
      output: "12,000-15,000 यूनिट/माह",
      installation: "2-4 सप्ताह + 1 सप्ताह सेटअप"
    }
  }
]

export default function ProductsPage() {
  const [search, setSearch] = useState("")
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({})
  const { language } = useLanguage()
  const isEn = language === "en"
  
  const products = isEn ? productsEn : productsHi

  const filtered = products.filter((p) => {
    const s = (p.name + p.slug + p.short + p.description).toLowerCase()
    return s.includes(search.toLowerCase())
  })

  const nextImage = (productId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (productId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Header Section */}
      <div className="relative w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/bg5.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/75 to-emerald-900/80" />
        </div>

        {/* Background Pattern on top of image */}
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full mb-8">
              <Package className="w-5 h-5 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-semibold">{isEn ? "Premium Solar Solutions" : "प्रीमियम सोलर समाधान"}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {isEn ? "Our Products" : "हमारे उत्पाद"}
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12">
              {isEn ? "Explore reliable solar solutions for homes and businesses with industry-leading warranties" : "घर और व्यवसायों के लिए भरोसेमंद सोलर समाधानों का अन्वेषण करें — उद्योग-अग्रणी वारंटी के साथ"}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 transition-colors group-focus-within:text-emerald-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={isEn ? "Search products..." : "उत्पाद खोजें..."}
                  className="w-full pl-16 pr-16 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white text-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white/15 focus:border-emerald-400/50 transition-all duration-300"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                )}
              </div>
              
              {/* Results Count */}
              <div className="mt-4 text-emerald-400 font-medium">
                {isEn ? `${filtered.length} ${filtered.length === 1 ? "product" : "products"} found` : `${filtered.length} उत्पाद मिले`}
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Products Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filtered.map((product) => {
              const currentIndex = currentImageIndex[product.id] || 0
              const totalImages = product.images.length
              
              return (
                <div
                  key={product.id}
                  id={product.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Glow Effect on Hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                  
                  <div className="relative bg-white rounded-3xl border-2 border-slate-200 overflow-hidden transition-all duration-500 group-hover:border-emerald-400 group-hover:shadow-2xl group-hover:-translate-y-1 flex flex-col h-full">
                    {/* Image Section */}
                    <div className="relative h-72 bg-gradient-to-br from-slate-100 to-emerald-50 flex-shrink-0 overflow-hidden">
                      <img
                        src={product.images[currentIndex]}
                        alt={`${product.name} - Image ${currentIndex + 1}`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Image Navigation */}
                      {totalImages > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              prevImage(product.id, totalImages)
                            }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110 z-10"
                          >
                            <ChevronLeft className="w-5 h-5 text-slate-700" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              nextImage(product.id, totalImages)
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110 z-10"
                          >
                            <ChevronRight className="w-5 h-5 text-slate-700" />
                          </button>
                          
                          {/* Image Dots */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {product.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setCurrentImageIndex(prev => ({...prev, [product.id]: idx}))
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  idx === currentIndex 
                                    ? 'bg-white w-8' 
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200 flex items-center gap-2 z-10">
                        {product.category === "residential" ? (
                          <Home className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Building2 className="w-4 h-4 text-blue-600" />
                        )}
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                          {product.category}
                        </span>
                      </div>
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200 transform transition-all duration-300 group-hover:scale-105 z-10">
                        <div className="text-xs text-slate-600 font-medium">{isEn ? "Starting from" : "से शुरू"}</div>
                        <div className="text-lg font-bold text-emerald-600">{product.price}</div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-6 lg:p-7 flex flex-col flex-1">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors duration-300">
                          {product.name}
                        </h3>
                        
                        <p className="text-slate-600 mb-5 text-base leading-relaxed">
                          {product.short}
                        </p>

                        {/* Features Grid */}
                        <div className="mb-5">
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                            {isEn ? "Key Features" : "मुख्य विशेषताएं"}
                          </h4>
                          <div className="grid grid-cols-2 gap-2.5">
                            {product.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2 group/feature">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 group-hover/feature:scale-150 transition-transform" />
                                <span className="text-sm text-slate-700 leading-relaxed">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Specifications */}
                        <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 rounded-xl p-4 mb-5 border border-slate-200 group-hover:border-emerald-200 transition-colors">
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-emerald-600" />
                            {isEn ? "Specifications" : "विवरण"}
                          </h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-start gap-2">
                              <div className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Package className="w-3.5 h-3.5 text-emerald-600" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-slate-500 text-xs mb-0.5">{isEn ? "Modules" : "मॉड्यूल"}</div>
                                <div className="text-slate-900 font-semibold text-xs leading-tight">{product.specifications.modules}</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-slate-500 text-xs mb-0.5">{isEn ? "Inverter" : "इन्वर्टर"}</div>
                                <div className="text-slate-900 font-semibold text-xs leading-tight">{product.specifications.inverter}</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <div className="w-7 h-7 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Zap className="w-3.5 h-3.5 text-amber-600" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-slate-500 text-xs mb-0.5">{isEn ? "Output" : "आउटपुट"}</div>
                                <div className="text-slate-900 font-semibold text-xs leading-tight">{product.specifications.output}</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <div className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Package className="w-3.5 h-3.5 text-purple-600" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-slate-500 text-xs mb-0.5">{isEn ? "Panel Count" : "पैनल संख्या"}</div>
                                <div className="text-slate-900 font-semibold text-xs leading-tight">{product.specifications.panels}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2.5 pt-4 border-t border-slate-200">
                        <button className="group/btn flex-1 min-w-[120px] px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-sm font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                          <Phone className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                          {isEn ? "Call Now" : "अभी कॉल करें"}
                        </button>
                        <button className="group/btn px-4 py-3 bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-sm font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
                          <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                          {isEn ? "Brochure" : "डाउनलोड"}
                        </button>
                        <button className="group/btn px-4 py-3 bg-white border-2 border-slate-300 text-slate-700 hover:border-emerald-600 hover:text-emerald-600 hover:bg-emerald-50 text-sm font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
                          <FileText className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          {isEn ? "Get Quote" : "कोट"}
                        </button>
                      </div>
                    </div>

                    {/* Bottom Accent Bar */}
                    <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-6 border-2 border-slate-200">
              <Search className="w-12 h-12 text-slate-400" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">{isEn ? "No products found" : "कोई उत्पाद नहीं मिला"}</h2>
            <p className="text-slate-600 mb-6 max-w-md">{isEn ? "Try different keywords or clear your search." : "विभिन्न शब्दों का प्रयास करें या अपनी खोज साफ़ करें।"}</p>
            <button 
              onClick={() => setSearch("")} 
              className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {isEn ? "Clear Search" : "खोज साफ़ करें"}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}