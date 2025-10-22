import Navbar from './Components/Navbar'
import React from 'react'
import Destinations from './Components/Destinations'


function App() {
  return (
    <div>
      <Navbar />
      <section id= "destination">
        <Destinations />
      </section>
      <section id= "home">
        <Home />
      </section>
    </div>
  )
}

export default App
