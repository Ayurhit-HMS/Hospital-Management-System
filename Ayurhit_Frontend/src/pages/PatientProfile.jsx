import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import PatientSidebar from "../components/PatientSidebar";
import profilePhoto from "../images/login_background.jpg";
import { setPatientDetails } from "../Redux/features/patient/patientSlice";
import { getAllAllergies } from "../services/allergyService";
import { getAllChronicConditions } from "../services/chronicConditionService";
import { addAllergyDetails, addChronicConditionDetails, addPastSurgeryDetails, updatePatientAddressDetails, updatePatientDetails, updatePatientInsuranceDetails } from "../services/patientService";
import { getMedicines } from "../services/prescriptionService";
import { addCurrentMedicationDetails } from "../services/patientService";

function PatientProfile() {
    const patient = useSelector((state) => state.patient.patient);
    const dispatch = useDispatch()


    const [chronicConditions, setChronicConditions] = useState([])
    const [allergies, setAllergies] = useState([])
    const [medicines, setMedicines] = useState([])

    const [basicDetails, setbasicDetails] = useState({
        firstName: patient.firstName,
        lastName: patient.lastName,
        email: patient.email,
        gender: patient.gender,
        birthDate: patient.birthDate,
        phone: patient.phone,
        bloodGroup: patient.bloodGroup,
        abhaId: patient.abhaId
    });

    const [addressDetails, setAddressDetails] = useState({
        addressLine1: patient.address?.addressLine1 || '',
        addressLine2: patient.address?.addressLine2 || '',
        city: patient.address?.city || '',
        state: patient.address?.state || '',
        country: patient.address?.country || '',
        pinCode: patient.address?.pinCode || '',
        emergencyContactName: patient.emergencyContactName || '',
        emergencyContactNumber: patient.emergencyContactNumber || ''
    });

    const [insuranceDetails, setInsuranceDetails] = useState({
        insuranceNumber: patient.insuranceNumber || '',
        providerName: patient.insuranceProvider?.name || '',
        providerCode: patient.insuranceProvider?.code || '',
        contactPerson: patient.insuranceProvider?.contactPerson || '',
        contactNumber: patient.insuranceProvider?.contactNumber || '',
        email: patient.insuranceProvider?.email || '',
        coverageDetails: patient.insuranceProvider?.coverageDetails || '',
    });

    const [medicationDetails, setMedicationDetails] = useState({
        dosage: '',
        duration: '',
        medicineId: '',
    });

    const [pastSurgery, setPastSurgery] = useState({
        surgeryName: '',
        surgeryDate: '',
        surgeryDescription: '',
    });

    const [chronicCondition, setChronicCondition] = useState({
        id: '',
    });

    const [allergy, setAllergy] = useState({
        id: '',
    });

    const newBasicDetails = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setbasicDetails({
            ...basicDetails,
            [name]: value,
        });
    };

    const newAddressDetails = (e) => {
        const { name, value } = e.target;
        setAddressDetails({
            ...addressDetails,
            [name]: value,
        });
    };

    const newInsuranceDetails = (e) => {
        const { name, value } = e.target;
        setInsuranceDetails({
            ...insuranceDetails,
            [name]: value,
        });
    };

    const currentMedicationChange = (e) => {
        const { name, value } = e.target;
        setMedicationDetails({
            ...medicationDetails,
            [name]: value,
        });
    };

    const pastSurgeryChange = (e) => {
        console.log(pastSurgery)
        const { name, value } = e.target;
        setPastSurgery({
            ...pastSurgery,
            [name]: value,
        });
    };

    const chronicConditionChange = (e) => {
        setChronicCondition({
            id: e.target.value
        });
    };

    const allergyChange = (e) => {
        setAllergy({
            id: e.target.value
        });
        console.log(allergy)
    };


    const getChronicConditions = async () => {
        try {
            const response = await getAllChronicConditions()
            if (response && response.status === 200) {
                setChronicConditions(response.data)
                console.log(chronicConditions)
            }
        } catch (ex) {
            console.log(ex)
            toast.error("something went wrong")
        }
    };


    const getAllergies = async () => {
        try {
            const response = await getAllAllergies()
            if (response && response.status === 200) {
                setAllergies(response.data)
                console.log(allergy)
            }
        } catch (ex) {
            console.log(ex)
            toast.error("something went wrong")
        }
    };

    const getAllMedicines = async () => {
        try {
            const token = sessionStorage.getItem("jwt")
            const response = await getMedicines(token)
            if (response && response.status === 200) {
                setMedicines(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const updateBasicDetails = async () => {
        try {
            const updatedPatient = await updatePatientDetails(basicDetails);
            console.log(updatedPatient)
            if (updatedPatient && updatedPatient.status === 200) {
                dispatch(setPatientDetails(updatedPatient.data))
                toast.success("Basic details updated successfully")
            }
        } catch (error) {
            console.error("Error updating patient", error);
        }
    };

    const updateAddressDetails = async () => {
        try {
            const addressDetailsDTO = {
                address: {
                    addressLine1: addressDetails.addressLine1,
                    addressLine2: addressDetails.addressLine2,
                    city: addressDetails.city,
                    state: addressDetails.state,
                    country: addressDetails.country,
                    pinCode: addressDetails.pinCode
                },
                emergencyContactName: addressDetails.emergencyContactName,
                emergencyContactNumber: addressDetails.emergencyContactNumber
            };
            console.log(addressDetailsDTO)
            const updatedPatient = await updatePatientAddressDetails(addressDetailsDTO);

            if (updatedPatient && updatedPatient.status === 200) {
                dispatch(setPatientDetails(updatedPatient.data))
                toast.success("Address details updated successfully")
            }
        } catch (error) {
            console.error("Error updating patient", error);
        }
    };

    const updateInsuranceDetails = async () => {
        try {
            const InsuranceDetailsDTO = {
                insuranceProvider: {
                    name: insuranceDetails.providerName,
                    code: insuranceDetails.providerCode,
                    contactPerson: insuranceDetails.contactPerson,
                    contactNumber: insuranceDetails.contactNumber,
                    email: insuranceDetails.email,
                    coverageDetails: insuranceDetails.coverageDetails,
                },
                insuranceNumber: insuranceDetails.insuranceNumber
            };
            console.log(InsuranceDetailsDTO)
            const updatedPatient = await updatePatientInsuranceDetails(InsuranceDetailsDTO);

            if (updatedPatient && updatedPatient.status === 200) {
                dispatch(setPatientDetails(updatedPatient.data))
                toast.success("Insurance details updated successfully")
            }
        } catch (error) {
            console.error("Error updating patient", error);
        }
    };

    const addCurrentMedication = async () => {
        try {
            const updatedPatient = await addCurrentMedicationDetails(medicationDetails);
            console.log(updatedPatient)
            if (updatedPatient && updatedPatient.status === 200) {
                console.log('Updated patient data:', updatedPatient.data);
                dispatch(setPatientDetails(updatedPatient.data));
                toast.success('Current Medication added successfully');
            }
        } catch (error) {
            console.log(error)
        }
    };


    const addPastSurgery = async () => {
        try {
            const updatedPatient = await addPastSurgeryDetails(pastSurgery)
            if (updatedPatient && updatedPatient.status === 200) {
                dispatch(setPatientDetails(updatedPatient.data))
                toast.success("Past surgery added successfully")
            }
        } catch (ex) {
            console.log(ex)
        }
    }
    const addChronicCondition = async () => {
        try {
            console.log(chronicCondition)
            const updatedPatient = await addChronicConditionDetails(chronicCondition)
            if (updatedPatient && updatedPatient.status === 200) {
                dispatch(setPatientDetails(updatedPatient.data))
                toast.success("Past surgery added successfully")
            }
        } catch (ex) {
            console.log(ex)
        }
    }

    const addAllergy = async () => {
        try {
            console.log(allergy);
            const updatedPatient = await addAllergyDetails(allergy)
            if (updatedPatient && updatedPatient.status === 200) {
                dispatch(setPatientDetails(updatedPatient.data))
                toast.success("Allergy added successfully")
            }
        } catch (ex) {
            console.log(ex)
        }
    }

    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="container-fluid patient-dashboard-content">
            <div className="row">
                <div className={isSidebarVisible ? "col-md-2" : "col-md-0"}>
                    <div className="custom-sidebar"><PatientSidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} patientDetails={patient}></PatientSidebar></div>
                </div>
                <div className="col">
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"} >
                        <div className="container">
                            <h1 className="text-center mb-5">Patient Profile</h1>
                            {patient ? (
                                <div>
                                    <h3 className="mb-4">Basic Details</h3>
                                    <div className="row d-flex shadow rounded p-3">
                                        <div className="col-md-5">
                                            <img className="img-fluid w-50 rounded-circle mx-auto d-block" src={profilePhoto} alt="Profile Photo" />
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-sm btn-warning float-end ps-4 pe-4" data-bs-toggle="modal" data-bs-target="#basic-details">Edit</button>
                                            <div className="row mt-5">
                                                <div className="col">
                                                    <p>Name: {patient.firstName} {patient.lastName} </p>
                                                    <p>Email: {patient.email}</p>
                                                    <p>Gender: {patient.gender}</p>
                                                    <p>ABHA Id: {patient.abhaId}</p>
                                                </div>
                                                <div className="col">
                                                    <p>Phone: {patient.phone}</p>
                                                    <p>Age: {new Date().getFullYear() - new Date(patient.birthDate).getFullYear()}</p>
                                                    <p>Blood Group: {patient.bloodGroup}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className=" mb-4 mt-4">Address Details</h3>
                                    <div className="row d-flex shadow rounded p-3">
                                        <div className="col">
                                            <button className="btn btn-sm btn-warning float-end ps-4 pe-4" data-bs-toggle="modal" data-bs-target="#address-details">Edit</button>
                                            <div className="row mt-3">
                                                <div className="col-md-5">
                                                    <div className="col">
                                                        <p>Address Line 1: {patient.address && patient.address.addressLine1 ? patient.address.addressLine1 : 'N/A'}</p>
                                                        <p>Address Line 2: {patient.address && patient.address.addressLine2 ? patient.address.addressLine2 : 'N/A'}</p>
                                                        <p>pinCode: {patient.address && patient.address.pinCode ? patient.address.pinCode : 'N/A'}</p>
                                                        <p>Emergency Contact: {patient.emergencyContactName ? patient.emergencyContactName : 'N/A'}</p>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <p>City: {patient.address && patient.address.city ? patient.address.addressLine1 : 'N/A'}</p>
                                                    <p>State: {patient.address && patient.address.state ? patient.address.state : 'N/A'}</p>
                                                    <p>Country: {patient.address && patient.address.country ? patient.address.country : 'N/A'}</p>
                                                    <p>Emergency Contact Number: {patient.emergencyContactNumber ? patient.emergencyContactNumber : 'N/A'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className=" mb-4 mt-4">Insurance Details</h3>
                                    <div className="row d-flex shadow rounded p-3">
                                        <div className="col">
                                            <button className="btn btn-sm btn-warning float-end ps-4 pe-4" data-bs-toggle="modal" data-bs-target="#insurance-details">Edit</button>
                                            <div className="row mt-3">
                                                <div className="col-md-5">
                                                    <div className="col">
                                                        <p>Insurance number: {patient.insuranceNumber}</p>
                                                        <p>Insurance Provider Name: {patient.insuranceProvider && patient.insuranceProvider.name ? patient.insuranceProvider.name : 'N/A'}</p>
                                                        <p>Insurance Provider Code: {patient.insuranceProvider && patient.insuranceProvider.code ? patient.insuranceProvider.code : 'N/A'}</p>
                                                        <p>Contact Person: {patient.insuranceProvider && patient.insuranceProvider.contactPerson ? patient.insuranceProvider.contactPerson : 'N/A'}</p>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <p>Contact Number: {patient.insuranceProvider && patient.insuranceProvider.contactNumber ? patient.insuranceProvider.contactNumber : 'N/A'}</p>
                                                    <p>Email: {patient.insuranceProvider && patient.insuranceProvider.email ? patient.insuranceProvider.email : 'N/A'}</p>
                                                    <p>Coverage Details: {patient.insuranceProvider && patient.insuranceProvider.coverageDetails ? patient.insuranceProvider.coverageDetails : 'N/A'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className=" mb-4 mt-4">Current Medication</h3>
                                    <div className="row d-flex shadow rounded p-3">
                                        <div className="col">
                                            <button className="btn btn-sm btn-success float-end" data-bs-toggle="modal" data-bs-target="#current-medication" onClick={getAllMedicines}>Add</button>
                                            <div className="row mt-3">
                                                {patient.currentMedications && patient.currentMedications.length > 0 ? (
                                                    <table className="table mt-4 p-3">
                                                        <thead>
                                                            <tr>
                                                                <th>Medicine Name</th>
                                                                <th>Dosage</th>
                                                                <th>Duration</th>
                                                                <th>Medicine Company</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {patient.currentMedications.map((medication, index) => (
                                                                <tr key={index}>
                                                                    <td>{medication.medicine.name}</td>
                                                                    <td>{medication.dosage}</td>
                                                                    <td>{medication.duration}</td>
                                                                    <td>{medication.medicine.company}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                ) : (
                                                    <div>
                                                        <p>No current medications</p>
                                                    </div>)}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className=" mb-4 mt-4">Past Surgeries</h3>
                                    <div className="row d-flex shadow rounded p-3">
                                        <div className="col">
                                            <button className="btn btn-sm btn-success float-end" data-bs-toggle="modal" data-bs-target="#past-surgery">Add</button>
                                            <div className="row mt-3">
                                                {patient.pastSurgeries && patient.pastSurgeries.length > 0 ? (
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>Surgery Name</th>
                                                                <th>Surgery Date</th>
                                                                <th>Surgery Description</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {patient.pastSurgeries.map((surgery, index) => (
                                                                <tr key={index}>
                                                                    <td>{surgery.surgeryName}</td>
                                                                    <td>{surgery.surgeryDate ? new Date(surgery.surgeryDate).toLocaleDateString() : 'N/A'}</td>
                                                                    <td>{surgery.surgeryDescription}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                ) : (
                                                    <div>
                                                        <p>No current medications</p>
                                                    </div>)}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className=" mb-4 mt-4">Chronic Conditions</h3>
                                    <div className="row d-flex shadow rounded p-3">
                                        <div className="col">
                                            <button className="btn btn-sm btn-success float-end" data-bs-toggle="modal" data-bs-target="#chronic-condition" onClick={getChronicConditions}>Add</button>
                                            <div className="row mt-3">
                                                {patient.chronicConditions && patient.chronicConditions.length > 0 ? (
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Description</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {patient.chronicConditions.map((condition, index) => (
                                                                <tr key={index}>
                                                                    <td>{condition.name}</td>
                                                                    <td>{condition.description}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                ) : (
                                                    <div>
                                                        <p>No current medications</p>
                                                    </div>)}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className=" mb-4 mt-4">Allergies</h3>
                                    <div className="row d-flex shadow rounded p-3">
                                        <div className="col">
                                            <button className="btn btn-sm btn-success float-end" data-bs-toggle="modal" data-bs-target="#allergy" onClick={getAllergies}>Add</button>
                                            <div className="row mt-3">
                                                {patient.allergies && patient.allergies.length > 0 ? (
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Description</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {patient.allergies.map((allergy, index) => (
                                                                <tr key={index}>
                                                                    <td>{allergy.name}</td>
                                                                    <td>{allergy.description}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                ) : (
                                                    <div>
                                                        <p>No current medications</p>
                                                    </div>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p>No patient data available</p>
                            )}
                        </div>
                    </div>
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"}>
                        <Footer></Footer>
                    </div>

                </div>
            </div>

            {/* Modal for basic details */}
            <div class="modal fade modal-lg" id="basic-details" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update Basic Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <form>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label htmlFor="firstName" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="firstName" name="firstName" value={basicDetails.firstName} onChange={newBasicDetails} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="lastName" name="lastName" value={basicDetails.lastName} onChange={newBasicDetails} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="email" name="email" value={basicDetails.email} onChange={newBasicDetails} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="gender" className="form-label">Gender</label>
                                                <select className="form-select" id="gender" name="gender" value={basicDetails.gender} onChange={newBasicDetails}>
                                                    <option value="MALE">Male</option>
                                                    <option value="FEMALE">Female</option>
                                                    <option value="OTHER">Other</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="abhaId" className="form-label">ABHA Id</label>
                                                <input type="text" className="form-control" id="abhaId" name="abhaId" value={basicDetails.abhaId} onChange={newBasicDetails} />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <label htmlFor="phone" className="form-label">Phone</label>
                                                <input type="text" className="form-control" id="phone" name="phone" value={basicDetails.phone} onChange={newBasicDetails} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="birthDate" className="form-label">Birth Date</label>
                                                <input type="date" className="form-control" id="birthDate" name="birthDate" value={new Date(basicDetails.birthDate).toISOString().split('T')[0]} onChange={newBasicDetails} />
                                            </div>
                                            <div className="mb-3">
                                                <div className="mb-3">
                                                    <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
                                                    <select className="form-select" id="bloodGroup" name="bloodGroup" value={basicDetails.bloodGroup} onChange={newBasicDetails}>
                                                        <option value="" disabled>Select blood group</option>
                                                        <option value="A_POSITIVE">A+</option>
                                                        <option value="A_NEGATIVE">A-</option>
                                                        <option value="B_POSITIVE">B+</option>
                                                        <option value="B_NEGATIVE">B-</option>
                                                        <option value="AB_POSITIVE">AB+</option>
                                                        <option value="AB_NEGATIVE">AB-</option>
                                                        <option value="O_POSITIVE">O+</option>
                                                        <option value="O_NEGATIVE">O-</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="btn btn-success" onClick={updateBasicDetails}>Update</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Address Details */}
            <div className="modal fade modal-lg" id="address-details" tabIndex="-1" aria-labelledby="addressDetailsLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addressDetailsLabel">Update Address Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="mb-3 col">
                                        <label htmlFor="addressLine1" className="form-label">Address Line 1</label>
                                        <input type="text" className="form-control" id="addressLine1" name="addressLine1" value={addressDetails.addressLine1} onChange={newAddressDetails} />
                                    </div>
                                    <div className="mb-3 col">
                                        <label htmlFor="addressLine2" className="form-label">Address Line 2</label>
                                        <input type="text" className="form-control" id="addressLine2" name="addressLine2" value={addressDetails.addressLine2} onChange={newAddressDetails} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="mb-3 col">
                                        <label htmlFor="city" className="form-label">City</label>
                                        <input type="text" className="form-control" id="city" name="city" value={addressDetails.city} onChange={newAddressDetails} />
                                    </div>
                                    <div className="mb-3 col">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <input type="text" className="form-control" id="state" name="state" value={addressDetails.state} onChange={newAddressDetails} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="mb-3 col">
                                        <label htmlFor="state" className="form-label">Country</label>
                                        <input type="text" className="form-control" id="country" name="country" value={addressDetails.country} onChange={newAddressDetails} />
                                    </div>
                                    <div className="mb-3 col">
                                        <label htmlFor="pinCode" className="form-label">pinCode</label>
                                        <input type="text" className="form-control" id="pinCode" name="pinCode" value={addressDetails.pinCode} onChange={newAddressDetails} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="mb-3 col">
                                        <label htmlFor="emergencyContactName" className="form-label">Emergency Contact Name</label>
                                        <input type="text" className="form-control" id="emergencyContactName" name="emergencyContactName" value={addressDetails.emergencyContactName} onChange={newAddressDetails} />
                                    </div>
                                    <div className="mb-3 col">
                                        <label htmlFor="emergencyContactNumber" className="form-label">Emergency Contact Number</label>
                                        <input type="text" className="form-control" id="emergencyContactNumber" name="emergencyContactNumber" value={addressDetails.emergencyContactNumber} onChange={newAddressDetails} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="btn btn-success" onClick={updateAddressDetails}>Update</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div >

            {/* Modal for Insurance Details */}
            <div className="modal fade modal-lg" id="insurance-details" tabIndex="-1" aria-labelledby="insuranceDetailsLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="insuranceDetailsLabel">Update Insurance Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="mb-3 col">
                                        <label htmlFor="insuranceNumber" className="form-label">Insurance Number</label>
                                        <input type="text" className="form-control" id="insuranceNumber" name="insuranceNumber" value={insuranceDetails.insuranceNumber} onChange={newInsuranceDetails} />
                                    </div>
                                    <div className="mb-3 col">
                                        <label htmlFor="providerName" className="form-label">Insurance Provider Name</label>
                                        <input type="text" className="form-control" id="providerName" name="providerName" value={insuranceDetails.providerName} onChange={newInsuranceDetails} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="mb-3 col">
                                        <label htmlFor="providerCode" className="form-label">Insurance Provider Code</label>
                                        <input type="text" className="form-control" id="providerCode" name="providerCode" value={insuranceDetails.providerCode} onChange={newInsuranceDetails} />
                                    </div>
                                    <div className="mb-3 col">
                                        <label htmlFor="contactPerson" className="form-label">Contact Person</label>
                                        <input type="text" className="form-control" id="contactPerson" name="contactPerson" value={insuranceDetails.contactPerson} onChange={newInsuranceDetails} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="mb-3 col">
                                        <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                                        <input type="text" className="form-control" id="contactNumber" name="contactNumber" value={insuranceDetails.contactNumber} onChange={newInsuranceDetails} />
                                    </div>
                                    <div className="mb-3 col">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" value={insuranceDetails.email} onChange={newInsuranceDetails} />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="coverageDetails" className="form-label">Coverage Details</label>
                                    <textarea className="form-control" id="coverageDetails" name="coverageDetails" value={insuranceDetails.coverageDetails} onChange={newInsuranceDetails}></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success" onClick={updateInsuranceDetails}>Update</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal for add currentMedication */}
            <div className="modal fade modal" id="current-medication" tabIndex="-1" aria-labelledby="insuranceDetailsLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="insuranceDetailsLabel">Add current medication</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="mb-3 col">
                                        <div className="mb-3">
                                            <label htmlFor="gender" className="form-label">Medicines</label>
                                            <select className="form-select" id="medicines" name="medicineId" value={medicationDetails.medicineId} onChange={currentMedicationChange}>
                                                <option value="">Select a medicine</option>
                                                {medicines.map((medicine) => (
                                                    <option key={medicine.id} value={medicine.id}>{medicine.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="mb-3 col">
                                        <label htmlFor="providerCode" className="form-label">Dosage</label>
                                        <input type="text" className="form-control" id="dosage" name="dosage" value={medicationDetails.dosage} onChange={currentMedicationChange} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="mb-3 col">
                                        <label htmlFor="contactNumber" className="form-label">Duration</label>
                                        <input type="text" className="form-control" id="duration" name="duration" value={medicationDetails.duration} onChange={currentMedicationChange} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success" onClick={addCurrentMedication}>Add</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* modal for add pastSurgery */}
            <div className="modal fade modal" id="past-surgery" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="insuranceDetailsLabel">Add past surgery</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="mb-3 col">
                                        <label htmlFor="providerCode" className="form-label">Surgery Date</label>
                                        <input type="date" className="form-control" id="surgeryDate" name="surgeryDate" value={pastSurgery.surgeryDate} onChange={pastSurgeryChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col">
                                        <label htmlFor="providerCode" className="form-label">Surgery Name</label>
                                        <input type="text" className="form-control" id="surgeryName" name="surgeryName" value={pastSurgery.surgeryName} onChange={pastSurgeryChange} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="mb-3 col">
                                        <label htmlFor="contactNumber" className="form-label">Surgery Description</label>
                                        <textarea className="form-control" id="surgeryDescription" name="surgeryDescription" rows="3" value={pastSurgery.surgeryDescription} onChange={pastSurgeryChange} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success" onClick={addPastSurgery}>Add</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal for chronic condition */}
            <div className="modal fade modal" id="chronic-condition" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="insuranceDetailsLabel">Add chronic condition</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="mb-3 col">
                                        <div className="mb-3">
                                            <label htmlFor="chronic condition" className="form-label">Chronic Condition</label>
                                            <select className="form-select" id="chronicConditions" name="id" value={chronicCondition.id} onChange={chronicConditionChange}>
                                                {chronicConditions.map((condition) => (
                                                    <option key={condition.id} value={condition.id}>
                                                        {condition.name}
                                                    </option>
                                                ))}
                                            </select>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success" onClick={addChronicCondition}>Add</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* modal for allergy */}
            <div className="modal fade modal" id="allergy" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="insuranceDetailsLabel">Add Allergy</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="mb-3 col">
                                        <div className="mb-3">
                                            <label htmlFor="allergy" className="form-label">Allergy</label>
                                            <select className="form-select" id="allergies" name="id" value={allergy.id} onChange={allergyChange}>
                                                <option value="">Select an allergy</option>
                                                {allergies.map((allergy) => (
                                                    <option key={allergy.id} value={allergy.id}>{allergy.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success" onClick={addAllergy}>Add</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default PatientProfile;