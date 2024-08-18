import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'
import Home from './pages/Home'
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register'
import { ToastContainer } from 'react-toastify';
import PatientDashboard from './pages/PatientDashboard.jsx'
import PatientProfile from './pages/PatientProfile.jsx';
import BookAppointment from './pages/BookAppointment.jsx'
import PatientAppointments from './pages/PatientAppointments.jsx';
import Bill from './pages/Bill.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Hospitals from './pages/Hospitals.jsx';
import Careers from './pages/Careers.jsx';
import Prescription from './pages/Prescription.jsx'


function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="/patient/dashboard" element={<PatientDashboard />} />
            <Route path="/patient/profile" element={<PatientProfile />} />
            <Route path="/patient/bookAppointment" element={<BookAppointment />} />
            <Route path="/patient/appointments" element={<PatientAppointments />} />
            <Route path="/patient/prescriptions" element={<Prescription />} />
            <Route path="/patient/bills" element={<Bill />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/doctor/dashboard" element={<PatientDashboard />} />
            <Route path="/about" element={<AboutUs />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
