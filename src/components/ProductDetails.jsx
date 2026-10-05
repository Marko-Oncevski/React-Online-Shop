function ProductDetails({ selectedProduct, setSelectedProduct }) {
    return (
        <div className="product-details">
            <button className="back-button" onClick={() => setSelectedProduct(null)}>
                ← Back to Products
            </button>

            <div className="details-card">
                <div className="details-image">
                    <img src={selectedProduct.images[0]} alt={selectedProduct.title}/>
                </div>

                <div className="details-info">
                    <p className="details-category">
                        {selectedProduct.category}
                    </p>

                    <h2>
                        {selectedProduct.title}
                    </h2>

                    <p className="details-price">
                        ${selectedProduct.price.toFixed(2)}
                    </p>

                    <p className="details-description">
                        {selectedProduct.description}
                    </p>

                    <div className="details-extra">
                        <span>⭐ Rating: {selectedProduct.rating}</span>
                        <span>📦 Stock: {selectedProduct.stock}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;