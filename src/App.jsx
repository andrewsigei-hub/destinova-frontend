
import Navbar from './Components/Navbar'
import React from 'react'
import Destinations from './Components/Destinations'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
      <Navbar />
      <Destinations />
      <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </div>
<<<<<<< HEAD
  );
=======
    
  )
>>>>>>> main
}


