"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

type Props = {
  images: string[]
}

export default function ImageGallery({ images }: Props) {
  const [active, setActive] = useState(0)

  return (
    <div>
      {/* MAIN IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.6 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[active]}
              alt={`Project image ${active + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* THUMBNAILS */}
      <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <button
            key={img}
            onClick={() => setActive(index)}
            className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-lg border transition ${
              index === active
                ? "border-green-600"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
