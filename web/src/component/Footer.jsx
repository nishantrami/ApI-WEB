import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer>
            <div className="footer-container">
                {/* Brand Column */}
                <div className="footer-col">
                    <h3>E-commerce</h3>
                    <p>
                        Your online destination for fashion, electronics, beauty, furniture, and groceries. Experience shopping redefined.
                    </p>
                </div>

                {/* Categories Column */}
                <div className="footer-col">
                    <h3>Shop</h3>
                    <ul>
                        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                        <li><Link to="/Fashion" onClick={handleLinkClick}>Fashion</Link></li>
                        <li><Link to="/Mobile" onClick={handleLinkClick}>Mobile</Link></li>
                        <li><Link to="/Electronics" onClick={handleLinkClick}>Electronics</Link></li>
                        <li><Link to="/b" onClick={handleLinkClick}>Beauty</Link></li>
                        <li><Link to="/groceries" onClick={handleLinkClick}>Groceries</Link></li>
                    </ul>
                </div>

                {/* Contact/Support Column */}
                <div className="footer-col">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="#about" onClick={(e) => e.preventDefault()}>About Us</a></li>
                        <li><a href="#contact" onClick={(e) => e.preventDefault()}>Contact Support</a></li>
                        <li><a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
                        <li><a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright, Social Icons, and Back to Top */}
            <div className="footer-bottom">
                <p>© 2026 E-commerce. All rights reserved.</p>
                
                {/* Social Icons */}
                <div className="footer-social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>

                {/* Back to Top Button */}
                <button onClick={handleLinkClick} className="back-to-top-btn" aria-label="Scroll to top">
                    <i className="fa-solid fa-arrow-up"></i> Back to Top
                </button>
            </div>
        </footer>
    );
}

export default Footer;
