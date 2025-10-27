import React, {useState} from "react";

function DestinationCard({ name, location, description, image, category }) {
   const [showDetails, setShowDetails] = useState(false);

   const handleCardClick = () => {
     setShowDetails(!showDetails);
   };

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden w-full max-w-sm"
      onClick={handleCardClick}
    >
      {/* Image */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      {/* Content */}
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

        {/* Conditional Details Section */}
        {showDetails && (
          <div className="destination-details">
            {description && <p>{description}</p>}
            {location && (
              <p>
                <strong>Location:</strong> {location}
              </p>
            )}
            {category && (
              <p>
                <strong>Category: </strong> {category}
              </p>
            )}
            
          </div>
        )}

        
        </div>
      </div>
  );
}

export default DestinationCard;
