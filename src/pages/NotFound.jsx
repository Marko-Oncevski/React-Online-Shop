import { Link } from "react-router-dom";
function NotFound(){
    return (
        <div>
            <h1>Page not found </h1>
            <p>Error 404</p>
            <Link to="/" className="back-button">Back to Home</Link>
        </div>
    );
}

export default NotFound;