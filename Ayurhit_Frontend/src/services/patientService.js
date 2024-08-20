import axios from "axios";
import { createUrl, log } from '../utils/utils'

export async function registerPatient(formData) {
    const url = createUrl('/patients');
    try {
        const response = await axios.post(url, formData);
        return response;
    } catch (ex) {
        console.error('Error registering patient:', ex);
        return null;
    }
}

export async function getPatientDetails(token) {
    const url = createUrl('/patients');
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response;
    } catch (ex) {
        console.error('Error fetching patient details:', ex);
        return null;
    }
}



export async function getBills() {
    const url = createUrl('/bill');
    const token = sessionStorage.getItem("jwt")
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response;
    } catch (ex) {
        console.error('Error fetching patient details:', ex);
        return null;
    }
}
