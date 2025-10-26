"use client"

export default function Reservation() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className="h-96 md:h-full rounded-lg bg-cover bg-center"
            style={{
              backgroundImage: "url(/reservation-bg.jpg)",
            }}
          />

          {/* Content */}
          <div>
            <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-4">
              RESERVE YOUR
              <br />
              TABLE AT CHUTNEE
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Experience fine dining at its best. Book your table now and enjoy an unforgettable evening with us. Our
              team is ready to make your visit special.
            </p>
            <button className="bg-accent text-white px-8 py-3 font-bold hover:bg-accent/90 transition-colors">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
