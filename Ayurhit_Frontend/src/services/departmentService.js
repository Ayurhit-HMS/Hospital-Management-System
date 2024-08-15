import axios from "axios";
import { createUrl, log } from '../utils/utils'

export async function getAllDepartments() {
    const url = createUrl('/departments')
    try {
        const response = await axios.get(url)
        return response
    } catch (ex) {
        return null
    }
}