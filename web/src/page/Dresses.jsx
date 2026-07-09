import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Dresses({ addToCart }) {
    const [dresses, setDresses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://dummyjson.com/products/category/womens-dresses");
            const data = await response.json();
            setDresses(data.products || []);
        };
        fetchData();
    }, []);

    return (
        <>
            <header>
                <h2> Womens-Faction</h2>
                <div className="category-links">
                    <ul>
                        <li>
                            <Link to="/dresses">
                                <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=120" alt="Dresses" />
                                <span>Dresses</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/womensshoes">
                                <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=120" alt="Shoes" />
                                <span>Shoes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/womensbags">
                                <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=120" alt="Bags" />
                                <span>Bags</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            <main>
                <div className="wommens-faction">
                    {dresses.map((item) => (
                        <div key={item.id}>
                            <Link to={`/products/${item.id}`}><img src={item.thumbnail} alt={item.title} /></Link>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p>Rating: {item.rating} </p>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => addToCart(item)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Dresses