import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Menu() {
  return (
    <main className="bg-background">
      <Header />
      <section className="min-h-screen py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-12">Our Menu</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-accent mb-6">Breakfast</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg">Masala Dosa</h3>
                  <p className="text-foreground/70">Crispy rice crepe with spiced potato filling</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Idli Sambar</h3>
                  <p className="text-foreground/70">Steamed rice cakes with lentil curry</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-accent mb-6">Street Food</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg">Pani Puri</h3>
                  <p className="text-foreground/70">Crispy shells with spiced water and filling</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Samosa</h3>
                  <p className="text-foreground/70">Golden fried pastry with savory filling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
