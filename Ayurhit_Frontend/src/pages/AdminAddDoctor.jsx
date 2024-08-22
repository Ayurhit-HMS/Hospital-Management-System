import { useEffect, useState } from "react";
import { addDoctor } from "../services/doctorService";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { getAllBranches, getAllLanguages } from "../services/adminService";
import { getAllDepartments } from "../services/departmentService"

function AdminAddDoctor() {

    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [phone, setPhone] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [addressLine1, setAddressLine1] = useState('')
    const [addressLine2, setAddressLine2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [country, setCountry] = useState('')
    const [salary, setSalary] = useState('')
    const [joinedDate, setJoinDate] = useState('')
    const [qualification, setQualification] = useState('')
    const [employmentType, setEmploymentType] = useState('')
    const [workShift, setWorkShift] = useState('')

    const [branchId, setBranchId] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [licenseNumber, setLicenseNumber] = useState('')
    const [licenseExpiryDate, setLicenseExiryDate] = useState('')
    const [experience, setExperience] = useState('')
    const [consultationFees, setConsultationFees] = useState('')
    const [availabilitySchedule, setAvailabilitySchedules] = useState([1,2,3])
    const [licensingAuthority, setLicensingAuthority] = useState('')
    const [description, setDescription] = useState('')
    const [departmentId, setDepartmentId] = useState('')
    const [Languages, setLanguages] = useState([])
    const [branches, setBranches] = useState([])
    const [departments, setDepartments] = useState([])
    const [selectedLanguages, setSelectedLanguages] = useState([])
    const [selectedLanguage, setSelectedLanguage] = useState(null)

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const response = await getAllLanguages()
                console.log(response.data)
                if (response && response.status === 200) {
                    setLanguages(response.data)
                }
            } catch (ex) {
                console.log(ex)
            }
        }

        const fetchBranches = async () => {
            try {
                const response = await getAllBranches()
                console.log(response.data)
                if (response && response.status === 200) {
                    setBranches(response.data)
                }
            } catch (ex) {
                console.log(ex)
            }
        }

        const fetchDepartments = async () => {
            try {
                const response = await getAllDepartments()
                setDepartments(response.data)
                console.log(response.data)
            } catch (ex) {
                console.log(ex)
            }
        }
        fetchLanguages()
        fetchBranches()
        fetchDepartments()
    }, [])

    const addNewDoctor = async () => {

        let obj = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : password,
            gender : gender,
            phone : phone,
            birthDate : birthDate,
            addressDTO : {addressLine1, addressLine2, city, state, pinCode, country},
            salary : salary,
            joinedDate : joinedDate,
            qualification : qualification,
            employmentType : employmentType,
            languageIds : selectedLanguages,
            branchId : branchId,
            specialization : specialization,
            licenseNumber : licenseNumber,
            licenseExpiryDate : licenseExpiryDate,
            experience : experience,
            consultationFees : consultationFees,
            availabilitySchedule : JSON.stringify(availabilitySchedule),
            licensingAuthority : licensingAuthority,
            description : description,
            departmentId : departmentId,
            workShift : workShift
        } 

        const result = await addDoctor(obj);

        console.log(result)

        if (result && result.status === 201) {
            toast.success('Successfully added a doctor')
            navigate('/admin/emplist')
        } else {
            toast.error(result['error'])
        }
    }

    const addLanguage = () => {
        if (selectedLanguage && !selectedLanguages.includes(selectedLanguage)) {
            setSelectedLanguages([...selectedLanguages, selectedLanguage])
        }
    }

    const availabilitySchedules = () =>{
        setAvailabilitySchedules("1,2,3")
    }

    const OnCancel = async () => {
        navigate('/admin/emplist')
    }


    return (

        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <p className="h1 text-center">Add Doctor</p>
                    <div className="form">
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor=''>FirstName</label>
                                    <input onChange={(e) => {
                                        setFirstName(e.target.value)
                                    }}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 col">
                                <label htmlFor=''>LastName</label>
                                <input onChange={(e) => {
                                    setLastName(e.target.value)
                                }}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor=''>Email</label>
                                    <input onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                        type="email"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 col">
                                <label htmlFor=''>Password</label>
                                <input onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="form-label">Gender</label>
                                <select class="form-select" name="gender" value={gender} onChange={(e) => {
                                    setGender(e.target.value)
                                }}>
                                    <option value="" disabled>Select Gender</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                    <option value="OTHER">Other</option>
                                </select>
                            </div>

                            <div className="mb-3 col">
                                <label htmlFor=''>Phone</label>
                                <input onChange={(e) => {
                                    setPhone(e.target.value)
                                }}
                                    type="tel"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor=''>BirthDate</label>
                                    <input onChange={(e) => {
                                        setBirthDate(e.target.value)
                                    }}
                                        type="date"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 col">
                                <label htmlFor=''>JoinDate</label>
                                <input onChange={(e) => {
                                    setJoinDate(e.target.value)
                                }}
                                    type="date"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor=''>AddressLine1</label>
                                    <input onChange={(e) => {
                                        setAddressLine1(e.target.value)
                                    }}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 col">
                                <label htmlFor=''>AddressLine2</label>
                                <input onChange={(e) => {
                                    setAddressLine2(e.target.value)
                                }}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor=''>City</label>
                                    <input onChange={(e) => {
                                        setCity(e.target.value)
                                    }}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 col">
                                <label htmlFor=''>State</label>
                                <input onChange={(e) => {
                                    setState(e.target.value)
                                }}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor=''>PinCode</label>
                                    <input onChange={(e) => {
                                        setPinCode(e.target.value)
                                    }}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 col">
                                <label htmlFor=''>Country</label>
                                <input onChange={(e) => {
                                    setCountry(e.target.value)
                                }}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor=''>Salary</label>
                                    <input onChange={(e) => {
                                        setSalary(Number(e.target.value))
                                    }}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 col">
                                <label htmlFor=''>Qualification</label>
                                <input onChange={(e) => {
                                    setQualification(e.target.value)
                                }}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="form-label">Employment Type</label>
                                <select class="form-select" name="employmentType" value={employmentType} onChange={(e) => {
                                    setEmploymentType(e.target.value)
                                }}>
                                    <option value="" disabled>Select Employment Type</option>
                                    <option value="FULL_TIME">Full time</option>
                                    <option value="PART_TIME">Part time</option>
                                    <option value="CONTRACT">Contract</option>
                                </select>
                            </div>
                            <div className="col mb-3">
                                <label className="form-label">Work Shift</label>
                                <select class="form-select" name="workShift" value={workShift} onChange={(e) => {
                                    setWorkShift(e.target.value)
                                }}>
                                    <option value="" disabled>Select Work-shift</option>
                                    <option value="MORNING">Morning</option>
                                    <option value="AFTERNOON">Afternoon</option>
                                    <option value="NIGHT">Night</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mb-3">
                                <label className="form-label">Licensing Authority</label>
                                <select class="form-select" name="licensingAuthority" value={licensingAuthority} onChange={(e) => {
                                    setLicensingAuthority(e.target.value)
                                }}>
                                    <option value="" disabled>Select Licensing Authority</option>
                                    <option value="MAHARASHTRA_STATE_MEDICAL_COMMISSION">MAHARASHTRA_STATE_MEDICAL_COMMISSION</option>
                                    <option value="KARNATKA_STATE_MEDICAL_COMMISSION">KARNATKA_STATE_MEDICAL_COMMISSION</option>
                                </select>
                            </div>


                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor=''>ConsultationFee</label>
                                    <input onChange={(e) => {
                                        setConsultationFees(Number(e.target.value))
                                    }}
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mb-3">
                                <label className="form-label">Branch</label>
                                <select class="form-select" name="branchId" value={branchId} onChange={(e) => {
                                    setBranchId(Number(e.target.value))
                                }}>
                                    <option value="" disabled>Select Branch</option>
                                    {branches.map((branch) => (
                                        <option key={branch.id} value={branch.id}>{branch.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col mb-3">
                                <label className="form-label">Department</label>
                                <select class="form-select" name="departmentId" value={departmentId} onChange={(e) => {
                                    setDepartmentId(Number(e.target.value))
                                }}>
                                    <option value="" disabled>Select Department</option>
                                    {departments.map((department) => (
                                        <option key={department.id} value={department.id}>{department.departmentName}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor=''>Specialisation</label>
                                    <input onChange={(e) => {
                                        setSpecialization(e.target.value)
                                    }}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 col">
                                <label htmlFor=''>LicenseNumber</label>
                                <input onChange={(e) => {
                                    setLicenseNumber(e.target.value)
                                }}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor=''>LicenseExpiryDate</label>
                                    <input onChange={(e) => {
                                        setLicenseExiryDate(e.target.value)
                                    }}
                                        type="date"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 col">
                                <label htmlFor=''>Experience</label>
                                <input onChange={(e) => {
                                    setExperience(Number(e.target.value))
                                }}
                                    type="number"
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="row">

                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        id="description"
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                            </div>


                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <label className="mb-2" htmlFor="">Select Availability Schedule</label><br />
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="1" />
                                    <label class="form-check-label" for="inlineCheckbox1">Mon</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="2" />
                                    <label class="form-check-label" for="inlineCheckbox2">Tue</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="3" />
                                    <label class="form-check-label" for="inlineCheckbox3">Wed</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="4" />
                                    <label class="form-check-label" for="inlineCheckbox3">Thu</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="5" />
                                    <label class="form-check-label" for="inlineCheckbox3">Fri</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="6" />
                                    <label class="form-check-label" for="inlineCheckbox3">Sat</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="7" />
                                    <label class="form-check-label" for="inlineCheckbox3">Sun</label>
                                </div>
                            </div>
                        </div>

                        <div class="input-group mb-4 mt-4">
                            <select class="form-select" id="inputGroupSelect04" value={selectedLanguage} onChange={(e) => setSelectedLanguage(Number(e.target.value))}>
                                <option selected>Select Language</option>
                                {Languages.map((language) => (
                                    <option value={language.id}>{language.name}</option>
                                ))}
                            </select>
                            <button class="btn btn-success" type="button" onClick={addLanguage}>Add</button>
                        </div>

                        {selectedLanguages.map((language) => (
                            <div>{language}</div>
                        ))}

                        <div className="mb-3 text-center">
                            <button onClick={addNewDoctor} className='btn btn-success ps-2 pe-2'>Register</button>
                            <button onClick={OnCancel} className='btn btn-danger ps-3  pe-3 ms-5'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )

}

export default AdminAddDoctor