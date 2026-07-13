
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './page/Home'
import Faction from './page/Faction'
import MenFaction from './page/MenFaction'
import Productdeatils from './page/Productdeatils'
import Shirt from './page/Shirt'
import Shoes from './page/Shoes'
import Watches from './page/Watches'
import WommensFaction from './page/WommensFaction'
import Dresses from './page/Dresses'
import Womensshoes from './page/Womensshoes'
import Womensbags from './page/Womensbags'
import Mobile from './page/Mobile'
import Phone from './page/Phone'
import MobileAcc from './page/MobileAcc'
import Electronics from './page/Electronics'
import B from './page/B'
import Fragrances from './page/Fragrances'
import Furniture from './page/Furniture'
import Cart from './page/Cart'
import Groceries from './page/Groceries'
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCartQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header setSearchQuery={setSearchQuery} cart={cart} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} setSearchQuery={setSearchQuery} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} />} />
        <Route path="/Faction" element={<Faction addToCart={addToCart} />} />
        <Route path='/mobile' element={<Mobile addToCart={addToCart} />} />
        <Route path='/phone' element={<Phone addToCart={addToCart} />} />
        <Route path='/mobile-acc' element={<MobileAcc addToCart={addToCart} />} />
        <Route path='/Electronics' element={<Electronics addToCart={addToCart} />}></Route>
        <Route path='/b' element={<B addToCart={addToCart} />}></Route>
        <Route path='/fragrances' element={<Fragrances addToCart={addToCart} />}></Route>
        <Route path='/furniture' element={<Furniture addToCart={addToCart} />}></Route>
        <Route path='/groceries' element={<Groceries addToCart={addToCart} />}></Route>
        <Route path="/MensFaction" element={<MenFaction addToCart={addToCart} />} />
        <Route path='WommensFaction' element={<WommensFaction addToCart={addToCart} />}></Route>
        <Route path="/products/:id" element={<Productdeatils addToCart={addToCart} />} />
        <Route path="/shirt" element={<Shirt addToCart={addToCart} />} />
        <Route path="/shoes" element={<Shoes addToCart={addToCart} />} />
        <Route path="/watches" element={<Watches addToCart={addToCart} />} />
        <Route path='/dresses' element={<Dresses addToCart={addToCart} />}></Route>
        <Route path='/Womensshoes' element={<Womensshoes addToCart={addToCart} />} />
        <Route path='/Womensbags' element={<Womensbags addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

