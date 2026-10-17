import { createContext ,useState,useEffect} from "react";
export const FavoritesContext = createContext();

export function FavoritesProvider({children}){
    const [favorites,setFavorites] = useState(()=>{
        const savedItems = localStorage.getItem("nexora-favorites")
        if(savedItems) return JSON.parse(savedItems);
        return []
    })

    useEffect(()=> {
        localStorage.setItem("nexora-favorites",JSON.stringify(favorites))
    },[favorites])

    function toggleFavorite(product){
        const foundFavorite = favorites.find(item => item.id === product.id)
        if(foundFavorite){
            setFavorites(favorites.filter(item => item.id !== product.id))
        } else {
            setFavorites([...favorites,product])
        }
    }

    return (
        <FavoritesContext.Provider value={{toggleFavorite,favorites}}>
            {children}
        </FavoritesContext.Provider>
    );
}