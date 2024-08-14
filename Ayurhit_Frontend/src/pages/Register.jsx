import "../styles/register.css"
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerPatient } from "../services/patientService";
import { log } from "../utils/utils";


function Register() {

    const navigate = useNavigate('');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        birthDate: '',
        phone: '',
        bloodGroup: '',
        password: '',
    });

    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.firstName === '') {
            toast.error('Name cannot be empty')
        } else if (formData.email === '') {
            toast.error('Email cannot be empty')
        } else if (formData.phone === '') {
            toast.error('Mobile cannot be empty')
        } else if (formData.password === '') {
            toast.error('password cannot be empty')
        } else if (confirmPassword === '') {
            toast.error('Confirm password cannot be empty')
        } else if (formData.password !== confirmPassword) {
            toast.error('Passwords do not match');
        } else {
            const response = await registerPatient(formData);
            log(formData.phone)
            if (response.status === 200) {
                toast.success('Registration successful!, please sign in');
                navigate('/login');
            } else {
                toast.error('Registration failed');
            }
        }
    };

    return (
        <div className="register">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-6 registration p-5 rounded shadow" >

                    <h1 className="text-center mb-4">Register</h1>

                    <form action="" >
                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label mt-2">First Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Enter first name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                            </div>
                            <div className="col">
                                <label className="form-label mt-2">Last Name</label>
                                <input type="text" className="form-control" placeholder="Enter last name" name="lastName" value={formData.lastName} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label">Email address <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} required />

                            </div>

                            <div className="col">
                                <label className="form-label">Date of birth</label>
                                <input type="date" className="form-control" name="birthDate" value={formData.birthDate} onChange={handleChange} />
                            </div>

                        </div>


                        <div className="row">
                            <div className="col">
                                <label className="form-label">Mobile <span className="text-danger">*</span></label>
                                <input type="tel" appearance="textfield" className="form-control" placeholder="Enter mobile" name="phone" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="col">
                                <label className="form-label">Blood Group</label>
                                <select class="form-select" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
                                    <option value="" disabled>Select blood group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>

                            <div className="row mt-3">

                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-11">
                                            <label className="form-label">Password <span className="text-danger">*</span></label>
                                            <input type={passwordVisible ? "text" : "password"} className="form-control" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange} required />
                                        </div>
                                        <div className="col-md-1">
                                            <i className={`fa ${passwordVisible ? "fa-eye-slash" : "fa-eye"} password-toggle mt-5`}
                                                onClick={togglePasswordVisibility}></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">

                                    <div className="row">
                                        <div className="col-md-11">
                                            <label className="form-label">Confirm Password <span className="text-danger">*</span></label>
                                            <input type={confirmPasswordVisible ? "text" : "password"} className="form-control" placeholder="Confirm password" name="confirmPassword" onChange={(e) => { setConfirmPassword(e.target.value) }} required />
                                        </div>
                                        <div className="col-md-1">
                                            <i className={`fa ${confirmPasswordVisible ? "fa-eye-slash" : "fa-eye"} password-toggle mt-5`}
                                                onClick={toggleConfirmPasswordVisibility}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row text-center mt-4">
                                <div className="col">
                                    <button className="btn btn-success me-3 ps-4 pe-4" onClick={handleSubmit}>Register</button>
                                    <Link to={"/login"}><button id="cancel-button" className="btn btn-danger ps-4 pe-4">Cancel</button></Link>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;

