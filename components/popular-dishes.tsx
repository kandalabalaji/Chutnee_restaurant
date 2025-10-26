"use client"

export default function PopularDishes() {
  const dishes = [
    { name: "CHICKEN BIRYANI", image: "/flavorful-chicken-biryani.png" },
    { name: "PANEER TIKKA", image: "/paneer-tikka.png" },
    { name: "CHOCOLATE CAKE", image: "/decadent-chocolate-cake.png" },
    { name: "MIXED GRILL", image: "/mixed-grill.png" },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background-light to-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mt-48"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-accent text-3xl md:text-4xl font-bold mb-2">MOST POPULAR</h2>
          <h3 className="text-foreground text-2xl md:text-3xl font-bold mb-6">DISHES</h3>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="h-48 md:h-56 rounded-full bg-cover bg-center mb-6 group-hover:scale-125 transition-transform shadow-lg border-4 border-accent/20"
                style={{ backgroundImage: `url(${dish.image})` }}
              />
              <p className="text-center font-bold text-foreground text-sm md:text-base group-hover:text-accent transition-colors">
                {dish.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-accent hover:bg-accent/90 text-white px-10 py-3 font-bold transition-all hover:shadow-lg hover:scale-105">
            VIEW MENU
          </button>
        </div>
      </div>
    </section>
  )
}
