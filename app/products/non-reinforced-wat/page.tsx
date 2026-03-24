export const metadata = {
  title: "Non-Reinforced Water Activated Tape | Eco Friendly Kraft Tape | Kanvek Packaging",
  description:
    "Eco-friendly non-reinforced water activated kraft tape for light to medium carton sealing. 100% recyclable and sustainable packaging solution.",
  keywords:
    "non reinforced water activated tape, kraft paper tape, eco friendly packaging tape, biodegradable carton sealing tape",
};

import ProductGallery from "../../components/ProductGallery";

export default function NonReinforcedPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-green-800 mb-8">
        Non-Reinforced Water Activated Tape
      </h1>

      {/* HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        <ProductGallery
          images={[
            "/nonreinforced1.jpg",
            "/nonreinforced2.jpg",
            "/nonreinforced3.jpg",
            "/nonreinforced4.jpg",
          ]}
        />

        <div>

          <p className="text-lg text-gray-600 mb-6">
            Non-reinforced water activated tape is a sustainable kraft paper
            packaging solution designed for light to medium carton sealing.
            It bonds directly with corrugated cartons, creating a secure and
            tamper-evident seal.
          </p>

          <p className="text-lg text-gray-700 mb-6 font-semibold">
            It is one of the most eco-friendly sealing methods available,
            ensuring sustainability without compromising packaging performance.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ 100% recyclable kraft paper material</li>
            <li>✔ Strong adhesion with water activation</li>
            <li>✔ Clean and professional carton appearance</li>
            <li>✔ Cost-effective packaging solution</li>
            <li>✔ Ideal for lightweight and standard cartons</li>
          </ul>

          <div className="mt-8">
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

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Eco Friendly</h3>
            <p className="text-gray-600 text-sm">
              Fully recyclable and biodegradable, making it ideal for sustainable packaging.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Clean Branding</h3>
            <p className="text-gray-600 text-sm">
              Provides a neat, tamper-evident seal that enhances packaging presentation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Cost Efficient</h3>
            <p className="text-gray-600 text-sm">
              Lower cost compared to reinforced tapes while maintaining strong performance.
            </p>
          </div>

        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-10">Applications</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">E-commerce packaging</div>
          <div className="bg-white p-6 rounded-xl shadow">Retail shipments</div>
          <div className="bg-white p-6 rounded-xl shadow">Light logistics packaging</div>
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
                <td className="p-4">Non-Reinforced Water Activated Kraft Tape</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-semibold bg-gray-50">Material</td>
                <td className="p-4">Kraft Paper</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-semibold bg-gray-50">Adhesive</td>
                <td className="p-4">Water Activated Starch Adhesive</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-semibold bg-gray-50">Available Widths</td>
                <td className="p-4">Custom</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-semibold bg-gray-50">Roll Length</td>
                <td className="p-4">Custom</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold bg-gray-50">Applications</td>
                <td className="p-4">E-commerce, Retail, Light Packaging</td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>

    </main>
  );
}
