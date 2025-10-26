import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import WhyChoose from "@/components/why-choose"
import Testimonials from "@/components/testimonials"
import BestSellers from "@/components/best-sellers"
import Reservation from "@/components/reservation"
import PopularDishes from "@/components/popular-dishes"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <About />
      <WhyChoose />
      <Testimonials />
      <BestSellers />
      <Reservation />
      <PopularDishes />
      <Gallery />
      <Footer />
    </main>
  )
}
