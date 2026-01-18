export type Project = {
  slug: string
  title: string
  location: string
  capacity: string
  type: "Residential" | "Commercial" | "Industrial"
  description: string
  images: string[]
  estimatedSavings: string
}

export const projects: Project[] = [
  {
    slug: "5kw-residential-raipur",
    title: "5kW Residential Rooftop Solar",
    location: "Raipur, Chhattisgarh",
    capacity: "5 kW",
    type: "Residential",
    description:
      "A grid-connected rooftop solar installation for a private residence, designed to significantly reduce monthly electricity bills.",
    images: [
      "/projects/residential-1/1.jpg",
      "/projects/residential-1/2.jpg",
      "/projects/residential-1/3.jpg",
    ],
    estimatedSavings: "₹50,000 per year",
  },
  {
    slug: "30kw-commercial-office",
    title: "30kW Commercial Solar Installation",
    location: "Raipur, Chhattisgarh",
    capacity: "30 kW",
    type: "Commercial",
    description:
      "Commercial rooftop solar system installed for an office building to offset daytime energy consumption.",
    images: [
      "/projects/commercial-1/1.jpg",
      "/projects/commercial-1/2.jpg",
      "/projects/commercial-1/3.jpg",
    ],
    estimatedSavings: "₹3,50,000 per year",
  },
  {
    slug: "100kw-industrial-plant",
    title: "100kW Industrial Solar Plant",
    location: "Bhilai, Chhattisgarh",
    capacity: "100 kW",
    type: "Industrial",
    description:
      "Large-scale industrial solar installation designed for high-load operations with long-term ROI focus.",
    images: [
      "/projects/industrial-1/1.jpg",
      "/projects/industrial-1/2.jpg",
      "/projects/industrial-1/3.jpg",
    ],
    estimatedSavings: "₹12,00,000 per year",
  },
]
