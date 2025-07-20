import { sanityFetch } from "../lib/live";

export const getSale = async () => {
    try {
        const products = await sanityFetch

    } catch (error) {
        console.error("Error fetching sales:", error);
        return []
    }
}