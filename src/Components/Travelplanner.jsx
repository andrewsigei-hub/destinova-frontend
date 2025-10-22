import { useState, useEffect } from "react";

function TravelPlanner() {
  const [destinations, setDestinations] = useState([]);
  const [newDestination, setNewDestination] = useState("");

  // Fetch saved destinations from local JSON server
  useEffect(() => {
    fetch("http://localhost:3000/planner")
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => console.error("Error fetching planner:", err));
  }, []);

  // Add new destination
  function handleAdd(e) {
    e.preventDefault();

    if (newDestination.trim() === "") return;

    const newItem = { name: newDestination };

    fetch("http://localhost:3000/planner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => setDestinations([...destinations, data]));

    setNewDestination("");
  }

  // Delete destination
  function handleDelete(id) {
    fetch(`http://localhost:3000/planner/${id}`, { method: "DELETE" })
      .then(() =>
        setDestinations(destinations.filter((dest) => dest.id !== id))
      );
  }

  // Clear all
  function handleClear() {
    Promise.all(
      destinations.map((d) =>
        fetch(`http://localhost:3000/planner/${d.id}`, { method: "DELETE" })
      )
    ).then(() => setDestinations([]));
  }

  return (
    <div className="p-8 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">🌍 Travel Planner</h1>

      <form onSubmit={handleAdd} className="flex gap-2 justify-center mb-6">
        <input
          type="text"
          placeholder="Add a destination..."
          value={newDestination}
          onChange={(e) => setNewDestination(e.target.value)}
          className="border rounded-lg p-2 w-2/3"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add
        </button>
      </form>

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
              ❌
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
