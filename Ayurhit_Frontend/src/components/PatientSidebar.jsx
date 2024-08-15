import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/actions';
import "../styles/sidebar.css"
import { useSelector } from 'react-redux';

function PatientSidebar({ isSidebarVisible, toggleSidebar, patientDetails }) {

    const patient = useSelector(state => state.patient.patient);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const offcanvasElement = document.getElementById('offcanvasScrolling');
        const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
        bsOffcanvas.show();
    }, []);

    const handleShow = () => {
        const offcanvasElement = document.getElementById('offcanvasScrolling');
        const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvasElement);

        if (isSidebarVisible) {
            bsOffcanvas.hide();
        } else {
            bsOffcanvas.show();
        }
        toggleSidebar();
    };

    const logoutUser = () => {
        dispatch(logout());
        sessionStorage.clear();
        navigate('/home');
        window.location.reload();
    };

    const patientName = patient ? `${patient.firstName} ${patient.lastName}` : "User";

    return (
        <div>
            <button className={`btn btn-secondary menu-button ms-1 ${isSidebarVisible ? 'invisible' : 'visible'}`} type="button" onClick={handleShow} aria-controls="offcanvasScrolling">
                <i className="fas fa-bars"></i>
            </button>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style={{ width: 300 }}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Hello {patientName}</h5>
                    <button type="button" className="btn-close" onClick={handleShow} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="container d-grid">
                        <button className="btn btn-custom mb-2" onClick={() => { navigate('/patient/dashboard') }}>Dashboard</button>
                        <button className="btn btn-custom mb-2" onClick={() => { navigate('/patient/BookAppointment') }}>Book Appointment</button>
                        <button className="btn btn-custom mb-2" onClick={() => { navigate('/patient/appointments') }}>View Appointments</button>
                        <button className="btn btn-custom mb-2" onClick={() => { navigate('/patient/prescriptions') }}>Prescriptions</button>
                        <button className="btn btn-custom mb-2" onClick={() => { navigate('/patient/bills') }}>Bills</button>
                        <button className="btn btn-custom mb-2" >Settings</button>
                        <button className='btn btn-danger' onClick={logoutUser}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientSidebar
