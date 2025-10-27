import React from "react";
import Navbar from "./Components/Navbar";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import TravelPlanner from "./pages/TravelPlanner"; // Import the new Planner page
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Important: import toast styles
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/planner" element={<TravelPlanner />} />{" "}
        {/* Added route */}
      </Routes>

      {/* Toast notifications container */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default App;
