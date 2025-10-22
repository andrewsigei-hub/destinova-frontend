import React, { useEffect, useState } from "react";
// Import DestinationCard
import DestinationCard from "../Components/DestinationCard";

function Destinations() {
    // Sets the useState to empty array for destinations, true to loading and empty strings to the search input field.
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
// UseEffect and data fetching from db.json file
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
//  THis message is displayed when the page is loading.
  if (loading) {
    return <p>Loading Destinations...</p>;
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Destinations</h1>
      <h3 style={{ marginLeft: "0" }}>Explore Destinations</h3>
      <input
        type="text"
        placeholder="Search destinations by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
{/* This section is displayed immediately the page loads and it gets filtered when a user searches a destination  */}
      <div
              className="destination-grid"
            //   added some inline styling to ensure only 3 destinatios are displayed per line.
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          padding: "2rems",
          justifyItems: "center",
          margin: "15px",
        }}
      >
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest) => (
            <DestinationCard key={dest.id} {...dest} />
          ))
              ) : (
                    //   This message pops up when no destination with the search name is found
          <p>No destinations found with that name.</p>
        )}
      </div>
    </>
  );
}

export default Destinations;
