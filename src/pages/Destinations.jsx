import React, { useEffect, useState } from "react";
import DestinationCard from "../Components/DestinationCard";
import Sidebar from "../Components/Sidebar";
import AddDestinationForm from "../Components/AddDestinationForm";
import { toast } from "react-toastify";


function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category , setCategory] = useState("All")
  const [showForm, setShowForm] = useState(false);
  const [SidebarOpen, setSidebarOPen] =useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching destinations:", error));
  }, []);

  const handleAddDestination = (newDest) => {
    fetch("http://localhost:3000/destinations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDest),
    });
    setShowForm(false);
  };

  const handleSaveToPlanner = (destination) => {
    fetch("http://localhost:3000/planner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(destination),
    })
      .then((res) => {
        if (res.ok) toast.success(`Saved "${destination.name}" to Planner!`);
        else toast.error("Failed to save destination.");
      })
      .catch(() => toast.error("Network error while saving destination."));
  };

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch = dest.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "All" || dest.category === category;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <p className="text-center text-gray-600">Loading Destinations...</p>;
  }

  return (
    <div className="px-6 py-8 flex">
      <Sidebar
        selectedCategory={category}
        onSelectCategory={setCategory}
        isOpen={SidebarOpen}
        onClose={() => setSidebarOPen(false)}
      />
      <div className="flex-1 ml-60 px-6 py-8">
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOPen(true)}
          className="md:hidden fixed top-4 left-4 bg-blue-600 text-white p-2 rounded-md z-40"
        >
          ☰
        </button>
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800 animate-bounce">
          Destinations
        </h1>
        <h3 className="text-lg text-gray-700 mb-6 text-center animate-highlight">
          Explore beautiful destinations
        </h3>

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
              <div key={dest.id} className="relative w-full">
                <DestinationCard {...dest} />
                <button
                  onClick={() => handleSaveToPlanner(dest)}
                  className="absolute top-2 right-2 bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md text-sm transition"
                >
                  Save
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">
              No destinations found with that name.
            </p>
          )}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            {showForm ? "Cancel" : "+ Add Destination"}
          </button>
        </div>

        {showForm && <AddDestinationForm onAdd={handleAddDestination} />}
      </div>
    </div>
  );
}

export default Destinations;
