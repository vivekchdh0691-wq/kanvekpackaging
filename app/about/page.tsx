import Link from "next/link";

export default function AboutPage() {
  return ( <main className="bg-gray-50 text-gray-800">
  
  
    {/* HERO */}
  
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
  
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        About Kanvek Packaging Solutions
      </h1>
  
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Kanvek Packaging Solutions provides sustainable and reliable
        packaging solutions for modern businesses. Our focus is on
        reinforced water activated kraft tape that delivers superior
        carton sealing strength while supporting eco-friendly packaging.
      </p>
  
    </section>
  
  
  
    {/* COMPANY OVERVIEW */}
  
    <section className="bg-white py-20">
  
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
  
        <img
          src="/hero.jpg"
          alt="Packaging operations"
          className="rounded-xl shadow-lg"
        />
  
        <div>
  
          <h2 className="text-3xl font-bold mb-6">
            Our Focus
          </h2>
  
          <p className="text-gray-600 mb-4">
            We specialize in reinforced water activated tape and related
            packaging solutions designed for ecommerce, logistics,
            manufacturing, and export packaging industries.
          </p>
  
          <p className="text-gray-600">
            Our products help businesses improve carton sealing strength,
            enhance packaging security, and reduce plastic usage by using
            recyclable kraft paper based packaging materials.
          </p>
  
        </div>
  
      </div>
  
    </section>
  
  
  
    {/* WHY CHOOSE US */}
  
    <section className="py-20">
  
      <div className="max-w-6xl mx-auto px-6">
  
        <h2 className="text-3xl font-bold text-center mb-16">
          Why Choose Kanvek Packaging
        </h2>
  
        <div className="grid md:grid-cols-3 gap-12 text-center">
  
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Strong Packaging Solutions
            </h3>
  
            <p className="text-gray-600">
              Reinforced kraft tape ensures secure carton sealing even
              for heavy shipments.
            </p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Sustainable Materials
            </h3>
  
            <p className="text-gray-600">
              Our kraft paper tapes support environmentally friendly
              packaging and help reduce plastic waste.
            </p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Reliable Performance
            </h3>
  
            <p className="text-gray-600">
              Designed for modern logistics and ecommerce packaging
              operations.
            </p>
          </div>
  
        </div>
  
      </div>
  
    </section>
  
  
  
    {/* CTA */}
  
    <section className="bg-green-800 text-white py-20 text-center">
  
      <h2 className="text-3xl font-bold mb-4">
        Looking for Sustainable Packaging Solutions?
      </h2>
  
      <p className="text-green-200 mb-8">
        Contact us to learn more about reinforced water activated tape
        and packaging solutions for your business.
      </p>
  
      <Link
  href="/contact"
  className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block"
>
  Contact Us
</Link>
    </section>
  
  </main>
  
  
  );
  }
  