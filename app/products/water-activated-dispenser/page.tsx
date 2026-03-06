export default function DispenserPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-green-800 mb-8">
        Water Activated Tape Dispenser
      </h1>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        <img
          src="/dispenser.jpg"
          alt="water-activated-dispenser"
          className="rounded-xl shadow-lg"
        />

        <div>
          <p className="text-lg text-gray-600 mb-6">
            Water activated tape dispensers simplify the application of
            reinforced kraft tape by automatically wetting and cutting
            the tape to the required length.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Fast tape dispensing</li>
            <li>✔ Precise tape length control</li>
            <li>✔ Improves packaging efficiency</li>
            <li>✔ Compatible with reinforced tape</li>
          </ul>

          <button className="mt-8 bg-green-700 text-white px-6 py-3 rounded-lg">
            Request Quote
          </button>

        </div>

      </div>

    </main>
  );
}