import axios from "axios";
//import { createUrl } from '../utils/utils';
import { createUrl, log } from '../utils/utils'

export async function getDoctors(departmentName) {
    const url = createUrl(`/doctor/dept/${encodeURIComponent(departmentName)}`);
    try {
        const response = await axios.get(url);
        return response;
    } catch (ex) {
        console.error('Failed to fetch doctors:', ex);
        return null;
    }
}




