"use client"

import { ChevronLeft, ChevronRight } from "@/components/icons"
import { useState } from "react"

export default function BestSellers() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const items = [
    { name: "COLD COFFEE", image: "/cold-coffee.png" },
    { name: "ICED TEA", image: "/iced-tea.png" },
    { name: "SAMOSA", image: "/crispy-golden-samosas.png" },
  ]

  const next = () => setCurrentIndex((currentIndex + 1) % items.length)
  const prev = () => setCurrentIndex((currentIndex - 1 + items.length) % items.length)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">BEST SELLERS</h2>

        {/* Carousel */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <button onClick={prev} className="p-3 hover:bg-white/20 rounded-full transition-all hover:scale-110">
            <ChevronLeft size={40} />
          </button>

          <div
            className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-cover bg-center shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform"
            style={{ backgroundImage: `url(${items[currentIndex].image})` }}
          />

          <button onClick={next} className="p-3 hover:bg-white/20 rounded-full transition-all hover:scale-110">
            <ChevronRight size={40} />
          </button>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">{items[currentIndex].name}</h3>
          <button className="bg-white text-primary px-10 py-3 font-bold hover:bg-gray-100 transition-all hover:shadow-lg hover:scale-105">
            EXPLORE
          </button>
        </div>
      </div>
    </section>
  )
}
