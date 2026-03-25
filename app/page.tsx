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
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
              Eco-Friendly Packaging Solution 🌱
            </span>

            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Reinforced Water Activated Tape <br />
              <span className="text-green-700">
                For Secure Carton Sealing
              </span>
            </h1>

            <p className="text-gray-600 text-lg">
              High-performance kraft paper tape with fiberglass reinforcement.
              Ideal for e-commerce, logistics, and export packaging — while reducing plastic usage.
            </p>

            <div className="flex gap-4">
              <a href="/contact" className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition">
                Get a Quote
              </a>

              <a href="/products" className="border border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50 transition">
                View Products
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-30"></div>

            <img
              src="/hero.png"
              alt="Water Activated Tape"
              className="relative w-[420px] drop-shadow-2xl rounded-xl animate-floatSlow"
            />
          </div>
        </div>
      </section>

    {/* ECO SECTION - CLEAN PREMIUM */}
<section className="mx-6 my-20">

  <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

    {/* BACKGROUND IMAGE */}
    <img
      src="/sustainable 2.jpg"
      alt="Eco Packaging"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* VERY LIGHT OVERLAY (just for readability) */}
    <div className="absolute inset-0 bg-black/20"></div>

    {/* CONTENT */}
    <div className="relative max-w-7xl mx-auto px-12 py-28 grid md:grid-cols-2 items-center">

      {/* TEXT */}
      <div className="space-y-6 max-w-xl">

        <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-medium text-white backdrop-blur-sm">
          Sustainable Packaging 🌱
        </span>

        <h2 className="text-5xl font-bold text-white leading-tight">
          Eco-Friendly Carton <br /> Sealing Solution
        </h2>

        <p className="text-white/90 text-lg leading-relaxed">
          <strong>Gummed Tape (Water Activated Tape)</strong> is the most economical and eco-friendly carton sealing solution available today, offering a perfect balance of <strong>sustainability, strength, and cost-efficiency</strong>. Made from <strong>natural kraft paper</strong> and <strong>starch-based adhesive</strong>, it is <strong>100% biodegradable</strong> and <strong>fully recyclable along with cartons</strong>, eliminating the need for plastic tapes.
        </p>

        <p className="text-white/90 text-lg leading-relaxed">
          Its <strong>superior bonding</strong> reduces tape usage while ensuring <strong>secure, tamper-evident sealing</strong>. At <strong>Kanvek Packaging</strong>, we are committed to driving the shift towards <strong>sustainable packaging</strong> by providing solutions that <strong>reduce environmental impact</strong> while delivering <strong>long-term cost benefits</strong> to businesses.
        </p>

      </div>

      {/* EMPTY SPACE */}
      <div></div>

    </div>

  </div>
</section>
      {/* TRUST */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Trusted by Growing Businesses Across India
          </h2>

          <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-lg font-medium">
            <span>✔ Eco-Friendly</span>
            <span>✔ Tamper Proof</span>
            <span>✔ Export Ready</span>
            <span>✔ Cost Efficient</span>
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
            Strong, secure and eco-friendly carton sealing solutions for modern packaging needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="font-semibold text-lg">Tamper Evident</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Bonds with carton making tampering clearly visible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="font-semibold text-lg">Eco Friendly</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Fully recyclable kraft paper with natural adhesive.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-4">💪</div>
              <h3 className="font-semibold text-lg">High Strength</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Fiberglass reinforcement ensures superior sealing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-4">🚚</div>
              <h3 className="font-semibold text-lg">Perfect For Logistics</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Ideal for e-commerce, shipping & export packaging.
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

        <div className="grid md:grid-cols-3 gap-10 items-stretch">

          {/* 1 - Reinforced */}
          <Link href="/products/reinforced-water-activated-tape">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full cursor-pointer">

              <div className="h-56 overflow-hidden">
                <img src="/tape.jpg" className="w-full h-full object-cover" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  Reinforced Water Activated Tape
                </h3>
                <p className="text-gray-600 text-sm">
                  Fiberglass reinforced kraft tape for strong, tamper-proof sealing.
                </p>
              </div>

            </div>
          </Link>

          {/* 2 - Non Reinforced */}
          <Link href="/products/non-reinforced-wat">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full cursor-pointer">

              <div className="h-56 overflow-hidden">
                <img src="/tape2.jpg" className="w-full h-full object-cover" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  Non-Reinforced Water Activated Tape
                </h3>
                <p className="text-gray-600 text-sm">
                  Eco-friendly kraft paper tape ideal for light & medium packaging.
                </p>
              </div>

            </div>
          </Link>

          {/* 3 - Dispenser */}
          <Link href="/products/water-activated-dispenser">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full cursor-pointer">

              <div className="h-56 overflow-hidden">
                <img src="/dispenser.jpg" className="w-full h-full object-cover" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  Water Activated Tape Dispenser
                </h3>
                <p className="text-gray-600 text-sm">
                  Manual and electronic dispensers for efficient tape application.
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
          Contact us to discuss your packaging requirements.
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
