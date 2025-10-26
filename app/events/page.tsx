import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Events() {
  return (
    <main className="bg-background">
      <Header />
      <section className="min-h-screen py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">Events</h1>
          <p className="text-lg text-foreground mb-8">
            Host your special occasions at Chutnee. From intimate gatherings to grand celebrations, we provide the
            perfect ambiance and culinary excellence.
          </p>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-accent mb-2">Private Dining</h3>
              <p className="text-foreground/70">Exclusive spaces for your special events</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-accent mb-2">Catering Services</h3>
              <p className="text-foreground/70">Bring Chutnee's flavors to your venue</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
