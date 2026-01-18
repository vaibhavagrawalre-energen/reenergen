"use client"

import { useState, useRef } from "react"

// Mock translation object
const mockTranslations = {
  projects: {
    title: "Our Projects",
    subtitle: "See our solar installations transforming lives across the region",
    viewAll: "View All Projects",
    items: [
      {
        name: "Residential Villa Complex",
        location: "Raipur, Chhattisgarh",
        capacity: "25 kW",
        image: "/residential-solar-panel-system-for-home.jpg",
        type: "Residential",
        year: "2024",
        stats: { panels: 78, savings: "₹32K/mo", co2: "18 tons/yr" }
      },
      {
        name: "Manufacturing Plant",
        location: "Bhilai Industrial Area",
        capacity: "150 kW",
        image: "/commercial-solar-panels-on-business-building.jpg",
        type: "Commercial",
        year: "2023",
        stats: { panels: 468, savings: "₹2.1L/mo", co2: "108 tons/yr" }
      },
      {
        name: "Farm House Installation",
        location: "Durg District",
        capacity: "10 kW",
        image: "/residential-solar-panel-system-for-home.jpg",
        type: "Residential",
        year: "2024",
        stats: { panels: 32, savings: "₹12K/mo", co2: "7 tons/yr" }
      },
      {
        name: "Corporate Office",
        location: "Raipur Business Hub",
        capacity: "75 kW",
        image: "/commercial-solar-panels-on-business-building.jpg",
        type: "Commercial",
        year: "2023",
        stats: { panels: 234, savings: "₹98K/mo", co2: "54 tons/yr" }
      },
      {
        name: "Luxury Bungalow",
        location: "Civil Lines, Raipur",
        capacity: "15 kW",
        image: "/residential-solar-panel-system-for-home.jpg",
        type: "Residential",
        year: "2024",
        stats: { panels: 48, savings: "₹18K/mo", co2: "11 tons/yr" }
      }
    ]
  }
}

interface ProjectsSectionProps {
  t?: any
}

export default function ProjectsSection({ t = mockTranslations }: ProjectsSectionProps) {
  const [activeProject, setActiveProject] = useState(2)
  const containerRef = useRef<HTMLDivElement>(null)

  const projects = t.projects.items

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Subtle Background */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.projects.title}
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Main 3D Carousel Display */}
        <div 
          ref={containerRef}
          className="relative h-[550px] mb-10"
        >
          {/* 3D Card Stack */}
          <div className="absolute inset-0 flex items-center justify-center perspective-1000">
            {projects.map((project: any, index: number) => {
              const offset = index - activeProject
              const isActive = index === activeProject
              
              let transform = ''
              let zIndex = 0
              let opacity = 0
              
              if (offset === 0) {
                transform = 'translateX(0%) scale(1) rotateY(0deg)'
                zIndex = 50
                opacity = 1
              } else if (offset === -1) {
                transform = 'translateX(-80%) scale(0.85) rotateY(25deg)'
                zIndex = 40
                opacity = 0.4
              } else if (offset === 1) {
                transform = 'translateX(80%) scale(0.85) rotateY(-25deg)'
                zIndex = 40
                opacity = 0.4
              } else if (offset === -2) {
                transform = 'translateX(-140%) scale(0.7) rotateY(35deg)'
                zIndex = 30
                opacity = 0.2
              } else if (offset === 2) {
                transform = 'translateX(140%) scale(0.7) rotateY(-35deg)'
                zIndex = 30
                opacity = 0.2
              } else {
                transform = `translateX(${offset > 0 ? '200%' : '-200%'}) scale(0.5)`
                zIndex = 0
                opacity = 0
              }

              return (
                <div
                  key={index}
                  className="absolute w-full max-w-2xl transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform,
                    zIndex,
                    opacity
                  }}
                  onClick={() => setActiveProject(index)}
                >
                  <div className={`relative bg-white rounded-2xl overflow-hidden border transition-all duration-500 ${
                    isActive ? 'border-slate-300 shadow-2xl' : 'border-slate-200 shadow-lg'
                  }`}>
                    <div className="relative">
                      {/* Image Section */}
                      <div className="relative h-80 overflow-hidden bg-slate-100">
                        <img
                          src={project.image}
                          alt={project.name}
                          className={`w-full h-full object-cover transition-all duration-700 ${
                            isActive ? 'scale-100' : 'scale-110 grayscale'
                          }`}
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        

                      </div>

                      {/* Content Section */}
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                            project.type === 'Residential' 
                              ? 'bg-blue-50 text-blue-700 border-blue-200' 
                              : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          }`}>
                            {project.type}
                          </div>
                          <div className="text-slate-500 text-sm">
                            {project.year}
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                          {project.name}
                        </h3>

                        <div className="flex items-center gap-2 text-slate-600 mb-6">
                          <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm">{project.location}</span>
                        </div>

                        {isActive && (
                          <button className="w-full px-6 py-3 bg-slate-900 hover:bg-emerald-600 rounded-xl text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                            <span>View Project Details</span>
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveProject((activeProject - 1 + projects.length) % projects.length)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-slate-300 hover:border-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-slate-700 hover:text-emerald-600 z-50 group"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setActiveProject((activeProject + 1) % projects.length)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-slate-300 hover:border-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-slate-700 hover:text-emerald-600 z-50 group"
          >
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2">
          {projects.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className="transition-all duration-300"
            >
              <div className={`rounded-full transition-all duration-300 ${
                index === activeProject
                  ? 'w-12 h-2 bg-emerald-600'
                  : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
              }`} />
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}
