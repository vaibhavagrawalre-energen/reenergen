"use client"

import React from "react"
import { useLanguage } from "@/lib/language-context"

export default function ClientsSection() {
  const { t } = useLanguage()

  const safeT = t ?? {
    vendorsFinance: {
      title: "Our Technology Partners",
      subtitle: "Trusted brands we work with",
      financeTitle: "Bank Financing Available",
      financeSubtitle: "Easy EMI & loan options through leading banks",
    },
  }

  const clients = [
    { logo: "/brands/waaree.png" },
    { logo: "/brands/tata.jpg" },
  ]

  const banks = [
    { logo: "/banks/sbi.png" },
    { logo: "/banks/pnb.png" },
    { logo: "/banks/bob.png" },
    { logo: "/banks/canara.png" },
    { logo: "/banks/unionbank.png" },
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            {safeT.vendorsFinance.title}
          </h2>
          <p className="mt-2 text-slate-600">
            {safeT.vendorsFinance.subtitle}
          </p>
        </div>

        {/* CLIENT LOGOS */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-none transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-36 w-56 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt="Client logo"
                  className="object-contain max-w-[200px] max-h-[110px]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* BANK FINANCE SECTION */}
        <div className="text-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 tracking-wide uppercase">
            {safeT.vendorsFinance.financeTitle}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {safeT.vendorsFinance.financeSubtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {banks.map((bank, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 w-32 h-20 flex items-center justify-center"
            >
              <img
                src={bank.logo}
                alt="Bank logo"
                className={`object-contain ${
                  index === 0
                    ? "max-w-[80px] max-h-[40px]"   // SBI smaller
                    : "max-w-[110px] max-h-[55px]"
                }`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
