"use client"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "Absolutely incredible experience! The food was authentic and delicious.",
      rating: 5,
    },
    {
      name: "James K.",
      text: "Best Indian restaurant in London. Highly recommend!",
      rating: 5,
    },
    {
      name: "Priya S.",
      text: "The ambiance and service were exceptional. Will definitely return!",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background-light to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent text-3xl md:text-4xl font-bold mb-2">ABOUT US</h2>
          <h3 className="text-foreground text-2xl md:text-3xl font-bold">LOVE ABOUT US</h3>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-background-light p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 hover:-translate-y-2 animate-fade-in border border-accent/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground/70 mb-6 leading-relaxed">{testimonial.text}</p>
              <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Social Section */}
        <div className="text-center bg-gradient-to-r from-accent/5 to-primary/5 p-12 rounded-3xl">
          <h3 className="text-accent text-3xl md:text-4xl font-bold mb-12 leading-tight">
            STAY CONNECTED & SHARE
            <br />
            YOUR EXPERIENCE WITH US!
          </h3>
          <div className="flex justify-center gap-8 flex-wrap">
            <div
              className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-cover bg-center hover:scale-125 transition-transform cursor-pointer shadow-lg border-4 border-accent/20"
              style={{ backgroundImage: "url(/placeholder.svg?height=144&width=144&query=tiktok)" }}
            />
            <div
              className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-cover bg-center hover:scale-125 transition-transform cursor-pointer shadow-lg border-4 border-accent/20"
              style={{ backgroundImage: "url(/placeholder.svg?height=144&width=144&query=instagram)" }}
            />
            <div
              className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-cover bg-center hover:scale-125 transition-transform cursor-pointer shadow-lg border-4 border-accent/20"
              style={{ backgroundImage: "url(/placeholder.svg?height=144&width=144&query=snapchat)" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
