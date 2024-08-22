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




export const updatePatientDetails = async (patient) => {
    try {
        const url = createUrl("/patients/update/basic")
        const token = sessionStorage.getItem("jwt")
        const response = await axios.patch(url, patient, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        console.error("Failed to update patient details", error);
        throw error;
    }
};


export const updatePatientAddressDetails = async (patient) => {
    try {
        const url = createUrl("/patients/update/address")
        const token = sessionStorage.getItem("jwt")
        const response = await axios.patch(url, patient, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        console.error("Failed to update patient details", error);
        throw error;
    }
};

export const updatePatientInsuranceDetails = async (patient) => {
    try {
        const url = createUrl("/patients/update/insurance")
        const token = sessionStorage.getItem("jwt")
        const response = await axios.patch(url, patient, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        console.error("Failed to update patient details", error);
        throw error;
    }
};

export const addPastSurgeryDetails = async (pastSurgery) => {
    try {
        const url = createUrl("/pastSurgery")
        const token = sessionStorage.getItem("jwt")
        const response = await axios.post(url, pastSurgery, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        console.error("Failed to update patient details", error);
        throw error;
    }
};


export async function addCurrentMedicationDetails(medicationDetails) {
    const url = createUrl('/patients/currentMedication');
    try {
        const token = sessionStorage.getItem("jwt");
        const response = await axios.post(url, medicationDetails, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response;
    } catch (ex) {
        console.error('Error adding medication:', ex);
        return null;
    }
}


export const addAllergyDetails = async (chronicCondition) => {
    try {
        const url = createUrl("/patients/allergy")
        const token = sessionStorage.getItem("jwt")
        const response = await axios.post(url, chronicCondition, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        console.error("Failed to update patient details", error);
        throw error;
    }
};


export const addChronicConditionDetails = async (chronicCondition) => {
    try {
        const url = createUrl("/patients/chronicCondition")
        const token = sessionStorage.getItem("jwt")
        const response = await axios.post(url, chronicCondition, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        console.error("Failed to update patient details", error);
        throw error;
    }
};