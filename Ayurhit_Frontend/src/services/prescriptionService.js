import { createUrl } from "../utils/utils";
import axios from "axios";

export async function getPrescriptions() {
    const url = createUrl('/prescriptions/patient');
    try {
        const token = sessionStorage.getItem("jwt");
        const response = await axios.get(url, {
            headers : {
                "Authorization" : `Bearer ${token}`
            }
        });
        return response
    } catch (ex) {
        return null
    }
}

export async function getMedicines(token) {
    const url = createUrl('/medicine');
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }});

            console.log('this function called')
        return response
    } catch (ex) {
        console.log('Error fetching appointments', ex);
        return null;
    }
}

export async function submitPrescription(DoctorPrescriptionDTO, token) {
    const url = createUrl('/prescriptions/add');  
    try {
        const response = await axios.post(url, DoctorPrescriptionDTO, {
            headers: {
                'Authorization': `Bearer ${token}`,
               
            }
        });
        return response;
    } catch (ex) {
        console.log('Error submitting prescription', ex);
        return null;
    }
}

