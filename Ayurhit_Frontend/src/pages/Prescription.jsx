import PatientSidebar from "../components/PatientSidebar";
import "../styles/patientDashboard.css"
import Footer from "../components/Footer"
import { useEffect, useState } from "react";
import { getPrescriptions } from "../services/prescriptionService";
import { toast } from "react-toastify";


function Prescription() {

    const [prescription, setPrescription] = useState([])

    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPrescriptions();
                if (response && response.status === 200)
                    setPrescription(response.data)
            } catch (ex) {
                toast.error('Something went wrong')
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
                        <div className="container">
                            <h1 className="text-center mb-3">Prescriptions</h1>
                            {prescription ?
                                (<table className="table table-lg text-center">
                                    <thead>
                                        <tr>
                                            <th>Prescription No</th>
                                            <th>Prescription Date</th>
                                            <th>Doctor Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {prescription.map((prescription) => (
                                            <tr key={prescription.id}>
                                                <td>{prescription.id}</td>
                                                <td>{prescription.prescriptionDate}</td>
                                                <td>{prescription.doctor.firstName + prescription.doctor.lastName}</td>
                                                <td><button className="btn btn-warning">View Prescription</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>) : (<div>You don't have any prescriptiond</div>)
                            }
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

export default Prescription;