import DoctorSidebar from "../components/DoctorSidebar";
import "../styles/patientDashboard.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getAppointmentDetails} from "../services/doctorService";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import axios from "axios";


function NewDoctorAppointment() {
    const [appointment, setAppointments] = useState([]);
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    useEffect(() => {
        const fetchAppointmentDetails = async () => {
            try{
                const jwt=sessionStorage.getItem("jwt");
                const response=getAppointmentDetails(jwt);
                if (response && response.status === 200) {
                    console.log(response.data)
                    setAppointments(response.data);
                } else {
                    toast.error('No appointments found');
                }
            } catch (ex) {
                toast.error('An error occurred while fetching appointments');
            }
           
        };
        fetchAppointmentDetails();
    }, []);

    const fetchAppointmentDetails = async () => {

        try{
            const jwt=sessionStorage.getItem("jwt");
            const response=getAppointmentDetails(jwt);
            if (response && response.status === 200) {
                console.log(response.data)
                setAppointments(response.data);
            } else {
                toast.error('No appointments found');
            }
        } catch (ex) {
            toast.error('An error occurred while fetching appointments');
        }
        
    };

    const updateStatus = async (appointmentId) => {
        console.log('calling this')
        try {
            const response = await axios.put(`http://localhost:8080/${appointmentId}`);
            refreshAppointments()
        }
        catch (ex) {

        }
    }

    function handle(appointmentId) {
        toast.success('done')
    }


    const renderDoctorButtons = (status, appointmentId) => {
        switch (status) {
            case 'PENDING':
                return (
                    <>
                        <button className="btn btn-success" style={{ marginRight: '10px' }} onClick={() => updateStatus(appointmentId)}>Confirm</button>
                        <button className="btn btn-danger" style={{ marginRight: '10px' }} onClick={() => handle(appointmentId)}>Cancel</button>
                    </>
                );
            case 'CONFIRMED':
                return (
                    <>
                        <button className="btn btn-primary" style={{ marginRight: '10px' }} onClick={() => updateStatus(appointmentId)}>Attend</button>               </>
                );
            case 'ATTENDED':
                return (
                    <>
                        <button className="btn btn-primary" style={{ marginRight: '10px' }} onClick={() => updateStatus(appointmentId)}>Prescript</button>
                        <button className="btn btn-secondary" disabled>-</button>
                    </>
                );
            case 'PRESCRIPTED':
                return (
                    <>
                        <button className="btn btn-warning" style={{ marginRight: '10px' }} onClick={() => updateStatus(appointmentId)}>Generate Bill</button>
                    </>
                );
            case 'DONE':
                return (
                    <>
                        <button className="btn btn-secondary" disabled>-</button>
                    </>
                );
            default:
                return null;
        }
    };

    const refreshAppointments = async () => {
        console.log('refreshing')
        const jwt = sessionStorage.getItem("jwt");
        const decodedToken = jwtDecode(jwt);
        const email = decodedToken.sub;
        const response = await getAppointmentDetails(jwt, email);
        setAppointments(response);
    };


    // const handleConfirm = async (appointmentId) => {
    //     try {
    //         const jwt = sessionStorage.getItem("jwt");
    //         console.log('fetching')
    //         try {

    //             const response = await axios.put(`http://localhost:8080/${appointmentId}/status?status=CONFIRMED`);
    //         } catch (ex) {
    //             console.log('done')
    //         }
    //         toast.success("Appointment Confirmed")
    //         refreshAppointments();
    //     } catch (error) {
    //         console.error('Failed to update appointment status:', error);
    //     }
    // };

    return (
        <div className="container-fluid patient-dashboard-content">
            <div className="row">
                <div className={isSidebarVisible ? "col-md-2" : "col-md-0"}>
                    <div className="custom-sidebar">
                        <DoctorSidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}></DoctorSidebar>
                    </div>
                </div>
                <div className="col">
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"}>
                        <p className="h1 text-center mt-3 mb-3">Doctor Appointments</p>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-11">
                                <table className="table table-bordered table-responsive table-striped">
                                    <thead>
                                        <tr style={{ textAlign: 'center' }}>
                                            <th>ID</th>
                                            <th>Patient Name</th>
                                            <th>Appointment Date and Time</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {appointment.map((e) => (
                                            <tr style={{ textAlign: 'center' }} key={e.id}>
                                                <td>{e.id}</td>
                                                <td>{e.firstName} {e.lastName}</td>
                                                <td>{e.appointmentDate} {e.appointmentTime}</td>
                                                <td>{e.status}</td>
                                                <td>
                                                    <div className="d-flex justify-content-center">
                                                        {renderDoctorButtons(e.status, e.id)}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"}>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewDoctorAppointment;
