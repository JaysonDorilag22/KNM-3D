import React from "react";
import Scene from "./Scene";
import Navbar from "./Navbar";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";

function App() {
  return (
    <div className="relative w-full overflow-hidden bg-white px-10">
    <Navbar/>
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#e01d47]/10"></div>
      <div className="absolute top-1/2 -left-12 h-32 w-32 rounded-full bg-[#e01d47]/5"></div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                <span className="block">KNM</span>
                <span className="block text-[#e01d47]">KABABAIHAN NG MAYNILA</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Discover our exclusive collection of handcrafted products made with love and tradition by the women of
                Manila.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                to="/shop"
                className="inline-flex items-center justify-center rounded-lg bg-[#e01d47] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#c01a3d] focus:outline-none focus:ring-2 focus:ring-[#e01d47] focus:ring-offset-2"
              >
                Shop Now
              </a>
              <a
                to="/about"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                Learn More
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <img
                  src="https://placehold.co/40x40/png"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <img
                  src="https://placehold.co/40x40/png"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <img
                  src="https://placehold.co/40x40/png"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-medium">500+</span> happy customers
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 h-64 w-64 rounded-lg bg-[#e01d47]/20"></div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://placehold.co/600x600/png"
                alt="Featured products by KNM Kababaihan ng Maynila"
                width={600}
                height={600}
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#e01d47] to-transparent p-6">
                <div className="rounded-lg bg-white p-4 shadow-lg">
                  <p className="font-medium text-[#e01d47]">Featured Collection</p>
                  <h3 className="text-xl font-bold">Handwoven Bags</h3>
                  <p className="text-sm text-gray-600">Starting at ₱1,299</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-gray-50 p-4 text-center">
            <p className="text-sm font-medium text-gray-600">Free Shipping</p>
            <p className="text-xs text-gray-500">On orders over ₱2,000</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 text-center">
            <p className="text-sm font-medium text-gray-600">Secure Payment</p>
            <p className="text-xs text-gray-500">100% secure transactions</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 text-center">
            <p className="text-sm font-medium text-gray-600">Quality Guarantee</p>
            <p className="text-xs text-gray-500">Handcrafted with care</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 text-center">
            <p className="text-sm font-medium text-gray-600">24/7 Support</p>
            <p className="text-xs text-gray-500">Always here to help</p>
          </div>
        </div>
      </div>

      <Scene/>
      <ProductGrid/>
      <Footer/>
    </div>
  );
}

export default App;
