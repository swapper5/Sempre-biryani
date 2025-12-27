import React from "react";

export default function MenuPreview() {
  const items = [
    {
      name: "Biryani di Pollo Classico",
      price: "€6.99",
      image:
        "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Biryani di Agnello Tradizionale",
      price: "€10.99",
      image:
        "https://media.istockphoto.com/id/2164869598/photo/kacchi-biryani-bronze-dish.webp?a=1&b=1&s=612x612&w=0&k=20&c=D0Coh1s0BVskofka7p1TujcILe1V6FRnKY6vE9l5zpc=",
    },
    {
      name: "Biryani Vegetariano Speziato",
      price: "€7.50",
      image:
        "https://plus.unsplash.com/premium_photo-1695029504689-2b27606c05fe?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Kebab Rosso alla Griglia",
      price: "€5.99",
      image:
        "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=800&q=60",
    },
    {
  name: "Riso Dorato alla Curcuma",
  price: "€4.99",
  image:
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=60",
},

    {
      name: "Pollo Cremoso al Burro",
      price: "€9.50",
      image:
        "https://images.unsplash.com/photo-1734770931927-6410f9a64832?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            I Nostri Piatti Iconici
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Una selezione dei nostri piatti più amati, preparati con spezie
            autentiche e passione artigianale.
          </p>
        </div>

        {/* MENU GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black">
                  {item.name}
                </h3>
                <p className="mt-2 text-[#f97316] text-lg font-bold">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FULL MENU */}
        <div className="text-center mt-16">
          <a
            href="/images/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#f97316] text-black font-semibold rounded-full hover:bg-[#fb923c] transition"
          >
            Vedi Menu Completo (PDF)
          </a>
        </div>

        {/* OPENING HOURS */}
        <div className="mt-24 bg-black text-white rounded-2xl p-10 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-[#f97316] mb-6 text-center">
            Orari di Apertura
          </h3>

          <ul className="space-y-3 text-center text-lg">
            <li>🍽️ Lunedì – Giovedì: 12:00 – 15:00 / 18:00 – 23:00</li>
            <li>🍽️ Venerdì – Domenica: 18:00 – 23:00</li>
          </ul>

          <p className="text-sm text-gray-400 mt-6 text-center">
            *Gli orari possono variare nei giorni festivi
          </p>
        </div>

      </div>
    </section>
  );
}
