import { useEffect, useState } from "react";

function useFetch(url){
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [data,setData] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            try{
                setLoading(true);
                setError(null);
                const response = await fetch(url);
                if(!response.ok){
                    setError("Something went wrong... Please try again later!");
                    return
                }
                const responseData = await response.json();
                setData(responseData);

            }catch(e){
                setError("Something went wrong... Please try again later!");
            }finally{
                setLoading(false);
            }
        }

        fetchData();
    },[url])

    return {
        loading,
        error,
        data
    }
}

export default useFetch;