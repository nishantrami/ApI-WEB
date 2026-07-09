import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function Faction({ addToCart }) {
    const [mens, setMens] = useState([]);
    const [Wommens, setWommens] = useState([]);
    const [shoes, setShoes] = useState([]);
    const [watches, setWatches] = useState([]);
    const [womensShoes, setWommensShoes] = useState([]);
    const [womensBags, setWommensBags] = useState([]);

    useEffect(() => {
        const featchData = async () => {
            const response = await fetch('https://dummyjson.com/products/category/mens-shirts');
            const data = await response.json();
            setMens(data.products || []);

            const response2 = await fetch('https://dummyjson.com/products/category/womens-dresses');
            const data2 = await response2.json();
            setWommens(data2.products || []);

            const response3 = await fetch('https://dummyjson.com/products/category/mens-shoes');
            const data3 = await response3.json();
            setShoes(data3.products || []);

            const response4 = await fetch('https://dummyjson.com/products/category/mens-watches');
            const data4 = await response4.json();
            setWatches(data4.products || []);

            const response5 = await fetch('https://dummyjson.com/products/category/womens-shoes');
            const data5 = await response5.json();
            setWommensShoes(data5.products || []);

            const response6 = await fetch('https://dummyjson.com/products/category/womens-bags');
            const data6 = await response6.json();
            setWommensBags(data6.products || []);
        }
        featchData();
    }, [])
    return (
        <>
            <header>
                <h2>Faction</h2>
                <div className="navbar-links">
                    <ul>
                        <li>
                            <Link to="/MensFaction">
                                Mens-Faction
                            </Link>
                        </li>
                        <li>
                            <Link to="/WommensFaction">
                                Wommens-Faction
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>

            <main>
                <div className="mens-faction">
                    {mens.map((item) => (
                        <div key={item.id}>
                            <Link to={`/products/${item.id}`}><img src={item.thumbnail} alt={item.title} /></Link>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p>Rating: {item.rating} </p>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => addToCart(item)}>Add to Cart</button>
                        </div>
                    ))}
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
                    <div className="watches">
                        {watches.map((item) => (
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
                </div>

                <div className="wommens-faction">
                    {Wommens.map((item) => (
                        <div key={item.id}>
                            <Link to={`/products/${item.id}`}><img src={item.thumbnail} alt={item.title} /></Link>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p>Rating: {item.rating} </p>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => addToCart(item)}>Add to Cart</button>
                        </div>
                    ))}

                    <div className="womens-shoes">
                        {womensShoes.map((item) => (
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

                    <div className="womens-bags">
                        {womensBags.map((item) => (
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
                </div>
            </main>
        </>
    )
}
export default Faction