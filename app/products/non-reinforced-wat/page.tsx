export default function NonReinforcedPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold mb-6">
        Non-Reinforced Water Activated Tape
      </h1>

      <p className="text-gray-600 mb-10 max-w-3xl">
        Non-reinforced water activated tape is an eco-friendly kraft paper tape
        designed for light to medium carton sealing. It provides strong adhesion
        to corrugated surfaces and is fully recyclable.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <img
          src="/tape.jpg"
          alt="Non Reinforced Tape"
          className="rounded-xl shadow-lg"
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Key Features
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Eco-friendly kraft paper material</li>
            <li>✔ Strong adhesion with water activation</li>
            <li>✔ Ideal for lightweight cartons</li>
            <li>✔ Cost-effective packaging solution</li>
            <li>✔ Fully recyclable and biodegradable</li>
          </ul>

          <a
            href="/contact"
            className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
          >
            Get a Quote
          </a>
        </div>

      </div>

    </main>
  );
}