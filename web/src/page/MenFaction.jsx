import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SkeletonCard from "../component/SkeletonCard";

function MenFaction({ addToCart }) {
  const [shirt, setShirt] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [resShirts, resShoes, resWatches] = await Promise.all([
          fetch("https://dummyjson.com/products/category/mens-shirts").then(r => r.json()),
          fetch("https://dummyjson.com/products/category/mens-shoes").then(r => r.json()),
          fetch("https://dummyjson.com/products/category/mens-watches").then(r => r.json())
        ]);
        setShirt(resShirts.products || []);
        setShoes(resShoes.products || []);
        setWatches(resWatches.products || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      <header>
        <h2> Mens-Fashion</h2>
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
        <div className="shirt">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : (
            shirt.map((item) => (
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
      </main>
    </>
  )
}

export default MenFaction;
