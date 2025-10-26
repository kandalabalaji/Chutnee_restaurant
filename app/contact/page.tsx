import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Contact() {
  return (
    <main className="bg-background">
      <Header />
      <section className="min-h-screen py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold">Address</p>
                  <p className="text-foreground/70">124 The Broadway, Southall, London, UB1 1DF</p>
                </div>
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-foreground/70">020 8571 1838</p>
                </div>
                <div>
                  <p className="font-bold">Hours</p>
                  <p className="text-foreground/70">Mon-Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">Send us a Message</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-border rounded" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-border rounded"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded"
                ></textarea>
                <button className="bg-primary text-white px-6 py-2 font-bold hover:bg-primary/90 transition-colors">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
