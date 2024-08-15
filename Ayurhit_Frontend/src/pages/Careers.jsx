import "../styles/register.css"
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


function Careers() {

    const navigate = useNavigate();


    const handleSubmit = () => {
        navigate('/home')
        toast.success('Thank You! Our team will contact you.')
    };

    return (
        <div className="register" style={{marginTop:150}}>
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-6 registration p-5 rounded shadow" >

                    <h1 className="text-center mb-4">Careers at Ayurhit</h1>

                    <form action="" >
                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label mt-2">First Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Enter first name" name="firstName" required />
                            </div>
                            <div className="col">
                                <label className="form-label mt-2">Last Name</label>
                                <input type="text" className="form-control" placeholder="Enter last name" name="lastName" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label">Email address <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" placeholder="Enter email" name="email" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="form-label">Mobile <span className="text-danger">*</span></label>
                                <input type="tel" appearance="textfield" className="form-control" placeholder="Enter mobile" name="phone" required />
                            </div>

                            <div className="row text-center mt-4">
                                <div className="col">
                                    <button className="btn btn-success me-3 ps-4 pe-4" onClick={handleSubmit}>Submit</button>
                                    <Link to={"/home"}><button id="cancel-button" className="btn btn-danger ps-4 pe-4">Cancel</button></Link>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Careers;

