export const metadata = {
  title: "Reinforced Water Activated Tape | Kraft Carton Sealing Tape | Kanvek Packaging",
  description:
    "Fiberglass reinforced water activated kraft tape for strong carton sealing. Ideal for ecommerce, logistics and export packaging.",
};

import ProductGallery from "../../components/ProductGallery";

export default function ReinforcedTape() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20 relative">

      {/* STICKY CTA */}
      <div className="fixed bottom-20 right-6 z-50 hidden md:block">
        <a
          href="/contact"
          className="bg-green-700 text-white px-6 py-3 rounded-full shadow-xl hover:bg-green-800 transition"
        >
          Get Best Price
        </a>
      </div>

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-green-800 mb-8">
        Reinforced Water Activated Tape
      </h1>

      {/* HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        <ProductGallery
          images={[
            "/tape.jpg",
            "/tape2.jpg",
            "/tape3.jpg",
            "/tape4.jpg",
          ]}
        />

        <div>

          <p className="text-lg text-gray-600 mb-6">
            Reinforced water activated tape is a kraft paper packaging tape
            strengthened with fiberglass reinforcement. It forms a permanent
            bond with corrugated cartons, providing superior sealing strength
            and tamper evidence.
          </p>

          <p className="text-lg font-semibold text-gray-800 mb-6">
            It creates a permanent seal by penetrating carton fibers, making it
            impossible to remove without visible damage.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Fiberglass reinforced kraft paper</li>
            <li>✔ Strong permanent carton sealing</li>
            <li>✔ Tamper-evident packaging</li>
            <li>✔ Eco friendly and recyclable</li>
            <li>✔ Ideal for heavy cartons</li>
          </ul>

          <div className="mt-8 flex gap-4">
            <a
              href="/contact"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
            >
              Request Quote
            </a>
          </div>

        </div>
      </div>

      {/* WHY CHOOSE */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-10">
          Why Choose Reinforced WAT?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Maximum Strength</h3>
            <p className="text-gray-600 text-sm">
              Fiberglass reinforcement ensures superior carton sealing for heavy loads.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Tamper Proof</h3>
            <p className="text-gray-600 text-sm">
              Cannot be removed without visible damage, ensuring shipment security.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Eco Friendly</h3>
            <p className="text-gray-600 text-sm">
              Paper-based and recyclable, supporting sustainable packaging.
            </p>
          </div>

        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-10">
          Reinforced vs Non-Reinforced Tape
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-sm">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-left">Reinforced</th>
                <th className="p-4 text-left">Non-Reinforced</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-4 font-medium">Strength</td>
                <td className="p-4">High</td>
                <td className="p-4">Medium</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">Material</td>
                <td className="p-4">Kraft + Fiberglass</td>
                <td className="p-4">Kraft Paper</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">Usage</td>
                <td className="p-4">Heavy cartons</td>
                <td className="p-4">Light cartons</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">Security</td>
                <td className="p-4">Tamper Proof</td>
                <td className="p-4">Basic</td>
              </tr>

              <tr>
                <td className="p-4 font-medium">Eco Friendly</td>
                <td className="p-4">Yes</td>
                <td className="p-4">Yes</td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-10">Applications</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            E-commerce packaging
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            Export packaging
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            Heavy logistics shipments
          </div>
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-10">
          Technical Specifications
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">

            <tbody>

              <tr className="border-b">
                <td className="p-4 font-semibold bg-gray-50">Tape Type</td>
                <td className="p-4">Reinforced Water Activated Kraft Tape</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-semibold bg-gray-50">Material</td>
                <td className="p-4">Kraft Paper with Fiberglass Reinforcement</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-semibold bg-gray-50">Adhesive</td>
                <td className="p-4">Water Activated Adhesive</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold bg-gray-50">Applications</td>
                <td className="p-4">E-commerce, Logistics, Export Packaging</td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

    </main>
  );
}
