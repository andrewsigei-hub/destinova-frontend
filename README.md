# Destinova

**Group Members:** Andrew, Bradley, Hidaya, Stanley, Enock, Ajak  
**Course:** Software Development Bootcamp — Phase 2 Project  
**Type:** Single Page React Application

---

## Overview

**Destinova** is a single-page travel planning application that allows users to explore destinations, add new ones, and manage their personal travel planner — all from one intuitive interface.

Built using **React**, styled with **Tailwind CSS**, and powered by a **RESTful API backend** (deployed on Render), Destinova demonstrates modern frontend development practices and dynamic state management.

---

## Tech Stack

**Frontend:**

- React (Vite / Create React App)
- React Router DOM
- Tailwind CSS
- Lucide-React (icons)
- React-Hot-Toast (notifications)

**Backend:**

- Deployed JSON Server on Render
- RESTful API for destinations and planner management

---

## App Structure

Destinova is organized into modular and reusable components for maintainability and clarity.

---

## Routing

Destinova uses **React Router DOM** to enable navigation between multiple pages while remaining a single-page application.

| Route           | Path         | Description                          |
| --------------- | ------------ | ------------------------------------ |
| `/`             | Home         | Introduction and navigation overview |
| `/destinations` | Destinations | Browse and add destinations          |
| `/planner`      | Planner      | View and delete saved destinations   |
| `/contact`      | Contact      | Contact form for user messages       |

---

## Backend (Render JSON Server)

A **JSON Server** simulates a RESTful API for persistent data and is hosted at:
https://destinova-uzj2.onrender.com


### Endpoints

| Method | Endpoint            | Description            |
| ------ | ------------------ | ---------------------- |
| GET    | `/destinations`     | Fetch all destinations |
| POST   | `/destinations`     | Add a new destination  |
| DELETE | `/destinations/:id` | Remove a destination   |
| GET    | `/planner`          | Fetch saved destinations |
| POST   | `/planner`          | Add to planner         |
| DELETE | `/planner/:id`      | Remove from planner    |

All frontend fetch requests point to this deployed backend.

---

## State Management

State is managed using React’s `useState` hook, ensuring instant UI updates after POST or DELETE actions.

```javascript
function addDestination(newDestination) {
  setDestinations([...destinations, newDestination]);
}

fetch('https://destinova-uzj2.onrender.com/destinations', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: "Rome", category: "Cultural" })
})
  .then(res => res.json())
  .then(newDestination => addDestination(newDestination));


Styling & UX

Tailwind CSS for responsive and modern styling.

Lucide-React provides clean vector icons.

React-Hot-Toast delivers instant user notifications (e.g., "Destination Added" or "Deleted Successfully").

Installation & Setup (Development)

Clone the repository:

git clone https://github.com/<your-repo>/destinova.git
cd destinova


Install dependencies:

npm install


Start the React app locally (points to Render backend):

npm run dev   # if using Vite
# or
npm start     # if using CRA


Visit the app at:
👉 http://localhost:5173
 (Vite) or http://localhost:3000
 (CRA)

Note: The frontend is already configured to use the Render backend, so no local JSON server setup is required.

Features Summary

Single-Page React Application

Modular, Reusable Components

Client-side Routing with React Router DOM

Controlled Forms with POST Requests

GET & DELETE Requests to deployed backend

Tailwind CSS Styling

Toast Notifications via React-Hot-Toast

Dynamic State Updates via useState

Deployment

The frontend can be deployed easily on Vercel:

Connect your GitHub repository.

Select the root project folder.

Build command: npm run build (CRA) or npm run build (Vite)

Output directory: build (CRA) or dist (Vite)

Vercel will handle hosting; frontend will interact with the Render backend automatically.

Deployed backend URL: https://destinova-uzj2.onrender.com