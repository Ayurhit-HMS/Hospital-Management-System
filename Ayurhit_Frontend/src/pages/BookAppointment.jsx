import PatientSidebar from "../components/PatientSidebar";
import "../styles/patientDashboard.css"
import image from "../images/map.jpg"
import Footer from "../components/Footer"
import { useEffect, useState } from "react";
import { getPatientDetails } from "../services/patientService";
import { setPatientDetails } from '../Redux/features/patient/patientSlice';
import { useDispatch } from 'react-redux';


function BookAppointment() {

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
                        Appointment data here
                    </div>
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"}>
                        <Footer></Footer>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BookAppointment;