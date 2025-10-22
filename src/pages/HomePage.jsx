// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Destinova</h1>
      <p>Discover your next adventure</p>
      <button onClick={() => navigate("/destinations")}>
        Get Started
      </button>
    </div>
  );
}
