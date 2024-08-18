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
        return response.data; 
    } catch (ex) {
        console.error('Error fetching patient details:', ex);
        return null;
    }
}