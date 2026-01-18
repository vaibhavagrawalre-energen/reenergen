// filename: components/gradient-background.tsx
"use client"

export function LeftGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
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
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
      <div 
        className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: "1s" }} 
      />
    </div>
  )
}

// Alternative: Centered version for hero sections
export function CenteredGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: "1s" }} 
      />
    </div>
  )
}

// Dot pattern version (alternative style)
export function DotPatternBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgb(16, 185, 129) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: "1s" }} 
      />
    </div>
  )
}

// Usage Examples:
// 
// 1. In a section with gradient background:
// <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
//   <LeftGradientBackground />
//   <div className="relative z-10">
//     {/* Your content here */}
//   </div>
// </section>
//
// 2. In a hero section:
// <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
//   <CenteredGradientBackground />
//   <div className="relative z-10">
//     {/* Your hero content */}
//   </div>
// </section>
//
// 3. With dot pattern:
// <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
//   <DotPatternBackground />
//   <div className="relative z-10">
//     {/* Your content */}
//   </div>
// </section>