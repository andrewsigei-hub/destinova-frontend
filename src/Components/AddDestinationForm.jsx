// src/Components/AddDestinationForm.jsx
import React, { useState } from "react";

function AddDestinationForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    rating: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDestination = {
      ...formData,
      id: Date.now(), // generate a unique id
    };

    onAdd(newDestination);

    setFormData({
      name: "",
      image: "",
      description: "",
      price: "",
      rating: "",
      location: "",
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
        {["name", "image", "description", "price", "rating", "location"].map(
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
