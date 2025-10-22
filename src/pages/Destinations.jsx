import React, { useEffect, useState } from "react";
import DestinationCard from "../Components/DestinationCard";

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching destinations:", error));
  }, []);

  const filteredDestinations = destinations.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p className="text-center text-gray-600">Loading Destinations...</p>;
  }

  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">Destinations</h1>
      <h3 className="text-lg text-gray-700 mb-6 text-center">
        Explore beautiful destinations
      </h3>

      {/* Tailwind dynamic search bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search destinations by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 sm:w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        />
      </div>

      <div
        className="grid gap-6 justify-items-center"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest) => (
            <DestinationCard key={dest.id} {...dest} />
          ))
        ) : (
          <p className="text-gray-500 text-center">
            No destinations found with that name.
          </p>
        )}
      </div>
    </div>
  );
}

export default Destinations;
