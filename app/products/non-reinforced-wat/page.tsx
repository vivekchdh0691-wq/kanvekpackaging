export const metadata = {
  title: "Non-Reinforced Water Activated Tape | Eco Friendly Kraft Tape | Kanvek Packaging",
  description:
    "Eco-friendly non-reinforced water activated kraft tape for light to medium carton sealing. 100% recyclable and sustainable packaging solution.",
};

import ProductGallery from "../../components/ProductGallery";

export default function NonReinforcedPage() {
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
        Non-Reinforced Water Activated Tape
      </h1>

      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        <ProductGallery
          images={[
            "/nonreinforced1.jpg"
          ]}
        />

        <div>

          <p className="text-lg text-gray-600 mb-6">
            Non-reinforced water activated tape is a sustainable kraft paper
            packaging solution designed for light to medium carton sealing.
            It bonds directly with corrugated cartons, creating a secure and
            tamper-evident seal.
          </p>

          <p className="text-lg font-semibold text-gray-800 mb-6">
            It delivers clean, eco-friendly sealing while maintaining
            professional packaging appearance.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ 100% recyclable kraft paper</li>
            <li>✔ Strong adhesion with water activation</li>
            <li>✔ Clean and neat finish</li>
            <li>✔ Cost-effective solution</li>
            <li>✔ Ideal for lightweight cartons</li>
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
          Why Choose Non-Reinforced WAT?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Eco Friendly</h3>
            <p className="text-gray-600 text-sm">
              Fully recyclable and biodegradable packaging solution.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Professional Look</h3>
            <p className="text-gray-600 text-sm">
              Gives clean and branded carton appearance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Affordable</h3>
            <p className="text-gray-600 text-sm">
              Lower cost compared to reinforced tapes.
            </p>
          </div>

        </div>
      </section>

      {/* COMPARISON SECTION 🔥 */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-10">
          Non-Reinforced vs Reinforced Tape
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-sm">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-left">Non-Reinforced</th>
                <th className="p-4 text-left">Reinforced</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-4 font-medium">Strength</td>
                <td className="p-4">Medium</td>
                <td className="p-4">High</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">Material</td>
                <td className="p-4">Kraft Paper</td>
                <td className="p-4">Kraft + Fiberglass</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">Cost</td>
                <td className="p-4">Lower</td>
                <td className="p-4">Higher</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">Usage</td>
                <td className="p-4">Light cartons</td>
                <td className="p-4">Heavy cartons</td>
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
            Retail shipments
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            Light logistics packaging
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
                <td className="p-4">Non-Reinforced Water Activated Tape</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-semibold bg-gray-50">Material</td>
                <td className="p-4">Kraft Paper</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-semibold bg-gray-50">Adhesive</td>
                <td className="p-4">Water Activated Adhesive</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold bg-gray-50">Applications</td>
                <td className="p-4">E-commerce, Retail Packaging</td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

    </main>
  );
}
