export default function CustomTapePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-green-800 mb-8">
        Custom Printed Kraft Tape
      </h1>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        <img
          src="/custom-tape.jpg"
          alt="Custom Printed Kraft Tape"
          className="rounded-xl shadow-lg"
        />

        <div>
          <p className="text-lg text-gray-600 mb-6">
            Custom printed kraft tape allows businesses to strengthen
            their brand identity while ensuring secure carton sealing.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Custom branding on tape</li>
            <li>✔ Reinforced kraft paper</li>
            <li>✔ Tamper evident sealing</li>
            <li>✔ Ideal for ecommerce packaging</li>
          </ul>

          <button className="mt-8 bg-green-700 text-white px-6 py-3 rounded-lg">
            Request Quote
          </button>

        </div>

      </div>

    </main>
  );
}