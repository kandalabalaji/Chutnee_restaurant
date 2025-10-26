import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AfternoonTea() {
  return (
    <main className="bg-background">
      <Header />
      <section className="min-h-screen py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">Afternoon Tea</h1>
          <p className="text-lg text-foreground mb-8">
            Experience our exquisite afternoon tea service, featuring a curated selection of premium teas, pastries, and
            traditional Indian sweets.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-accent mb-4">Classic Tea Service</h3>
              <p className="text-foreground/70">Assorted pastries, scones, and finger sandwiches</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-accent mb-4">Indian Tea Experience</h3>
              <p className="text-foreground/70">Masala chai with traditional Indian sweets</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
