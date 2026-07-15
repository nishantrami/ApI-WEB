import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"
function Header({ setSearchQuery, cart = [] }) {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = () => {
        setSearchQuery(inputValue);
        if (location.pathname !== "/") {
            navigate("/");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };


    return (
        <>
            <header>
                <div className="navbar">
                    <h1>E-commerce</h1>
                </div>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="cart">
                    <Link to="/cart"><i class="fa-solid fa-cart-shopping" ></i>Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</Link>
                </div>
                <div className="navbar-links">
                    <ul>
                        <li>
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Fashion">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
                                    <path d="M20.38 3.46 16 7.83V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v3.83L3.62 3.46a2 2 0 0 0-2.83 0 2 2 0 0 0 0 2.83l3.47 3.47a2 2 0 0 0 .53.37L7 11.23V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8.77l2.26-1.1a2 2 0 0 0 .53-.37l3.47-3.47a2 2 0 0 0 0-2.83 2 2 0 0 0-2.83 0z" />
                                </svg>
                                Fashion
                            </Link>
                        </li>
                        <li>
                            <Link to="/Mobile">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                    <line x1="12" y1="18" x2="12.01" y2="18" />
                                </svg>
                                Mobile
                            </Link>
                        </li>
                        <li>
                            <Link to="/Electronics">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
                                    <path d="M20 16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12" />
                                    <path d="M2 16h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
                                </svg>
                                Electronics
                            </Link>
                        </li>
                        <li>
                            <Link to="/b">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
                                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
                                </svg>
                                Beauty
                            </Link>
                        </li>
                        <li>
                            <Link to="/fragrances">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
                                    <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V12m4.5 0a4.5 4.5 0 1 1-4.5 4.5M16.5 12H12m-4.5 0A4.5 4.5 0 1 0 12 16.5M7.5 12H12m0 4.5V12" />
                                </svg>
                                Fragrances
                            </Link>
                        </li>
                        <li>
                            <Link to="/furniture">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
                                    <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
                                    <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                                    <path d="M2 11h20" />
                                    <path d="M6 18v2" />
                                    <path d="M18 18v2" />
                                </svg>
                                Furniture
                            </Link>
                        </li>
                        <li>
                            <Link to='/groceries'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <path d="M14 2v6h6" />
                                    <path d="M10 13H8" />
                                    <path d="M16 13h-2" />
                                    <path d="M10 17H8" />
                                    <path d="M16 17h-2" />
                                </svg>
                                Groceries
                            </Link>
                        </li>
                    </ul>
                </div>
            </header >
        </>
    )
}

export default Header