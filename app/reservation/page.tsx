import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Reservation() {
  return (
    <main className="bg-background">
      <Header />
      <section className="min-h-screen py-20 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">Book a Table</h1>
          <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="px-4 py-2 border border-border rounded" required />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 border border-border rounded"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-2 border border-border rounded"
                required
              />
              <input type="date" className="px-4 py-2 border border-border rounded" required />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="time" className="px-4 py-2 border border-border rounded" required />
              <select className="px-4 py-2 border border-border rounded" required>
                <option>Select Number of Guests</option>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </div>
            <textarea
              placeholder="Special Requests"
              rows={4}
              className="w-full px-4 py-2 border border-border rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 font-bold hover:bg-primary/90 transition-colors rounded"
            >
              Book Your Table
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
}
