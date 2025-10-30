import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import TravelPlanner from "./pages/TravelPlanner"; // Import the new Planner page
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Important: import toast styles
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(null)
// load user from json
  useEffect(() => {
    const saved= JSON.parse(localStorage.getItem("user"));
    if (saved) setUser(saved);
  }, [])


  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <div>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Destinations route */}
        <Route path="/destinations" element={<Destinations />} />
        {/* Contact route */}
        <Route path="/contact" element={<Contact />} />
        {/* Planner route */}
        <Route path="/planner" element={<TravelPlanner />} />{" "}
        {/* Profile route */}
        <Route
          path="/profile"
          element={
            user ? (
              <Profile user={user} onLogout={handleLogout} />
            ) : (
              //  if a user is not loggen in the login form is displayed instead of the profile.
              <Login />
            )
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* Toast notifications container */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default App;
