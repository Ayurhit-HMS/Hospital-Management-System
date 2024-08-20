import AdminSidebar from "../components/AdminSidebar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import "../styles/patientDashboard.css"
import { getAllSchedules} from "../services/scheduleService";
import { getAdminDetails } from "../services/adminService";

function AdminScheduleList (){

    const navigate = useNavigate()

    const [Schedules, setSchedules] = useState([])

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
        loadSchedules()
    }, [])

    const loadSchedules = async () => {
        const jwt = sessionStorage.getItem("jwt");
        const result =await getAllSchedules(jwt)
        console.log(result)

        setSchedules(result)   
    }

    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const AddSchedule = () => {
       navigate('/admin/addSchedule')
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
                                <h3 style={{textAlign : 'center', color : 'red'}}>Schedule List</h3>                                
                                <button onClick={AddSchedule} className="btn btn-success" style={{marginBottom:10, marginRight:20}}>Add Schedule</button>
                            </div>
                            <br/>
                            <br/>
                            <div  className="row d-flex justify-content-center">
                                <div className="col-md-11">
                                    <table className="table table-bordered table-responsive table-stripped " >
                                        <thead>
                                            <tr style={{textAlign : 'center'}}>
                                                <th>ID</th>
                                                <th>Schedule Date</th>
                                                <th>Schedule Time</th>
                                                <th>Schedule Status</th>
                                                <th>Doctor Name</th>
                                                <th style={{textAlign : 'center'}}>Events</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Schedules.map((schedule) => {
                                                return (
                                                    <tr style={{textAlign : 'center'}}>
                                                        <td>{schedule.id}</td>
                                                        <td>{schedule.scheduleDate}</td>
                                                        <td>{schedule.scheduleTime}</td>                                  
                                                        <td>{schedule.isSelected ? 'Selected' : 'Not Selected'}</td>
                                                        <td>{schedule.doctorResponseDTO.firstName}</td>
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

export default AdminScheduleList;