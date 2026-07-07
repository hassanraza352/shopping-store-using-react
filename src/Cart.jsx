import "./styles.css"
import {Link} from "react-router-dom"



function CartPage({cart,RemoveFromCart,increase,decrease}){
let shipping;
  const subtotal = cart.reduce((total, item) => {
 return total + (item.price * item.quantity);
}, 0.0);
if(cart.length === 0){
 shipping=0.0
}
else{
   shipping=250
}

const tax = subtotal * 0.05;
const total = subtotal + shipping + tax;
  return(
    <>  
     <header className="cart-header">
  <div className="container">
    <Link to="/" className="logo">URBAN <span>WEAR</span></Link>
    <div className="menu-toggle">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      Menu
    </div>
    <div className="search-box">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" placeholder="Search for products..."/>
    </div>
    <div className="nav-icons">
        <Link to="/" aria-label="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg></Link>
      <a href="#" aria-label="Wishlist"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"/></svg></a>
      <Link to="/cart" aria-label="Cart">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
        <span className="cart-badge">{cart.length}</span>
      </Link>
    </div>
  </div>
</header>

{/* <!-- ===== Cart layout: sidebar + main + summary ===== --> */}
<div className="cart-layout">

  {/* <!-- Sidebar --> */}
  <aside className="cart-sidebar">
    <ul>
      <li><Link to="/"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>Home</Link></li>
      <li><Link to="/#shop"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6l-3-4Z"/><path d="M3 6h18"/><path d="M9 10a3 3 0 0 0 6 0"/></svg>Shop</Link></li>
      <li><Link to="/#categories"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>Categories</Link></li>
      <li><Link to="/#brands"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>Brands</Link></li>
      <li><Link to="/tracking"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="6" width="15" height="12" rx="1"/><path d="M16 10h3l3 3v5h-6"/><circle cx="6" cy="18.5" r="1.6"/><circle cx="18.5" cy="18.5" r="1.6"/></svg>Orders</Link></li>
      <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"/></svg>Wishlist</a></li>
      <li><Link to="/cart" className="active"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>Cart</Link></li>
      <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>Profile</a></li>
      <li><Link to="/"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>Logout</Link></li>
    </ul>

    <div className="sidebar-promo">
      <strong>Get 20% Off now</strong>
      <span>On your first order</span>
      <div className="thumb">
        <img src="brand.jpg" />
      </div>
      <Link to="/#shop" className="btn btn-outline btn-sm" style={{
  borderColor: "white",
  color: "white"
}}
>Shop Now</Link>
    </div>
  </aside>

  {/* <!-- Main cart content --> */}
  <main className="cart-main">
    <h1>Your Cart ({cart.length})</h1>
     
  {cart.map((item) => {
    return (
      <div className="cart-item" key={item.id}>

        <div className="thumb">
          <img src={item.img} alt={item.name} />
        </div>

        <div className="info">
          <h3>{item.name}</h3>
          <p className="meta">{item.description}</p>
        </div>

        <div className="qty-control">
          <button onClick={() => decrease(item.id)}>-</button >
          <span>{item.quantity}</span>
          <button onClick={() => increase(item.id)}>+</button>
        </div>

        <div className="price">
          Rs. {item.price*item.quantity}
        </div>

        <button
       onClick={() => RemoveFromCart(item.id)}
         className="remove-btn" aria-label="Remove item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>

      </div>
    );
  })}

    <div className="cart-actions-row">
      <Link to="/#shop" className="btn btn-outline">← Continue Shopping</Link>
    </div>
    <div className="also-like">
      <h2>You May Also Like</h2>
      <div className="mini-grid">
        <div className="mini-card">
          <div className="thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 4 L4 7 L6 10 L8 8 V20 H16 V8 L18 10 L20 7 L17 4 H14 A2 2 0 0 1 10 4 Z"/></svg></div>
          <div className="info"><h4>Printed Hoodie</h4><div className="price">$54.99</div></div>
        </div>
        <div className="mini-card">
          <div className="thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M8 3 H16 L17 21 H13 L12 12 L11 21 H7 Z"/></svg></div>
          <div className="info"><h4>Cargo Pants</h4><div className="price">$39.99</div></div>
        </div>
        <div className="mini-card">
          <div className="thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 15 a8 8 0 0 1 16 0 Z"/><path d="M2 16 h20"/></svg></div>
          <div className="info"><h4>Cap</h4><div className="price">$14.99</div></div>
        </div>
        <div className="mini-card">
          <div className="thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 17h3l1-3h9l2 3h5"/><path d="M4 17c0 1.7 1.3 3 3 3s3-1.3 3-3"/><path d="M14 17c0 1.7 1.3 3 3 3s3-1.3 3-3"/></svg></div>
          <div className="info"><h4>Sneakers</h4><div className="price">$69.99</div></div>
        </div>
      </div>
    </div>
  </main>

  {/* <!-- Order summary --> */}
  <aside className="order-summary">
    <h2>Order Summary</h2>
    <div className="sum-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
    <div className="sum-row"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
    <div className="sum-row"><span>Tax</span><span>${}{tax.toFixed(2)}</span></div>
    <div className="sum-row total"><span>Total</span><span>{total.toFixed(2)}</span></div>

    <Link to="/tracking" className="btn btn-primary btn-block">Proceed to Checkout</Link>

    <div className="accept-row">
      <span>We accept:</span>
      <div className="pay-icons">
        <span>VISA</span><span>MC</span><span>PayPal</span><span>Amex</span>
      </div>
    </div>

    <ul className="guarantee-list">
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="6" width="15" height="12" rx="1"/><path d="M16 10h3l3 3v5h-6"/><circle cx="6" cy="18.5" r="1.6"/><circle cx="18.5" cy="18.5" r="1.6"/></svg>
        <div><strong>Free Shipping</strong>On orders over $50</div>
      </li>
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/></svg>
        <div><strong>Easy Returns</strong>30-day return policy</div>
      </li>
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        <div><strong>Secure Checkout</strong>100% secure payment</div>
      </li>
    </ul>
  </aside>
</div>

{/* <!-- ===== Footer ===== --> */}
<footer className="site-footer">
  <div className="container">
    <div className="footer-grid">
      <div>
        <h4>About Us</h4>
        <p>Urban Wear is your destination for the latest fashion trends. We offer high-quality clothing for every style.</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#shop">Shop</Link></li>
          <li><Link to="/#categories">Categories</Link></li>
          <li><Link to="/#brands">Brands</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4>Help</h4>
        <ul>
          <li><a href="#">Shipping &amp; Delivery</a></li>
          <li><Link to="/cart">Returns</Link></li>
          <li><a href="#">FAQs</a></li>
          <li><Link to="/tracking">Track Order</Link></li>
          <li><a href="#">Size Guide</a></li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <div className="pay-row"><span>VISA</span><span>PayPal</span><span>MC</span><span>Amex</span></div>
      </div>
    </div>
    <div className="footer-bottom">© 2026 Urban Wear. All rights reserved.</div>
  </div>
</footer></>
  )
}
export default CartPage;