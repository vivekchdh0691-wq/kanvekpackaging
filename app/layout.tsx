import "./globals.css";
import Image from "next/image";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">

        {/* PREMIUM NAVBAR */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">

          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

            {/* LOGO */}
            <a href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Kanvek Packaging"
                width={140}
                height={40}
                className="object-contain"
              />
            </a>

            {/* NAV LINKS */}
            <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

              <a href="/" className="nav-link hover:text-green-700 transition">
                Home
              </a>

              {/* PRODUCTS DROPDOWN */}
              <div className="relative group">

                <a
                  href="/products"
                  className="nav-link hover:text-green-700 flex items-center transition"
                >
                  Products
                </a>

                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-xl w-60 mt-3 z-50 border border-gray-100">

                  <a
                    href="/products/reinforced-water-activated-tape"
                    className="block px-5 py-3 hover:bg-gray-50 transition"
                  >
                    Reinforced Water Activated Tape
                  </a>

                  <a
                    href="/products/water-activated-dispenser"
                    className="block px-5 py-3 hover:bg-gray-50 transition"
                  >
                    Tape Dispenser
                  </a>

                  <a
                    href="/products/custom-printed-kraft-tape"
                    className="block px-5 py-3 hover:bg-gray-50 transition"
                  >
                    Custom Printed Tape
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

            {/* CTA BUTTON */}
            <a
              href="/contact"
              className="hidden md:inline-block bg-green-700 text-white px-5 py-2.5 rounded-xl shadow-md hover:bg-green-800 transition"
            >
              Get Quote
            </a>

          </div>
        </header>

        {/* PAGE CONTENT */}
        {children}

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/917011372679"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
        >
          WhatsApp
        </a>

        {/* SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kanvek Packaging",
              url: "https://kanvekpackaging.com",
              logo: "https://kanvekpackaging.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 7011372679",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jasaur Kheri Road, Rohad",
                addressLocality: "Jhajjar",
                addressRegion: "Haryana",
                postalCode: "124501",
                addressCountry: "India",
              },
            }),
          }}
        />

        <Footer />

      </body>
    </html>
  );
}
