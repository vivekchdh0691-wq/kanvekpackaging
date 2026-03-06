export const metadata = {
  title: "Industries We Serve | Water Activated Tape Applications | Kanvek Packaging",
  description:
  "Kanvek Packaging provides reinforced water activated tape solutions for ecommerce packaging, logistics, manufacturing and export shipments.",
  keywords:
  "water activated tape ecommerce packaging, kraft tape logistics packaging, carton sealing tape manufacturing",
  };
  

export default function IndustriesPage() {
  return ( <main className="max-w-7xl mx-auto px-6 py-24">
  
  
    <h1 className="text-4xl font-bold text-center mb-16">
      Industries We Serve
    </h1>
  
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
  
      {/* Ecommerce */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">
          E-commerce Packaging
        </h2>
  
        <p className="text-gray-600 mb-4">
          Reinforced water activated tape is widely used in ecommerce
          packaging to ensure cartons remain securely sealed during
          shipping and handling.
        </p>
  
        <ul className="list-disc text-gray-600 ml-5">
          <li>Secure carton sealing</li>
          <li>Tamper-evident packaging</li>
          <li>Eco-friendly packaging solution</li>
        </ul>
      </div>
  
  
      {/* Logistics */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">
          Logistics & Warehousing
        </h2>
  
        <p className="text-gray-600 mb-4">
          Logistics companies require strong and reliable carton sealing
          to protect shipments during transportation and storage.
        </p>
  
        <ul className="list-disc text-gray-600 ml-5">
          <li>Heavy-duty carton sealing</li>
          <li>Reliable packaging for long shipments</li>
          <li>Reduced risk of package tampering</li>
        </ul>
      </div>
  
  
      {/* Manufacturing */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">
          Manufacturing Industry
        </h2>
  
        <p className="text-gray-600 mb-4">
          Manufacturers use reinforced kraft tape for packaging finished
          goods safely before shipping them to distributors and retailers.
        </p>
  
        <ul className="list-disc text-gray-600 ml-5">
          <li>Strong adhesion for heavy cartons</li>
          <li>Reliable sealing for bulk shipments</li>
          <li>Cost-effective packaging solution</li>
        </ul>
      </div>
  
  
      {/* Export */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">
          Export Packaging
        </h2>
  
        <p className="text-gray-600 mb-4">
          Export shipments require strong and tamper-evident packaging
          to ensure products reach international destinations safely.
        </p>
  
        <ul className="list-disc text-gray-600 ml-5">
          <li>Secure packaging for international shipping</li>
          <li>Strong carton reinforcement</li>
          <li>Improved shipment security</li>
        </ul>
      </div>
  
    </div>
  
  </main>
  
  
  );
  }
  