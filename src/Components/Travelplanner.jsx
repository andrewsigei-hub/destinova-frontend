import { useState, useEffect } from "react";

function TravelPlanner() {
  const [destinations, setDestinations] = useState([]);
  

  // Fetch saved destinations from backend
  useEffect(() => {
    fetch("https://destinova-uzj2.onrender.com/planner")
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => console.error("Error fetching planner:", err));
  }, []);


  

  // Delete destination
  function handleDelete(id) {
    fetch(`https://destinova-uzj2.onrender.com/planner/${id}`, { method: "DELETE" })
      .then(() =>
        setDestinations(destinations.filter((dest) => dest.id !== id))
      );
  }

  // Clear all
  function handleClear() {
    Promise.all(
      destinations.map((d) =>
        fetch(`https://destinova-uzj2.onrender.com/planner/${d.id}`, { method: "DELETE" })
      )
    ).then(() => setDestinations([]));
  }

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
              onClick={() => handleDelete(dest.id)}
              className="text-red-500 hover:text-red-700"
            >
              {/* Optional: Add an icon here if needed */}
            </button>
          </li>
        ))}
      </ul>

      {destinations.length > 0 && (
        <button
          onClick={handleClear}
          className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          Clear All ({destinations.length})
        </button>
      )}
    </div>
  );
}

export default TravelPlanner;
