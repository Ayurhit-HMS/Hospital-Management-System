import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllDepartments } from "../services/departmentService";
import { getDoctors } from "../services/doctorService";


function AdminAddSchedule() {

    const [departments, setDepartments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState(null)
    const [selectedDoctor, setSelectedDoctor] = useState(null)
    const [scheduleDate, setScheduleDate] = useState(null)
    const [scheduleTime, setScheduleTime] = useState(null)

    const navigate = useNavigate()

    useEffect( () => {
      const fetchAllDepartments = async () => {
        try{
          const response = await getAllDepartments();
          console.log(response.data);
          setDepartments(response.data);
        } catch(error) {}
        console.error('Failed to fetch departments:', error);
      };
      fetchAllDepartments();
    }, []);

    const selectDepartment = async (department) => {
        setSelectedDoctor(null);
        
        setSelectedDepartment(department);

        try{
            const response = await getDoctors(department);
            if(response && response.data) {
              setDoctors(response.data);
            }
        }
    }

  return (
    <div>

    </div>
  )
}
export default AdminAddSchedule