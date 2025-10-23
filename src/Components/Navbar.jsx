import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md text-white py-4">
      <ul className="flex justify-center gap-10 text-lg font-medium">
        <li>
          <Link
            to="/"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/destinations"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Destinations
          </Link>
        </li>
        <li>
          <Link
            to="/planner"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Planner
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
