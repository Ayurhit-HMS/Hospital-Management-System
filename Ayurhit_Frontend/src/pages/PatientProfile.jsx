import PatientSidebar from "../components/PatientSidebar";
import Footer from "../components/Footer"
import { useSelector } from 'react-redux';
import { useState } from "react";

function PatientProfile() {
    const patient = useSelector((state) => state.patient.patient);

    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="container-fluid patient-dashboard-content">
            <div className="row">
                <div className={isSidebarVisible ? "col-md-2" : "col-md-0"}>
                    <div className="custom-sidebar"><PatientSidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} patientDetails={patient}></PatientSidebar>
                    </div>
                </div>
                <div className="col">
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"} >
                        <div>
                            <h1 className="text-center">Patient Profile</h1>
                            {patient ? (
                                <div>
                                    <p>Name: {patient.firstName}</p>
                                    <p>LastName: {patient.lastName}</p>
                                    <p>Email: {patient.email}</p>
                                    <p>Gender: {patient.gender}</p>
                                    <p>Phone: {patient.phone}</p>
                                    <p>Birth Date: {patient.birthDate}</p>
                                    <p>Address: {patient.addressDTO}</p>
                                    <p>Blood Group: {patient.bloodGroup}</p>
                                    <p>Emergency Contact: {patient.emergencyContactName}</p>
                                    <p>Emergency Contact Number: {patient.emergencyContactNumber}</p>
                                    <p>Insurance number: {patient.insuranceNumber}</p>
                                    <p>Allergies: {patient.allergies}</p>
                                    <p>Chronic Conditions: {patient.chronicConditions}</p>
                                    <p>Current Medications: {patient.currentMedications}</p>
                                    <p>Insurance Provider: {patient.insuranceProvider}</p>
                                    <p>ABHA Id: {patient.abha_Id}</p>
                                    <p>Past Surgeries: {patient.pastSurgeries}</p>
                                    <p>Profile Photo: {patient.profilePhoto}</p>
                                </div>
                            ) : (
                                <p>No patient data available</p>
                            )}
                        </div>
                    </div>
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"}>
                        <Footer></Footer>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PatientProfile;