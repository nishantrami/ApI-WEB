import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Electronics({ addToCart }) {
    const [electronics, setElectronics] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products/category/laptops')
            .then(res => res.json())
            .then(data => setElectronics(data.products))
    }, [])
    return (
        <>
            <>
                {electronics.map((item) => (
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
        </>
    )
}

export default Electronics