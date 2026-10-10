import { Link } from "react-router-dom";
function ProductCard({product, addToCart}){
    return (
        <div className="product-card">
            <img src={product.images[0]}  />
            <div className="product-info">
                <h3>{product.title}</h3>
                <p className="product-price">${product.price}</p>
            </div>

            <button className="add-button" onClick={() => addToCart(product)}>
                Add to Cart
            </button>

            <Link to={`/products/${product.id}`} className="details-button">View Details</Link>
        </div>
    );
}

export default ProductCard