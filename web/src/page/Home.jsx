import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function Home({ searchQuery, setSearchQuery, addToCart }) {
    const [product, setProduct] = useState([]);


    useEffect(() => {

        const featchData = async () => {
            const url = searchQuery.trim()
                ? `https://dummyjson.com/products/search?q=${searchQuery}`
                : 'https://dummyjson.com/products?limit=100';
            const response = await fetch(url);
            const data = await response.json();
            setProduct(data.products || []);
        }
        featchData();
    }, [searchQuery])

    return (
        <>
            {product.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '80px 20px', color: '#64748b' }}>
                    <h2 style={{ marginBottom: '10px' }}>No products found</h2>
                    <p>We couldn't find any products matching "{searchQuery}". Try a different search term.</p>
                </div>
            ) : (
                product.map((item) => (
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
        </>
    )
}

export default Home