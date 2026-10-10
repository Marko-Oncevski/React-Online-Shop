import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import { useState } from "react";


export function Search({ addToCart }) {
    const [searchParams,setSearchParams] = useSearchParams();
    const query = searchParams.get("q")?.trim() ?? "";
    const { loading, error, data } = useFetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
    );
    const [search,setSearch] = useState(query ?? "");
    function handleSearch(e) {
        e.preventDefault();

        const term = search.trim();

        if (!term) return;

        setSearchParams({ q: term });
    }
    return (
        <section className="products-section">
            <div className="section-title">
                <p className="products-eyebrow">
                    SEARCH
                </p>

                <h2>Search Results</h2>
                {query && (
                    <p className="products-description">
                        Results for "{query}"
                    </p>
                )}
            </div>

            {!query ? null :loading ? (
                <p>Loading products...</p>
            ) : error ? (
                <p>{error}</p>
            ) : data?.products?.length > 0 ? (
                <div className="products-grid">
                    {data.products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            ) : (
                <p>No products found for "{query}".</p>
            )}
        </section>
    );
}