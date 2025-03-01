import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-100">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">About KNM</h3>
          <p className="text-sm text-gray-600">
            KNM Kababaihan ng Maynila empowers women through traditional craftsmanship, creating unique, handmade products that celebrate Filipino culture.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="text-gray-600 hover:text-[#e01d47]">
                About Us
              </a>
            </li>
            <li>
              <a href="/products" className="text-gray-600 hover:text-[#e01d47]">
                Our Products
              </a>
            </li>
            <li>
              <a href="/showroom" className="text-gray-600 hover:text-[#e01d47]">
                Visit Our Showroom
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-[#e01d47]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/shipping" className="text-gray-600 hover:text-[#e01d47]">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="/faq" className="text-gray-600 hover:text-[#e01d47]">
                FAQ
              </a>
            </li>
            <li>
              <a href="/terms" className="text-gray-600 hover:text-[#e01d47]">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-gray-600 hover:text-[#e01d47]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#e01d47]">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-[#e01d47]">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-[#e01d47]">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-900">Subscribe to our newsletter</h4>
            <form className="mt-2">
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-l-lg border-gray-300 px-4 py-2 focus:border-[#e01d47] focus:outline-none focus:ring-1 focus:ring-[#e01d47]"
                />
                <button
                  type="submit"
                  className="rounded-r-lg bg-[#e01d47] px-4 py-2 text-white hover:bg-[#c01a3d] focus:outline-none focus:ring-2 focus:ring-[#e01d47] focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-8 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} KNM Kababaihan ng Maynila. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer