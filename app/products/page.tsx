import Link from "next/link";

export default function ProductsPage() {
return ( <main className="max-w-7xl mx-auto px-6 py-20">


  <h1 className="text-4xl font-bold text-center mb-12">
    Our Products
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Product 1 */}
    <Link
      href="/products/reinforced-water-activated-tape"
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
    >
      <img
        src="/tape.jpg"
        alt="Reinforced Water Activated Tape"
        className="w-full h-56 object-cover"
      />

      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2">
          Reinforced Water Activated Tape
        </h3>

        <p className="text-gray-600">
          Fiberglass reinforced kraft tape designed for strong carton sealing.
        </p>
      </div>
    </Link>



    {/* Product 2 */}
    <Link
      href="/products/water-activated-dispenser"
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
    >
      <img
        src="/dispenser.jpg"
        alt="Water Activated Tape Dispenser"
        className="w-full h-56 object-cover"
      />

      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2">
          Water Activated Tape Dispenser
        </h3>

        <p className="text-gray-600">
          Manual and electronic dispensers for efficient tape application.
        </p>
      </div>
    </Link>



    {/* Product 3 */}
    <Link
      href="/products/custom-printed-tape"
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
    >
      <img
        src="/custom-tape.jpg"
        alt="Custom Printed Kraft Tape"
        className="w-full h-56 object-cover"
      />

      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2">
          Custom Printed Kraft Tape
        </h3>

        <p className="text-gray-600">
          Reinforced kraft tape printed with your brand for secure packaging.
        </p>
      </div>
    </Link>

  </div>

</main>

);
}
