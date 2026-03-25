"use client";

import "./globals.css";
import Image from "next/image";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">

        {/* NAVBAR */}
        <header
          className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white/80 backdrop-blur-lg shadow-md border-b"
              : "bg-white/60 backdrop-blur-md"
          }`}
        >

          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 h-20">

            {/* LOGO - TAPE FLOW */}
<a href="/" className="flex items-center group">

  <div className="flex items-baseline relative">

    <span className="text-xl md:text-3xl font-extrabold tracking-wider text-gray-900">
      KANVE
    </span>

    <span className="relative text-xl md:text-3xl font-extrabold text-green-700 ml-1">
      K

      {/* flowing tape */}
      <span className="absolute left-2 top-1/2 w-6 h-[3px] bg-green-700 -rotate-45 origin-left group-hover:w-10 transition-all duration-300"></span>

    </span>

    <span className="text-xl md:text-3xl font-light text-gray-500 ml-2">
      PACKAGING
    </span>

  </div>

</a>
            
            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

              <a href="/" className="nav-link hover:text-green-700 transition">
                Home
              </a>

              {/* PRODUCTS DROPDOWN */}
              <div className="relative group">

                <div className="flex items-center gap-1 cursor-pointer nav-link hover:text-green-700 transition">
                  <span>Products</span>

                  {/* ARROW */}
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>

                {/* DROPDOWN */}
                <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100 bg-white shadow-xl rounded-xl w-64 mt-3 z-50 border border-gray-100">

                  <a
                    href="/products/reinforced-water-activated-tape"
                    className="block px-5 py-3 hover:bg-gray-50 transition"
                  >
                    Reinforced Water Activated Tape
                  </a>

                  <a
                    href="/products/non-reinforced-wat"
                    className="block px-5 py-3 hover:bg-gray-50 transition"
                  >
                    Non-Reinforced Water Activated Tape
                  </a>

                  <a
                    href="/products/water-activated-dispenser"
                    className="block px-5 py-3 hover:bg-gray-50 transition"
                  >
                    Water Activated Tape Dispenser
                  </a>

                </div>
              </div>

              <a href="/industries" className="nav-link hover:text-green-700 transition">
                Industries
              </a>

              <a href="/sustainability" className="nav-link hover:text-green-700 transition">
                Sustainability
              </a>

              <a href="/about" className="nav-link hover:text-green-700 transition">
                About
              </a>

              <a href="/contact" className="nav-link hover:text-green-700 transition">
                Contact
              </a>

            </nav>

            {/* CTA */}
            <a
              href="/contact"
              className="hidden md:inline-block bg-green-700 text-white px-5 py-2.5 rounded-xl shadow-md hover:bg-green-800 hover:scale-105 transition duration-300"
            >
              Get Quote
            </a>

            {/* HAMBURGER */}
            <button
              className="md:hidden flex flex-col gap-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="w-6 h-0.5 bg-gray-800"></span>
              <span className="w-6 h-0.5 bg-gray-800"></span>
              <span className="w-6 h-0.5 bg-gray-800"></span>
            </button>

          </div>

          {/* MOBILE MENU */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              menuOpen ? "max-h-96 py-4" : "max-h-0"
            } bg-white border-t border-gray-200 px-6`}
          >

            <div className="flex flex-col gap-4">

              <a href="/" onClick={() => setMenuOpen(false)}>Home</a>

              <a href="/products/reinforced-water-activated-tape" onClick={() => setMenuOpen(false)}>
                Reinforced WAT
              </a>

              <a href="/products/non-reinforced-wat" onClick={() => setMenuOpen(false)}>
                Non-Reinforced WAT
              </a>

              <a href="/products/water-activated-dispenser" onClick={() => setMenuOpen(false)}>
                WAT Dispenser
              </a>

              <a href="/industries" onClick={() => setMenuOpen(false)}>Industries</a>
              <a href="/sustainability" onClick={() => setMenuOpen(false)}>Sustainability</a>
              <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>

            </div>

          </div>

        </header>

        {/* PAGE */}
        {children}

        {/* WHATSAPP */}
        <a
          href="https://wa.me/917011372679"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition duration-300"
        >
          WhatsApp
        </a>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
