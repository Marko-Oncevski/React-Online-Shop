const BASE_URL = import.meta.env.VITE_API_URL;

export async function apiClient(endpoint){
    const url = BASE_URL + endpoint;

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Something went wrong");
        }
        return await response.json();

    }catch(e){
        throw e;
    }
}