import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'
import Home from './pages/Home'
import PatientDashboard from './pages/PatientDashboard.jsx'
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register'
import { ToastContainer } from 'react-toastify';

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
