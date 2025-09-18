import React from "react";
import { Link } from "react-router-dom";

export default function Result({ score, total }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-600 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Quiz Completed 🎉</h1>
      <p className="text-2xl mb-6">
        Your Score: {score} / {total}
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-black text-gray-100 font-semibold rounded-xl shadow-lg hover:bg-gray-800 transition"
      >
        Play Again
      </Link>
    </div>
  );
}
