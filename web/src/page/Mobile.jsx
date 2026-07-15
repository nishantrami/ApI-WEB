import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonCard from "../component/SkeletonCard";

function Mobile({ addToCart }) {
    const [mobile, setMobile] = useState([]);
    const [mobileacc, setMobileAcc] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [resMobile, resAcc] = await Promise.all([
                    fetch('https://dummyjson.com/products/category/smartphones').then(r => r.json()),
                    fetch('https://dummyjson.com/products/category/mobile-accessories').then(r => r.json())
                ]);
                setMobile(resMobile.products || []);
                setMobileAcc(resAcc.products || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <header>
                <h2>Mobile & Accessories</h2>
                <div className="category-links">
                    <ul>
                        <li>
                            <Link to="/phone">
                                <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=120" alt="Phone" />
                                <span>Phone</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/mobile-acc">
                                <img src="https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80&w=120" alt="Mobile Accessories" />
                                <span>Mobile Accessories</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            <main>
                <div className="phone">
                    {loading ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <SkeletonCard key={index} />
                        ))
                    ) : (
                        mobile.map((item) => (
                            <div key={item.id}>
                                <Link to={`/products/${item.id}`}><img src={item.thumbnail} alt={item.title} /></Link>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <p>Rating: {item.rating} </p>
                                <p>Price: ${item.price}</p>
                                <button onClick={() => addToCart(item)}>Add to Cart</button>
                            </div>
                        ))
                    )}
                </div>
                <div className="mobile-acc">
                    {loading ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <SkeletonCard key={index} />
                        ))
                    ) : (
                        mobileacc.map((item) => (
                            <div key={item.id}>
                                <Link to={`/products/${item.id}`}><img src={item.thumbnail} alt={item.title} /></Link>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <p>Rating: {item.rating} </p>
                                <p>Price: ${item.price}</p>
                                <button onClick={() => addToCart(item)}>Add to Cart</button>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </>
    )
}

export default Mobile;