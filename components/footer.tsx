"use client"

import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from "@/components/icons"

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <span>C</span>
              </div>
              <span>CHUTNEE</span>
            </div>
            <p className="text-white/70 text-sm">Experience authentic Indian cuisine with a modern twist.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">CONTACT</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>02085711838</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>124 The Broadway, Southall</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@chutnee.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">FOLLOW US</h4>
            <div className="flex gap-4">
              <Facebook size={20} className="cursor-pointer hover:text-accent transition-colors" />
              <Instagram size={20} className="cursor-pointer hover:text-accent transition-colors" />
              <Twitter size={20} className="cursor-pointer hover:text-accent transition-colors" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>&copy; 2025 Chutnee Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
