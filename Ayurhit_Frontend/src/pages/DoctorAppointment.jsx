import DoctorSidebar from "../components/DoctorSidebar";
import "../styles/patientDashboard.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getAppointmentDetails, update, cancelAppointment } from "../services/AppointmentService";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { generateNewBill } from "../services/billService"





function NewDoctorAppointment() {
    const navigate = useNavigate()
    const [appointment, setAppointments] = useState([]);
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    useEffect(() => {
        const fetchAppointmentDetails = async () => {
            try {
                const jwt = sessionStorage.getItem("jwt");
                const response = await getAppointmentDetails(jwt);
                console.log(response)
                if (response && response.status === 200) {
                    console.log(response)
                    setAppointments(response.data);
                } else {
                    toast.error('No appointments found');
                }
            } catch (ex) {
                console.log(ex)
                toast.error('An error occurred while fetching appointments');
            }

        };
        fetchAppointmentDetails();
    }, []);

    const fetchAppointmentDetails = async () => {

        try {
            const jwt = sessionStorage.getItem("jwt");
            const response = getAppointmentDetails(jwt);
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
        const jwt = sessionStorage.getItem("jwt");

        const response = await update(appointmentId, jwt);

        if (response && response.status === 200) {
            const updatedResponse = await getAppointmentDetails(jwt);
            if (updatedResponse && updatedResponse.status === 200)
                setAppointments(updatedResponse.data)
            toast.success('Appointment Update successfully');
        } else {
            toast.error('Failed to update appointment');
        }
    };



    const handleCancel = async (appointmentId) => {
        console.log(appointmentId)
        const jwt = sessionStorage.getItem("jwt");
        console.log(jwt)
        const response = await cancelAppointment(appointmentId, jwt);
        if (response && response.status === 200) {
            const updatedResponse = await getAppointmentDetails(jwt);
            if (updatedResponse && updatedResponse.status === 200)
                setAppointments(updatedResponse.data)
            toast.success('Appointment cancel successfully');
        } else {
            toast.error('Failed to cancel appointment');
        }
    }

    const generateBill = async (appointmentId, patientId, doctorId) => {
        try {
            const response = await generateNewBill({ patientId, doctorId })
            if (response && response.status === 200) {
                updateStatus(appointmentId);
                toast.success("Bill generated succesfully")
            }
        } catch (error) {

        }
    }


    const renderDoctorButtons = (status, appointmentId, patientId, doctorId) => {

        switch (status) {
            case 'PENDING':
                return (
                    <>
                        <button className="btn btn-success" style={{ marginRight: '10px' }} onClick={() => updateStatus(appointmentId)}>Confirm</button>
                        <button className="btn btn-danger" style={{ marginRight: '10px' }} onClick={() => handleCancel(appointmentId)}>Cancel</button>
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
                        <button className="btn btn-primary" style={{ marginRight: '10px' }} onClick={() => {
                            updateStatus(appointmentId); navigate('/doctor/prescription', {
                                state: {
                                    patientId: patientId,
                                    doctorId: doctorId,
                                    appointmentId: appointmentId
                                }

                            });
                        }}>
                            Prescript</button>
                        <button className="btn btn-secondary" disabled>-</button>
                    </>
                );
            case 'PRESCRIPTED':
                return (
                    <>
                        <button className="btn btn-warning" style={{ marginRight: '10px' }} onClick={() => generateBill(appointmentId, patientId, doctorId)}>Generate Bill</button>
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
                                                <td>{e.patient.firstName} {e.patient.lastName}</td>
                                                <td>{e.appointmentDate} {e.appointmentTime}</td>
                                                <td>{e.status}</td>
                                                <td>
                                                    <div className="d-flex justify-content-center">
                                                        {renderDoctorButtons(e.status, e.id, e.patient.id, e.doctor.id)}

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
