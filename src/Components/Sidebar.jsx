import React from "react";

function Sidebar({ selectedCategory, onSelectCategory }) {
  const categories = [
    "All",
    "Beach",
    "Adventure",
    "Cultural",
    "Nature",
    "Romantic",
    "Urban",
    "Relaxation",
  ];

  return (
    <aside className="w-56 h-screen bg-gray-100 border-r border-gray-300 p-5 fixed top-0 left-0">
      <h2 className="text-xl p-4 mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md text-white py-4">
        Categories
      </h2>

      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => onSelectCategory(cat)}
              className={`w-full text-left px-3 py-2 rounded-md transition duration-300 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-200"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
