import { createUrl } from "../utils/utils";
import axios from "axios";

export async function getPrescriptions() {
    const url = createUrl('/prescriptions/patient');
    try {
        const token = sessionStorage.getItem('jwt');
        console.log(token)
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response
    } catch (ex) {
        return null
    }
}