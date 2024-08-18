
import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { toast } from "react-toastify"
import { addDepartment } from "../services/departmentService"

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
            navigate('/admin/departmentlist')
          } else {
            toast.error(result['error'])
          }
    }
    
    return (
        <div>            
            <h2 className='page-title' style={{color: 'red' , textAlign : 'center', marginTop : '50px'}}>Add Department</h2>
            <div className='row mt-5'>
                <div className='col-2'></div>

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
                <input
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
        
        <div className='col-2'></div>
      </div>
     </div>
    )
}

export default AdminAddDepartment