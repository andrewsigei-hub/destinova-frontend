import React from "react";

function DestinationCard({ name, location, price, rating, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden w-full max-w-sm">
      {/* Image */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      {/* Content */}
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{location}</p>

        {/* Price and Rating */}
        <div className="flex justify-center items-center gap-3 mt-2 text-sm">
          <p className="font-medium text-gray-700">💲{price}</p>
          <p className="text-yellow-500">⭐ {rating}</p>
        </div>
        <div>
          {/* <button
            className="Add-to-planner button"
            onClick={() =>
              onAddToPlanner({
                name,
                location,
                price,
                rating,
                image,
                onAddToPlanner,
              })
            }
          >
            Add to Planner❤️
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
