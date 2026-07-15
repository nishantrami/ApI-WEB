import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonCard from "../component/SkeletonCard";

function Faction({ addToCart }) {
    const [mens, setMens] = useState([]);
    const [Wommens, setWommens] = useState([]);
    const [shoes, setShoes] = useState([]);
    const [watches, setWatches] = useState([]);
    const [womensShoes, setWommensShoes] = useState([]);
    const [womensBags, setWommensBags] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const featchData = async () => {
            setLoading(true);
            try {
                const [resMens, resWommens, resShoes, resWatches, resWommensShoes, resWommensBags] = await Promise.all([
                    fetch('https://dummyjson.com/products/category/mens-shirts').then(r => r.json()),
                    fetch('https://dummyjson.com/products/category/womens-dresses').then(r => r.json()),
                    fetch('https://dummyjson.com/products/category/mens-shoes').then(r => r.json()),
                    fetch('https://dummyjson.com/products/category/mens-watches').then(r => r.json()),
                    fetch('https://dummyjson.com/products/category/womens-shoes').then(r => r.json()),
                    fetch('https://dummyjson.com/products/category/womens-bags').then(r => r.json())
                ]);

                setMens(resMens.products || []);
                setWommens(resWommens.products || []);
                setShoes(resShoes.products || []);
                setWatches(resWatches.products || []);
                setWommensShoes(resWommensShoes.products || []);
                setWommensBags(resWommensBags.products || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }
        featchData();
    }, [])
    return (
        <>
            <header>
                <h2>Fashion</h2>
                <div className="category-links">
                    <ul>
                        <li>
                            <Link to="/MensFaction">
                                <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=120" alt="Mens Faction" />
                                <span>Mens-Fashion</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/WommensFaction">
                                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=120" alt="Wommens Faction" />
                                <span>Wommens-Fashion</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>

            <main>
                <div className="mens-faction">
                    {loading ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <SkeletonCard key={index} />
                        ))
                    ) : (
                        mens.map((item) => (
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
                    <div className="shoes">
                        {loading ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <SkeletonCard key={index} />
                            ))
                        ) : (
                            shoes.map((item) => (
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
                    <div className="watches">
                        {loading ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <SkeletonCard key={index} />
                            ))
                        ) : (
                            watches.map((item) => (
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
                </div>

                <div className="wommens-faction">
                    {loading ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <SkeletonCard key={index} />
                        ))
                    ) : (
                        Wommens.map((item) => (
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

                    <div className="womens-shoes">
                        {loading ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <SkeletonCard key={index} />
                            ))
                        ) : (
                            womensShoes.map((item) => (
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

                    <div className="womens-bags">
                        {loading ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <SkeletonCard key={index} />
                            ))
                        ) : (
                            womensBags.map((item) => (
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
                </div>
            </main>
        </>
    )
}
export default Faction