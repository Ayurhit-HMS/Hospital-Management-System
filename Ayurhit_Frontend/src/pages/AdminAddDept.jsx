
import { useState, useEffect } from "react"
import { useNavigate} from "react-router-dom"
import { toast } from "react-toastify"
import { addDepartment } from "../services/departmentService"
import { getAdminDetails } from "../services/adminService"
import AdminSidebar from "../components/AdminSidebar";


function AdminAddDepartment() {

   
    const [departmentName, setDepartmentName] = useState('')
    const [about, setAboutDepartment] = useState('')

    const navigate = useNavigate()

    const onCancel =()=>{
        navigate('/admin/departmentlist')
    }

    const AddNewDepartment = async () => {
        const result = await addDepartment(
          departmentName,
          about
        );

        console.log(result)
       
        if (result && result.status === 201) {
            toast.success('Successfully added a department')
            navigate('/admin/deptlist')
          } else {
            toast.error(result['error'])
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
                  <h2 className='page-title' style={{color: 'red' , textAlign : 'center', marginTop : '50px'}}>Add Department</h2>
              <div className='row mt-5'>
                <div className='col-md-4'></div>

                <div className='col'>
                  <div className='row'>
                    <div className='mb-3'>
                      <label htmlFor=''>Department Name</label>
                      <input
                      onChange={(e) => {
                      setDepartmentName(e.target.value)
                      }}
                      type='text'
                      className='form-control'
                    />
                    </div>
                  </div>

                  <div className='row'>
                    <div className='mb-3'>
                      <label htmlFor=''>About Department</label>
                        <textarea
                        onChange={(e) => {
                        setAboutDepartment(e.target.value)
                        }}
                        type='text'
                        className='form-control'
                        />
                    </div>
                  </div>    

                  <div className='row' style={{marginBottom : '10px'}}>
                    <div className='col d-flex justify-content-center'>            
                      <button onClick={AddNewDepartment} className='btn btn-success' style={{marginRight : '20px'}}>
                        Add Department
                      </button>
                      <button onClick={onCancel} className='btn btn-danger ms-2'>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>    
        
              <div className='col-md-4'></div>
          </div>
          </div>
          </div>
          </div>
     </div>
    )
}

export default AdminAddDepartment