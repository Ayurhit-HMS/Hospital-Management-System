import axios from "axios";
import { createUrl, log } from '../utils/utils'


export async function scheduleNewAppointment(appointment) {
    const url = createUrl('/appointments')
    const token = sessionStorage.getItem("jwt")
    try {
        const response = await axios.post(url, appointment, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response
    } catch (ex) {
        return null
    }
}

export async function getAppointments(token) {
    const url = createUrl(`/appointments`);
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response
    } catch (ex) {
        log('Error fetching appointments', ex);
        return null;
    }
}



export async function cancelAppointment(appointmentId,token) {
    const url = createUrl(`/appointments/cancel/${appointmentId}`);
    console.log(token)
    try {
        const response = await axios.put(url,  {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response)


        return response
    } catch (ex) {
        console.error('Error cancelling appointment', ex);
        return null;
    }
}


export async function update(appointmentId, token, data) {
    const url = createUrl(`/appointments/${appointmentId}`);
    try {
        const response = await axios.put(url, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (ex) {
        console.error('Error updating appointment', ex);
        return null;
    }
}


export async function getAppointmentDetails(token) {

    
    const url = createUrl(`/appointments-doctor`);
   
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response; 
    } catch (ex) {
        console.error('Error fetching patient details:', ex);
        return null;
    }
}