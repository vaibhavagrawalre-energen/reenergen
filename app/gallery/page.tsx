import Image from "next/image"
import { projects } from "@/lib/projects"

export default function GalleryPage() {
  const images = projects.flatMap((project) => project.images)

  return (
    <main className="bg-white">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* HEADER */}
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-green-600">
              Gallery
            </p>
            <h1 className="text-4xl font-bold text-gray-900">
              Our Solar Installations
            </h1>
            <p className="mt-4 text-gray-600">
              A visual overview of residential, commercial, and industrial solar
              projects executed by our EPC team.
            </p>
          </div>

          {/* IMAGE GRID */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative aspect-square overflow-hidden rounded-xl bg-gray-100"
              >
                <Image
                  src={src}
                  alt={`Solar project image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
