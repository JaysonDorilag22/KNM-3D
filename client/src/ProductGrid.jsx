
// Sample product data
const products = Array(8)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: Math.floor(Math.random() * 1000) + 500, // Random price between 500 and 1500
  }))

export default function ProductGrid() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Products</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {products.map((product) => (
            <a key={product.id} href={`/product/${product.id}`} className="group">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
                <img
                  src="https://placehold.co/400x400/png"
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-900">{product.name}</h3>
              <p className="mt-1 text-sm font-medium text-[#e01d47]">₱{product.price.toLocaleString()}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

