
import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { addSchedule } from "../services/scheduleService" 
import { toast } from "react-toastify"

function AdminAddSchedule() {

   
    const [scheduleDate, setScheduleDate] = useState('')
    const [scheduleTime, setScheduleTime] = useState('')
    const [doctorId, setDoctorId] =  useState('')
    const [departmentId, setDepartmentId] = useState('')
    const [isSelected, setIsSelected] = useState('')
    const [adminId, setAdminId] = useState('')

    const navigate = useNavigate()

    const onCancel =()=>{
        navigate('/admin/schedulelist')
    }

    const AddNewSchedule = async () => {
        const result = await addSchedule(
           scheduleDate,
           scheduleTime,
           isSelected,
           doctorId,
           adminId,
           departmentId
        );

        console.log(result)
       
        if (result && result.status === 201) {
            toast.success('Successfully added a schedule')
            navigate('/admin/schedulelist')
          } else {
            toast.error(result['error'])
          }
    }
    
    return (
        <div>
            
            <h2 className='page-title' style={{color: 'red' , textAlign : 'center', marginTop : '50px'}}>Add Schedule</h2>

            <div className='row mt-5'>
                <div className='col-2'></div>

        <div className='col'>
          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Department Id</label>
                <input
                  onChange={(e) => {
                    setDepartmentId(e.target.value)
                  }}
                  type='number'
                  className='form-control'
                />
              </div>
            </div>

            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Doctor Id</label>
                <input
                  onChange={(e) => {
                    setDoctorId(e.target.value)
                  }}
                  type='number'
                  className='form-control'
                />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Admin Id</label>
                <input
                  onChange={(e) => {
                    setAdminId(e.target.value)
                  }}
                  type='number'
                  className='form-control'
                />
              </div>
            </div>

            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''> Schedule Date</label>
                <input
                  onChange={(e) => {
                    setScheduleDate(e.target.value)
                  }}
                  type='text'
                  className='form-control'
                />
              </div>
            </div>
          </div><div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Schedule Time</label>
                <input
                  onChange={(e) => {
                    setScheduleTime(e.target.value)
                  }}
                  type='time'
                  className='form-control'
                />
              </div>
            </div>

            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''> Schedule Status</label>
                <input
                  onChange={(e) => {
                    setIsSelected(e.target.value)
                  }}
                  type='text'
                  className='form-control'
                />
              </div>
            </div>
          </div>

          <div className='row' style={{marginBottom : '10px'}}>
            <div className='col d-flex justify-content-center'>
             
              <button onClick={AddNewSchedule} className='btn btn-success' style={{marginRight : '20px'}}>
                Add Schedule
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

export default AdminAddSchedule