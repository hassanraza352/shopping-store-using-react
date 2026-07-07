import {Link} from "react-router-dom"
function TrackingPage({cart}){

function getFormattedDate(days) {
  const date = new Date();

  date.setDate(date.getDate() + days);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
const formattedDate = getFormattedDate(0);
const tomorrow = getFormattedDate(1);
const after3Days = getFormattedDate(3);
const after5Days = getFormattedDate(5);
const after7Days = getFormattedDate(7);

const currentTime = new Date().toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
  return(
<>
<header className="site-header">
  <div className="container">
    <Link to="/" className="logo">URBAN <span>WEAR</span></Link>
    <nav className="main-nav">
      <Link to="/">Home</Link>
      <Link to="/#shop">Shop</Link>
      <Link to="/#categories">Categories</Link>
      <Link to="/#brands">Brands</Link>
    </nav>
    <div className="nav-icons">
      <button aria-label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
      <a href="#" aria-label="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg></a>
      <a href="cart.html" aria-label="Cart">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
        <span className="cart-badge">{cart.length}</span>
      </a>
    </div>
  </div>
</header>
{/* <!-- ===== Page hero ===== --> */}
<section className="track-hero">
  <div className="container">
    <h1>Track Your Order</h1>
    <p>Stay updated with your order status</p>
  </div>
</section>

<div className="container" style={{
  paddingTop: "0",
  paddingBottom: "64px",
}}>

  <div className="order-id-card">
    <div><strong>Order #UW123456789</strong></div>
    <span>Placed on: {formattedDate}</span>
  </div>

  {/* <!-- Progress steps --> */}
  <div className="progress-track">
    <div className="line-fill"></div>
    <div className="step done">
      <div className="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
      <strong>Order Placed</strong><span>{formattedDate}</span>
    </div>
    <div className="step curent">
      <div className="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
      <strong>Processing</strong><span>{tomorrow}</span>
    </div>
    <div className="step curent">
      <div className="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
      <strong>Shipped</strong><span>{after3Days}</span>
    </div>
    <div className="step current">
      <div className="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="6" width="15" height="12" rx="1"/><path d="M16 10h3l3 3v5h-6"/><circle cx="6" cy="18.5" r="1.6"/><circle cx="18.5" cy="18.5" r="1.6"/></svg></div>
      <strong>Out for Delivery</strong><span>{after5Days}</span>
    </div>
    <div className="step">
      <div className="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" opacity=".35"/></svg></div>
      <strong>Delivered</strong><span>{after7Days}</span>
    </div>
  </div>
{/* <!-- Order details + items --> */}
  <div className="track-grid">
    <div className="card">
      <h2>Order Details</h2>
      <div className="detail-row"><span>Customer Name</span><span>Hassan Raza</span></div>
      <div className="detail-row"><span>Email</span><span>hassanraza@email.com</span></div>
      <div className="detail-row"><span>Phone</span><span>+92 312 3456789</span></div>
      <div className="detail-row"><span>Shipping Address</span><span>123 Fashion Street, Lahore, Pakistan</span></div>
    </div>

    <div className="card">
      <h2>Items in Order</h2>

       {cart.map((item) => (
  <div className="order-line" key={item.id}>

    <div className="thumb">
      <img
        src={item.img}
        alt={item.name}
        className="cat-image"
      />
    </div>

    <div className="info">
      <h4>{item.name}</h4>
      <div className="meta">
        Quantity: {item.quantity}
      </div>
    </div>

    <div className="price">
      Rs. {item.price * item.quantity}
    </div>

  </div>
))} 
    </div>
  </div>

  {/* <!-- Tracking timeline --> */}
  <div className="card" style={{ marginBottom: "24px" }}>
    <h2>Tracking Information</h2>

    <div className="status-strip">
      <div><span className="status-label">Current Status:</span><span className="status-value">Out for Delivery</span></div>
      <div className="eta">Estimated Delivery: <strong>June 5, 2026</strong></div>
    </div>

    <div className="timeline">
      <div className="timeline-item">
        <div className="t-date">{formattedDate} · {currentTime}</div>
        <strong>Order Placed</strong>
        <p>Your order has been placed successfully.</p>
      </div>
      <div className="timeline-item pending">
        <div className="t-date">{tomorrow}</div>
        <strong>Processing</strong>
        <p>Your order is being processed.</p>
      </div>
      <div className="timeline-item pending">
        <div className="t-date">{after3Days}</div>
        <strong>Shipped</strong>
        <p>Your order has been shipped.</p>
      </div>
      <div className="timeline-item pending">
        <div className="t-date">{after5Days}</div>
        <strong>Out for Delivery</strong>
        <p>Your order is out for delivery.</p>
      </div>
      <div className="timeline-item pending">
        <div className="t-date">{after7Days} (Expected)</div>
        <strong>Delivered</strong>
        <p>Your order will be delivered soon.</p>
      </div>
    </div>
  </div>

  {/* <!-- Help card --> */}
  <div className="help-card">
    <div>
      <h3>Need Help?</h3>
      <p>If you have any questions about your order, please contact our support team.</p>
    </div>
    <a href="#" className="btn btn-primary">Contact Support</a>
  </div>

</div>
</>
  )
}
export default TrackingPage;