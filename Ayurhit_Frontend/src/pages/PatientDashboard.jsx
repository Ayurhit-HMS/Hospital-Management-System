import PatientSidebar from "../components/PatientSidebar";
import "../styles/patientDashboard.css"
import image from "../images/map.jpg"
import Footer from "../components/Footer"
import { useEffect, useState } from "react";
import { getPatientDetails } from "../services/patientService";
import { setPatientDetails } from '../Redux/features/patient/patientSlice';
import { useDispatch } from 'react-redux';


function PatientDashboard() {

    const dispatch = useDispatch();

    const [patient, setPatient] = useState();

    useEffect(() => {
        const fetchPatientDetails = async () => {
            try {
                const jwt = sessionStorage.getItem("jwt");
                if (jwt) {
                    const response = await getPatientDetails(jwt);
                    console.log(response)
                    setPatient(response);
                    dispatch(setPatientDetails(response));
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
                            <div className="carousel-inner  mb-5" >
                                <div className="carousel-item active" style={{ height: 400 }}>
                                    <img src="https://cdn.pixabay.com/photo/2024/07/08/16/28/ai-generated-8881542_640.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" style={{ height: 400 }}>
                                    <img src="https://cdn.pixabay.com/photo/2024/04/09/05/38/ai-generated-8685104_640.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" style={{ height: 400 }}>
                                    <img src="https://cdn.pixabay.com/photo/2016/11/14/03/07/nurse-1822460_640.jpg" className="d-block w-100" alt="..." />
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