export const metadata = {
  title: "Reinforced Water Activated Tape | Kraft Carton Sealing Tape | Kanvek Packaging",
  description:
  "Fiberglass reinforced water activated kraft tape for strong carton sealing. Ideal for ecommerce packaging, logistics shipments and export packaging.",
  keywords:
  "reinforced water activated tape, kraft carton sealing tape, fiberglass reinforced tape, eco friendly packaging tape",
  };
  

import ProductGallery from "../../components/ProductGallery";
export default function ReinforcedTape() {
  return ( <main className="max-w-7xl mx-auto px-6 py-20">
  
  
    <h1 className="text-4xl font-bold text-green-800 mb-8">
      Reinforced Water Activated Tape
    </h1>
  
    <div className="grid md:grid-cols-2 gap-16 items-center">
  
    <ProductGallery
  images={[
    "/tape.jpg",
    "/tape2.jpg",
    "/tape3.jpg",
    "/tape4.jpg"
  ]}
/>
  
      <div>
  
        <p className="text-lg text-gray-600 mb-6">
          Reinforced water activated tape is a kraft paper packaging tape
          strengthened with fiberglass reinforcement. It forms a permanent
          bond with corrugated cartons, providing superior sealing strength
          and tamper evidence compared to plastic tapes.
        </p>
  
        <ul className="space-y-3 text-gray-700">
  
          <li>✔ Fiberglass reinforced kraft paper</li>
          <li>✔ Strong permanent carton seal</li>
          <li>✔ Tamper evident packaging</li>
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
<a
  href="/reinforced-tape-tds.pdf"
  download
  className="border border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-700 hover:text-white transition"
>
  Download TDS
</a>


</div>
  
      </div>
  
    </div>
  
  
  
    {/* APPLICATIONS */}
  
    <section className="mt-24">
  
      <h2 className="text-3xl font-bold mb-10">
        Applications
      </h2>
  
      <div className="grid md:grid-cols-3 gap-8">
  
        <div className="bg-white p-6 rounded-xl shadow">
          E-commerce packaging
        </div>
  
        <div className="bg-white p-6 rounded-xl shadow">
          Export packaging
        </div>
  
        <div className="bg-white p-6 rounded-xl shadow">
          Warehouse operations
        </div>
  
      </div>
  
    </section>
{/* TECHNICAL SPECIFICATIONS */}

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
      <td className="p-4">Water Activated Starch Adhesive</td>
    </tr>

    <tr className="border-b">
      <td className="p-4 font-semibold bg-gray-50">Available Widths</td>
      <td className="p-4">48mm, 60mm, 72mm</td>
    </tr>

    <tr className="border-b">
      <td className="p-4 font-semibold bg-gray-50">Roll Length</td>
      <td className="p-4">100m – 200m</td>
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
  
