"use client"

export default function Gallery() {
  const images = ["/gallery-1.jpg", "/gallery-2.jpg", "/gallery-3.jpg", "/gallery-4.jpg"]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-accent text-2xl md:text-3xl font-bold text-center mb-12">OUR GALLERY</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="h-48 md:h-56 rounded-lg bg-cover bg-center hover:scale-105 transition-transform cursor-pointer"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
