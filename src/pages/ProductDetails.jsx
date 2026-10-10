import { useParams,useNavigate,Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
function ProductDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const {loading,error,data} = useFetch(`https://dummyjson.com/products/${id}`);
    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
    
    return (
        <div className="product-details">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link to="/">Home</Link>

                <span className="breadcrumb-separator">/</span>

                <Link to="/products">Products</Link>

                <span className="breadcrumb-separator">/</span>

                <span className="breadcrumb-current" aria-current="page">
                    {data.title}
                </span>
            </nav>
            <button className="back-button" onClick={() => navigate(-1)}>
                ← Back to Products
            </button>

            <div className="details-card">
                <div className="details-image">
                    <img src={data.images[0]} alt={data.title}/>
                </div>

                <div className="details-info">
                    <p className="details-category">
                        {data.category}
                    </p>

                    <h2>
                        {data.title}
                    </h2>

                    <p className="details-price">
                        ${data.price.toFixed(2)}
                    </p>

                    <p className="details-description">
                        {data.description}
                    </p>

                    <div className="details-extra">
                        <span>⭐ Rating: {data.rating}</span>
                        <span>📦 Stock: {data.stock}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;