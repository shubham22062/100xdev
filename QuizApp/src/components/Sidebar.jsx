import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-48 bg-gray-900 text-white p-4 flex flex-col gap-4">
      <h2 className="text-lg font-bold">Menu</h2>
      <Link to="/" className="hover:text-blue-400">
        Home
      </Link>
      <Link to="/quiz" className="hover:text-blue-400">
        Quiz
      </Link>
    </aside>
  );
}
