import axios from "axios"

const BASE_URL = "https://e-commerce-backend-088i.onrender.com";


export const getProductService = async () => {

    try {
        const response = await axios.get(`${BASE_URL}/api/v1/product/get`);
        if(response) {
            return response.data;
        }
    } catch (err) {
        console.error("Error in fetching product data", err);
        throw err;
    }
}


export const productFilter = async (title, category) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/product?title=${title}&category=${category}`);
        if(response) {
            return response.data;
        }
    } catch (err) {
        console.error("Error in fetching product data by title", err);
        throw err;
    }
}