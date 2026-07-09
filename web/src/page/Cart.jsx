import { Link } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, updateCartQuantity, removeFromCart }) {
    // Dynamic calculation of order totals
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal > 150 ? 0 : (cart.length > 0 ? 15 : 0);
    const tax = subtotal * 0.08; // 8% estimated tax
    const total = subtotal + shipping + tax;

    return (
        <div className="cart-page-container">
            <Link to="/" className="cart-back-link">
                <svg className="back-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back to Shopping
            </Link>

            <h1 className="cart-page-title">Shopping Cart</h1>

            {cart.length === 0 ? (
                <div className="cart-empty-state">
                    <div className="cart-empty-icon">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </div>
                    <h3>Your cart is empty</h3>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/" className="cart-empty-btn">Start Shopping</Link>
                </div>
            ) : (
                <div className="cart-content-layout">
                    {/* Left Column: Cart Items List */}
                    <div className="cart-items-section">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item-card">
                                <div className="cart-item-image-wrapper">
                                    <img src={item.thumbnail} alt={item.title} />
                                </div>
                                <div className="cart-item-details">
                                    <div className="cart-item-header">
                                        <h3 className="cart-item-title">{item.title}</h3>
                                        <button 
                                            className="cart-item-delete-btn" 
                                            onClick={() => removeFromCart(item.id)} 
                                            title="Remove item"
                                            aria-label="Remove item from cart"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="cart-item-pricing-grid">
                                        <div className="cart-item-price-info">
                                            <span className="price-label">Price</span>
                                            <span className="price-value">${item.price.toFixed(2)}</span>
                                        </div>
                                        <div className="cart-item-qty-info">
                                            <span className="qty-label">Quantity</span>
                                            <div className="qty-stepper">
                                                <button 
                                                    className="qty-btn qty-minus" 
                                                    onClick={() => updateCartQuantity(item.id, item.quantity - 1)} 
                                                    disabled={item.quantity <= 1}
                                                    aria-label="Decrease quantity"
                                                >
                                                    -
                                                </button>
                                                <span className="qty-value">{item.quantity}</span>
                                                <button 
                                                    className="qty-btn qty-plus" 
                                                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                                    aria-label="Increase quantity"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cart-item-total-info">
                                            <span className="total-label">Total</span>
                                            <span className="total-value">${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="cart-summary-section">
                        <div className="cart-summary-card">
                            <h2>Order Summary</h2>
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                            </div>
                            <div className="summary-row">
                                <span>Estimated Tax (8%)</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="summary-divider"></div>
                            <div className="summary-row summary-total">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            <button className="checkout-btn">
                                Proceed to Checkout
                                <svg className="checkout-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>

                            <div className="secure-checkout-badge">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                                Secure 256-bit SSL Checkout
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;