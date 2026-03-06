import "./globals.css";
import Image from "next/image";
import Footer from "./components/Footer";

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( <html lang="en"> 
<body className="bg-gray-50 text-gray-800">


    {/* NAVBAR */}

    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <a href="/" className="flex items-center">
<Image
src="/logo.png"
alt="Kanvek Packaging"
width={160}
height={50}
/>
</a>

        {/* NAV LINKS */}

        <div className="flex gap-8 text-gray-700 font-medium items-center">

          <a href="/" className="hover:text-green-700 transition">
            Home
          </a>

          {/* PRODUCTS DROPDOWN */}

          <div className="relative group">

<a
href="/products"
className="hover:text-green-700 flex items-center"
>
Products
</a>

<div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-56 mt-2 z-50">

<a
href="/products/reinforced-water-activated-tape"
className="block px-4 py-3 hover:bg-gray-100"
>
Reinforced Water Activated Tape
</a>

<a
href="/products/water-activated-dispenser"
className="block px-4 py-3 hover:bg-gray-100"
>
Tape Dispenser
</a>

<a
href="/products/custom-printed-kraft-tape"
className="block px-4 py-3 hover:bg-gray-100"
>
Custom Printed Tape
</a>

</div>

</div>

          <a href="/industries" className="hover:text-green-700 transition">
            Industries
          </a>

          <a href="/sustainability" className="hover:text-green-700 transition">
            Sustainability
          </a>

          <a href="/about" className="hover:text-green-700 transition">
            About
          </a>

          <a href="/contact" className="hover:text-green-700 transition">
            Contact
          </a>

        </div>

      </div>

    </nav>


    {/* PAGE CONTENT */}

    {children}


    

    {/* WHATSAPP FLOATING BUTTON */}

    <a
      href="https://wa.me/917011372679"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
    >
      WhatsApp
    </a>
 
    <script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context": "https://schema.org",
"@type": "Organization",
"name": "Kanvek Packaging",
"url": "https://kanvekpackaging.com",
"logo": "https://kanvekpackaging.com/logo.png",
"contactPoint": {
  "@type": "ContactPoint",
  "telephone": "+91 7011372679",
  "contactType": "customer service",
  "areaServed": "IN",
  "availableLanguage": "English"
},
"address": {
  "@type": "PostalAddress",
  "streetAddress": "Jasaur Kheri Road, Rohad",
  "addressLocality": "Jhajjar",
  "addressRegion": "Haryana",
  "postalCode": "124501",
  "addressCountry": "India"
}
})
}}
/>



  <Footer/>
  </body>
</html>

);
}
