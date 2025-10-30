// src/Components/AddDestinationForm.jsx
import React, { useState } from "react";

function AddDestinationForm({ onAdd }) {
  // Sets data for the form to empty strings.
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    location: "",
    category: "Beach"
  });
// Handles change whe a user inputs data in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
// Handles submit and prevents default behavior
  const handleSubmit = (e) => {
    e.preventDefault();
// Sets new destination to formData
    const newDestination = {
      ...formData,
      id: Date.now(), 
    };

    onAdd(newDestination);
// Form Data is reset
    setFormData({
      name: "",
      image: "",
      description: "",
      location: "",
      category: "Beach"
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 max-w-2xl mx-auto p-6 border rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">
        Add a New Destination
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {["name", "image", "description", "location", "category"].map(
          (field) => (
            <input
              key={field}
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="p-2 border rounded-md w-full"
              required
            />
          )
        )}
        {/* Category Dropdown */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="p-2 border rounded-md w-full"
          required
        >
          <option value="Beach">Beach</option>
          <option value="Adventure">Adventure</option>
          <option value="Cultural">Cultural</option>
          <option value="Nature">Nature</option>
          <option value="Romantic">Romantic</option>
          <option value="Urban">Urban</option>
          <option value="Relaxation">Relaxation</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Add Destination
      </button>
    </form>
  );
}

export default AddDestinationForm;
