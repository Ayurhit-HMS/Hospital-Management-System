import axios from "axios";
import { createUrl, log } from '../utils/utils'

export async function getAllEmployees(token) {
    const url = createUrl('/employees/getAll');
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log(response)
        return response.data; 
    } catch (ex) {
        console.error('Error fetching employee details:', ex);
        return null;
    }
}
