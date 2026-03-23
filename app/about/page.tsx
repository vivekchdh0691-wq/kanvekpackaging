export const metadata = {
  title: "About Kanvek Packaging | Sustainable Packaging Solutions",
  description:
    "Kanvek Packaging is a trusted manufacturer of water activated kraft tape and sustainable packaging solutions for e-commerce, logistics and export industries.",
};

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24 space-y-24">

      {/* HERO */}
      <section className="max-w-4xl">
        <h1 className="text-5xl font-bold text-green-800 mb-6 leading-tight">
          Building Strong, Sustainable Packaging for Modern Businesses
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          At Kanvek Packaging, we specialize in high-performance water activated
          kraft tapes designed to deliver superior carton sealing while reducing
          environmental impact. Our solutions are engineered for businesses that
          demand strength, reliability, and sustainability in their packaging
          operations.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Who We Are
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Kanvek Packaging is a forward-thinking packaging solutions provider
            focused on replacing conventional plastic tapes with advanced
            paper-based alternatives. We combine material expertise with
            real-world logistics understanding to create products that perform
            reliably across diverse packaging environments.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
  With complete in-house manufacturing capabilities, we maintain full
  control over quality, consistency, and product performance. This allows
  us to deliver reliable and scalable packaging solutions tailored to the
  needs of modern businesses.
</p>
          <p className="text-gray-700 leading-relaxed">
            Our approach is centered on delivering solutions that integrate
            seamlessly with corrugated cartons, ensuring secure sealing,
            tamper evidence, and long-term durability during transit and storage.
          </p>
        </div>

        <div className="bg-green-50 p-8 rounded-2xl shadow">
          <p className="text-gray-700 leading-relaxed">
            We are committed to helping businesses transition towards more
            sustainable packaging practices without compromising performance.
            By focusing on innovation, consistency, and customer requirements,
            we aim to become a trusted partner for packaging solutions across
            industries.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section>
        <h2 className="text-3xl font-semibold mb-8">
          Our Product Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 bg-white shadow rounded-2xl">
            <h3 className="font-semibold mb-3 text-lg">
              Reinforced Water Activated Tape
            </h3>
            <p className="text-gray-600">
              High-strength kraft tape reinforced with fiberglass for heavy-duty
              carton sealing and export packaging applications.
            </p>
          </div>

          <div className="p-8 bg-white shadow rounded-2xl">
            <h3 className="font-semibold mb-3 text-lg">
              Non-Reinforced Kraft Paper Tape
            </h3>
            <p className="text-gray-600">
              Eco-friendly carton sealing solution suitable for general
              packaging and e-commerce shipments.
            </p>
          </div>

          <div className="p-8 bg-white shadow rounded-2xl">
            <h3 className="font-semibold mb-3 text-lg">
              Custom Printed Tape
            </h3>
            <p className="text-gray-600">
              Branding-focused packaging tape that enhances visibility while
              maintaining strong and secure sealing performance.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 p-12 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Businesses Choose Kanvek Packaging
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-gray-700">

          <p>✔ Superior bonding strength with corrugated cartons</p>
          <p>✔ Tamper-evident sealing for enhanced security</p>
          <p>✔ Fully recyclable and eco-friendly materials</p>
          <p>✔ Reduced plastic usage in packaging operations</p>
          <p>✔ Reliable performance in logistics and export conditions</p>
          <p>✔ Consistent product quality and supply capability</p>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section>
        <h2 className="text-3xl font-semibold mb-8">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 bg-white shadow rounded-2xl">
            <h3 className="font-semibold mb-2">E-commerce & Retail</h3>
            <p className="text-gray-600">
              Secure packaging for high-volume shipping operations.
            </p>
          </div>

          <div className="p-8 bg-white shadow rounded-2xl">
            <h3 className="font-semibold mb-2">Logistics & Warehousing</h3>
            <p className="text-gray-600">
              Reliable sealing solutions for supply chain efficiency.
            </p>
          </div>

          <div className="p-8 bg-white shadow rounded-2xl">
            <h3 className="font-semibold mb-2">Export & Manufacturing</h3>
            <p className="text-gray-600">
              Heavy-duty packaging designed for long-distance transport.
            </p>
          </div>

        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">
          Sustainability at Our Core
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Sustainability is not an option—it is a responsibility. Our water
          activated tapes are paper-based and integrate directly with corrugated
          packaging, allowing them to be recycled without separation. This
          reduces packaging waste and improves recycling efficiency across the
          supply chain.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          By helping businesses transition away from plastic tapes, we contribute
          to reducing environmental impact while delivering high-performance
          packaging solutions.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-green-800 text-white p-12 rounded-2xl text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Let’s Build Better Packaging Together
        </h2>

        <p className="mb-6">
          Connect with us to explore reliable and sustainable packaging
          solutions tailored to your business needs.
        </p>

        <a
          href="/contact"
          className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>

    </main>
  );
}
