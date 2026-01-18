"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export default function ProductsSection() {
  const { t } = useLanguage()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">

        {/* CENTERED HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.products.title}
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            {t.products.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ProductCard
            index={0}
            href="/productspage"
            image="/residential-solar-panel-system-for-home.jpg"
            title={t.products.residential.name}
            description={t.products.residential.description}
            price={t.products.residential.price}
            isHovered={hoveredCard === 0}
            onHover={() => setHoveredCard(0)}
            onLeave={() => setHoveredCard(null)}
          />

          <ProductCard
            index={1}
            href="/productspage"
            image="/commercial-solar-panels-on-business-building.jpg"
            title={t.products.commercial.name}
            description={t.products.commercial.description}
            price={t.products.commercial.price}
            isHovered={hoveredCard === 1}
            onHover={() => setHoveredCard(1)}
            onLeave={() => setHoveredCard(null)}
          />

          <ProductCard
            index={2}
            href="/productspage"
            image="/home-battery-storage-system-with-solar.jpg"
            title={t.products.battery.name}
            description={t.products.battery.description}
            price={t.products.battery.price}
            isHovered={hoveredCard === 2}
            onHover={() => setHoveredCard(2)}
            onLeave={() => setHoveredCard(null)}
          />
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="flex justify-center">
          <Link href="/productspage" className="group inline-flex items-center px-6 py-3 border border-slate-300 rounded-full text-sm font-medium text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-all duration-300 hover:px-8">
            {t.products.viewAll}
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  )
}

/* ---------------- PRODUCT CARD ---------------- */

function ProductCard({
  index,
  href,
  image,
  title,
  description,
  price,
  isHovered,
  onHover,
  onLeave,
}: {
  index: number
  href: string
  image: string
  title: string
  description: string
  price: string
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  return (
    <a
      href={href}
      className="group block"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-700 ease-out">
        {/* Image Container */}
        <div className="relative h-72 md:h-80 lg:h-96 overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
          
          {/* Hover Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        </div>

        {/* Content Container */}
        <div className="relative px-6 py-6 md:py-8">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3 tracking-tight">
            {title}
          </h3>

          {/* Description - Fades in on hover */}
          <div className="overflow-hidden">
            <p 
              className={`text-sm md:text-base text-slate-600 leading-relaxed mb-4 transition-all duration-500 ${
                isHovered 
                  ? 'opacity-100 translate-y-0 max-h-24' 
                  : 'opacity-0 translate-y-4 max-h-0'
              }`}
            >
              {description}
            </p>
          </div>

          {/* Price and Arrow */}
          <div className="flex items-center justify-between">
            <span className="text-sm md:text-base font-medium text-slate-900">
              {price}
            </span>
            <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-slate-900 group-hover:bg-slate-900 transition-all duration-300">
              <span className="text-slate-700 group-hover:text-white transition-colors duration-300 text-sm">→</span>
            </div>
          </div>

          {/* Subtle bottom accent on hover */}
          <div className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`} />
        </div>
      </div>
    </a>
  )
}
