"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

export function SolarCalculatorBill() {
  // required input
  const [monthlyBill, setMonthlyBill] = useState<number | "">("")

  // optional advanced defaults (collapsed by default)
  const [expanded, setExpanded] = useState(false)
  const [tariff, setTariff] = useState<number>(8) // ₹ / kWh default
  const [sunHours, setSunHours] = useState<number>(5) // hours/day default
  const [derate, setDerate] = useState<number>(0.8) // system efficiency
  const [pricePerKw, setPricePerKw] = useState<number>(75000) // ₹ per kW

  const parsedBill = typeof monthlyBill === "number" ? monthlyBill : parseFloat(String(monthlyBill || "0"))

  const results = useMemo(() => {
    if (!parsedBill || parsedBill <= 0) return null

    // estimate monthly consumption from bill and tariff
    const monthlyUsageKwh = parsedBill / (tariff || 1)

    // generation per kW per month
    const monthlyGenPerKw = sunHours * 30 * derate // kWh per kW per month

    // required system (kW)
    const requiredKw = monthlyUsageKwh / (monthlyGenPerKw || 1)

    // estimated generation (kWh)
    const estimatedGeneration = requiredKw * monthlyGenPerKw

    // estimate monthly savings (approx) — assume you use what is generated up to your usage
    const usedGeneration = Math.min(estimatedGeneration, monthlyUsageKwh)
    const monthlySavings = usedGeneration * tariff

    const systemCost = requiredKw * pricePerKw
    const paybackMonths = monthlySavings > 0 ? systemCost / monthlySavings : Infinity
    const paybackYears = paybackMonths === Infinity ? Infinity : paybackMonths / 12

    return {
      monthlyUsageKwh: Number(monthlyUsageKwh.toFixed(1)),
      monthlyGenPerKw: Number(monthlyGenPerKw.toFixed(1)),
      requiredKw: Number(requiredKw.toFixed(2)),
      estimatedGeneration: Number(estimatedGeneration.toFixed(0)),
      monthlySavings: Number(monthlySavings.toFixed(0)),
      systemCost: Number(systemCost.toFixed(0)),
      paybackMonths: paybackMonths === Infinity ? Infinity : Math.round(paybackMonths),
      paybackYears: paybackYears === Infinity ? Infinity : Number(paybackYears.toFixed(1)),
    }
  }, [parsedBill, tariff, sunHours, derate, pricePerKw])

  return (
    <div className="bg-white border border-border rounded-lg p-4 sm:p-6 max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-2">Quick Solar Estimate</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Enter your monthly electricity bill; the calculator estimates the system size and payback using conservative defaults.
      </p>

      <label className="text-xs block mb-3">
        Monthly electricity bill (₹)
        <input
          inputMode="numeric"
          value={monthlyBill as any}
          onChange={(e) => setMonthlyBill(e.target.value === "" ? "" : Number(e.target.value))}
          placeholder="Eg. 3,200"
          className="mt-1 w-full px-3 py-2 border border-border rounded"
        />
      </label>

      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="text-sm text-muted-foreground">
          {results ? (
            <span className="font-medium">Estimated system: {results.requiredKw} kW</span>
          ) : (
            <span>Enter bill to see results</span>
          )}
        </div>
        <button
          type="button"
          className="text-xs text-primary hover:underline"
          onClick={() => setExpanded((s) => !s)}
        >
          {expanded ? "Hide advanced" : "Advanced"}
        </button>
      </div>

      {expanded && (
        <div className="border-t border-border pt-3 space-y-3 mb-3">
          <label className="text-xs block">
            Grid tariff (₹ / kWh)
            <input inputMode="numeric" value={tariff} onChange={(e) => setTariff(Number(e.target.value || 0))} className="mt-1 w-full px-3 py-2 border border-border rounded" />
          </label>

          <label className="text-xs block">
            Average sun-hours / day
            <input inputMode="numeric" value={sunHours} onChange={(e) => setSunHours(Number(e.target.value || 0))} className="mt-1 w-full px-3 py-2 border border-border rounded" />
          </label>

          <label className="text-xs block">
            System derate factor (efficiency)
            <input inputMode="numeric" value={derate} onChange={(e) => setDerate(Number(e.target.value || 0.8))} className="mt-1 w-full px-3 py-2 border border-border rounded" />
          </label>

          <label className="text-xs block">
            Install cost (₹ / kW)
            <input inputMode="numeric" value={pricePerKw} onChange={(e) => setPricePerKw(Number(e.target.value || 0))} className="mt-1 w-full px-3 py-2 border border-border rounded" />
          </label>
        </div>
      )}

      <div className="mt-2 border-t border-border pt-4">
        {!results && <div className="text-sm text-muted-foreground">Provide your monthly bill to calculate.</div>}

        {results && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-background rounded">
                <div className="text-xs text-muted-foreground">Estimated monthly use</div>
                <div className="font-semibold text-lg">{results.monthlyUsageKwh} kWh</div>
                <div className="text-xs text-muted-foreground">(@ ₹{tariff}/kWh)</div>
              </div>

              <div className="p-3 bg-background rounded">
                <div className="text-xs text-muted-foreground">Recommended system</div>
                <div className="font-semibold text-lg">{results.requiredKw} kW</div>
                <div className="text-xs text-muted-foreground">{results.monthlyGenPerKw} kWh per kW / month</div>
              </div>

              <div className="p-3 bg-background rounded">
                <div className="text-xs text-muted-foreground">Estimated system cost</div>
                <div className="font-semibold text-lg">₹ {results.systemCost.toLocaleString()}</div>
              </div>

              <div className="p-3 bg-background rounded">
                <div className="text-xs text-muted-foreground">Estimated payback</div>
                <div className="font-semibold text-lg">
                  {results.paybackYears === Infinity ? "N/A" : `${results.paybackYears} years (~${results.paybackMonths} months)`}
                </div>
                <div className="text-xs text-muted-foreground">Based on savings from generated energy</div>
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <a href="/contact" className="w-full sm:w-auto">
                <Button className="w-full">Get free site visit</Button>
              </a>

              <button
                type="button"
                onClick={() => {
                  const txt = `Solar estimate — bill ₹${parsedBill}: recommended ${results.requiredKw} kW, cost ₹${results.systemCost.toLocaleString()}, payback ${results.paybackYears === Infinity ? "N/A" : `${results.paybackYears}y`}`
                  navigator.clipboard?.writeText(txt)
                }}
                className="w-full sm:w-auto"
              >
                <Button variant="outline" className="w-full">Copy summary</Button>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
