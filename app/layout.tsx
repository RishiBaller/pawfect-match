import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pawfect Match Co.",
  description: "Find your perfect dog breed and shop quality dog beds",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="p-6 max-w-4xl mx-auto">
          <nav className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">🐾 Pawfect Match Co.</h1>
            <div className="space-x-4">
              <a href="/" className="text-blue-500 hover:text-blue-700">
                Home
              </a>
              <a href="/quiz" className="text-blue-500 hover:text-blue-700">
                Dog Quiz
              </a>
              <a href="/shop" className="text-blue-500 hover:text-blue-700">
                Shop
              </a>
              <a href="/about" className="text-blue-500 hover:text-blue-700">
                About
              </a>
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  )
}
