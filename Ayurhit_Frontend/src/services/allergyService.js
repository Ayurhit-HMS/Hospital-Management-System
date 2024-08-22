import axios from "axios";
import { createUrl } from "../utils/utils";


export const getAllAllergies = async () => {
    try {
        const url = createUrl("/allergy")
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



export const addAllergyDetails = async (chronicCondition) => {
    try {
        const url = createUrl("/patients/allergy")
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