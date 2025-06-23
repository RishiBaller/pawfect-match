import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import Shop from "./Shop";
import About from "./About";

export default function App() {
  return (
    <Router>
      <div className="p-6 max-w-4xl mx-auto">
        <nav className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">🐾 Pawfect Match Co.</h1>
          <div className="space-x-4">
            <Link to="/" className="text-blue-500">Home</Link>
            <Link to="/quiz" className="text-blue-500">Dog Quiz</Link>
            <Link to="/shop" className="text-blue-500">Shop</Link>
            <Link to="/about" className="text-blue-500">About</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
