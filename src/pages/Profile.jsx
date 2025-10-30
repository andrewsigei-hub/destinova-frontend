import React from "react";
// This is the profile page that is displayed when the user logs in or signs up.
function Profile({ user, onLogout }) {
  if (!user) {
    return <p className="text-center mt-10">You’re not logged in.</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded shadow text-center">
      <img
        src={user.image}
        alt="User Avatar"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{user.username}</h2>
      <p className="text-gray-500 mb-4">{user.email}</p>

      <button
        onClick={onLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Log Out
      </button>
    </div>
  );
}

export default Profile;
