import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Fragrances({ addToCart }) {
    const [fragrances, setFragrances] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products/category/fragrances")
            .then((res) => res.json())
            .then((data) => setFragrances(data))
    }, [])
    return (
        <>
            {fragrances.products?.map((item) => (
                <div className="product-item" key={item.id}>
                    <Link to={`/products/${item.id}`}><img src={item.thumbnail} alt={item.title} /></Link>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>Rating: {item.rating} </p>
                    <p>Price: ${item.price}</p>
                    <button className="btn btn-success" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
            ))}
        </>
    )
}

export default Fragrances