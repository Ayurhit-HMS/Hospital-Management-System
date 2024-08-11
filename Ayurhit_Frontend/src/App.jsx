import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'
import Home from './pages/Home'
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
