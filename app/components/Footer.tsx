export default function Footer() {
  return (
    <footer className="bg-[#0b1a33] text-gray-300 pt-16 pb-6">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* COMPANY */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Kanvek Packaging
          </h3>

          <p className="text-sm leading-relaxed">
            Leading supplier of sustainable water-activated tapes for e-commerce and export packaging.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Products
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="/products/non-reinforced-wat" className="hover:text-white">
                Non-Reinforced WAT
              </a>
            </li>

            <li>
              <a href="/products/reinforced-water-activated-tape" className="hover:text-white">
                Reinforced WAT
              </a>
            </li>

            <li>Custom Solutions</li>
            <li>Bulk Orders</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Contact
          </h3>

          <p className="text-sm mb-2">
            +91 7011372679
          </p>

          <p className="text-sm mb-2">
            business@kanvekpackaging.com
          </p>

          <p className="text-sm leading-relaxed">
            Plot No. 407, KH No. 15/6,<br/>
            Kakrola Housing Complex,<br/>
            New Delhi – 110078, India
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © 2026 Kanvek Packaging. All rights reserved.
      </div>

    </footer>
  );
}
