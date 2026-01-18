// components/product-specs.tsx
"use client"
import React from "react"

type Spec = { label: string; value: string }

export function ProductSpecs({ specs = [] }: { specs?: Spec[] }) {
  if (!specs || specs.length === 0) {
    return null
  }

  return (
    <div className="bg-background border border-border rounded-md p-4">
      <h4 className="font-semibold mb-3">Technical Specifications</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {specs.map((s, i) => (
          <div key={i} className="flex justify-between gap-4">
            <div className="text-sm text-muted-foreground">{s.label}</div>
            <div className="text-sm font-medium text-foreground text-right">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
