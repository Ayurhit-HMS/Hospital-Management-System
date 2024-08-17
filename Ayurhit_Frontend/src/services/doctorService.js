import axios from "axios";
//import { createUrl } from '../utils/utils';
import { createUrl, log } from '../utils/utils'

export async function getDoctors(departmentName) {
    const url = createUrl(`/doctor/dept/${encodeURIComponent(departmentName)}`);
    try {
        const response = await axios.get(url);
        return response;
    } catch (ex) {
        console.error('Failed to fetch doctors:', ex);
        return null;
    }
}

export async function getAppointmentDetails(token) {

    
    const url = createUrl(`/appointments-details`);
   
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data; 
    } catch (ex) {
        console.error('Error fetching patient details:', ex);
        return null;
    }
}


// export async function getAppointmentDetails(doctorId) {
//     const url = createUrl(`/appointments-details/${doctorId}`);
//     try {
//         const response = await axios.get(url);
//         return response
//     } catch (ex) {
//         log.error('Error fetching appointments', ex);
//         return null;
//     }
// }
