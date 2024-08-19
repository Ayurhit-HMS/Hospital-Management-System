import AdminSidebar from "../components/AdminSidebar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import { getAdminDetails } from "../services/adminService";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import "../styles/adminList.css";
import "../styles/patientDashboard.css"
import { getAllDepartments } from "../services/departmentService";

function AdminDeptList (){

    const navigate = useNavigate()

    const [Departments, setDepartments] = useState([])

    const [admin, setAdmin] = useState([])

    useEffect(() => {
        const fetchAdminDetails = async () => {
            try {
                const jwt = sessionStorage.getItem("jwt");
                const decoded = jwtDecode(jwt)
                const email = decoded.sub
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
        loadDepartments()
    }, [])

    const loadDepartments = async () => {
        const jwt = sessionStorage.getItem("jwt");
        const result = await getAllDepartments(jwt)
        console.log(result.data)

        setDepartments(result.data)   
    }

    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const AddDepartment = () => {
       navigate('/admin/addDepartment/')
    }

    const EditDepartment = (id) => {
      
    }

    const ViewDepartment = (id) => {
        
    }

    const DeleteDepartment = (id) => {

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
                                <h3 style={{textAlign : 'center', color : 'red'}}>Departments List</h3>                                
                                <button onClick={AddDepartment} className="btn btn-success" style={{marginBottom:10, marginRight:20}}>Add Department</button>
                            </div>
                            <br/>
                            <br/>
                            <div  className="row d-flex justify-content-center">
                                <div className="col-md-11">
                                    <table className="table table-bordered table-responsive table-stripped " >
                                        <thead>
                                            <tr style={{textAlign : 'center'}}>
                                                <th>ID</th>
                                                <th>Departments Name</th>
                                                <th>Creation DateTime</th>
                                                <th style={{textAlign : 'center'}}>Events</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Departments.map((department) => {
                                                return (
                                                    <tr style={{textAlign : 'center'}}>
                                                        <td>{department.id}</td>
                                                        <td>{department.departmentName}</td>
                                                        <td>{department.createdAt}</td>
                                                        <td >
                                                            <tr className="d-flex justify-content-center">
                                                                <td >
                                                                    <button onClick={EditDepartment(department.id)} className="btn btn-warning" style={{marginRight : '10px'}}>Edit</button>
                                                                </td>
                                                                <td >
                                                                    <button onClick={ViewDepartment(department.id)} className="btn btn-primary" style={{marginRight : '10px'}}>View</button>
                                                                </td>
                                                                <td >
                                                                    <button onClick={DeleteDepartment(department.id)} className="btn btn-danger" >Delete</button>
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

export default AdminDeptList;