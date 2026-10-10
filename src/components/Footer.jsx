import { Link } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-main">
                    <Link to="/" className="footer-brand">
                        <span className="footer-logo">N</span>
                        <span className="footer-brand-name">Nexora</span>
                    </Link>

                    <p className="footer-description">
                        Discover products, explore your favorites,
                        and enjoy a simpler way to shop.
                    </p>

                    <p className="footer-tagline">
                        Shop smarter. Live better.
                    </p>
                </div>

                <div className="footer-navigation">
                    <h2 className="footer-heading">Explore</h2>

                    <nav aria-label="Footer navigation">
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/about">About Nexora</Link>
                    </nav>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © {currentYear} Nexora. React Capstone Project.
                </p>

                <Link to="/products" className="footer-bottom-link">
                    Explore the store <span aria-hidden="true">→</span>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;