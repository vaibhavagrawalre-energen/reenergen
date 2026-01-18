"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function LearnMorePage() {
  const { language } = useLanguage()

  const t =
    language === "en"
      ? {
          title: "Learn More",
          description: "Discover how solar energy can benefit you",
          backHome: "Back to Home",
        }
      : {
          title: "और जानें",
          description: "जानें कि सौर ऊर्जा आपको कैसे लाभ दे सकती है",
          backHome: "घर वापस जाएं",
        }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 w-full">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8">
          <ChevronLeft className="w-4 h-4" />
          {t.backHome}
        </Link>

        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">{t.title}</h1>
          <p className="text-lg text-muted-foreground">{t.description}</p>

          <div className="bg-muted rounded-lg p-8 sm:p-12 min-h-64 flex items-center justify-center">
            <p className="text-muted-foreground text-center">Content coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
