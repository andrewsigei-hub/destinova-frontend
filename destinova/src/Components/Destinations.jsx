import React, { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";

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

  // Filter destinations by name
  const filteredDestinations = destinations.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p>Loading Destinations...</p>;
  }

  return (
      <>
          <h1 style={{textAlign: "center", wordSpacing: "2"}}>Destinations</h1>
      <h3>Explore Destinations</h3>
      <input
        type="text"
        placeholder="Search destinations by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
          />
          <button type="search"> Search</button>

      <div className="destination-grid" style={{display: "grid",  gridTemplateColumns: "repeat(3, 1fr)",gap:"1.5rem", padding: "2rems", justifyItems: "center"}}>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest) => (
            <DestinationCard key={dest.id} {...dest} />
          ))
        ) : (
          <p>No destinations found with that name.</p>
        )}
      </div>
    </>
  );
}

export default Destinations;
