import { products } from "./data";
import ProductCard from "./ProductCard";

function ProductList({addToCart}){
    return (
        <div className="products-grid">
            {products.map(product => {
                return (
                    <ProductCard 
                    product={product} 
                    addToCart={addToCart} 
                    key={product.id}
                    />
                )
            })}
        </div>
    );
}

export default ProductList;