import { useState } from "react";
import { addDoctor } from "../services/doctorService";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function AdminAddDoctor() {

    const navigate = useNavigate()

    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[gender, setGender] = useState('')
    const[phone, setPhone] = useState('')
    const[birthDate, setBirthDate] = useState('')
    const[isDeleted, setIsDeleted] = useState('')
    const[addressLine1, setAddressLine1] = useState('')
    const[addressLine2, setAddressLine2] = useState('')
    const[city, setCity] = useState('')
    const[state, setState] = useState('')
    const[pinCode, setPinCode] = useState('')
    const[country, setCountry] = useState('')
    const[salary, setSalary] = useState('')
    const[joinedDate, setJoinDate] = useState('')
    const[qualification, setQualification] = useState('')
    const[employmentType, setEmploymentType] = useState('')
    const[workShift, setWorkShift] = useState('')
    const[employeeStatus, setEmployeeStatus] = useState('')
    
    const[branchId,setBranchId] = useState('')
    const[roleId, setRoleId] = useState('')
    const[specialization,setSpecializtion] = useState('')
    const[licenseNumber, setLicenseNumber] = useState('')
    const[licenseExpiryDate, setLicenseExiryDate] = useState('')
    const[experience, setExperience] = useState('')
    const[consultationFees, setConsultationFees] = useState('')
    const[availabilitySchedule, setAvailabilitySchedules] = useState('')
    const[licensingAuthority, setLicensingAuthority] = useState('')
    const[description, setDescription] = useState('')
    const[departmentId, setDepartmentId] = useState('')

    const addNewDoctor = async () => {
        const result = await addDoctor(
            firstName,
            lastName,
            email,
            password,
            gender,
            phone,
            birthDate,
            addressLine1,
            addressLine2,
            city,
            state,
            pinCode,
            country,
            salary,
            joinedDate,
            qualification,
            employmentType,
            workShift,
            employeeStatus,
            branchId,
            roleId,
            specialization,
            licenseNumber,
            licenseExpiryDate,
            experience,
            consultationFees,
            availabilitySchedule,
            licensingAuthority,
            description,
            departmentId,
            isDeleted,

        );

        console.log(result)
       
        if (result && result.status === 201) {
            toast.success('Successfully added a doctor')
            navigate('/admin/emplist')
            } else {
            toast.error(result['error'])
          }
        }

        const OnCancel = async () => {
            navigate('/admin/emplist')
    }
    return(


        <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-md-5">
            

           
        <h2 className="page-title">Add Doctor</h2>
        <div className="form">  
         <div className="row">
        <div className="col">
            <div className="mb-3">
                <label htmlFor=''>FirstName</label>
                <input onChange={(e) =>{
                setFirstName(e.target.value)
                }} 
                type="text"
                className="form-control" 
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor=''>LastName</label>
            <input onChange={(e) =>{
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
                <label htmlFor=''>email</label>
                <input onChange={(e) =>{
                setEmail(e.target.value)
                }} 
                type="email"
                className="form-control" 
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor=''>password</label>
            <input onChange={(e) =>{
            setPassword(e.target.value)
            }} 
            type="text"
            className="form-control" 
            />
        </div>     
    </div>
    <div className="row">
        <div className="col">
            <div className="mb-3">
                <label htmlFor=''>Gender</label>
                <input onChange={(e) =>{
                setGender(e.target.value)
                }} 
                type="text"
                className="form-control" 
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor=''>Phone</label>
            <input onChange={(e) =>{
            setPhone(e.target.value)
            }} 
            type="text"
            className="form-control" 
            />
        </div>     
    </div>
    <div className="row">
        <div className="col">
            <div className="mb-3">
                <label htmlFor=''>BirthDate</label>
                <input onChange={(e) =>{
                setBirthDate(e.target.value)
                }} 
                type="date"
                className="form-control" 
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor=''>JoinDate</label>
            <input onChange={(e) =>{
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
                <input onChange={(e) =>{
                setAddressLine1(e.target.value)
                }} 
                type="text"
                className="form-control" 
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor=''>AddressLine2</label>
            <input onChange={(e) =>{
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
                <input onChange={(e) =>{
                setCity(e.target.value)
                }} 
                type="text"
                className="form-control" 
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor=''>State</label>
            <input onChange={(e) =>{
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
                <input onChange={(e) =>{
                setPinCode(e.target.value)
                }} 
                type="text"
                className="form-control" 
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor=''>Country</label>
            <input onChange={(e) =>{
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
                <input onChange={(e) =>{
                setSalary(e.target.value)
                }} 
                type="text"
                className="form-control" 
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor=''>Qualification</label>
            <input onChange={(e) =>{
            setQualification(e.target.value)
            }} 
            type="text"
            className="form-control" 
            />
        </div>     
    </div>
    <div className="row">
        <div className="col">
            <div className="mb-3">
                <label htmlFor=''>EmploymentType</label>
                <input onChange={(e) =>{
                setEmploymentType(e.target.value)
                }} 
                type="text"
                className="form-control" 
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor=''>WorkShift</label>
            <input onChange={(e) =>{
            setWorkShift(e.target.value)
            }} 
            type="text"
            className="form-control" 
            />
        </div>     
    </div>
    <div className="row">
        <div className="col">
            <div className="mb-3">
                <label htmlFor=''>EmployeeStatus</label>
                <input onChange={(e) =>{
                setEmployeeStatus(e.target.value)
                }} 
                type="text"
                className="form-control" 
                />
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <div className="mb-3">
                <label htmlFor=''>BranchId</label>
                <input onChange={(e) =>{
                setBranchId(e.target.value)
                }} 
                type="number"
                className="form-control" 
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor=''>RoleId</label>
            <input onChange={(e) =>{
            setRoleId(e.target.value)
            }} 
            type="number"
            className="form-control" 
            />
        </div>     
    </div>
    <div className="row">
        <div className="col">
            <div className="mb-3">
                <label htmlFor=''>Specialisation</label>
                <input onChange={(e) =>{
                setSpecializtion(e.target.value)
                }} 
                type="text"
                className="form-control" 
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor=''>LicenseNumber</label>
            <input onChange={(e) =>{
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
                <input onChange={(e) =>{
                setLicenseExiryDate(e.target.value)
                }} 
                type="date"
                className="form-control" 
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor=''>Experience</label>
            <input onChange={(e) =>{
            setExperience(e.target.value)
            }} 
            type="number"
            className="form-control" 
            />
        </div>     
    </div>

    <div className="row">
        <div className="col">
            <div className="mb-3">
                <label htmlFor=''>ConsultationFee</label>
                <input onChange={(e) =>{
                setConsultationFees(e.target.value)
                }} 
                type="number"
                className="form-control" 
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor=''>AvailabilitySchedule</label>
            <input onChange={(e) =>{
            setAvailabilitySchedules(e.target.value)
            }} 
            type="text"
            className="form-control" 
            />
        </div>     
    </div>
    <div className="row">
        <div className="col">
            <div className="mb-3">
                <label htmlFor=''>Description</label>
                <input onChange={(e) =>{
                setDescription(e.target.value)
                }} 
                type="text"
                className="form-control" 
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor=''>DepartmentId</label>
            <input onChange={(e) =>{
            setDepartmentId(e.target.value)
            }} 
            type="number"
            className="form-control" 
            />
        </div>     
    </div>
    <div className="row">
        <div className="col">
            <div className="mb-3">
                <label htmlFor=''>isDeleted</label>
                <input onChange={(e) =>{
                setIsDeleted(e.target.value)
                }} 
                type="text"
                className="form-control" 
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor=''>Licensing Authority</label>
            <input onChange={(e) =>{
            setLicensingAuthority(e.target.value)
            }} 
            type="text"
            className="form-control" 
            />
        </div>     
    </div>

    <div className='mb-3'>
        <button onClick={addNewDoctor} className='btn btn-success'>
             Add
        </button>
    </div>
    <div className='mb-3'>
        <button onClick={OnCancel} className='btn btn-danger'>
             Cancel
        </button>
    </div>
</div>
</div>
</div>
</div>
       
)

}

export default AdminAddDoctor