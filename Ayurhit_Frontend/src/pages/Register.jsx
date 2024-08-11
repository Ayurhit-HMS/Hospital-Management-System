import "../styles/register.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Register() {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
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
                                <input type="text" className="form-control" placeholder="Enter first name" />
                            </div>
                            <div className="col">
                                <label className="form-label mt-2">Last Name</label>
                                <input type="text" className="form-control" placeholder="Enter last name" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label">Email address <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                                
                            </div>

                            <div className="col">
                                <label className="form-label">Date of birth</label>
                                <input type="date" className="form-control" />
                            </div>

                        </div>


                        <div className="row">
                            <div className="col">
                                <label className="form-label">Mobile <span className="text-danger">*</span></label>
                                <input type="number" appearance="textfield" className="form-control" placeholder="Enter mobile" />
                            </div>
                            <div className="col">
                                <label className="form-label">Blood Group</label>
                                <select class="form-select">
                                    <option selected>Select blood group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">A+</option>
                                    <option value="B-">A-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>

                            <div className="row mt-3">

                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-11">
                                            <label className="form-label">Password <span className="text-danger">*</span></label>
                                            <input type={passwordVisible ? "text" : "password"} className="form-control" placeholder="Enter password" />
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
                                            <input type={confirmPasswordVisible ? "text" : "password"} className="form-control" placeholder="Confirm password" />
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
                                    <button id="cancel-button" className="btn btn-success me-3 ps-4 pe-4">Register</button>
                                    <Link to={"/"}><button className="btn btn-danger ps-4 pe-4">Cancel</button></Link>
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

