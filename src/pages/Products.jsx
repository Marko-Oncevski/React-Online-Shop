import ProductList from "../components/ProductList";

function Products({ addToCart }) {
    return (
        <section className="products-section">
            <div className="section-title">
                <p className="products-eyebrow">
                    THE COLLECTION
                </p>

                <h2>Find your next favorite.</h2>

                <p className="products-description">
                    Explore our collection of products, discover
                    something new, and find what works for you.
                </p>
            </div>

            <ProductList addToCart={addToCart} />
        </section>
    );
}

export default Products;