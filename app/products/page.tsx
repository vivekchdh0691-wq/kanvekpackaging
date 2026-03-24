import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="bg-gradient-to-b from-white to-green-50 min-h-screen">

      {/* HEADER */}
      <section className="text-center pt-24 pb-16 px-6">

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Our Products
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore our range of eco-friendly packaging solutions designed for
          strong, secure, and sustainable carton sealing.
        </p>

      </section>

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* PRODUCT 1 */}
          <Link href="/products/reinforced-water-activated-tape" className="group">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-500">

              <div className="overflow-hidden">
                <img
                  src="/tape.jpg"
                  alt="Reinforced Water Activated Tape"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition">
                  Reinforced Water Activated Tape
                </h3>

                <p className="text-gray-600 text-sm">
                  Fiberglass reinforced kraft tape designed for strong, tamper-evident carton sealing.
                </p>
              </div>

            </div>
          </Link>

          {/* PRODUCT 2 */}
          <Link href="/products/water-activated-dispenser" className="group">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-500">

              <div className="overflow-hidden">
                <img
                  src="/dispenser.jpg"
                  alt="Water Activated Tape Dispenser"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition">
                  Water Activated Tape Dispenser
                </h3>

                <p className="text-gray-600 text-sm">
                  Manual and electronic dispensers for efficient and consistent tape application.
                </p>
              </div>

            </div>
          </Link>

          {/* PRODUCT 3 */}
          <Link href="/products/non-reinforced-wat" className="group">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-500">

              <div className="overflow-hidden">
                <img
                  src="/custom-tape.jpg"
                  alt="Custom Printed Kraft Tape"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition">
                  Custom Printed Kraft Tape
                </h3>

                <p className="text-gray-600 text-sm">
                  Reinforced kraft tape printed with your brand for secure and professional packaging.
                </p>
              </div>

            </div>
          </Link>

        </div>

      </section>

    </main>
  );
}
