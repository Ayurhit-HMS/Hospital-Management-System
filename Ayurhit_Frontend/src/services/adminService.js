import axios from "axios";
import { createUrl, log } from '../utils/utils'

export async function getAdminDetails(token) {
   
    const url = createUrl('/admin');

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response)
        return response.data; 
    } catch (ex) {
        console.error('Error fetching admin details:', ex);
        return null;
    }
}

export async function getAllLanguages() {
    const url = createUrl('/languages')
    const token = sessionStorage.getItem("jwt")
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response; 
    } catch (ex) {
        console.error('Error fetching admin details:', ex);
        return null;
    }
}



export async function getAllBranches() {
    const url = createUrl('/branches')
    const token = sessionStorage.getItem("jwt")
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response; 
    } catch (ex) {
        console.error('Error fetching admin details:', ex);
        return null;
    }
}
