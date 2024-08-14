import PatientSidebar from "../components/PatientSidebar";
import "../styles/patientDashboard.css"
import image from "../images/login_background.jpg"
import Footer from "../components/Footer"
import { useEffect, useState } from "react";
import { getPatientDetails } from "../services/patientService";

function PatientDashboard() {
    const [patient, setPatient] = useState();

    useEffect(() => {
        const fetchPatientDetails = async () => {
            try {
                const jwt = sessionStorage.getItem("jwt");
                console.log(jwt)
                if (jwt) {
                    const response = await getPatientDetails(jwt);
                    console.log(response)
                    setPatient(response);
                } else {
                    console.error('JWT not found');
                }
            } catch (error) {
                console.error('Failed to fetch patient details:', error);
            }
        }
        fetchPatientDetails();
    }, []);


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
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner  mb-5" style={{ height: 400 }}>
                                <div className="carousel-item active">
                                    <img src={image} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={image} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={image} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
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

export default PatientDashboard;