import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Appointment from './pages/Appointment.jsx';
import DoctorProfile from './pages/DoctorProfile.jsx';
import Contact from './pages/Contact.jsx'
import UserLayout from './user/userLayout.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<UserLayout />}>
        <Route index element={<App />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="book-appointments" >
          <Route index element={<Appointment />}></Route>
          <Route path=":doctor-id" element={<DoctorProfile />} />
        </Route>
      </Route>
    </Routes>
    
  </BrowserRouter>
)
