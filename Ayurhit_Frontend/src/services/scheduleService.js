import axios from "axios";
import { createUrl } from "../utils/utils";



export async function getScheduls(id) {
    const url = createUrl(`/doctor/schedules/${encodeURIComponent(id)}`)
    console.log('Request URL:', url);
    try {
        const response = await axios.get(url, id)
        return response
    } catch (ex) {
        return null
    }
}



export async function updateSchedules(id) {
    const url = createUrl(`/schedules/${encodeURIComponent(id)}`)
    console.log('Request URL:', url);
    try {
        const response = await axios.put(url, id)
        return response
    } catch (ex) {
        return null
    }
}
