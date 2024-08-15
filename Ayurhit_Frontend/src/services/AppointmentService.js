import axios from "axios";
import { createUrl, log } from '../utils/utils'

export async function scheduleNewAppointment(appointment) {
    const url = createUrl('/appointments')
    try {
        const response = await axios.post(url, appointment)
        return response
    } catch (ex) {
        return null
    }
}