import axios from "axios";
import { createUrl, log } from '../utils/utils'

export async function registerPatient(formData) {
    const url = createUrl('/patients')
    try {
        const response = await axios.post(url, formData)
        return response
    } catch (ex) {
        return null
    }
}

export async function getPatientDetails(token) {
    const url = createUrl('/patients');
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
