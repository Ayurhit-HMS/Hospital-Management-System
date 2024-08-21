import axios from "axios";
//import { createUrl } from '../utils/utils';
import { createUrl, log } from '../utils/utils'

export async function getDoctors(departmentName) {
    const url = createUrl(`/doctor/dept/${departmentName}`);
    const token = sessionStorage.getItem("jwt");
    try {
        const response = await axios.get(url,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (ex) {
        console.error('Failed to fetch doctors:', ex);
        return null;
    }
}

export async function addDoctor(obj) {
console.log(obj)
const body = obj
const token = sessionStorage.getItem("jwt")
const url = createUrl('/doctor')
try {
const response = await axios.post(url, body, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
console.log(response)
return response
} catch (ex) {
return null
}
}

export async function deleteDoctor(id) {
    const token = sessionStorage.getItem("jwt")
    const url = createUrl(`/doctor/${id}`)

    try {
        const response = await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response)
        return response
        } catch (ex) {
        return null
        }
    
}


