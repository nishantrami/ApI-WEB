import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Mobile({ addToCart }) {
    const [mobile, setMobile] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products/category/smartphones')
            .then(res => res.json())
            .then(data => setMobile(data.products));
    }, []);
    return (
        <>
            {mobile.map((item) => (
                <div key={item.id}>
                    <Link to={`/products/${item.id}`}><img src={item.thumbnail} alt={item.title} /></Link>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>Rating: {item.rating} </p>
                    <p>Price: ${item.price}</p>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
            ))}
        </>
    )
}

export default Mobile