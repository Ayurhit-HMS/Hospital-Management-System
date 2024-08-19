import React, { useEffect } from 'react';
import "../styles/sidebar.css"
import { useNavigate } from 'react-router-dom';

function AdminSidebar({ isSidebarVisible, toggleSidebar, adminDetails }) {

    const navigate = useNavigate()

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

    const admintName = adminDetails ? `${adminDetails.firstName} ${adminDetails.lastName}` : "User";
    return (
        <div>
            <button className="btn btn-secondary menu-button ms-1 "  style={{zIndex:4000}} type="button" onClick={handleShow} aria-controls="offcanvasScrolling">
                <i className="fas fa-bars"></i>
            </button>
            <div className="offcanvas offcanvas-start custom-canvas" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style={{ width: 300 }}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Hello {admintName}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="container d-grid">
                        <button className="btn btn-custom mb-2" onClick={() => { navigate('/admin/dashboard') }}>Dashboard</button>
                        <button className="btn btn-custom mb-2" onClick={() => { navigate('/admin/emplist') }}>Employees</button>
                        <button className="btn btn-custom mb-2" onClick={() => { navigate('/admin/schedulelist') }}>Schedules</button>
                        <button className="btn btn-custom mb-2" onClick={() => { navigate('/admin/deptlist') }}>Departments</button>

                        <button className="btn btn-custom mb-2">Ward</button>
                        <button className="btn btn-custom mb-2">Settings</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;
