// filename: lib/products.ts
export type Product = {
  id: string
  slug?: string
  name: string
  price?: string
  description?: string
  short?: string
  image?: string
  images?: string[]
  category?: string
  capacity?: string
  warranty?: {
    product?: string
    performance?: string
  }
  features?: string[]
  specifications?: {
    modules?: string
    inverter?: string
    weight?: string
    components?: string
    efficiency?: string
    outputPower?: string
  }
  subsidy?: boolean
  inStock?: boolean
  featured?: boolean
}

export function getAllProducts(): Product[] {
  return [
    {
      id: "residential-5kw",
      slug: "residential-5kw-solar-system",
      name: "Premium 5kW Residential Solar System",
      price: "₹2,85,000",
      short: "High efficiency 5kW system with advanced monitoring and 25-year performance warranty.",
      description: "Professional grade solar system for larger homes with smart monitoring and hybrid inverter capabilities.",
      image: "/residential-solar-panel-system-for-home.jpg",
      images: ["/residential-solar-panel-system-for-home.jpg"],
      category: "Residential",
      capacity: "5 kW",
      warranty: {
        product: "15 years",
        performance: "25 years"
      },
      features: [
        "15-year product warranty",
        "25-year performance warranty",
        "5kVA Hybrid Inverter",
        "Smart monitoring system",
        "Battery ready",
        "Grid and off-grid capability"
      ],
      specifications: {
        modules: "10 x 550 Wp Mono PERC Modules",
        inverter: "5 kVA Hybrid Inverter",
        weight: "Approximately 450 kg",
        components: "Complete installation kit included",
        efficiency: "20.5%",
        outputPower: "5 kW"
      },
      subsidy: true,
      inStock: true,
      featured: true
    },
    {
      id: "economy-2kw",
      slug: "economy-2kw-solar-kit",
      name: "Economy 2kW Solar Kit",
      price: "₹1,25,000",
      short: "Affordable entry-level solar solution for small homes with 10-year warranty.",
      description: "Budget-friendly solar system perfect for starting your renewable energy journey.",
      image: "/residential-solar-panel-system-for-home.jpg",
      images: ["/residential-solar-panel-system-for-home.jpg"],
      category: "Residential",
      capacity: "2 kW",
      warranty: {
        product: "10 years",
        performance: "20 years"
      },
      features: [
        "10-year product warranty",
        "20-year output guarantee",
        "2kVA Grid-tied Inverter",
        "Easy installation",
        "Low maintenance",
        "Compact design"
      ],
      specifications: {
        modules: "4 x 540 Wp Poly Modules",
        inverter: "2 kVA Grid-tied Inverter",
        weight: "Approximately 180 kg",
        components: "Basic installation kit",
        efficiency: "18.5%",
        outputPower: "2 kW"
      },
      subsidy: true,
      inStock: true,
      featured: false
    },
    {
      id: "commercial-10kw",
      slug: "commercial-10kw-solar-system",
      name: "Commercial 10kW Solar System",
      price: "₹4,50,000",
      short: "Industrial grade solar system designed for commercial applications with maximum efficiency.",
      description: "Perfect for offices, shops, and small businesses looking to reduce electricity costs and carbon footprint.",
      image: "/commercial-solar-panels-on-business-building.jpg",
      images: ["/commercial-solar-panels-on-business-building.jpg"],
      category: "Commercial",
      capacity: "10 kW",
      warranty: {
        product: "20 years",
        performance: "30 years"
      },
      features: [
        "20-year product warranty",
        "30-year performance warranty",
        "10kVA Three Phase Inverter",
        "Remote monitoring included",
        "Commercial grade components",
        "Scalable design"
      ],
      specifications: {
        modules: "18 x 580 Wp Mono PERC Modules",
        inverter: "10 kVA Three Phase Inverter",
        weight: "Approximately 800 kg",
        components: "Industrial grade components, mounting structures",
        efficiency: "21%",
        outputPower: "10 kW"
      },
      subsidy: false,
      inStock: true,
      featured: true
    },
    {
      id: "commercial-25kw",
      slug: "commercial-25kw-solar-system",
      name: "Commercial 25kW Solar System",
      price: "₹10,50,000",
      short: "High-capacity commercial system for medium to large businesses with comprehensive warranty.",
      description: "Designed for factories, warehouses, and large commercial establishments with high energy demands.",
      image: "/commercial-solar-panels-on-business-building.jpg",
      images: ["/commercial-solar-panels-on-business-building.jpg"],
      category: "Commercial",
      capacity: "25 kW",
      warranty: {
        product: "25 years",
        performance: "30 years"
      },
      features: [
        "25-year product warranty",
        "30-year performance warranty",
        "25kVA Three Phase Inverter",
        "Advanced monitoring dashboard",
        "Weather station integration",
        "Annual maintenance package"
      ],
      specifications: {
        modules: "43 x 585 Wp Bifacial Modules",
        inverter: "25 kVA Three Phase String Inverter",
        weight: "Approximately 1800 kg",
        components: "Complete commercial installation package",
        efficiency: "21.5%",
        outputPower: "25 kW"
      },
      subsidy: false,
      inStock: true,
      featured: false
    },
    {
      id: "hybrid-6kw-battery",
      slug: "hybrid-6kw-with-battery-storage",
      name: "Hybrid 6kW Solar System with Battery Storage",
      price: "₹4,25,000",
      short: "Solar system with integrated battery backup for uninterrupted power supply.",
      description: "Complete energy independence with solar generation and battery storage for backup power during outages.",
      image: "/home-battery-storage-system-with-solar.jpg",
      images: ["/home-battery-storage-system-with-solar.jpg"],
      category: "Hybrid",
      capacity: "6 kW",
      warranty: {
        product: "15 years",
        performance: "25 years"
      },
      features: [
        "15-year product warranty",
        "25-year performance warranty",
        "6kVA Hybrid Inverter",
        "10 kWh Lithium Battery included",
        "Automatic backup switching",
        "Grid and off-grid modes"
      ],
      specifications: {
        modules: "12 x 545 Wp Mono PERC Modules",
        inverter: "6 kVA Hybrid Inverter with battery support",
        weight: "Approximately 650 kg (including battery)",
        components: "Complete hybrid system with battery management",
        efficiency: "20.8%",
        outputPower: "6 kW + 10 kWh storage"
      },
      subsidy: true,
      inStock: true,
      featured: true
    },
    {
      id: "offgrid-3kw-battery",
      slug: "offgrid-3kw-standalone-system",
      name: "Off-Grid 3kW Standalone Solar System",
      price: "₹2,95,000",
      short: "Complete off-grid solution for areas without grid connectivity or for complete energy independence.",
      description: "Perfect for remote locations, farmhouses, or those seeking complete independence from the grid.",
      image: "/home-battery-storage-system-with-solar.jpg",
      images: ["/home-battery-storage-system-with-solar.jpg"],
      category: "Off-Grid",
      capacity: "3 kW",
      warranty: {
        product: "10 years",
        performance: "20 years"
      },
      features: [
        "10-year product warranty",
        "20-year output guarantee",
        "3kVA Off-grid Inverter",
        "7.5 kWh Battery bank",
        "Complete autonomy",
        "Charge controller included"
      ],
      specifications: {
        modules: "6 x 545 Wp Poly Modules",
        inverter: "3 kVA Pure Sine Wave Off-grid Inverter",
        weight: "Approximately 450 kg",
        components: "Battery bank, charge controller, complete wiring",
        efficiency: "19%",
        outputPower: "3 kW + 7.5 kWh storage"
      },
      subsidy: false,
      inStock: true,
      featured: false
    }
  ]
}

export function getProductById(id?: string) {
  if (!id) return null
  const lower = id.toString().toLowerCase()
  return getAllProducts().find(
    (p) =>
      (p.id && p.id.toString().toLowerCase() === lower) ||
      (p.slug && p.slug.toString().toLowerCase() === lower)
  ) ?? null
}

export function getProductsByCategory(category: string): Product[] {
  return getAllProducts().filter(
    (p) => p.category?.toLowerCase() === category.toLowerCase()
  )
}

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter((p) => p.featured === true)
}

export function getProductsInStock(): Product[] {
  return getAllProducts().filter((p) => p.inStock === true)
}

export function getSubsidyEligibleProducts(): Product[] {
  return getAllProducts().filter((p) => p.subsidy === true)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return getAllProducts().filter((p) => {
    const searchStr = (
      p.name +
      p.slug +
      p.short +
      p.description +
      p.category +
      p.capacity
    ).toLowerCase()
    return searchStr.includes(lowerQuery)
  })
}