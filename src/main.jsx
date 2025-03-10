import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Appointment from './pages/Appointment.jsx';
import DoctorProfile from './pages/DoctorProfile.jsx';
import Contact from './pages/Contact.jsx'
import UserLayout from './user/userLayout.jsx';
import DoctorLayout from './doctor/DoctorLayout.jsx';
import DoctorLanding from './components/DoctorLanding.jsx';
import DoctorAppointment from './components/DoctorAppointment.jsx';
import DoctorTimings from './components/DoctorTimings.jsx';
import DoctorReview from './components/DoctorReview.jsx';
import DoctorAccounts from './components/DoctorAccounts.jsx';
import DoctorInvoices from './components/DoctorInvoices.jsx';
import DoctorChat from './components/DoctorChat.jsx';
import SettingLayout from './doctor/SettingLayout.jsx';
import DoctorBasicDetails from './components/DoctorBasicDetails.jsx';
import DoctorExperience from './components/doctorSettings/DoctorExperience.jsx';
import DoctorEducation from './components/doctorSettings/DoctorEducation.jsx';
import DoctorAward from './components/doctorSettings/DoctorAward.jsx';
import DoctorBusinessHours from './components/doctorSettings/DoctorBusinessHours.jsx';

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
      <Route element={<DoctorLayout />}>
        <Route path='doctors' >
          <Route path='dashboard' element={<DoctorLanding />} />
          <Route path='appointments' element={<DoctorAppointment />} />
          <Route path='timings' element={<DoctorTimings />} />
          <Route path='reviews' element={<DoctorReview />} />
          <Route path='accounts' element={<DoctorAccounts />} />
          <Route path='invoices' element={<DoctorInvoices />} />
          <Route element={<SettingLayout />}>
            <Route path="setting">
              <Route path="basic" element={<DoctorBasicDetails />} />
              <Route path="experience" element={<DoctorExperience />} />
              <Route path="education" element={<DoctorEducation />} />
              <Route path="award" element={<DoctorAward />} />
              <Route path="hours" element={<DoctorBusinessHours />} />
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="doctors/chat" element={<DoctorChat />}>


      </Route>
    </Routes>

  </BrowserRouter>
)
