import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Re-Energen Solar | Trusted Solar EPC Partner in Raipur",
  description:
    "Re-Energen (Akshat Sales & RR Unitrade) provides reliable rooftop solar solutions for homes and small businesses in Raipur. Government approved, honest guidance, neat installation.",
  keywords: "solar panels raipur, rooftop solar, PM Surya Ghar Yojana, solar subsidy, akshat sales, rr unitrade",
  openGraph: {
    title: "Re-Energen Solar | Trusted Solar Partner in Raipur",
    description: "Reliable rooftop solar solutions with government approved brands and honest guidance",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
