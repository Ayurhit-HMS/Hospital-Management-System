import PatientSidebar from "../components/PatientSidebar";
import "../styles/patientDashboard.css"
import Footer from "../components/Footer"
import { useEffect, useState } from "react";
import { getPrescriptions } from "../services/prescriptionService";
import { toast } from "react-toastify";


function Prescription() {

    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPrescriptions();
                console.log(response.data)
            } catch (ex) {
                toast.error("Something went wrong")
            }

        }
        fetchData();
    }, [])

    return (
        <div className="container-fluid patient-dashboard-content">
            <div className="row">
                <div className={isSidebarVisible ? "col-md-2" : "col-md-0"}>
                    <div className="custom-sidebar"><PatientSidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}></PatientSidebar>
                    </div>
                </div>
                <div className="col">
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"} >
                        Prescriptions
                    </div>
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"}>
                        <Footer></Footer>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Prescription;