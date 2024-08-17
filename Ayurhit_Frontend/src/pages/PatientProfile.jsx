import PatientSidebar from "../components/PatientSidebar";
import Footer from "../components/Footer"
import { useSelector } from 'react-redux';
import { useState } from "react";
import profilePhoto from "../images/login_background.jpg"

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
                        <div className="container">
                            <h1 className="text-center mb-5">Patient Profile</h1>
                            {patient ? (
                                <div>
                                    <h3 className="mb-4">Basic Details</h3>
                                    <div className="row d-flex shadow rounded p-3">
                                        <div className="col-md-5">
                                            <img className="img-fluid w-50 rounded-circle mx-auto d-block" src={profilePhoto} alt="Profile Photo" />
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-sm btn-warning float-end">Edit</button>
                                            <div className="row mt-5">
                                                <div className="col">
                                                    <p>Name: {patient.firstName} {patient.lastName} </p>
                                                    <p>Email: {patient.email}</p>
                                                    <p>Gender: {patient.gender}</p>
                                                    <p>ABHA Id: {patient.abha_Id}</p>
                                                </div>
                                                <div className="col">
                                                    <p>Phone: {patient.phone}</p>
                                                    <p>Age: {new Date().getFullYear() - new Date(patient.birthDate).getFullYear()}</p>
                                                    <p>Blood Group: {patient.bloodGroup}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className=" mb-4 mt-4">Address Details</h3>
                                    <div className="row d-flex shadow rounded p-3">
                                        <div className="col">
                                            <button className="btn btn-sm btn-warning float-end">Edit</button>
                                            <div className="row mt-3">
                                                <div className="col-md-5">
                                                    <div className="col">
                                                        <p>Address Line 1: {patient.addressDTO && patient.addressDTO.addressLine1 ? patient.addressDTO.addressLine1 : 'N/A'}</p>
                                                        <p>Address Line 2: {patient.addressDTO && patient.addressDTO.addressLine2 ? patient.addressDTO.addressLine2 : 'N/A'}</p>
                                                        <p>Pincode: {patient.addressDTO && patient.addressDTO.pincode ? patient.addressDTO.pincode : 'N/A'}</p>
                                                        <p>Emergency Contact: {patient.emergencyContactName ? patient.emergencyContactName : 'N/A'}</p>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <p>City: {patient.addressDTO && patient.addressDTO.city ? patient.addressDTO.addressLine1 : 'N/A'}</p>
                                                    <p>State: {patient.addressDTO && patient.addressDTO.state ? patient.addressDTO.state : 'N/A'}</p>
                                                    <p>Country: {patient.addressDTO && patient.addressDTO.country ? patient.addressDTO.country : 'N/A'}</p>
                                                    <p>Emergency Contact Number: {patient.emergencyContactNumber ? patient.emergencyContactNumber : 'N/A'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className=" mb-4 mt-4">Insurance Details</h3>
                                    <div className="row d-flex shadow rounded p-3">
                                        <div className="col">
                                            <button className="btn btn-sm btn-warning float-end">Edit</button>
                                            <div className="row mt-3">
                                                <div className="col-md-5">
                                                    <div className="col">
                                                        <p>Insurance number: {patient.insuranceNumber}</p>
                                                        <p>Insurance Provider Name: {patient.insurance && patient.insurance.name ? patient.insurance.name : 'N/A'}</p>
                                                        <p>Insurance Provider Code: {patient.insurance && patient.insurance.code ? patient.insurance.code : 'N/A'}</p>
                                                        <p>Contact Person: {patient.insurance && patient.insurance.contactPerson ? patient.insurance.contactPerson : 'N/A'}</p>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <p>Contact Number: {patient.insurance && patient.insurance.contactNumber ? patient.insurance.contactNumber : 'N/A'}</p>
                                                    <p>Email: {patient.insurance && patient.insurance.email ? patient.insurance.email : 'N/A'}</p>
                                                    <p>Coverage Details: {patient.insurance && patient.insurance.coverageDetails ? patient.insurance.coverageDetails : 'N/A'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className=" mb-4 mt-4">Current Medication</h3>
                                    <div className="row d-flex shadow rounded p-3">
                                        <div className="col">
                                            <button className="btn btn-sm btn-success float-end">Add</button>
                                            <div className="row mt-3">
                                                {patient.currentMedications && patient.currentMedications.length > 0 ? (
                                                    <table className="table mt-4 p-3">
                                                        <thead>
                                                            <tr>
                                                                <th>Medicine Name</th>
                                                                <th>Dosage</th>
                                                                <th>Duration</th>
                                                                <th>Medicine Company</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {patient.currentMedications.map((medication, index) => (
                                                                <tr key={index}>
                                                                    <td>{medication.medicineName}</td>
                                                                    <td>{medication.dosage}</td>
                                                                    <td>{medication.duration}</td>
                                                                    <td>{medication.medicineCompany}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                ) : (
                                                    <div>
                                                        <p>No current medications</p>
                                                    </div>)}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className=" mb-4 mt-4">Past Surgeries</h3>
                                    <div className="row d-flex shadow rounded p-3">
                                        <div className="col">
                                            <button className="btn btn-sm btn-success float-end">Add</button>
                                            <div className="row mt-3">
                                                {patient.pastSurgeries && patient.pastSurgeries.length > 0 ? (
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>Surgery Name</th>
                                                                <th>Surgery Date</th>
                                                                <th>Surgery Description</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {patient.pastSurgeries.map((surgery, index) => (
                                                                <tr key={index}>
                                                                    <td>{surgery.surgeryName}</td>
                                                                    <td>{surgery.surgeryDate ? new Date(surgery.surgeryDate).toLocaleDateString() : 'N/A'}</td>
                                                                    <td>{surgery.surgeryDescription}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                ) : (
                                                    <div>
                                                        <p>No current medications</p>
                                                    </div>)}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className=" mb-4 mt-4">Chronic Conditions</h3>
                                    <div className="row d-flex shadow rounded p-3">
                                        <div className="col">
                                            <button className="btn btn-sm btn-success float-end">Add</button>
                                            <div className="row mt-3">
                                                {patient.chronicConditions && patient.chronicConditions.length > 0 ? (
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Description</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {patient.chronicConditions.map((condition, index) => (
                                                                <tr key={index}>
                                                                    <td>{condition.name}</td>
                                                                    <td>{condition.description}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                ) : (
                                                    <div>
                                                        <p>No current medications</p>
                                                    </div>)}
                                            </div>
                                        </div>
                                    </div>


                                    <h3 className=" mb-4 mt-4">Allergies</h3>
                                    <div className="row d-flex shadow rounded p-3">
                                        <div className="col">
                                            <button className="btn btn-sm btn-success float-end">Add</button>
                                            <div className="row mt-3">
                                                {patient.allergies && patient.allergies.length > 0 ? (
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Description</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {patient.allergies.map((allergy, index) => (
                                                                <tr key={index}>
                                                                    <td>{allergy.name}</td>
                                                                    <td>{allergy.description}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                ) : (
                                                    <div>
                                                        <p>No current medications</p>
                                                    </div>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p>No patient data available</p>
                            )}

                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Open Modal
                            </button>
                        </div>
                    </div>
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"}>
                        <Footer></Footer>
                    </div>

                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientProfile;