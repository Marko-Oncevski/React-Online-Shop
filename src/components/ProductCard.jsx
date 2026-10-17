import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useFavorites } from "../hooks/useFavorites";
function ProductCard({product}){
    const {dispatch} = useCart();
    const {favorites,toggleFavorite} = useFavorites()
    const foundFavorite = favorites.find(item => item.id === product.id)
    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="product-image"
                />

                <button
                    type="button"
                    className={`favorite-button ${foundFavorite ? "is-favorite" : ""}`}
                    onClick={() => toggleFavorite(product)}
                    aria-label={
                        foundFavorite
                            ? "Remove from favorites"
                            : "Add to favorites"
                    }
                >
                    {foundFavorite ? "♥" : "♡"}
                </button>
            </div>
            <div className="product-info">
                <h3>{product.title}</h3>
                <p className="product-price">${product.price}</p>
            </div>

            <button className="add-button" onClick={() => dispatch({type: "ADD_ITEM",payload: product})}>
                Add to Cart
            </button>

            <Link to={`/products/${product.id}`} className="details-button">View Details</Link>
        </div>
    );
}

export default ProductCard