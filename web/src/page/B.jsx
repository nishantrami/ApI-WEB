import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SkeletonCard from "../component/SkeletonCard"


function B({ addToCart }) {
    const [beauty, setBeauty] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch("https://dummyjson.com/products/category/beauty")
            .then((res) => res.json())
            .then((data) => {
                setBeauty(data)
                setLoading(false)
            })
            .catch(err => {
                console.error("Error fetching data:", err)
                setLoading(false)
            })
    }, [])
    return (
        <>
            {loading ? (
                Array.from({ length: 8 }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))
            ) : (
                beauty.products?.map((item) => (
                    <div className="product-item" key={item.id}>
                        <Link to={`/products/${item.id}`}><img src={item.thumbnail} alt={item.title} /></Link>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>Rating: {item.rating} </p>
                        <p>Price: ${item.price}</p>
                        <button className="btn btn-success" onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))
            )}
        </>
    )
}

export default B