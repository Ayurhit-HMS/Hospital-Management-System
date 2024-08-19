import PatientSidebar from "../components/PatientSidebar";
import "../styles/patientDashboard.css"
import Footer from "../components/Footer"
import { useEffect, useState } from "react";
import { getPrescriptions } from "../services/PrescriptionService";
import { toast } from "react-toastify";
import logo from "../images/logo.png"
import html2canvas from 'html2canvas';

function Prescription() {

    const [prescription, setPrescription] = useState([])
    const [selectedPrescription, setSelectedPrescription] = useState(null);
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPrescriptions();
                if (response && response.status === 200) {
                    console.log(response.data)
                    const sortedPrescriptions = response.data.sort((a, b) => new Date(b.prescriptionDate) - new Date(a.prescriptionDate));
                    setPrescription(sortedPrescriptions)
                    if (sortedPrescriptions.length > 0) {
                        setSelectedPrescription(sortedPrescriptions[0]);
                    }
                }
            } catch (ex) {
                console.log(ex)
                toast.error('Something went wrong')
            }
        }
        fetchData();
    }, [])

    const handleViewPrescription = (prescription) => {
        setSelectedPrescription(prescription);
        const myModal = new window.bootstrap.Modal(document.getElementById('prescriptionModal'));
        myModal.show();
    };

    const downloadIamge = () => {
        if (selectedPrescription) {
            const element = document.getElementById('prescriptionContent');

            html2canvas(element).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.href = imgData;
                link.download = `prescription_${selectedPrescription.id}.png`;
                link.click();
            });
        }
    };
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
                            {selectedPrescription && (
                                <div className="mt-5 mb-5">
                                    <div className="container mt-3 mb-5" id="prescriptionContent" >
                                        <div className="row d-flex justify-content-center ">
                                            <div className="col-md-8 border border-dark">
                                                <div className="row d-flex justify-content-between" style={{ backgroundColor: "#0A98D8" }}>
                                                    <div className="col-md-4 text-light mt-3">
                                                        <div className="d-flex">
                                                            <img src={logo} className="img-fluid mb-3" alt="Hospital Logo" style={{ height: 100 }} />
                                                            <div>
                                                                <p className=" h1 title mb-1">Ayurhit</p>
                                                                <p className="h4 text-center">H o s p i t a l s</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 text-light mt-3">
                                                        <div className="d-grid text-end">
                                                            <p className="h4 m-0">Dr. {selectedPrescription.doctor.firstName} {selectedPrescription.doctor.lastName}</p>
                                                            <p className="m-0">{selectedPrescription.doctor.qualification}</p>
                                                            <p className="m-0">{selectedPrescription.doctor.specelization}</p>
                                                            <p className="m-0">Mobile : {selectedPrescription.doctor.phone}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4 d-flex justify-content-between">
                                                    <p className="h6">Patient Name : {selectedPrescription.patient.firstName} {selectedPrescription.patient.lastName}</p>
                                                    <p className="h6">Age : {new Date().getFullYear() - new Date(selectedPrescription.patient.birthDate).getFullYear()}</p>
                                                    <p className="h6">Date : {new Date(selectedPrescription.prescriptionDate).toISOString().split('T')[0]}</p>
                                                </div>
                                                <hr />
                                                <div>
                                                    <table className="table mt-5 mb-5">
                                                        <thead>
                                                            <tr>
                                                                <th>Medicine Name </th>
                                                                <th>Medicine Company</th>
                                                                <th>Dosage</th>
                                                                <th>Duration</th>
                                                                <th>frequency</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {selectedPrescription.prescriptionMedicines.map((prescriptionMedicine) => (
                                                                <tr key={prescriptionMedicine.id}>
                                                                    <td>{prescriptionMedicine.medicine.name}</td>
                                                                    <td>{prescriptionMedicine.medicine.name}</td>
                                                                    <td>{prescriptionMedicine.dosage}</td>
                                                                    <td>{prescriptionMedicine.duration}</td>
                                                                    <td>{prescriptionMedicine.frequency}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="row">
                                                    <div style={{ backgroundColor: "#0A98D8" }}>
                                                        <div className="row text-light d-flex justify-content-between">
                                                            <div className="col-md-4 text-center mt-3">
                                                                <p className="h4">Ayurhit Hospitals</p>
                                                                <p className="h6">Pioneering Medical Excellence <br />Delivering Trusted Care</p>
                                                            </div>
                                                            <div className="col-md-5 mt-3">
                                                                <p className="ms-5">Call : 02112 1234 1234 <br />Email : ayurhit.hospital@gmail.com <br />Address : Ayurhit Hospital, Phase-2, Hinjewadi pune</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-success mb-5" onClick={downloadIamge}>Download</button>
                                    </div>

                                </div>

                            )}
                            {prescription ?
                                (<table className="table table-lg text-center">
                                    <thead>
                                        <tr>
                                            <th>Prescription Date</th>
                                            <th>Doctor Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {prescription.map((prescription) => (
                                            <tr key={prescription.id}>
                                                <td>{prescription.prescriptionDate}</td>
                                                <td>{prescription.doctor.firstName + prescription.doctor.lastName}</td>
                                                <td><button className="btn btn-warning" onClick={() => handleViewPrescription(prescription)}>View Prescription</button></td>
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

            <div className="modal fade" id="prescriptionModal" tabIndex="-1" aria-labelledby="prescriptionModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="prescriptionModalLabel">Prescription Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {selectedPrescription && (
                                <div className="mt-5 mb-5">
                                    <div className="container" id="prescriptionContent" >
                                        <div className="row d-flex justify-content-center ">
                                            <div className="col-md-10 border border-dark">
                                                <div className="row d-flex justify-content-between" style={{ backgroundColor: "#0A98D8" }}>
                                                    <div className="col-md-4 text-light mt-3">
                                                        <div className="d-flex">
                                                            <img src={logo} className="img-fluid mb-3" alt="Hospital Logo" style={{ height: 100 }} />
                                                            <div>
                                                                <p className=" h1 title mb-1">Ayurhit</p>
                                                                <p className="h4 text-center">H o s p i t a l s</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 text-light mt-3">
                                                        <div className="d-grid text-end">
                                                            <p className="h4 m-0">Dr. {selectedPrescription.doctor.firstName} {selectedPrescription.doctor.lastName}</p>
                                                            <p className="m-0">{selectedPrescription.doctor.qualification}</p>
                                                            <p className="m-0">{selectedPrescription.doctor.specelization}</p>
                                                            <p className="m-0">Mobile : {selectedPrescription.doctor.phone}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4 d-flex justify-content-between">
                                                    <p className="h6">Patient Name : {selectedPrescription.patient.firstName} {selectedPrescription.patient.lastName}</p>
                                                    <p className="h6">Age : {new Date().getFullYear() - new Date(selectedPrescription.patient.birthDate).getFullYear()}</p>
                                                    <p className="h6">Date : {new Date(selectedPrescription.prescriptionDate).toISOString().split('T')[0]}</p>
                                                </div>
                                                <hr />
                                                <div>
                                                    <table className="table mt-5 mb-5">
                                                        <thead>
                                                            <tr>
                                                                <th>Medicine Name </th>
                                                                <th>Medicine Company</th>
                                                                <th>Dosage</th>
                                                                <th>Duration</th>
                                                                <th>frequency</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {selectedPrescription.prescriptionMedicines.map((prescriptionMedicine) => (
                                                                <tr key={prescriptionMedicine.id}>
                                                                    <td>{prescriptionMedicine.medicine.name}</td>
                                                                    <td>{prescriptionMedicine.medicine.name}</td>
                                                                    <td>{prescriptionMedicine.dosage}</td>
                                                                    <td>{prescriptionMedicine.duration}</td>
                                                                    <td>{prescriptionMedicine.frequency}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="row">
                                                    <div style={{ backgroundColor: "#0A98D8" }}>
                                                        <div className="row text-light d-flex justify-content-between">
                                                            <div className="col-md-4 text-center mt-3">
                                                                <p className="h4">Ayurhit Hospitals</p>
                                                                <p className="h6">Pioneering Medical Excellence <br />Delivering Trusted Care</p>
                                                            </div>
                                                            <div className="col-md-5 mt-3">
                                                                <p className="ms-5">Call : 02112 1234 1234 <br />Email : ayurhit.hospital@gmail.com <br />Address : Ayurhit Hospital, Phase-2, Hinjewadi pune</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-success mt-3" onClick={downloadIamge}>Download</button>
                                    </div>

                                </div>

                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Prescription;