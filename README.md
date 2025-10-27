# Destinova

**Group Members:** Andrew, Bradley, Hidaya, Stanley, Enock, Ajak  
**Course:** Software Development Bootcamp — Phase 2 Project  
**Type:** Single Page React Application

---

## Overview

**Destinova** is a single-page travel planning application that allows users to explore destinations, add new ones, and manage their personal travel planner — all from one intuitive interface.

Built using **React**, styled with **Tailwind CSS**, and powered by a **local JSON Server** for data storage, Destinova demonstrates modern frontend development practices and dynamic state management.

---

## Tech Stack

**Frontend:**

- React (Create React App)
- React Router DOM
- Tailwind CSS
- Lucide-React (icons)
- React-Hot-Toast (notifications)

**Backend:**

- JSON Server (local RESTful API)

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

## Backend (JSON Server)

A **JSON Server** simulates a RESTful API for persistent data.

### Run JSON Server

```bash
npx json-server --watch db.json --port 3001

| Method | Endpoint            | Description            |
| ------ | ------------------- | ---------------------- |
| GET    | `/destinations`     | Fetch all destinations |
| POST   | `/destinations`     | Add a new destination  |
| DELETE | `/destinations/:id` | Remove a destination   |


 State Management

State is managed using React’s useState hook, ensuring instant UI updates after POST or DELETE actions.

function addDestination(newDestination) {
  setDestinations([...destinations, newDestination]);
}

Example POST Request
fetch('http://localhost:3001/destinations', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: "Rome", country: "Italy" })
})
  .then(res => res.json())
  .then(newDestination => addDestination(newDestination));

🎨 Styling

Styled using Tailwind CSS for responsiveness and consistency.

Lucide-React provides vector icons.

React-Hot-Toast delivers user notifications (e.g., "Destination Added" or "Deleted Successfully").

🚀 Installation & Setup

Clone the repository:

git clone https://github.com/<your-repo>/destinova.git
cd destinova


Install dependencies:

npm install


Start the JSON server:

npx json-server --watch db.json --port 3000


Start the React app:

npm start


Visit the app at:
👉 http://localhost:3000

 #Features Summary

 Single-Page React Application

 5+ Reusable Components

 3+ Client-side Routes

 Controlled Form with POST Request

 GET & DELETE Requests (JSON Server)

 Tailwind Styling

 Toast Notifications

 State Updates via setState
```
