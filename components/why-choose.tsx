"use client"

export default function WhyChoose() {
  const stats = [
    { number: "100%", label: "FRESH INGREDIENTS" },
    { number: "98%", label: "CUSTOMER SATISFACTION" },
    { number: "99%", label: "AUTHENTIC RECIPES" },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 relative">
            <div
              className="h-96 md:h-full rounded-3xl bg-cover bg-center shadow-2xl border-4 border-accent/20"
              style={{
                backgroundImage: "url(/why-choose-bg.jpg)",
              }}
            />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-accent/30 rounded-lg"></div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-accent text-3xl md:text-4xl font-bold mb-8 leading-tight">
              WHY CHOOSE
              <br />
              CHUTNEE
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-12 text-lg">
              Fresh flavours, authentic vibes, and exceptional service. We're committed to delivering the finest Indian
              dining experience with every visit.
            </p>

            {/* Stats */}
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 p-4 rounded-lg hover:bg-accent/5 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-accent text-4xl font-bold min-w-fit">{stat.number}</div>
                  <div className="text-foreground/70 font-medium text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
