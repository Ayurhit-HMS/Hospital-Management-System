import PatientSidebar from "../components/PatientSidebar";
import "../styles/patientDashboard.css"
import Footer from "../components/Footer"
import { useEffect, useState } from "react";
import { getAppointments } from "../services/AppointmentService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { cancelAppointment } from "../services/AppointmentService";

function PatientAppointments() {
    const patient = useSelector(state => state.patient.patient)
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await getAppointments(patient.id);
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
        fetchAppointments();
    }, []);

    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const cancel = async (appointmentId) => {
        const response = await cancelAppointment(appointmentId);
        if (response && response.status === 200) {
            const updatedResponse = await getAppointments(patient.id);
            if (updatedResponse && updatedResponse.status === 200)
                setAppointments(updatedResponse.data)
            toast.success('Appointment cancelled successfully');
        } else {
            toast.error('Failed to cancel appointment');
        }
    };

    const renderButton = (status, appointmentId) => {
        console.log(appointmentId);
        switch (status) {
            case 'PENDING':
            case 'CONFIRMED':
                return <button className="btn btn-danger" onClick={() => cancel(appointmentId)}>Cancel</button>;
            case 'CANCELLED':
                return '-';
            case 'ATTENDED':
                return <button className="btn btn-primary">Details</button>;
            default:
                return null;
        }
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
                        <p className="h1 text-center mt-3 mb-3">Patient Appointments</p>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-10">
                                <table className="table table-lg text-center">
                                    <thead>
                                        <tr>
                                            <th>Appointment ID</th>
                                            <th>Doctor Name</th>
                                            <th>Appointment Date</th>
                                            <th>Appointment Time</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {appointments.map((appointment) => (

                                            <tr key={appointment.id}>
                                                <td>{appointment.id}</td>
                                                <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                                                <td>{appointment.appointmentDate}</td>
                                                <td>{appointment.appointmentTime}</td>
                                                <td>{appointment.status}</td>
                                                <td>{renderButton(appointment.status, appointment.id)}</td>
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
    )
}

export default PatientAppointments;