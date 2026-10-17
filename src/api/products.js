import { apiClient } from "./client";
export const products = { 
    search(query){
        return apiClient(`/products/search?q=${encodeURIComponent(query)}`)
    }
 }