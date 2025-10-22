import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Destinations from "./pages/Destinations.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to Destinova</h1>} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    </>
  );
}

export default App;
