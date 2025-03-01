import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="relative z-10 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-[#e01d47]">KNM</span>
              <span className="ml-2 hidden text-sm font-medium text-gray-700 md:block">KABABAIHAN NG MAYNILA</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="/about" className="text-gray-700 hover:text-[#e01d47]">
                About
              </a>
              <a href="/showroom" className="text-gray-700 hover:text-[#e01d47]">
                Show Room
              </a>
              <a href="/products" className="text-gray-700 hover:text-[#e01d47]">
                Products
              </a>
              <a
                href="/shop"
                className="rounded-lg bg-[#e01d47] px-4 py-2 text-sm font-medium text-white hover:bg-[#c01a3d]"
              >
                Shop Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e01d47]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="/about"
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#e01d47]"
            >
              About
            </a>
            <a
              href="/showroom"
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#e01d47]"
            >
              Show Room
            </a>
            <a
              href="/products"
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#e01d47]"
            >
              Products
            </a>
            <a
              href="/shop"
              className="block rounded-lg bg-[#e01d47] px-3 py-2 text-base font-medium text-white hover:bg-[#c01a3d]"
            >
              Shop Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
