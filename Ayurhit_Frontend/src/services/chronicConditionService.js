import axios from "axios";
import { createUrl } from "../utils/utils";


export const getAllChronicConditions = async () => {
    try {
        const url = createUrl("/chronicCondition")
        const token = sessionStorage.getItem("jwt")
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        console.error("Failed to update patient details", error);
        throw error;
    }
};



export const addChronicConditionDetails = async (chronicCondition) => {
    try {
        const url = createUrl("/patients/chronicCondition")
        const token = sessionStorage.getItem("jwt")
        const response = await axios.post(url, chronicCondition, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        console.error("Failed to update patient details", error);
        throw error;
    }
};