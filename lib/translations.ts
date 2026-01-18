// filename: lib/translations.ts
export type Lang = "en" | "hi"
export type Language = Lang

export const translations: Record<Lang, any> = {
  en: {
    site: {
      title: "Akshat Sales - Solar Solutions",
    },
    nav: {
      products: "Products",
      benefits: "Benefits",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Cut your electricity bill, switch to solar today.",
      subtitle: "Reliable installations, government-approved equipment, and local support. Free site visit available.",
      getStarted: "Call Now",
      learnMore: "Learn More",
      customers: "Happy customers",
      experience: "Years experience",
      support: "Support",
    },
    products: {
      title: "Our Solutions",
      subtitle: "Simple, reliable solar systems for homes and businesses",
      viewAll: "View all products",
      residential: {
        name: "Residential Solar",
        price: "From ₹75,000",
        description: "Roof-optimised solar kits for homes — panels, inverter, mounting and install.",
      },
      commercial: {
        name: "Commercial Solar",
        price: "Custom quote",
        description: "Scalable rooftop and ground-mount systems for businesses with monitoring.",
      },
      battery: {
        name: "Battery Storage",
        price: "From ₹220,000",
        description: "Battery-backed systems for backup power and higher self-consumption.",
      },
    },
    useCases: {
      title: "Where We Help",
      subtitle: "Solutions built for homeowners, businesses and off-grid use",
      homeowners: {
        title: "Homeowners",
        description: "Reduce bills and secure backup power for your family.",
        savings: "Significant monthly savings",
        taxCredits: "Subsidy assistance",
        energyIndependence: "Energy independence",
        explore: "Explore Home Solutions",
      },
      businesses: {
        title: "Businesses",
        description: "Lower operational costs and improve sustainability.",
        roi: "Strong ROI",
        costReduction: "Lower operating costs",
        sustainability: "Sustainability benefits",
        explore: "Explore Business Solutions",
      },
      energyIndependence: {
        title: "Energy Independence",
        description: "Storage and smart control to stay powered during outages.",
        powerAvailability: "Reliable power availability",
        zeroDowntime: "Reduced downtime",
        smartManagement: "Smart energy management",
        explore: "Explore Storage",
      },
      environmentalImpact: {
        title: "Environmental Impact",
        description: "Reduce carbon footprint and support clean energy transition.",
        carbonOffset: "Lower carbon emissions",
        supportRenewable: "Support renewable energy",
        cleanPower: "Clean power for future",
        joinMission: "Join the mission",
      },
    },
    projects: {
      title: "Our Projects",
      subtitle: "Real installations, real results",
      viewAll: "View All Projects",
      items: [
        {
          name: "Residential Rooftop - Delhi",
          location: "Delhi, India",
          capacity: "5 kW",
          image: "/project-residential-delhi.jpg",
        },
        {
          name: "Commercial Complex - Mumbai",
          location: "Mumbai, India",
          capacity: "50 kW",
          image: "/project-commercial-mumbai.jpg",
        },
        {
          name: "Farmhouse Solar - Jaipur",
          location: "Jaipur, India",
          capacity: "10 kW",
          image: "/project-farmhouse-jaipur.jpg",
        },
        {
          name: "Industrial Warehouse - Pune",
          location: "Pune, India",
          capacity: "100 kW",
          image: "/project-industrial-pune.jpg",
        },
        {
          name: "School Solar Installation",
          location: "Bangalore, India",
          capacity: "25 kW",
          image: "/project-school-bangalore.jpg",
        },
      ],
    },
    benefits: {
      title: "Benefits",
      subtitle: "Why customers choose our systems",
      lowerBills: {
        title: "Lower electricity bills",
        description: "Cut your monthly bill significantly with a properly sized system.",
      },
      ecoFriendly: {
        title: "Eco friendly",
        description: "Reduce carbon footprint and support sustainable energy.",
      },
      increaseProperty: {
        title: "Increase property value",
        description: "Solar installations increase resale and rental value.",
      },
      warranty: {
        title: "Strong warranties",
        description: "Long-term panel and inverter warranties for peace of mind.",
      },
    },
    testimonials: {
      title: "What Our Customers Say",
      subtitle: "Real stories from people who switched to solar",
      verified: "Verified Customer",
    },
    cta: {
      title: "Ready to talk? We will call you back.",
      button: "Request a Call",
      subtitle: "Call or request a free site visit — we provide custom quotes after inspection.",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "How long does installation take?",
          a: "Typical residential installs take 1–3 days depending on system size and site complexity.",
        },
        {
          q: "Do you help with government subsidy paperwork?",
          a: "Yes. We assist with subsidy paperwork and net-metering approvals.",
        },
        {
          q: "What warranties do you offer?",
          a: "We offer panel warranties up to 25–30 years and inverter warranties depending on the brand.",
        },
      ],
    },
    contact: {
      callNow: "Call Now",
      chatWhatsApp: "Chat on WhatsApp",
      requestVisit: "Request Free Site Visit",
    },
    vendorsFinance: {
      title: "Approved Brands",
      subtitle: "We install trusted, high-quality systems",
      financeTitle: "Finance Available",
      financeSubtitle: "Easy EMIs with leading banks",
    },
  },

  hi: {
    site: {
      title: "अक्षत सेल्स - सोलर समाधान",
    },
    nav: {
      products: "उत्पाद",
      benefits: "लाभ",
      about: "हमारे बारे में",
      contact: "संपर्क",
    },
    hero: {
      title: "अपना बिजली का बिल घटाएँ! आज ही सोलर अपनाएँ।",
      subtitle: "भरोसेमंद इंस्टॉलेशन, सरकारी-मान्यता प्राप्त उपकरण और लोकल सपोर्ट। नि:शुल्क साइट विज़िट उपलब्ध।",
      getStarted: "अभी कॉल करें",
      learnMore: "और जानें",
      customers: "संतुष्ट ग्राहक",
      experience: "वर्ष का अनुभव",
      support: "सपोर्ट",
    },
    products: {
      title: "हमारे समाधान",
      subtitle: "घरों और व्यवसायों के लिए सरल, भरोसेमंद सोलर सिस्टम",
      viewAll: "सभी उत्पाद देखें",
      residential: {
        name: "घरेलू सोलर",
        price: "₹75,000 से",
        description: "घरों के लिए रूफ-ऑप्टिमाइज़्ड किट — पैनल, इन्वर्टर, माउंट और इंस्टॉल।",
      },
      commercial: {
        name: "व्यावसायिक सोलर",
        price: "कस्टम कोट",
        description: "कारखानों और ऑफिस रूफटॉप के लिए स्केलेबल सिस्टम, मॉनिटरिंग के साथ।",
      },
      battery: {
        name: "बैटरी स्टोरेज",
        price: "₹220,000 से",
        description: "बैकअप पावर के लिए बैटरी-समर्थित सिस्टम, सेल्फ-कंजम्प्शन बढ़ाएँ।",
      },
    },
    useCases: {
      title: "हम कहाँ मदद करते हैं",
      subtitle: "घरों, व्यवसायों और ऑफ-ग्रिड उपयोग के लिए समाधान",
      homeowners: {
        title: "गृहस्वामी",
        description: "बिल घटाएँ और अपने परिवार के लिए बैकअप पावर सुनिश्चित करें।",
        savings: "मासिक बचत",
        taxCredits: "सब्सिडी सहायता",
        energyIndependence: "ऊर्जा स्वतंत्रता",
        explore: "घरेलू समाधान देखें",
      },
      businesses: {
        title: "व्यवसाय",
        description: "कार्यन्वयन लागत घटाएँ और स्थिरता बढ़ाएँ।",
        roi: "मजबूत ROI",
        costReduction: "कम परिचालन लागत",
        sustainability: "सस्टेनेबिलिटी लाभ",
        explore: "व्यावसायिक समाधान देखें",
      },
      energyIndependence: {
        title: "ऊर्जा स्वतंत्रता",
        description: "बैकअप और स्मार्ट कंट्रोल से बिजली कटौती का समाधान।",
        powerAvailability: "भरोसेमंद पावर उपलब्धता",
        zeroDowntime: "डाउनटाइम घटेगा",
        smartManagement: "स्मार्ट एनर्जी मेनेजमेंट",
        explore: "स्टोरेज देखें",
      },
      environmentalImpact: {
        title: "पर्यावरणीय प्रभाव",
        description: "कार्बन फुटप्रिंट घटाएँ और स्वच्छ ऊर्जा का समर्थन करें।",
        carbonOffset: "कार्बन उत्सर्जन घटाएँ",
        supportRenewable: "नवीनीकृत ऊर्जा का समर्थन",
        cleanPower: "भविष्य के लिए स्वच्छ ऊर्जा",
        joinMission: "हमसे जुड़ें",
      },
    },
    projects: {
      title: "हमारे प्रोजेक्ट",
      subtitle: "वास्तविक इंस्टॉलेशन, वास्तविक परिणाम",
      viewAll: "सभी प्रोजेक्ट देखें",
      items: [
        {
          name: "रेजिडेंशियल रूफटॉप - दिल्ली",
          location: "दिल्ली, भारत",
          capacity: "5 kW",
          image: "/project-residential-delhi.jpg",
        },
        {
          name: "कॉमर्शियल कॉम्प्लेक्स - मुंबई",
          location: "मुंबई, भारत",
          capacity: "50 kW",
          image: "/project-commercial-mumbai.jpg",
        },
        {
          name: "फार्महाउस सोलर - जयपुर",
          location: "जयपुर, भारत",
          capacity: "10 kW",
          image: "/project-farmhouse-jaipur.jpg",
        },
        {
          name: "इंडस्ट्रियल वेयरहाउस - पुणे",
          location: "पुणे, भारत",
          capacity: "100 kW",
          image: "/project-industrial-pune.jpg",
        },
        {
          name: "स्कूल सोलर इंस्टॉलेशन",
          location: "बैंगलोर, भारत",
          capacity: "25 kW",
          image: "/project-school-bangalore.jpg",
        },
      ],
    },
    benefits: {
      title: "लाभ",
      subtitle: "ग्राहक हमारे सिस्टम क्यों चुनते हैं",
      lowerBills: {
        title: "बिजली बिल कम",
        description: "सही साइज़ किए गए सिस्टम से मासिक बिल में भारी कटौती।",
      },
      ecoFriendly: {
        title: "पर्यावरण के अनुकूल",
        description: "कार्बन फुटप्रिंट घटाएँ और सतत ऊर्जा का समर्थन करें।",
      },
      increaseProperty: {
        title: "संपत्ति का मूल्य बढ़ाएँ",
        description: "सोलर इंस्टॉलेशन से रेसले और रेंटल वैल्यू बढ़ती है।",
      },
      warranty: {
        title: "मजबूत वारंटी",
        description: "शांत मन के लिए दीर्घकालिक पैनल और इन्वर्टर वारंटी।",
      },
    },
    testimonials: {
      title: "हमारे ग्राहक क्या कहते हैं",
      subtitle: "वास्तविक लोगों की कहानियाँ जिन्होंने सोलर अपनाया",
      verified: "सत्यापित ग्राहक",
    },
    cta: {
      title: "बात करने के लिए तैयार? हम आपको कॉल करेंगे।",
      button: "कॉल अनुरोध करें",
      subtitle: "कॉल करें या नि:शुल्क साइट विज़िट का अनुरोध करें — निरीक्षण के बाद कस्टम कोट।",
    },
    faq: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      items: [
        {
          q: "इंस्टालेशन में कितना समय लगता है?",
          a: "आम घरेलू इंस्टालेशन 1–3 दिन लेते हैं, सिस्टम आकार और साइट जटिलता पर निर्भर करता है।",
        },
        {
          q: "क्या आप सरकारी सब्सिडी के कागजी काम में मदद करते हैं?",
          a: "हाँ. हम सब्सिडी कागजी काम और नेट-मीटरिंग अप्रूवल में सहायता करते हैं।",
        },
        {
          q: "आप कौन सी वारंटी देते हैं?",
          a: "हम 25–30 वर्षों तक पैनल वारंटी और ब्रांड के अनुसार इन्वर्टर वारंटी प्रदान करते हैं।",
        },
      ],
    },
    contact: {
      callNow: "अभी कॉल करें",
      chatWhatsApp: "WhatsApp पर चैट करें",
      requestVisit: "नि:शुल्क साइट विज़िट",
    },
    vendorsFinance: {
      title: "मान्य ब्रांड",
      subtitle: "हम भरोसेमंद, उच्च-गुणवत्ता के सिस्टम इंस्टॉल करते हैं",
      financeTitle: "वित्त सुविधा उपलब्ध",
      financeSubtitle: "प्रमुख बैंकों के साथ आसान EMI",
    },
  },
}

export default translations
