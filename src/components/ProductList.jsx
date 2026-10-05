import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";
import { useState } from "react";

function ProductList({addToCart,selectProduct}){
    const {loading,error,data} = useFetch("https://dummyjson.com/products");
    const [search,setSearch] = useState("");
    const filteredProducts = data && data.products.slice(0,10).filter(product=> product.title.toLowerCase().includes(search.toLowerCase()))


    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <input
                className="search-input" type="text" placeholder="Search products..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            
            <div className="products-grid">
                
                
                {filteredProducts && filteredProducts.map(product => {
                    return (
                        <ProductCard 
                        product={product} 
                        addToCart={addToCart} 
                        key={product.id}
                        selectProduct={selectProduct}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default ProductList;