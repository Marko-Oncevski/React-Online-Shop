import { useFavorites } from "../hooks/useFavorites";
import ProductCard from "../components/ProductCard";


function Favorites() {
    const { favorites } = useFavorites();

    return (
        <section className="products-section favorites-section">
            <div className="section-title favorites-heading">
                <p className="products-eyebrow">
                    YOUR COLLECTION
                </p>

                <h1>My Favorites</h1>

                <p className="products-description">
                    {favorites.length}{" "}
                    {favorites.length === 1
                        ? "favorite product"
                        : "favorite products"}
                </p>
            </div>

            {favorites.length === 0 ? (
                <div className="favorites-empty">
                    <span className="favorites-empty-icon">♡</span>

                    <h2>No favorites yet</h2>

                    <p>
                        Explore our collection and tap the heart
                        to save products you love.
                    </p>
                </div>
            ) : (
                <div className="products-grid favorites-grid">
                    {favorites.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Favorites;