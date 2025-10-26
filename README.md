# ChutNee - Modern Indian Restaurant Website

A beautiful, responsive restaurant website for ChutNee, built with React and Next.js. This project showcases a modern Indian restaurant with an elegant design, smooth animations, and a seamless user experience.

## 🌟 Features

- *Responsive Design* - Mobile-first approach, works perfectly on all devices
- *Modern UI/UX* - Beautiful gradient backgrounds, smooth animations, and interactive elements
- *Navigation System* - Easy-to-use navigation with multiple pages
- *Hero Section* - Eye-catching hero with call-to-action buttons
- *About Section* - Restaurant story and mission
- *Menu Showcase* - Display of offerings and popular dishes
- *Testimonials* - Customer reviews and ratings
- *Best Sellers* - Interactive carousel of featured items
- *Reservation System* - Dedicated reservation page
- *Gallery* - Beautiful food and restaurant photography
- *Social Integration* - Links to social media platforms
- *Smooth Animations* - CSS transitions and hover effects throughout

## 🛠️ Tech Stack

- *Framework*: Next.js 16 (App Router)
- *UI Library*: React 19
- *Styling*: Tailwind CSS v4
- *Components*: shadcn/ui
- *Icons*: Custom SVG icons
- *Deployment*: Vercel-ready

## 📁 Project Structure

\\\`
chutnee-restaurant/
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── our-story/page.tsx       # Our Story page
│   ├── menu/page.tsx            # Menu page
│   ├── afternoon-tea/page.tsx   # Afternoon Tea page
│   ├── events/page.tsx          # Events page
│   ├── contact/page.tsx         # Contact page
│   └── reservation/page.tsx     # Reservation page
├── components/
│   ├── header.tsx               # Navigation header
│   ├── hero.tsx                 # Hero section
│   ├── about.tsx                # About section
│   ├── why-choose.tsx           # Why Choose Us section
│   ├── testimonials.tsx         # Testimonials section
│   ├── best-sellers.tsx         # Best Sellers carousel
│   ├── popular-dishes.tsx       # Popular Dishes section
│   ├── reservation.tsx          # Reservation section
│   ├── gallery.tsx              # Gallery section
│   ├── footer.tsx               # Footer
│   ├── icons.tsx                # Custom SVG icons
│   └── ui/                      # shadcn/ui components
├── public/
│   ├── hero-bg.jpg              # Hero background image
│   ├── about-bg.jpg             # About section background
│   ├── why-choose-bg.jpg        # Why Choose section background
│   ├── reservation-bg.jpg       # Reservation section background
│   ├── gallery-*.jpg            # Gallery images
│   └── *.png                    # Food and product images
├── lib/
│   └── utils.ts                 # Utility functions
├── hooks/
│   ├── use-mobile.ts            # Mobile detection hook
│   └── use-toast.ts             # Toast notification hook
├── styles/
│   └── globals.css              # Additional global styles
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript configuration
├── next.config.mjs              # Next.js configuration
└── tailwind.config.ts           # Tailwind CSS configuration
\\\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm package manager

### Installation

1. *Clone the repository*
   \\\`bash
   git clone https://github.com/yourusername/chutnee-restaurant.git
   cd chutnee-restaurant
   \\\`

2. *Install dependencies*
   \\\`bash
   npm install
   # or
   pnpm install
   \\\`

3. *Run the development server*
   \\\`bash
   npm run dev
   # or
   pnpm dev
   \\\`

4. *Open your browser*
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- npm run dev - Start development server
- npm run build - Build for production
- npm run start - Start production server
- npm run lint - Run ESLint

## 🎨 Design System

### Color Palette

- *Primary*: Teal/Turquoise (#1BA89F)
- *Accent*: Magenta/Pink (#E91E8C)
- *Background*: Cream (#F5F1E8)
- *Text*: Dark Gray (#333333)
- *Borders*: Light Gray (#E0E0E0)

### Typography

- *Headings*: Bold, modern sans-serif
- *Body*: Clean, readable sans-serif
- *Line Height*: 1.4-1.6 for optimal readability

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔗 Navigation

- *Home* - Landing page with hero section
- *Our Story* - Restaurant history and mission
- *Menu* - Full menu and offerings
- *Afternoon Tea* - Special afternoon tea service
- *Events* - Upcoming events and private dining
- *Contact* - Contact information and location
- *Reservation* - Book a table online

## 📞 Contact Information

- *Address*: 124 The Broadway, Southall, London, UB1 1DF
- *Phone*: 02085711838
- *Email*: info@chutnee.com

## 🌐 Social Media

- Instagram
- Facebook
- TikTok

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Click Deploy

The site will be live in seconds!

### Environment Variables

No environment variables are required for this project. All content is static.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Known Issues

- Background images may take a moment to load on first visit
- Some animations may be reduced on mobile devices for performance

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## 🎯 Future Enhancements

- [ ] Online ordering system
- [ ] Customer reviews and ratings
- [ ] Email newsletter signup
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Photo gallery with lightbox
- [ ] Live chat support

---

*Built with ❤️ for ChutNee Restaurant*
