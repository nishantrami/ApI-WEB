import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import "./Productdeatils.css"

function Productdeatils({ addToCart }) {
    const [product, setProduct] = useState(null); // Changed from [] to null to handle loading state properly
    const { id } = useParams();

    useEffect(() => {
        const featchData = async () => {
            const response = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await response.json();
            setProduct(data)
        }
        featchData();
    }, [id])

    return (
        <div className="product-details-wrapper">
            <Link to="/" className="back-link">← Back to Products</Link>

            {product ? (
                <div className="product-detail-card" key={product.id}>
                    <div className="product-detail-image">
                        <img src={product.thumbnail} alt={product.title} />
                    </div>

                    <div className="product-detail-info">
                        <h2>{product.title}</h2>
                        <p className="description">{product.description}</p>
                        <p className="rating">Rating: ⭐ {product.rating} </p>
                        <p className="discount">Discount: {product.discountPercentage}% OFF</p>
                        <p className="price">Price: ${product.price}</p>
                        <p className="stock">Stock: {product.stock} left</p>
                        <p className="brand">Brand: {product.brand}</p>
                        <p className="category">Category: {product.category}</p>
                        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            ) : (
                <p className="loading">Loading...</p>
            )}
        </div>
    )
}

export default Productdeatils