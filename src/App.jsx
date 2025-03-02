import { useState } from 'react';
import './App.css';
import Home from './pages/Home';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Home/>
     {/* <Contact/>
     <Appointment></Appointment>
     <DoctorProfile/> */}
     {/* <Booking/> */}
    </>
  );
}

export default App;
