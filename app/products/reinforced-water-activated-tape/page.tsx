import ProductGallery from "../../components/ProductGallery";

export const metadata = {
  title: "Reinforced Water Activated Tape | Kraft Carton Sealing Tape | Kanvek Packaging",
  description:
    "Fiberglass reinforced water activated kraft tape for strong carton sealing. Ideal for ecommerce packaging, logistics shipments and export packaging.",
};

export default function ReinforcedTape() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-bold text-gray-900 mb-10">
          Reinforced Water Activated Tape
        </h1>

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
              Reinforced water activated tape is a high-performance kraft paper tape
              strengthened with fiberglass reinforcement. It forms a permanent bond
              with corrugated cartons, providing unmatched sealing strength, security,
              and durability compared to conventional plastic tapes.
            </p>

            <p className="text-green-800 font-semibold mb-6">
              It is the only ecological sealing method for packaging that guarantees sustainability while ensuring maximum carton security.
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>✔ Fiberglass reinforced kraft paper</li>
              <li>✔ Permanent bond with carton fibers</li>
              <li>✔ Tamper evident security</li>
              <li>✔ 100% recyclable and eco-friendly</li>
              <li>✔ Ideal for heavy-duty packaging</li>
            </ul>

            <div className="flex gap-4">
              <a
                href="/contact"
                className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
              >
                Request Quote
              </a>

              <a
                href="https://wa.me/917011372679"
                className="border border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50 transition"
              >
                WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Why Reinforced Water Activated Tape is Superior
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-3">Permanent Bond</h3>
              <p className="text-gray-600 text-sm">
                The adhesive penetrates into the fibers of corrugated cartons,
                creating a strong and permanent seal that cannot be removed without damage. 
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-3">Eco-Friendly Packaging</h3>
              <p className="text-gray-600 text-sm">
                Made from kraft paper and starch adhesive, it is fully recyclable,
                biodegradable and derived from renewable materials. 
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-3">High Strength & Security</h3>
              <p className="text-gray-600 text-sm">
                Reinforced fibers ensure superior strength and tamper evidence,
                making it ideal for heavy-duty and export packaging. 
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12 text-center">
            Key Benefits for Businesses
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-3">Reduced Packaging Cost</h3>
              <p className="text-gray-600 text-sm">
                Only one strip is required for sealing, unlike plastic tape which often needs multiple layers, reducing overall material usage. 
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-3">Improved Brand Image</h3>
              <p className="text-gray-600 text-sm">
                Eco-friendly packaging enhances brand perception and builds trust among environmentally conscious customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-3">Better Unboxing Experience</h3>
              <p className="text-gray-600 text-sm">
                Clean and professional sealing improves customer satisfaction and packaging presentation. 
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-3">Future-Ready Packaging</h3>
              <p className="text-gray-600 text-sm">
                Sustainable materials help businesses comply with future environmental regulations and reduce plastic dependency.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12 text-center">
            Applications
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              E-commerce packaging
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              Export & heavy-duty cartons
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              Warehouse & logistics operations
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-20 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Upgrade Your Packaging to Eco-Friendly Solutions
        </h2>

        <p className="mb-6">
          Secure your shipments while reducing environmental impact.
        </p>

        <a
          href="/contact"
          className="bg-white text-green-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Request Bulk Quote
        </a>

      </section>

    </main>
  );
}
