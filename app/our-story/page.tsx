import Header from "@/components/header"
import Footer from "@/components/footer"

export default function OurStory() {
  return (
    <main className="bg-background">
      <Header />
      <section className="min-h-screen py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">Our Story</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground mb-6">
              At Chutnee, we celebrate the rich heritage of Indian cuisine while embracing modern culinary innovation.
              Our journey began with a passion for authentic flavors and a commitment to delivering exceptional dining
              experiences.
            </p>
            <p className="text-lg text-foreground mb-6">
              Every dish tells a story of tradition, craftsmanship, and dedication. We source the finest ingredients and
              prepare each meal with meticulous attention to detail, ensuring that every bite transports you to the
              heart of India.
            </p>
            <p className="text-lg text-foreground mb-6">
              Our team of experienced chefs brings decades of culinary expertise, blending traditional recipes with
              contemporary techniques. We believe in creating not just meals, but memories that last a lifetime.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
