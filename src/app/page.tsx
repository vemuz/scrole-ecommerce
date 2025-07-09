import Link from "next/link"

const stores = [
  { name: "Bebe Fashion", path: "/bebe/fashion", category: "Fashion" },
  { name: "Alphalete Fitness", path: "/alphalete/fitness", category: "Fitness" },
  { name: "Timex Watches", path: "/timex/watches", category: "Watches" },
  { name: "Dynamic Store Explorer", path: "/dynamic", category: "All Stores" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">Scrole</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The most advanced e-commerce platform featuring 44+ dynamic stores with real Shopify data. 
            Discover authentic products from your favorite brands in a seamless shopping experience.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="text-2xl font-bold text-blue-600">44+</span>
              <p className="text-sm text-gray-600">Dynamic Stores</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="text-2xl font-bold text-green-600">Real</span>
              <p className="text-sm text-gray-600">Shopify Data</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="text-2xl font-bold text-purple-600">Live</span>
              <p className="text-sm text-gray-600">Product Images</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stores.map((store) => (
            <Link
              key={store.name}
              href={store.path}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-700">{store.name.split(' ')[0]}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{store.name}</h3>
              <p className="text-gray-600 mb-4">{store.category}</p>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                <span className="text-sm font-medium">Explore Store</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Scrole?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Built with Next.js 15 for optimal performance and instant page loads</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real Data</h3>
              <p className="text-gray-600">Authentic product information sourced directly from Shopify stores</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Admin Panel</h3>
              <p className="text-gray-600">Complete store management with dynamic content creation</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/admin"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Access Admin Panel
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}