// src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white text-center px-6">
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-wide">
        Welcome to <span className="text-yellow-300">Destinova</span>
      </h1>

      <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-xl">
        Discover your next adventure — explore breathtaking destinations around
        the world.
      </p>

      <button
        onClick={() => navigate("/login")}
        className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Get Started
      </button>
    </div>
  );
}
