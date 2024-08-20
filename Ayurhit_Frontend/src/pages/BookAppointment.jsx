import PatientSidebar from "../components/PatientSidebar";
import "../styles/patientDashboard.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getAllDepartments } from '../services/departmentService';
import { getDoctors } from "../services/doctorService";
import { getScheduls } from "../services/scheduleService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {scheduleNewAppointment} from "../services/AppointmentService"
import { updateSchedules } from "../services/scheduleService";
import { useSelector } from "react-redux";

function BookAppointment() {

    const patient = useSelector(state => state.patient.patient);

    const [departments, setDepartments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [schedules, setSchedules] = useState([]);
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [selectedSchedule, setSelectedSchedule] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        const fetchAllDepartments = async () => {
            try {
                const response = await getAllDepartments();
                console.log(response.data);
                setDepartments(response.data);
            } catch (error) {
                console.error('Failed to fetch departments:', error);
            }
        };
        fetchAllDepartments();
    }, []);




    const selectDepartment = async (department) => {
        setSelectedDoctor(null);
        setSelectedSchedule(null);

        setSelectedDepartment(department);
        try {
            const response = await getDoctors(department);
            if (response && response.data) {
                console.log(response.data);
                setDoctors(response.data);
            }
        } catch (error) {
            console.error('Failed to fetch doctors:', error);
        }
    };

    const selectDoctor = async (doctor) => {
        setSelectedSchedule(null);
        setSelectedDoctor(doctor);
        console.log(doctor)
        try {
            const response = await getScheduls(doctor.id);
            console.log(response.data)
            if (response && response.data) {
                setSchedules(response.data)
                if (response.data.length === 0)
                    toast.error("No schedules available");
            }
        } catch (error) {
            console.error('Failed to fetch schedules:', error);
        }
    };

    const selectSchedule = (schedule) => {
        setSelectedSchedule(schedule);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const scheduleAppointment = async () => {
        if (!selectedDepartment || !selectedSchedule || !selectedDoctor) {
            toast.error("Please select a schedule and doctor before booking.");
            return;
        }
        try {
            let obj = { appointmentDate: selectedSchedule.scheduleDate, appointmentTime: selectedSchedule.scheduleTime, doctorId: selectedDoctor.id, patientId: 16 }
            const response = await scheduleNewAppointment(obj);
            console.log(obj);
            console.log("Response data:", response);
            toast.success("Appointment booked successfully.");
            if (response && response.status == 200) {
                const response = await updateSchedules(selectedSchedule.id);
            }

        } catch (error) {
            console.error('Failed to post appointment:', error);
            toast.error('Failed to book appointment.');
        }

    }

    return (
        <div className="container-fluid patient-dashboard-content">
            <div className="row">
                <div className={isSidebarVisible ? "col-md-2" : "col-md-0"}>
                    <div className="custom-sidebar">
                        <PatientSidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} patientDetails={patient} />
                    </div>
                </div>
                <div className="col">
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"}>
                        <div className="row text-center">
                            <span className="h2 mt-2">Book Appointment</span>

                            <div className="dropdown-center mt-4">
                                <button className="btn btn-secondary dropdown-toggle w-25" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {selectedDepartment || "Select Department"}
                                </button>
                                <ul className="dropdown-menu dropdown-width">
                                    {departments.map((department) => (
                                        <li key={department.id} onClick={() => { selectDepartment(department.departmentName) }}>
                                            <a className="dropdown-item" href="#">
                                                {department.departmentName}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="dropdown-center mt-4">
                                <button
                                    className="btn btn-secondary dropdown-toggle dropdown-width w-25"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {selectedDoctor ? `Dr. ${selectedDoctor.firstName} ${selectedDoctor.lastName} (${selectedDoctor.specelization})` : "Select Doctor"}
                                </button>
                                <ul className="dropdown-menu dropdown-width">
                                    {doctors.map((doctor) => (
                                        <li key={doctor.id}>
                                            <a className="dropdown-item" href="#" onClick={() => { selectDoctor(doctor) }}>
                                                {"Dr. " + doctor.firstName + " " + doctor.lastName + " (" + doctor.specelization + ")"}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="dropdown-center mt-4">
                                <button
                                    className="btn btn-secondary dropdown-toggle dropdown-width w-25"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {selectedSchedule ? `${selectedSchedule.scheduleDate} ${selectedSchedule.scheduleTime}` : "Select Schedule"}
                                </button>
                                <ul className="dropdown-menu dropdown-width">
                                    {schedules.map((schedule) => (
                                        <li key={schedule.id}>
                                            <a className="dropdown-item" href="#" onClick={() => { selectSchedule(schedule) }}>
                                                {schedule.scheduleDate + " " + schedule.scheduleTime}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <button className="shadow btn btn-success me-4 mt-5 ps-5 pe-5" onClick={scheduleAppointment}>
                                    Book
                                </button>
                                <button className="shadow btn btn-danger ms-5 mt-5 ps-5 pe-5" onClick={() => { navigate('/patient/dashboard') }}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"}>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookAppointment;
