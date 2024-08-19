import AdminSidebar from "../components/AdminSidebar";
import { useEffect, useState } from "react";
import {getAllEmployees} from "../services/employeeService";
import Footer from "../components/Footer"
import { getAdminDetails } from "../services/adminService";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import "../styles/adminList.css";
import "../styles/patientDashboard.css"

function AdminEmpList (){

    const navigate = useNavigate()

    const[Employees, setEmployees] = useState([])

    const [admin, setAdmin] = useState([])

    useEffect(() => {
        const fetchAdminDetails = async () => {
            try {
                const jwt = sessionStorage.getItem("jwt");
                if (jwt) {
                    const response = await getAdminDetails(jwt);
                    console.log(response)
                    setAdmin(response);
                 
                } else {
                    console.error('JWT not found');
                }
            } catch (error) {
                console.error('Failed to fetch patient details:', error);
            }
        }
        fetchAdminDetails();
    }, []);

    useEffect(() => {
        loadEmployees()
    }, [])

    const loadEmployees = async () => {
        const jwt = sessionStorage.getItem("jwt");
        const result =await getAllEmployees(jwt)
        setEmployees(result)   
    }

    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const AddDoctor = () => {
       navigate('/admin/addDoctor')
    }

    const AddFrontDesk =() => {
    }

    return (
        <div className="container-fluid ">
            <div className="row" >
                <div className={isSidebarVisible ? "col-md-3" : "col-md-0"}>
                    <div className="custom-sidebar"><AdminSidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} adminDetails={admin}></AdminSidebar>
                    </div>
                </div>
                <div className="col patient-dashboard-content">
                    <div className={isSidebarVisible ? "ms-3" : "ms-0"}>
                        <div className="row">
                             <div>
                                <h3 style={{textAlign : 'center', color : 'red'}}>Employee List</h3>                                
                                <button onClick={AddDoctor} className="btn btn-success" style={{marginBottom:10, marginRight:20}}>Add Doctor</button>
                                <button onClick={AddFrontDesk} className="btn btn-success" style={{marginBottom:10}}>Add FrontDesk</button>
                            </div>
                            <br/>
                            <br/>
                            <div  className="row d-flex justify-content-center">
                                <div className="col-md-11">
                                    <table className="table table-bordered table-responsive table-stripped " >
                                        <thead>
                                            <tr style={{textAlign : 'center'}}>
                                                <th>ID</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Role</th>
                                                <th>Email</th>
                                                <th>Contact Number</th>
                                                <th>WorkShift</th>
                                                <th style={{textAlign : 'center'}}>Events</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Employees.map((employee) => {
                                                return (
                                                    <tr style={{textAlign : 'center'}}>
                                                        <td>{employee.id}</td>
                                                        <td>{employee.firstName}</td>
                                                        <td>{employee.lastName}</td>  
                                                        <td>{employee.role.roleName}</td>                                     
                                                        <td>{employee.email}</td>
                                                        <td>{employee.phone}</td>
                                                        <td>{employee.workShift}</td>
                                                        <td >
                                                            <tr className="d-flex justify-content-center">
                                                                <td >
                                                                    <button className="btn btn-warning" style={{marginRight : '10px'}}>Edit</button>
                                                                </td>
                                                                <td >
                                                                    <button className="btn btn-primary" style={{marginRight : '10px'}}>View</button>
                                                                </td>
                                                                <td >
                                                                    <button className="btn btn-danger" >Delete</button>
                                                                </td>
                                                            </tr>
                                                        </td>
                                                    </tr>
                                                );
                                            })}             
                                        </tbody>
                                    </table>
                                </div>
                            </div>
            
                        </div>
                    </div>
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"}>
                        <Footer></Footer>
                    </div>
                </div>               
            </div>    
        </div>
    );
}

export default AdminEmpList;