import React from "react";
import "../styles/login.css";
import LoginImage from "../images/login.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // const Login = () => {
  //   if (email == "patient" && password == 1234) {
  //     navigate("/patientDash");
  //   } else if (email == "doctor" && password == 1234) {
  //     navigate("/doctorDash");
  //   } else if (email == "admin" && password == 1234) {
  //     navigate("/adminDash");
  //   } else if (email == "front" && password == 1234) {
  //     navigate("/frontdeskDash");
  //   } else {
  //     alert("Wrong email and password");
  //   }
  // };

  return (
    <div className="login-container ">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-8">
          <div className="login-box row">
            <div className="col-md-6 image-side">
              <img src={LoginImage} alt="Hospital" className="img-fluid" />
            </div>
            <div className="col-md-6 form-side d-flex justify-content-center align-items-center">
              <div className="col-md-6">
                <h2 className="text-center">Login</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" type="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-success mt-2 ps-4 pe-4"

                    >
                      Login
                    </button>
                  </div>

                  <div className="text-center mt-3">
                    Don't have an account? <a href="/register">Register here</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
