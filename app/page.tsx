import Link from "next/link";

export const metadata = {
  title: "Kanvek Packaging Solutions | Reinforced Water Activated Tape Manufacturer",
  description:
    "Kanvek Packaging Solutions provides reinforced water activated kraft tape for secure carton sealing.",
};

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-green-100 pt-32 pb-24">

        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-green-200 rounded-full blur-[140px] opacity-30"></div>
        <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] bg-green-100 rounded-full blur-[120px] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm mb-5 shadow-sm">
              Eco-Friendly Packaging Solution 🌱
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-green-900 leading-tight mb-6 max-w-xl">
              Reinforced Water Activated Tape
              <span className="block text-green-700 mt-2">
                For Secure Carton Sealing
              </span>
            </h1>

            <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-lg">
              High-performance kraft paper tape with fiberglass reinforcement,
              designed for strong, tamper-evident sealing.
            </p>

            <div className="flex gap-4">
              <a href="/contact" className="bg-green-700 text-white px-7 py-3 rounded-xl shadow-lg hover:bg-green-800 transition">
                Get a Quote
              </a>

              <a href="/products" className="border border-green-700 text-green-700 px-7 py-3 rounded-xl hover:bg-green-700 hover:text-white transition">
                View Products
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center">
            <div className="absolute right-10 top-10 w-[420px] h-[420px] bg-green-300 rounded-full blur-[130px] opacity-30"></div>

            <img
              src="/hero.png"
              alt="Water Activated Tape"
              className="relative w-[380px] lg:w-[440px] object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.15)] animate-floatSlow"
            />
          </div>

        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-900">
            Why Choose Kanvek Packaging
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Our reinforced water activated kraft tape provides strong, secure,
            and eco-friendly carton sealing solutions for modern packaging needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="font-semibold text-lg">Tamper Evident</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Once applied, the tape bonds with the carton making tampering visible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="font-semibold text-lg">Eco Friendly</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Made from kraft paper and natural adhesive, fully recyclable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-4">💪</div>
              <h3 className="font-semibold text-lg">High Strength</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Fiberglass reinforced structure ensures superior carton sealing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-4">🚚</div>
              <h3 className="font-semibold text-lg">Perfect For Logistics</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Ideal for e-commerce, shipping, warehousing and export packaging.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-center mb-16">
          Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          <Link href="/products/reinforced-water-activated-tape">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
              <img src="/tape.jpg" alt="Tape" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Reinforced Water Activated Tape
                </h3>
                <p className="text-gray-600">
                  Fiberglass reinforced kraft tape designed for strong carton sealing.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/products/water-activated-dispenser">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
              <img src="/dispenser.jpg" alt="Dispenser" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Water Activated Tape Dispenser
                </h3>
                <p className="text-gray-600">
                  Manual and electronic dispensers for efficient tape application.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/products/custom-printed-tape">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
              <img src="/custom-tape.jpg" alt="Custom Tape" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Custom Printed Kraft Tape
                </h3>
                <p className="text-gray-600">
                  Reinforced kraft tape printed with your brand.
                </p>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">

        <h2 className="text-3xl font-bold">
          Get Packaging Solutions For Your Business
        </h2>

        <p className="mt-4 text-gray-600">
          Contact us to discuss reinforced water activated tape solutions.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 bg-green-700 text-white px-7 py-3 rounded-xl font-semibold hover:bg-green-800 transition"
        >
          Get a Quote
        </Link>

      </section>

    </main>
  );
}
