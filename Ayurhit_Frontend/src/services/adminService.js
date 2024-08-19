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