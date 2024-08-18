import axios from "axios";
import { createUrl, log } from '../utils/utils'

export async function getAllDepartments() {
    const url = createUrl('/departments')
    const token = sessionStorage.getItem("jwt")
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response
    } catch (ex) {
        return null
    }
}

export async function addDepartment(
    departmentName,
    about
) {
    const body = { departmentName, about}
    const token = sessionStorage.getItem("jwt")
    const url = createUrl('/departments')
    try {
        const response = await axios.post(url, body, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response
    } catch (ex) {
        return null
    }  
}

export async function deleteDepartment(id) {

    const token = sessionStorage.getItem("jwt")
    const url = createUrl(`/departments/${id}`)
    try {
        const response = await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response
    } catch (ex) {
        return null
    }  
    
}