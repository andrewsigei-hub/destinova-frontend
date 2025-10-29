import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

function TravelPlanner() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/planner")
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => console.error("Error fetching planner:", err));
  }, []);

  const handleDelete = (id, name) => {
    fetch(`http://localhost:3000/planner/${id}`, { method: "DELETE" })
      .then(() => {
        setDestinations(destinations.filter((dest) => dest.id !== id)); // confirms deletion
        toast.success(`${name} removed from planner ❌`);
      })
      .catch(() => toast.error("Failed to remove destination"));
  };

  return (
    <div className="p-8 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Travel Planner</h1>

      <ul className="space-y-3">
        {destinations.map((dest) => (
          <li
            key={dest.id}
            className="flex justify-between items-center bg-gray-100 rounded-lg p-3"
          >
            <span>{dest.name}</span>
            <button
              onClick={() => handleDelete(dest.id, dest.name)}
              className="text-red-500 hover:text-red-700 transition"
            >
              <Trash2 size={18} />
            </button>
          </li>
        ))}
      </ul>

      {destinations.length === 0 && (
        <p className="text-gray-500 mt-6">No saved destinations yet.</p>
      )}
    </div>
  );
}

export default TravelPlanner;
