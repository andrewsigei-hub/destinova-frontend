import { Link } from "react-router-dom";
import React from "react";

export default function Navbar({ user }) {
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
        <li>
          {user ? (
            <Link
              to="/profile"
              className="flex items-center space-x-2 hover:opacity-80 transition "
            >
              <img
                src={user.image}
                alt="avatar"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <span>Hi, {user.username} 👋</span>
            </Link>
          ) : (
            <Link to="/login" className="hover:text-gray-200">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
