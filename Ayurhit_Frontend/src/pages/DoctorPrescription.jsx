// 

import DoctorSidebar from "../components/DoctorSidebar";
import "../styles/patientDashboard.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getPrescriptions } from "../services/prescriptionService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getMedicines, submitPrescription } from "../services/prescriptionService";
import { useLocation } from "react-router-dom";

function DoctorPrescription() {
    const [medicines, setMedicines] = useState([]);
    const [prescriptionMedicines, setPrescriptionMedicines] = useState([]);
    const [selectedMedicine, setSelectedMedicine] = useState("");
    const [dosage, setDosage] = useState("");
    const [frequency, setFrequency] = useState("");
    const [duration, setDuration] = useState("");

    const { state } = useLocation();
    const { patientId, doctorId, appointmentId } = state || {};

    const navigate = useNavigate();
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const jwt = sessionStorage.getItem("jwt");
                const response = await getMedicines(jwt);
                console.log(response.data);
                if (response && response.status === 200) {
                    setMedicines(response.data);
                }
            } catch (ex) {
                console.log("Failed to fetch medicines:", ex);
            }
        };
        fetchMedicines();
    }, []);

    const handleAddMedicine = () => {
        if (!selectedMedicine || !dosage || !frequency || !duration) {
            toast.error("Please fill in all fields to add a medicine.");
            return;
        }

        const newMedicine = {
            medicineName: selectedMedicine,
            dosage,
            frequency,
            duration,
        };

        setPrescriptionMedicines([...prescriptionMedicines, newMedicine]);
        setSelectedMedicine("");
        setDosage("");
        setFrequency("");
        setDuration("");
        toast.success("Medicine added!");
    };

    const handleSubmitPrescription = async () => {
        if (prescriptionMedicines.length === 0) {
            toast.error("Please add at least one medicine to submit the prescription.");
            return;
        }

        const DoctorPrescriptionDTO = {
            patientId,
            doctorId,
            appointmentId,
            medicinesDTO: prescriptionMedicines,
        };

        try {
            const jwt = sessionStorage.getItem("jwt");
            console.log(DoctorPrescriptionDTO)
            const response = await submitPrescription(DoctorPrescriptionDTO, jwt);
            if (response && response.status === 200) {
                toast.success("Prescription submitted successfully!");
                navigate("/doctor/appointments");
            }
        } catch (error) {
            console.error("Failed to submit prescription:", error);
            toast.error("Failed to submit prescription.");
        }
    };

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="container-fluid patient-dashboard-content">
            <div className="row">
                <div className={isSidebarVisible ? "col-md-2" : "col-md-0"}>
                    <div className="custom-sidebar">
                        <DoctorSidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
                    </div>
                </div>
                <div className="col">
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"}>
                        <div className="row text-center">
                            <span className="h2 mt-2">Prescriptions</span>

                            <div className="dropdown-center mt-4" style={{ marginLeft: "42px" }}>
                                <select
                                    className="form-select w-25"
                                    value={selectedMedicine}
                                    onChange={(e) => setSelectedMedicine(e.target.value)}
                                >
                                    <option value="">Select Medicine</option>
                                    {medicines.map((medicine) => (
                                        <option key={medicine.id} value={medicine.name}>
                                            {medicine.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <input
                                type="text"
                                className="form-control mt-3 w-25 mx-auto"
                                placeholder="Enter Dosage"
                                value={dosage}
                                onChange={(e) => setDosage(e.target.value)}
                            />

                            <input
                                type="text"
                                className="form-control mt-3 w-25 mx-auto"
                                placeholder="Enter Frequency"
                                value={frequency}
                                onChange={(e) => setFrequency(e.target.value)}
                            />

                            <input
                                type="text"
                                className="form-control mt-3 w-25 mx-auto"
                                placeholder="Enter Duration"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                            />

                            <div className="mt-4">
                                <button className="shadow btn btn-success ms-5 ps-5 pe-5" onClick={handleAddMedicine}>
                                    Add Medicine
                                </button>
                            </div>

                            <div className="mt-4">
                                <h5>Added Medicines:</h5>
                                {
                                    prescriptionMedicines &&
                                    <table className="table">
                                        <thead>
                                            <th>Medicine</th>
                                            <th>Dosage</th>
                                            <th>Frequency</th>
                                            <th>Duration</th>
                                        </thead>
                                        <tbody>
                                            {prescriptionMedicines.map((medicine) => (
                                                <tr>
                                                    <td>{medicine.medicineName}</td>
                                                    <td>{medicine.dosage}</td>
                                                    <td>{medicine.frequency}</td>
                                                    <td>{medicine.duration}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                }
                            </div>

                            <div className="mt-4">
                                <button className="shadow btn btn-danger ms-5 ps-5 pe-5" onClick={handleSubmitPrescription}>
                                    Submit Prescription
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

export default DoctorPrescription;
