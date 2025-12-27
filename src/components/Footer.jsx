import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-extrabold text-white">
            <span className="text-[#f97316]">Sempre</span> Biryani
          </h3>
          <p className="mt-3 text-sm text-gray-400 max-w-sm">
            Un’esperienza culinaria dove il calore italiano incontra
            l’aroma speziato dell’Oriente.
          </p>
        </div>

        {/* CONTACT INFO */}
<div>
  <h4 className="text-lg font-semibold text-white mb-3">
    Contatti
  </h4>

  <p className="text-sm">
    📍 Via Unità 1/C, Spinea, 30038
  </p>

  <p className="text-sm mt-2">
    📧{" "}
    <a
      href="mailto:semprebiryani@gmail.com"
      className="hover:text-[#f97316] transition"
    >
      semprebiryani@gmail.com
    </a>
  </p>

  <p className="text-sm mt-2">
    💬{" "}
    <a
      href="https://wa.me/393454694514"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#f97316] transition"
    >
      WhatsApp: +39 345 469 4514
    </a>
  </p>
</div>


        {/* OPENING HOURS */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Orari
          </h4>
          <p className="text-sm">Lun – Gio: 12:00 – 15:00 / 18:00 – 23:00</p>
          <p className="text-sm mt-2">Ven – Dom: 18:00 – 23:00</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sempre Biryani. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
