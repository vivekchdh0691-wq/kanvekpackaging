import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* Company */}
        <div>
  <h3 className="text-white font-semibold text-lg mb-4">
    Kanvek Packaging
  </h3>

  <p className="text-gray-400 mb-6">
    Leading supplier of sustainable water-activated tapes for
    e-commerce and export packaging.
  </p>

  <div className="flex gap-4">

    <a
      href="#"
      className="bg-slate-800 p-2 rounded hover:bg-green-700 transition"
    >
      <span className="text-white text-sm">in</span>
    </a>

    <a
      href="#"
      className="bg-slate-800 p-2 rounded hover:bg-green-700 transition"
    >
      <span className="text-white text-sm">f</span>
    </a>

    <a
      href="#"
      className="bg-slate-800 p-2 rounded hover:bg-green-700 transition"
    >
      <span className="text-white text-sm">ig</span>
    </a>

  </div>
</div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>

            <li>
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>

          </ul>
        </div>


        {/* Products */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Products
          </h3>

          <ul className="space-y-3">

            <li>
              <Link href="/products/non-reinforced-water-activated-tape" className="hover:text-white">
                Non-Reinforced WAT
              </Link>
            </li>

            <li>
              <Link href="/products/reinforced-water-activated-tape" className="hover:text-white">
                Reinforced WAT
              </Link>
            </li>

            <li>
              <Link href="/products/custom-printed-kraft-tape" className="hover:text-white">
                Custom Solutions
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white">
                Bulk Orders
              </Link>
            </li>

          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Contact
          </h3>

          <ul className="space-y-3">

            <li>
              <a href="tel:+917011372679" className="hover:text-white">
                +91 7011372679
              </a>
            </li>

            <li>
              <a
                href="mailto:business@kanvekpackaging.com"
                className="hover:text-white"
              >
                business@kanvekpackaging.com
              </a>
            </li>

            <li>
              Rohad, Haryana – 124501
            </li>

          </ul>
        </div>

      </div>


      {/* Bottom Bar */}

      <div className="border-t border-slate-800 text-center py-6 text-gray-500 text-sm">
© {new Date().getFullYear()} Kanvek Packaging. All rights reserved.
</div>
    </footer>
  );
}