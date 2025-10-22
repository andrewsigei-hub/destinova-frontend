
import Navbar from './Components/Navbar'
import React from 'react'
import Destinations from './pages/Destinations'
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from "react-router-dom";

function App() {
  const notify = () => toast("Added to planner");
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to Destinova</h1>} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
      <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </div>
  );
}

export default App;
