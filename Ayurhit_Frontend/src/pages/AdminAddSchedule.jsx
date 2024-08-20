import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllDepartments } from "../services/departmentService";
import { getDoctors } from "../services/doctorService";
import { toast } from "react-toastify";
import { addSchedule } from "../services/scheduleService";
import { getAdminDetails } from "../services/adminService";
import AdminSidebar from "../components/AdminSidebar";



function AdminAddSchedule() {

    const [departments, setDepartments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState(null)
    const [selectedDoctor, setSelectedDoctor] = useState(null)
    const [ScheduleDate, setScheduleDate] = useState(null)
    const [ScheduleTime, setScheduleTime] = useState(null)

    const navigate = useNavigate()

    useEffect( () => {
      const fetchAllDepartments = async () => {
        try{
          const response = await getAllDepartments();
          console.log(response.data);
          setDepartments(response.data);
        } catch(error) {}
      };
      fetchAllDepartments();
    }, []);

    const selectDepartment = async (department) => {
        setSelectedDoctor(null);
        console.log(department)
        setSelectedDepartment(department);

        try{
            const response = await getDoctors(department.departmentName);
            if(response && response.data) {
              setDoctors(response.data);
            }
        }
        catch (error){
          console.error('failes to fetch doctors:', error);
        }
    };

    const selectDoctor = async (doctor) => {
      setSelectedDoctor(doctor)
    }

    const AddNewSchedule = async () => {
      if(!selectedDepartment || !selectedDoctor) {
        toast.error("Please select a department and doctor before adding schedule");
       return;
      }
      try{
        let obj = { scheduleDate : ScheduleDate, scheduleTime : ScheduleTime, departmentId : selectedDepartment.id, doctorId : selectedDoctor.id}
        const response = await addSchedule(obj);
        if (response  && response.status === 201) {
          toast.success('Successfully added a schedule')
          navigate('/admin/schedulelist')
          } else {
          toast.error(response['error'])
        }
      } catch(error) {
        toast.error('Failed to add schedule');
    
    }
  }

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


    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const OnCancel = async () => {
      navigate('/admin/schedulelist')
    }

  return (
    <div className="container-fluid patient-dashboard-content">
      <div className="row">
        <div className={isSidebarVisible ? "col-md-2" : "col-md-0"}>
          <AdminSidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} adminDetails={admin} />   
        </div>
      </div>
      <div className="col">
        <div className={isSidebarVisible ? "ms-5" : "ms-0"}>
          <div className="row text-center">
            <span className="h2 mt-2">Add Schedule</span>

            <div className="dropdown-center mt-4">
              <button className="btn btn-secondary dropdown-toggle w-25" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedDepartment ?  selectedDepartment.departmentName : "select Department"},
              </button>
              <ul className="dropdown-menu deopdown-width">
                {departments.map((department) => (
                  <li key={department.id} onClick={() => {selectDepartment(department)}} >
                    <a className="dropdown-item" href="#">
                      {department.departmentName}
                    </a>
                  </li>
                ))}
              </ul>
             </div>

             <div className="dropdown-center mt-4">
                <button className="btn btn-secondary dropdown-toggle dropdown-width w-25"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="fale"
                >
                  {selectedDoctor ? `Dr. ${selectedDoctor.firstName} ${selectedDoctor.lastName}` : "select Doctor"}
                </button>
                <ul className="dropdown-menu dropdown-width">
                  {doctors.map((doctor) => (
                    <li key={doctor.id}>
                      <a className="dropdown-item" href="#" onClick={() => {selectDoctor(doctor)}}>
                        {"Dr. " + doctor.firstName + " " + doctor.lastName }
                      </a>
                    </li>
                  ))}
                </ul>
             </div>

              <div className="row" >
                <div className="col-md-3"></div>
                <div className="col-md-6">                      
                  <div className='mb-3 mt-4'>
                    <label htmlFor='' className="mt-10">Schedule Date</label>
                    <input
                      onChange={(e) => {
                      setScheduleDate(e.target.value)
                    }}
                      type='date'
                      className='form-control'
                    />
                  </div>
                </div>   
                <div className="col-md-3"></div>          
              </div>
              
              <div className="row">
              <div className="col-md-3"></div>
                <div className="col-md-6">           
                  <div className='mb-3'>
                    <label htmlFor=''> Schedule Time</label>
                    <input
                      onChange={(e) => {
                      setScheduleTime(e.target.value)
                    }}
                    type='time'
                    className='form-control'
                  />
                </div>          
              </div>
              <div className="col-md-3"></div>
            </div>

            <div className='row' style={{marginBottom : '10px'}}>
            <div className='col d-flex justify-content-center'>
             
              <button onClick={AddNewSchedule} className='btn btn-success' style={{marginRight : '20px'}}>
                Add Schedule
              </button>
              <button onClick={OnCancel} className='btn btn-danger ms-2'>
                Cancel
              </button>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    
  )
}
export default AdminAddSchedule;