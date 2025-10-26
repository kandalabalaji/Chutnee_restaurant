"use client"

import Link from "next/link"
import { ChevronRight } from "@/components/icons"

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background with multiple images creating a collage effect */}
      <div className="relative h-screen md:h-[700px] flex items-center">
        {/* Left side - Pink flowers and decorative elements */}
        <div className="absolute left-0 top-0 w-1/3 h-full hidden md:block">
          <div className="relative h-full">
            {/* Pink flowers background */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&h=800&fit=crop')",
              }}
            />
            {/* Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </div>
        </div>

        {/* Center - Main content area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              WELCOME TO
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">CHUTNEE</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed drop-shadow-md">
              Experience the finest Indian cuisine where tradition meets innovation in every bite.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <Link href="/menu">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 font-bold transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2 w-fit rounded-lg shadow-lg">
                  VIEW MENU <ChevronRight size={20} />
                </button>
              </Link>
              <Link href="/reservation">
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 font-bold transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2 w-fit rounded-lg shadow-lg">
                  BOOK A TABLE <ChevronRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right side - Food and restaurant images */}
        <div className="absolute right-0 top-0 w-1/3 h-full hidden md:block">
          <div className="relative h-full flex flex-col gap-4 p-4">
            {/* Top image */}
            <div
              className="flex-1 bg-cover bg-center rounded-lg shadow-2xl overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop')",
              }}
            />
            {/* Bottom image */}
            <div
              className="flex-1 bg-cover bg-center rounded-lg shadow-2xl overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1504674900967-a8f32de4a645?w=400&h=300&fit=crop')",
              }}
            />
          </div>
        </div>

        {/* Mobile background */}
        <div
          className="absolute inset-0 md:hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=1000&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
