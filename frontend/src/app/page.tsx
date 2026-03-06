"use client";
import { useState } from "react";

export default function BarberLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight text-gray-900 hover:opacity-80 transition-opacity cursor-pointer">
            Bellevue <span className="text-amber-600">Afro</span> Barber
          </a>

          {/* Desktop nav links */}
          <div className="hidden sm:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">Tjänster</a>
            <a href="#gallery" className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">Galleri</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">Kontakt</a>
            <a
              href="tel:0790784861"
              className="px-5 py-2 bg-amber-600 text-white rounded-full text-sm font-semibold hover:bg-amber-700 transition-colors"
            >
              Boka Nu
            </a>
          </div>

          {/* Mobile: Book button + Hamburger */}
          <div className="flex sm:hidden items-center gap-3">
            <a
              href="tel:0790784861"
              className="px-4 py-2 bg-amber-600 text-white rounded-full text-sm font-semibold hover:bg-amber-700 transition-colors"
            >
              Boka Nu
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="sm:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
            <a href="#services" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors py-1">Tjänster</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors py-1">Galleri</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors py-1">Kontakt</a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80"
          alt="Barbershop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Professionell Barbershop · Bellevue
          </p>
          <h1 className="text-5xl sm:text-7xl font-black leading-tight mb-6">
            Bellevue<br />
            <span className="text-amber-500">Afro Barber</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Skarp klippning. Ren stil. Varje gång.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0790784861"
              className="px-8 py-4 bg-amber-600 text-white rounded-full font-bold text-lg hover:bg-amber-700 transition-colors"
            >
              📞 Boka tid — 0790 78 48 61
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-colors"
            >
              Se tjänster
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce flex flex-col items-center gap-1">
          <span className="text-xs">Scrolla</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-3">Vad vi erbjuder</p>
            <h2 className="text-4xl font-black text-gray-900">Tjänster & Priser</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Haircut */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
              <div className="h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80"
                  alt="Haircut"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Haircut</h3>
                  <span className="text-2xl font-black text-amber-600">140 kr</span>
                </div>
                <p className="text-gray-500 text-sm">Professionell klippning anpassad efter din stil.</p>
              </div>
            </div>

            {/* Fade */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
              <div className="h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?w=600&q=80"
                  alt="Fade"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Fade</h3>
                  <span className="text-2xl font-black text-amber-600">200 kr</span>
                </div>
                <p className="text-gray-500 text-sm">Skarp fade-klippning för ett rent och modernt utseende.</p>
              </div>
            </div>

            {/* Beard Trim */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
              <div className="h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80"
                  alt="Beard Trim"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Beard Trim</h3>
                  <span className="text-2xl font-black text-amber-600">100 kr</span>
                </div>
                <p className="text-gray-500 text-sm">Formning och trimning av skägg för ett välvårdat look.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-3">Vårt arbete</p>
            <h2 className="text-4xl font-black text-gray-900">Galleri</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=400&q=80" alt="Gallery 1" className="w-full h-48 object-cover rounded-2xl hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80" alt="Gallery 2" className="w-full h-48 object-cover rounded-2xl hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80" alt="Gallery 3" className="w-full h-48 object-cover rounded-2xl hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?w=400&q=80" alt="Gallery 4" className="w-full h-48 object-cover rounded-2xl hover:opacity-90 transition-opacity" />
          </div>
        </div>
      </section>

      {/* ── HOURS & LOCATION ── */}
      <section id="contact" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
          {/* Hours */}
          <div>
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">Öppettider</p>
            <h2 className="text-3xl font-black mb-8">När vi är öppna</h2>
            <div className="space-y-4">
              {[
                { day: "Måndag", time: "09:00 – 19:00" },
                { day: "Tisdag", time: "09:00 – 19:00" },
                { day: "Onsdag", time: "09:00 – 19:00" },
                { day: "Torsdag", time: "09:00 – 19:00" },
                { day: "Fredag", time: "09:00 – 19:00" },
                { day: "Lördag", time: "09:00 – 19:00" },
                { day: "Söndag", time: "Stängt" },
              ].map(({ day, time }) => (
                <div key={day} className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-white/70">{day}</span>
                  <span className={`font-semibold ${time === "Stängt" ? "text-red-400" : "text-amber-600"}`}>{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div>
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">Hitta oss</p>
            <h2 className="text-3xl font-black mb-8">Var vi finns</h2>
            <div className="rounded-2xl overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=57.72994744801842,12.02204701042644&hl=sv&z=17&t=k&output=embed"
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bellevue Afro Barber location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">Redo för en ny look?</h2>
          <p className="text-white/60 text-lg mb-8">Ring oss och boka din tid idag. Inga väntetider, bara resultat.</p>
          <a
            href="tel:0790784861"
            className="inline-block px-10 py-4 bg-amber-600 text-white rounded-full font-bold text-lg hover:bg-amber-700 transition-colors"
          >
            📞 Ring nu — 0790 78 48 61
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 bg-gray-950 text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} Bellevue Afro Barber · Stallmästaregatan, Göteborg</p>
        <p className="mt-1 text-xs">Hemsida skapad av <a href="https://a5sgroup.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">A5S Group</a></p>
      </footer>

    </div>
  );
}
