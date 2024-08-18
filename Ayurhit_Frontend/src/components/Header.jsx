import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../images/logo.png"
import "../styles/header.css"
import { useSelector } from "react-redux";

function Header() {

    const patient = useSelector(state => state.patient.patient)
    const navigate = useNavigate()
    //const [isAuthenticated, setIsAuthenticated] = useState(false);
    // useEffect(() => {
    //     const jwt = sessionStorage.getItem("jwt");
    //     setIsAuthenticated(!!jwt);

    // }, []);

    const login = () => {
        navigate('/login')
    };

    const profile = () => {
        navigate('/patient/profile')
    };
    return (
        <div className="custom-header fixed-top">
            <div className="container ">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3 d-flex justify-content-center">
                        <img src={logo} className="img-fluid mb-3" alt="Hospital Logo" style={{ height: 100 }} />
                        <div>
                            <h1 className="title mb-1">Ayurhit</h1>
                            <h4 className="text-center">H o s p i t a l s</h4>
                        </div>
                    </div>

                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                        <p className="me-3 ms-3"><a className="link-underline link-underline-opacity-0 text-secondary" href="#">LAB</a></p>
                        <p className="me-3"><a className="link-underline link-underline-opacity-0 text-secondary" href="#">RESEARCH</a></p>
                        <p className="me-3"><a className="link-underline link-underline-opacity-0 text-secondary" href="#">CSR</a></p>
                        <p className="me-3" onClick={() => { navigate('/careers') }}><a className="link-underline link-underline-opacity-0 text-secondary" href="#">CAREERS</a></p>
                    </div>

                    <div className="col-md-3 d-grid justify-content-center align-items-center">
                        <p className="text-center">For emergency/ambulance<br /> 02112 123 456</p>
                    </div>

                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                        {patient ? (
                            <button className="btn btn-secondary rounded-circle" onClick={profile}>
                                <i class="fa-solid fa-user fa-2x"></i>
                            </button>
                        ) : (
                            <button className="btn btn-success ps-5 pe-5" onClick={login}>
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="custom-nav-bar pt-1 pb-1">
                <div className=" container d-flex justify-content-center align-items-center">
                    <p className="me-4 mt-2" onClick={() => { navigate('/home') }}><a className="link-underline link-underline-opacity-0 text-light" href="#">Home</a></p>
                    <p className="me-4 mt-2" onClick={() => { navigate('/hospitals') }}><a className="link-underline link-underline-opacity-0 text-light" href="#">Hospitals</a></p>
                    <p className="me-4 mt-2" onClick={() => { navigate('/home#hms-specialities') }}><a className="link-underline link-underline-opacity-0 text-light" href="#hms-specialities">Specialties</a></p>
                    <p className="me-4 mt-2" onClick={() => { navigate('/patient/bookAppointment') }}><a className="link-underline link-underline-opacity-0 text-light" href="#">Find a doctor</a></p>
                    <p className="me-4 mt-2" ><a className="link-underline link-underline-opacity-0 text-light" href="#">Patient & visitors</a></p>
                    <p className="me-4 mt-2"><a className="link-underline link-underline-opacity-0 text-light" href="#">Health Library</a></p>
                    <p className="me-4 mt-2" onClick={() => { navigate('/about') }}><a className="link-underline link-underline-opacity-0 text-light" href="#">About us</a></p>
                    <p className="me-4 mt-2" onClick={() => { navigate('/home#contactus') }}><a className="link-underline link-underline-opacity-0 text-light" href="#contactus">Contact us</a></p>
                    <button className="btn btn-sm btn-danger" onClick={() => { navigate('/patient/bookAppointment') }}>Second Opinion</button>
                </div>
            </div>
        </div>
    )
}

export default Header