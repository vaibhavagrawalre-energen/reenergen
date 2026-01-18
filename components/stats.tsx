"use client";
import React from "react";
import { Zap, TrendingUp, Package, Rocket, Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const colorClasses = {
  emerald: {
    gradient: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/50",
    text: "text-emerald-600",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  blue: {
    gradient: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/50",
    text: "text-blue-600",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  purple: {
    gradient: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/50",
    text: "text-purple-600",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  orange: {
    gradient: "from-orange-500 to-red-500",
    glow: "shadow-orange-500/50",
    text: "text-orange-600",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  teal: {
    gradient: "from-teal-500 to-cyan-500",
    glow: "shadow-teal-500/50",
    text: "text-teal-600",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
  },
};

export default function StatsMover() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const stats = [
    { value: "511", label: isEn ? "Satisfied Clients" : "संतुष्ट ग्राहक", icon: Zap, color: "emerald" },
    { value: "223 MW", label: isEn ? "Successful Projects" : "सफल प्रोजेक्ट", icon: TrendingUp, color: "blue" },
    { value: "300+", label: isEn ? "Panels Installed" : "पैनल स्थापित", icon: Package, color: "purple" },
    { value: "22 MW", label: isEn ? "Upcoming Projects" : "आगामी प्रोजेक्ट", icon: Rocket, color: "orange" },
    { value: "13 / 3", label: isEn ? "States & Countries" : "राज्य और देश", icon: Globe, color: "teal" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)`,
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />


      {/* Enhanced fade edges with gradient */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-slate-50 via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-slate-50 via-white/80 to-transparent z-10" />

      {/* Marquee container */}
      <div className="relative">
        <div className="flex w-max animate-stats-move gap-8 px-4">
          {[...stats, ...stats, ...stats].map((stat, idx) => {
            const colors = colorClasses[stat.color];
            const Icon = stat.icon;
            
            return (
              <div
                key={idx}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative bg-white rounded-2xl p-6 border-2 ${colors.border} hover:border-transparent transition-all duration-500 hover:shadow-2xl ${colors.glow} hover:-translate-y-2 min-w-[280px]`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  <div className="relative flex items-center gap-4">
                    {/* Icon container */}
                    <div className={`relative flex-shrink-0 w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      <Icon className={`w-8 h-8 ${colors.text} relative z-10 group-hover:rotate-12 transition-transform duration-500`} />
                      
                      {/* Pulsing ring */}
                      <div className={`absolute inset-0 rounded-xl border-2 ${colors.border} animate-ping opacity-0 group-hover:opacity-75`} />
                    </div>

                    {/* Stats content */}
                    <div className="flex-1">
                      <div className={`text-3xl font-black ${colors.text} mb-1 tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left`}>
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes stats-move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-stats-move {
          animation: stats-move 30s linear infinite;
        }

        .animate-stats-move:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}