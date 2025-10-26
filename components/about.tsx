"use client"

export default function About() {
  const offerings = [
    { icon: "🍔", label: "BREAKFAST" },
    { icon: "🍜", label: "STREET FOOD" },
    { icon: "🍰", label: "DESSERTS" },
    { icon: "☕", label: "CHAI" },
    { icon: "🥤", label: "HOT DRINKS" },
    { icon: "🧊", label: "COLD DRINKS" },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background-light to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20 items-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 border-4 border-accent/30 rounded-lg"></div>
            <h2 className="text-accent text-3xl md:text-4xl font-bold mb-6 leading-tight">
              WHERE TRADITION
              <br />
              MEETS INNOVATION IN
              <br />
              EVERY BITE.
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-8 text-lg">
              At Chutnee, we celebrate the rich heritage of Indian cuisine while embracing modern culinary innovation.
              Each dish is crafted with authentic spices and contemporary techniques, creating an unforgettable dining
              experience that honors tradition while pushing boundaries.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 font-bold transition-all hover:shadow-lg hover:scale-105">
              FIND MORE
            </button>
          </div>
          <div className="relative">
            <div
              className="h-80 md:h-96 rounded-2xl bg-cover bg-center shadow-2xl border-4 border-accent/20"
              style={{
                backgroundImage: "url(/about-bg.jpg)",
              }}
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mt-24">
          <h3 className="text-accent text-3xl md:text-4xl font-bold text-center mb-4">WHAT WE</h3>
          <h3 className="text-foreground text-2xl md:text-3xl font-bold text-center mb-16">OFFER</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {offerings.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-white to-background-light hover:from-accent/10 hover:to-accent/5 transition-all hover:shadow-xl hover:scale-105 animate-fade-in border border-accent/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl">{item.icon}</div>
                <p className="font-bold text-center text-sm md:text-base text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
