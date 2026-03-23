export const metadata = {
  title: "About Kanvek Packaging | Water Activated Tape Manufacturer",
  description:
    "Kanvek Packaging specializes in reinforced water activated tape and sustainable packaging solutions for e-commerce, logistics and export industries.",
};

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24 space-y-20">

      {/* HERO */}
      <section>
        <h1 className="text-4xl font-bold text-green-800 mb-6">
          About Kanvek Packaging
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Kanvek Packaging is a growing manufacturer and supplier of
          high-performance water activated kraft tapes designed for secure,
          sustainable, and efficient carton sealing. Our solutions are built
          to meet the evolving needs of e-commerce, logistics, and export
          industries.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">
          Who We Are
        </h2>

        <p className="text-gray-700 leading-relaxed">
          We focus on delivering reliable packaging solutions that combine
          strength, sustainability, and operational efficiency. With a strong
          understanding of modern supply chains, we provide products that
          ensure safe transit while reducing environmental impact.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 bg-white shadow rounded-xl">
            Reinforced Water Activated Tape
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            Standard Kraft Paper Tape
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            Custom Printed Packaging Tape
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">
          Why Choose Kanvek Packaging
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">

          <p>✔ Strong and tamper-evident sealing solutions</p>
          <p>✔ Eco-friendly and recyclable materials</p>
          <p>✔ Ideal for heavy-duty and export packaging</p>
          <p>✔ Consistent quality and reliable supply</p>
          <p>✔ Customization options available</p>
          <p>✔ Designed for modern e-commerce logistics</p>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 bg-white shadow rounded-xl">
            E-commerce & Retail
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            Logistics & Warehousing
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            Export & Manufacturing
          </div>

        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">
          Our Sustainability Approach
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Sustainability is at the core of our product design. Our water
          activated tapes are paper-based and fully recyclable, helping
          businesses reduce plastic waste while maintaining strong and secure
          packaging performance.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-green-800 text-white p-10 rounded-2xl text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Looking for Reliable Packaging Solutions?
        </h2>

        <p className="mb-6">
          Get in touch with us to discuss your packaging requirements.
        </p>

        <a
          href="/contact"
          className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>

    </main>
  );
}
