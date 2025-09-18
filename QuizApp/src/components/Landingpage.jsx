import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover bg-no-repeat text-white relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 drop-shadow-lg"
        >
          Welcome to Quiz App 🎯
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg mb-8 max-w-xl mx-auto drop-shadow-lg text-blue-100"
        >
          Test your knowledge with our fun and interactive quiz. Click below to
          get started and challenge yourself!
        </motion.p>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="/quiz"
            className="px-6 py-3 bg-black text-gray-100 font-semibold rounded-xl shadow-lg hover:bg-gray-800 transition"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
