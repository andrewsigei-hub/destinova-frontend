
import Navbar from './Components/Navbar'
import React from 'react'
import Destinations from './pages/Destinations'
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
function App() {
  const notify = () => toast("Added to planner");
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </div>
  );
}

export default App;
