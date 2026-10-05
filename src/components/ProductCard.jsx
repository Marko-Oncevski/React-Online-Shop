function ProductCard({product, addToCart,selectProduct}){
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

            <button className="details-button" onClick={() => selectProduct(product)}>
                View Details
            </button>
        </div>
    );
}

export default ProductCard