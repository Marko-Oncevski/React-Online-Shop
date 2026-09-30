function ProductCard({product, addToCart}){
    return (
        <div className="product-card">
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">${product.price}</p>
            </div>

            <button className="add-button" onClick={() => addToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard