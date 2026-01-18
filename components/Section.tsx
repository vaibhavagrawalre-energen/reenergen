"use client"

import { ReactNode } from "react"
import clsx from "clsx"

type SectionProps = {
  children: ReactNode
  className?: string
  tight?: boolean
}

export default function Section({
  children,
  className,
  tight = false,
}: SectionProps) {
  return (
    <section
      className={clsx(
        "relative w-full",
        tight
          ? "py-14 md:py-18"
          : "py-20 md:py-28",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  )
}
