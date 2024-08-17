import axios from "axios";
import { createUrl, log } from '../utils/utils'

export async function loginUser(credentials) {
    const url = createUrl('/users/signin')
    try {
        const response = await axios.post(url, credentials)
        console.log(response)
        return response
    } catch (ex) {
        return null
    }
}