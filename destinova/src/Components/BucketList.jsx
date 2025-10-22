// import React from "react";
// import DestinationCard from "./DestinationCard";



// function BucketList({bucketList, onRemove}) {
//   return (
//     <div className="bucket">
//           <h2>My BucketList 🏖️ </h2>
//           {bucketList.length === 0 ? (
//         <p>No destinations added yet.</p>
//       ) : (
//         <ul className="bucket-list-items">
//           {bucketList.map((dest) => (
//             <li key={dest.id}>
//               <DestinationCard {...dest} />
//               <button onClick={() => onRemove(dest.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       </div>
//   );
// }

// export default BucketList