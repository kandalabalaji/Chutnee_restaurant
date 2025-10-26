"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, MapPin, Search, Instagram } from "@/components/icons"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm md:text-base">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>124 THE BROADWAY, SOUTHALL, LONDON, UB1 1DF</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Phone size={16} />
              <span>02085711838</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Search size={18} className="cursor-pointer" />
            <Instagram size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur sticky top-0 z-40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl">
              <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                <span className="text-primary">C</span>
              </div>
              <span className="text-primary">CHUTNEE</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/our-story" className="text-foreground hover:text-primary transition-colors font-medium">
                OUR STORY
              </Link>
              <Link href="/menu" className="text-foreground hover:text-primary transition-colors font-medium">
                MENU
              </Link>
              <Link href="/afternoon-tea" className="text-foreground hover:text-primary transition-colors font-medium">
                AFTERNOON TEA
              </Link>
              <Link href="/events" className="text-foreground hover:text-primary transition-colors font-medium">
                EVENTS
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                CHUTNEE FAMILY
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                CONTACT
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/reservation">
                <button className="bg-white text-primary px-6 py-2 font-bold hover:bg-gray-100 transition-colors">
                  RESERVATION →
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-2">
              <Link
                href="/our-story"
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                OUR STORY
              </Link>
              <Link href="/menu" className="block text-foreground hover:text-primary transition-colors font-medium">
                MENU
              </Link>
              <Link
                href="/afternoon-tea"
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                AFTERNOON TEA
              </Link>
              <Link href="/events" className="block text-foreground hover:text-primary transition-colors font-medium">
                EVENTS
              </Link>
              <Link href="/contact" className="block text-foreground hover:text-primary transition-colors font-medium">
                CHUTNEE FAMILY
              </Link>
              <Link href="/contact" className="block text-foreground hover:text-primary transition-colors font-medium">
                CONTACT
              </Link>
              <Link href="/reservation" className="block">
                <button className="w-full bg-white text-primary px-6 py-2 font-bold hover:bg-gray-100 transition-colors">
                  RESERVATION →
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
