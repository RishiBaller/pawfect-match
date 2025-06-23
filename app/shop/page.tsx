export default function ShopPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">🛏️ Shop Dog Beds</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg mb-2">Orthopedic Memory Foam Bed</h3>
          <p className="text-gray-600 mb-2">Perfect for senior dogs and those with joint issues</p>
          <p className="text-2xl font-bold text-green-600">$89</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg mb-2">Travel Bed for Car</h3>
          <p className="text-gray-600 mb-2">Portable and comfortable for road trips</p>
          <p className="text-2xl font-bold text-green-600">$59</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg mb-2">Washable Waterproof Bed</h3>
          <p className="text-gray-600 mb-2">Easy to clean and maintain</p>
          <p className="text-2xl font-bold text-green-600">$79</p>
        </div>
      </div>
      <p className="mt-6 text-gray-500 text-sm">(Checkout functionality can be integrated with Shopify/WooCommerce.)</p>
    </div>
  )
}
