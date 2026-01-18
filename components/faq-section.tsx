"use client"
import { useLanguage } from "@/lib/language-context"

export function FAQSection() {
  const { language, t } = useLanguage()
  const isEn = language === "en"

  const faqs = [
    { q: t.faq.items[0].q, a: t.faq.items[0].a },
    { q: t.faq.items[1].q, a: t.faq.items[1].a },
    { q: t.faq.items[2].q, a: t.faq.items[2].a },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">{t.faq.title}</h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-border rounded-md p-3 hover:shadow-md transition-shadow">
              <summary className="cursor-pointer list-none text-sm font-semibold text-foreground">{f.q}</summary>
              <div className="mt-2 text-sm text-muted-foreground">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
