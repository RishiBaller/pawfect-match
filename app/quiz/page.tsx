"use client"

import type React from "react"

import { useState, useEffect } from "react"

export default function QuizPage() {
  const [answers, setAnswers] = useState({ size: "", activity: "" })
  const [result, setResult] = useState<string | null>(null)
  const [timeUp, setTimeUp] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setTimeUp(true), 180000) // 3 minutes
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let match = "Golden Retriever"
    if (answers.size === "small" && answers.activity === "low") match = "Cavalier King Charles Spaniel"
    if (answers.size === "large" && answers.activity === "high") match = "Labrador Retriever"
    setResult(match)
  }

  if (timeUp && !result) {
    return <p>⏱️ Time's up! Please pay $1 to unlock full results.</p>
  }

  return result ? (
    <div>
      <h2 className="text-2xl font-semibold">Your Match: 🐶 {result}</h2>
      <button onClick={() => setResult(null)} className="mt-4 text-blue-600 underline hover:text-blue-800">
        Try Again
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred dog size:</label>
        <select
          name="size"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Select</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Activity level:</label>
        <select
          name="activity"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Select</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors"
      >
        See Match
      </button>
    </form>
  )
}
