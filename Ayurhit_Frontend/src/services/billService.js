import axios from "axios"
import { createUrl } from "../utils/utils";


export async function generateNewBill(billdetails) {
    console.log(billdetails)
    const url = createUrl('/bill')
    const token = sessionStorage.getItem("jwt")
    try {
        const response = await axios.post(url, billdetails, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response
    } catch (ex) {
        return null
    }
}