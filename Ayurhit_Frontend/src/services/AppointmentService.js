import axios from "axios";
import { createUrl, log } from '../utils/utils'

export async function scheduleNewAppointment(appointment) {
    const url = createUrl('/appointments')
    try {
        const response = await axios.post(url, appointment)
        return response
    } catch (ex) {
        return null
    }
}


export async function getAppointments(patientId) {
    const url = createUrl(`/appointments/${patientId}`);
    try {
        const response = await axios.get(url);
        return response
    } catch (ex) {
        log.error('Error fetching appointments', ex);
        return null;
    }
}


export async function cancelAppointment(appointmentId) {
    const url = createUrl(`/appointments/${appointmentId}/cancel`);
    try {
        const response = await axios.put(url);
        return response;
    } catch (ex) {
        console.error('Error cancelling appointment', ex);
        return null;
    }
}