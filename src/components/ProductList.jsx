import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";
import { useState } from "react";


function ProductList(){
    const productPerPage = 21;
    const [page,setPage]= useState(1);
    const skip = (page - 1 ) * productPerPage;

    const {loading,error,data} = useFetch(`https://dummyjson.com/products?limit=${productPerPage}&skip=${skip}`);

    const totalPages = data && Math.ceil(data.total / productPerPage);



    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div className="products-grid">
                
                {data && data.products.map(product => {
                    return (
                        <ProductCard 
                        product={product} 
                        key={product.id}
                        
                        />
                    )
                })}
                
                
            </div>
            
            <div className="pagination">
                <p>Page {page} of {totalPages}</p>

                <div className="pagination-buttons">
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                    >
                        Previous
                    </button>

                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>

        </>
    );
}

export default ProductList;