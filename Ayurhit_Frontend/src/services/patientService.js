import axios from "axios";
import { createUrl, log } from '../utils/utils'

export async function registerPatient(formData) {
    const url = createUrl('/patients')
    try {
        const response = await axios.post(url,formData)
        return response
    } catch (ex) {
        return null
    }
}