import React, { useEffect } from 'react';
import "../styles/sidebar.css"

function PatientSidebar({ isSidebarVisible, toggleSidebar }) {

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
    return (
        <div>
            <button className="btn btn-secondary menu-button ms-1" type="button" onClick={handleShow} aria-controls="offcanvasScrolling">
                <i className="fas fa-bars"></i>
            </button>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style={{ width: 300 }}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Hello User</h5>
                    <button type="button" className="btn-close" onClick={handleShow} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="container d-grid">
                        <button className="btn btn-custom mb-2">Dashboard</button>
                        <button className="btn btn-custom mb-2">Book Appointment</button>
                        <button className="btn btn-custom mb-2">View Appointments</button>
                        <button className="btn btn-custom mb-2">Prescriptions</button>
                        <button className="btn btn-custom mb-2">Bills</button>
                        <button className="btn btn-custom mb-2">Settings</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientSidebar;
