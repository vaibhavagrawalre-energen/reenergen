// filename: components/product-card.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ProductCard({ product }: { product: any }) {
  const { language } = useLanguage()
  const isEn = language === "en"
  const PHONE = "+91-9203407300"

  // fallbacks for mixed property names
  const title = product.name ?? product.title ?? "Product"
  const short = product.short ?? product.shortDescription ?? product.description ?? ""
  const price = product.price ?? product.priceLabel ?? ""
  const img = (product.images && product.images[0]) || product.image || "/products/placeholder-product.jpg"

  return (
    <Card className="p-4 flex flex-col hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] w-full mb-3 overflow-hidden rounded-md bg-gray-50">
        <Image
          src={img || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          quality={80}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-semibold text-lg text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{short}</p>
      <p className="mt-2 text-sm font-medium text-primary">{price}</p>

      <div className="mt-4 flex flex-col sm:flex-row gap-2">
        <a href={`tel:${PHONE}`} className="flex-1">
          <Button className="w-full flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            {isEn ? "Call Now" : "अभी कॉल करें"}
          </Button>
        </a>

        <Link href="/productspage" className="flex-1">
          <Button variant="outline" className="w-full bg-transparent">
            {isEn ? "View Details" : "विवरण देखें"}
          </Button>
        </Link>
      </div>
    </Card>
  )
}
