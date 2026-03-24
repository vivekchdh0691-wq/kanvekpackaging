export const metadata = {
  title: "Kanvek Packaging Solutions | Reinforced Water Activated Tape Manufacturer",
  description:
  "Kanvek Packaging Solutions provides reinforced water activated kraft tape for secure carton sealing. Eco-friendly packaging solutions for ecommerce, logistics and manufacturing industries.",
  keywords:
  "water activated tape India, reinforced kraft tape manufacturer, carton sealing tape, eco friendly packaging tape, kraft paper tape, gummed paper tape, reinforced gummed paper tape, water activated kraft paper tape, ecofriendly kraft paper tape",
  };
  
  
import Link from "next/link";
import Image from "next/image";

export default function Home() {
return ( <main className="bg-gray-50 text-gray-800">


  {/* HERO */}
  <section className="bg-gradient-to-b from-green-50 to-white py-28">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

    <div className="max-w-xl">

      <h1 className="text-5xl font-bold text-green-800 leading-tight">
        Reinforced Water Activated Tape
        <br />
        For Secure Carton Sealing
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        Eco-friendly fiberglass reinforced kraft tape designed for strong,
        tamper-evident carton sealing in ecommerce, logistics and export packaging.
      </p>

      <div className="mt-8 flex gap-4">

        <a
          href="/contact"
          className="bg-green-700 text-white px-7 py-3 rounded-lg hover:bg-green-800 transition"
        >
          Get a Quote
        </a>

        <a
          href="/products"
          className="border border-green-700 text-green-700 px-7 py-3 rounded-lg hover:bg-green-700 hover:text-white transition"
        >
          View Products
        </a>

      </div>

    </div>

    <Image
      src="/hero.jpg"
      alt="Water Activated Tape Packaging"
      width={650}
      height={450}
      className="rounded-2xl shadow-xl"
    />

  </div>

</section>

  <section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center text-gray-900">
      Why Choose Kanvek Packaging
    </h2>

    <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
      Our reinforced water activated kraft tape provides strong, secure,
      and eco-friendly carton sealing solutions for modern packaging needs.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

      {/* Feature 1 */}
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <div className="text-green-700 text-3xl mb-4">📦</div>
        <h3 className="font-semibold text-lg">Tamper Evident</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Once applied, the tape bonds with the carton making tampering visible.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <div className="text-green-700 text-3xl mb-4">🌱</div>
        <h3 className="font-semibold text-lg">Eco Friendly</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Made from kraft paper and natural adhesive, fully recyclable.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <div className="text-green-700 text-3xl mb-4">💪</div>
        <h3 className="font-semibold text-lg">High Strength</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Fiberglass reinforced structure ensures superior carton sealing.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <div className="text-green-700 text-3xl mb-4">🚚</div>
        <h3 className="font-semibold text-lg">Perfect For Logistics</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Ideal for e-commerce, shipping, warehousing and export packaging.
        </p>
      </div>

    </div>
  </div>
</section>



  {/* WHY WATER ACTIVATED TAPE */}
  <section className="bg-white py-24">

    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-3xl font-bold text-center mb-16">
        Why Water Activated Tape
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

        <div>
          <h3 className="font-semibold text-xl mb-3">
            Stronger Carton Sealing
          </h3>

          <p className="text-gray-600">
            Fiberglass reinforced kraft tape bonds permanently with
            cartons providing superior sealing strength.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-3">
            Tamper Evident
          </h3>

          <p className="text-gray-600">
            Once applied the tape cannot be removed without damaging
            the carton surface.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-3">
            Eco Friendly
          </h3>

          <p className="text-gray-600">
            Fully recyclable kraft paper tape helps businesses
            reduce plastic packaging waste.
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

      {/* Product 1 */}
      <Link href="/products/reinforced-water-activated-tape">
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">

    <img
      src="/tape.jpg"
      className="w-full h-56 object-cover"
      alt="Reinforced Water Activated Tape"
    />

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



      {/* Product 2 */}
      <Link href="/products/water-activated-dispenser">
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">

    <img
      src="/dispenser.jpg"
      className="w-full h-56 object-cover"
      alt="Water Activated Tape Dispenser"
    />

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



      {/* Product 3 */}
      <Link href="/products/custom-printed-tape">
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">

    <img
      src="/custom-tape.jpg"
      className="w-full h-56 object-cover"
      alt="Custom Printed Kraft Tape"
    />

    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">
        Custom Printed Kraft Tape
      </h3>

      <p className="text-gray-600">
        Reinforced kraft tape printed with your brand for secure packaging.
      </p>
    </div>

    </div>
</Link>
</div>
</section>

{/* INDUSTRIES SECTION */}

<section className="bg-white py-24">

  <div className="max-w-7xl mx-auto px-6">


<h2 className="text-3xl font-bold text-center mb-16">
  Industries We Serve
</h2>

<div className="grid md:grid-cols-4 gap-10">

  {/* Ecommerce */}

  <a
    href="/industries"
    className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition text-center"
  >
    <h3 className="text-xl font-semibold mb-2">
      E-commerce
    </h3>

    <p className="text-gray-600">
      Secure packaging for ecommerce shipments and deliveries.
    </p>
  </a>


  {/* Logistics */}

  <a
    href="/industries"
    className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition text-center"
  >
    <h3 className="text-xl font-semibold mb-2">
      Logistics
    </h3>

    <p className="text-gray-600">
      Strong carton sealing for logistics and warehousing.
    </p>
  </a>


  {/* Manufacturing */}

  <a
    href="/industries"
    className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition text-center"
  >
    <h3 className="text-xl font-semibold mb-2">
      Manufacturing
    </h3>

    <p className="text-gray-600">
      Reliable packaging for industrial shipments.
    </p>
  </a>


  {/* Export */}

  <a
    href="/industries"
    className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition text-center"
  >
    <h3 className="text-xl font-semibold mb-2">
      Export Packaging
    </h3>

    <p className="text-gray-600">
      Secure packaging solutions for export shipments.
    </p>
  </a>

</div>


  </div>

</section>





  {/* CONTACT */}
  <section className="py-24 text-center">

    <h2 className="text-3xl font-bold">
      Get Packaging Solutions For Your Business
    </h2>

    <p className="mt-4 text-gray-600">
      Contact us to discuss reinforced water activated tape solutions.
    </p>

    <Link
  href="/contact"
  className="inline-block mt-6 bg-green-700 text-white px-7 py-3 rounded-lg font-semibold hover:bg-green-800 transition shadow-sm hover:shadow-md"
>
  Get a Quote
</Link>
  </section>



  

</main>


);
}
