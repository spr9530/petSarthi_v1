import { useState } from 'react';
import './App.css';
import Home from './layouts/Home';
import Contact from './layouts/Contact';
import Appointment from './layouts/Appointment';
import DoctorProfile from './layouts/DoctorProfile';
import Booking from './layouts/Booking';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Home/>
     <Contact/>
     <Appointment></Appointment>
     <DoctorProfile/>
     <Booking/>
    </>
  );
}

export default App;
