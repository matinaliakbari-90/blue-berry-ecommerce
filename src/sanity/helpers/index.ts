import { sanityFetch } from "../lib/live";
import { PRODUCTS_QUERY, SALE_QUERY } from "./queries";

export const getSale = async () => {
    try {
        const products = await sanityFetch({
            query: SALE_QUERY
        })
        return products?.data || [];
    } catch (error) {
        console.error("Error fetching sales:", error);
        return []
    }
}


export const getAllProducts = async () => {
    try {
        const products = await sanityFetch({
            query: PRODUCTS_QUERY
        })
        return products?.data || [];
    } catch (error) {
        console.error("All products fetching Error:", error);
        return []
    }
}