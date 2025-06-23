export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">About Pawfect Match Co.</h2>
      <div className="prose prose-gray max-w-none">
        <p className="text-lg leading-relaxed">
          We are dedicated to helping you find your perfect dog and provide them a cozy life. With informative content,
          smart breed-matching, and top-quality dog beds, we're here to make pet ownership joyful and easy.
        </p>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
          <p>
            To guide families in selecting and caring for their perfect canine companion while providing quality,
            comfortable, and stylish products that enhance a dog's well-being.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Interactive dog breed matching quiz</li>
            <li>Curated selection of premium dog beds</li>
            <li>Expert advice on dog care and training</li>
            <li>Quality products designed for comfort and durability</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
