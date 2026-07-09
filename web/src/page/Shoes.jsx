import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shoes({ addToCart }) {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://dummyjson.com/products/category/mens-shoes");
            const data = await response.json();
            setShoes(data.products || []);
        };
        fetchData();
    }, []);
    return (
        <>
            <header>
                <h2> Mens-Faction</h2>
                <div className="category-links">
                    <ul>
                        <li>
                            <Link to="/shirt">
                                <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=120" alt="Shirt" />
                                <span>Shirt</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Shoes">
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=120" alt="Shoes" />
                                <span>Shoes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Watches">
                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=120" alt="watches" />
                                <span>watches</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            <main>
                <div className="shoes">
                    {shoes.map((item) => (
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

export default Shoes