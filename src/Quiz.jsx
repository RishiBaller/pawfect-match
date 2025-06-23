import React, { useState, useEffect } from "react";

export default function Quiz() {
  const [answers, setAnswers] = useState({ size: "", activity: "" });
  const [result, setResult] = useState(null);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTimeUp(true), 180000); // 3 minutes
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => setAnswers({ ...answers, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    let match = "Golden Retriever";
    if (answers.size === "small" && answers.activity === "low") match = "Cavalier King Charles Spaniel";
    if (answers.size === "large" && answers.activity === "high") match = "Labrador Retriever";
    setResult(match);
  };

  if (timeUp && !result) return <p>⏱️ Time's up! Please pay $1 to unlock full results.</p>;

  return result ? (
    <div>
      <h2>Your Match: 🐶 {result}</h2>
      <button onClick={() => setResult(null)} className="mt-4 text-blue-600 underline">Try Again</button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Preferred dog size:</label>
        <select name="size" onChange={handleChange} className="w-full border p-2">
          <option value="">Select</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div>
        <label>Activity level:</label>
        <select name="activity" onChange={handleChange} className="w-full border p-2">
          <option value="">Select</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2">See Match</button>
    </form>
  );
}
