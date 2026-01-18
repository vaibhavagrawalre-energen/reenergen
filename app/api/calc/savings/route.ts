// filename: app/api/calc/savings/route.ts
import { NextResponse } from "next/server"

type CalcRequest = {
  monthlyConsumptionKwh: number // e.g. 300
  electricityRate: number // ₹ per kWh, e.g. 8
  systemSizeKw?: number // e.g. 3.5 (if provided use it)
  systemCostPerKw?: number // ₹ per kW installed (fallback)
  panelGenerationPerKwPerMonth?: number // kWh generated per kW per month (fallback)
  degradationPctPerYear?: number
  inflationPctPerYear?: number
  years?: number
}

export async function POST(req: Request) {
  try {
    const body: CalcRequest = await req.json()

    // defaults & validation
    const monthlyConsumptionKwh = Number(body.monthlyConsumptionKwh || 0)
    const electricityRate = Number(body.electricityRate || 8)
    const systemSizeKw = body.systemSizeKw ? Number(body.systemSizeKw) : undefined
    const costPerKw = Number(body.systemCostPerKw || 75000) // ₹/kW fallback
    const genPerKwPerMonth = Number(body.panelGenerationPerKwPerMonth || 120) // kWh per kW per month
    const degradation = Number(body.degradationPctPerYear || 0.5) / 100
    const inflation = Number(body.inflationPctPerYear || 3) / 100
    const years = Number(body.years || 25)

    // estimate system size if not provided: cover 80% of consumption by default
    const targetCoverage = 0.8
    const estimatedSystemKw = systemSizeKw ?? Math.max(0.5, ((monthlyConsumptionKwh * targetCoverage) / genPerKwPerMonth))

    const systemCost = Math.round(estimatedSystemKw * costPerKw)

    // yearly numbers
    const yearlyConsumption = monthlyConsumptionKwh * 12
    const yearlyGenerationAtStart = estimatedSystemKw * genPerKwPerMonth * 12
    const yearlySavingAtStart = Math.min(yearlyGenerationAtStart, yearlyConsumption) * electricityRate

    // simple projection over years
    let year = 0
    let remainingGenerationFactor = 1
    let projected = []
    for (year = 1; year <= years; year++) {
      remainingGenerationFactor *= (1 - degradation)
      // electricity cost increases with inflation
      const rate = electricityRate * Math.pow(1 + inflation, year - 1)
      const gen = yearlyGenerationAtStart * remainingGenerationFactor
      const saved = Math.min(gen, yearlyConsumption) * rate
      projected.push({ year, gen: Math.round(gen), rate: Number(rate.toFixed(2)), saved: Math.round(saved) })
    }

    // calculate simple payback (years until cumulative savings >= systemCost)
    let cumulative = 0
    let paybackYear = null
    for (const p of projected) {
      cumulative += p.saved
      if (paybackYear === null && cumulative >= systemCost) {
        paybackYear = p.year
      }
    }

    return NextResponse.json({
      estimatedSystemKw: Number(estimatedSystemKw.toFixed(2)),
      systemCost,
      yearlyConsumption,
      yearlyGenerationAtStart: Math.round(yearlyGenerationAtStart),
      yearlySavingAtStart: Math.round(yearlySavingAtStart),
      paybackYear,
      projection: projected,
    })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
