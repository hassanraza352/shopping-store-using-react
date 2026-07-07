import "./styles.css"
import Products from "./product"
import { useState } from "react"
import ProductCard from "./components/ProductCard"


function Mainpage(){

  const [cart, setCart] = useState([]);
  const menProducts = Products.filter(
  (product) => product.category === "men"
);
  const womenProducts = Products.filter(
  (product) => product.category === "women"
);
  const clothesProducts = Products.filter(
  (product) => product.category === "clothes"
);
  const tshirtsProducts = Products.filter(
  (product) => product.category === "tshirt"
);
  const hoodiesProducts = Products.filter(
  (product) => product.category === "hoodies"
);
 const jeansProducts = Products.filter(
  (product) => product.category === "jeans"
);
 const newarrivalProducts = Products.filter(
  (product) => product.category === "newarrival"
);

function addToCart(product) {
  setCart([...cart, product]);
}
  return(

     <>
<div className="topbar">
  <div className="container">
    <span>Free shipping on all orders over $50</span>
    <span>Need help? +92 312 3456789</span>
  </div>
</div>

<header className="site-header">
  <div className="container">
    <a href="index.html" className="logo">URBAN <span>WEAR</span></a>

    <nav className="main-nav">
      <a href="index.html" className="active">Home</a>
      <a href="#shop">Shop</a>
      <a href="#categories">Categories</a>
      <a href="#brands">Brands</a>
      <a href="#about">About Us</a>
      <a href="#contact">Contact</a>
    </nav>

    <div className="nav-icons">
      <button aria-label="Search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </button>
      <a href="#" aria-label="Account">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>
      </a>
      <a href="cart.html" aria-label="Go to cart">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
        <span className="cart-badge">{cart.length}</span>
      </a>
    </div>
  </div>
</header>

<section className="hero">
  <div className="container">
    <div className="hero-copy">
      <img width="50%" src="image.jpg" alt="Urban Wear Collection" className="hero-image" />
      <span className="eyebrow">New Season Collection</span>
      <h1>Upgrade Your Style</h1>
      <p>Discover the latest trends in clothing. Look good, feel great.</p>
      <a href="#shop" className="btn btn-primary">Shop Now</a>
     </div>
    <div className="hero-visual">   
      <img src="2nd_image.jpg" alt="Urban Wear Collection" className="hero-image.jpg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2"style={{ color: "#e4e2dd" }}/>
  </div>
  </div> 
</section>

<section className="perks">
  <div className="container">
    <div className="perk">
      <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="6" width="15" height="12" rx="1"/><path d="M16 10h3l3 3v5h-6"/><circle cx="6" cy="18.5" r="1.6"/><circle cx="18.5" cy="18.5" r="1.6"/></svg></div>
      <div><strong>Free Shipping</strong><span>On orders over $50</span></div>
    </div>
    <div className="perk">
      <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/></svg></div>
      <div><strong>Easy Returns</strong><span>30-day return policy</span></div>
    </div>
    <div className="perk">
      <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
      <div><strong>Secure Payment</strong><span>100% secure checkout</span></div>
    </div>
    <div className="perk">
      <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></div>
      <div><strong>24/7 Support</strong><span>We're here to help</span></div>
    </div>
  </div>
</section>

 {/* categories */}
 <section className="section" id="categories">
  <div className="container">
    <div className="section-head">
      <h2>Shop by Category</h2>
      <p>Find exactly what you're looking for</p>
    </div>
    <div className="cat-grid">
      <a href="#mens" className="cat-card">
        <div className="cat-thumb"><img src="men.jpg" alt="Men" className="cat-image"/></div>
        <span>Men</span>
      </a>
      <a href="#women" className="cat-card">
        <div className="cat-thumb">
          <img src="women.jpg" alt="Women" className="cat-image"/>
        </div>
        <span>Women</span>
      </a>
      <a href="#hoodies" className="cat-card">
        <div className="cat-thumb"><img src="hoodie.jpg" alt="hoodies" className="cat-image"/></div>
        <span>Hoodies</span>
      </a>
      <a href="shirts" className="cat-card">
        <div className="cat-thumb"><img src="tshirt.jpg" alt="T-shirt" className="cat-image"/></div>
        <span>T-Shirts</span>
      </a>
      <a href="#jeans" className="cat-card">
        <div className="cat-thumb">
          <img src="jeans.jpg" alt="jeans" className="cat-image"/>
</div>
        <span>Jeans</span>
      </a>
      <a href="#clothes" className="cat-card">
        <div className="cat-thumb">
          <img src="clothes.jpg" alt="clothes" className="cat-image"/>
        </div>
        <span>clothes</span>
      </a>
    </div>
  </div>
</section>

 {/* popular brands */}
<section className="section" id="brands" style={{
  background: "var(--white)",
  borderTop: "1px solid var(--gray-200)",
  borderBottom: "1px solid var(--gray-200)",
}}>
  <div className="container">
    <div className="section-head"><h2>Popular Brands</h2></div>
    <div className="brand-row">
      <span>ZARA</span>
      <span>H&amp;M</span>
      <span>NIKE</span>
      <span>ADIDAS</span>
      <span>PULL&amp;BEAR</span>
      <span>LEVI'S</span>
    </div>
  </div>
</section>

 {/*<!-- ===== New Arrivals / Shop ===== -->*/}

<section className="section" id="shop">
  <div className="container">
    <div className="section-head">
      <h2>New Arrivals</h2>
      <p>Fresh styles added weekly — add your favorites to the cart</p>
    </div>

    <div className="product-grid">
  {newarrivalProducts.map((product) => (
    <ProductCard 
    key={product.id}
    product={product}
    addToCart={addToCart}
     />
  ))}
</div>
  </div>
</section>



 {/* <!-- mens section --> */}

<section className="section" id="mens">
  <h2>Mens collection</h2>
  <div className="container">

   <div className="product-grid">
  {menProducts.map((product) => (
    <ProductCard 
    key={product.id}
    product={product} 
    addToCart={addToCart}
    />
  ))}
</div>
  </div>
</section>
  
{/* <!-- womens --> */}
 <section className="section" id="women">
   <h2>Womens collection</h2>
  <div className="container">

    <div className="product-grid">
  {womenProducts.map((product) => (
   <ProductCard 
    key={product.id}
    product={product} 
    addToCart={addToCart}
    />
  ))}
</div>
  </div>
</section>

{/* <!-- hoodies --> */}
  <section className="section" id="hoodies">
     <h2>hoodies collection</h2>
  <div className="container">

  <div className="product-grid">
  {hoodiesProducts.map((product) => (
    <ProductCard 
    key={product.id}
    product={product}
    addToCart={addToCart} />
  ))}
</div>
  </div>
</section>

{/* <!-- shirts --> */}
  <section className="section" id="shirts">
     <h2>T-shirts collection</h2>
  <div className="container">

   <div className="product-grid">
  {tshirtsProducts.map((product) => (
   <ProductCard 
    key={product.id}
    product={product} 
    addToCart={addToCart}/>
  ))}
</div>
  </div>
</section>
{/* <!-- jeans --> */}
  <section className="section" id="jeans">
     <h2>Jeans collection</h2>
  <div className="container">

   <div className="product-grid">
  {jeansProducts.map((product) => (
    <ProductCard 
    key={product.id}
    product={product} 
    addToCart={addToCart}/>
  ))}
</div>
  </div>
</section>
{/* <!-- clothes --> */}
 <section className="section" id="clothes">
   <h2>Clothes collection</h2>
  <div className="container">

  <div className="product-grid">
  {clothesProducts.map((product) => (
     <ProductCard 
    key={product.id}
    product={product} 
    addToCart={addToCart}/>
  ))}
</div>
  </div>
</section>


{/* <!-- ===== Promo banner ===== --> */}
<section className="section" style={{ paddingTop: 0 }}>
  <div className="container">
    <div className="promo-banner">
      <div>
        <h3>Get 20% Off Your First Order</h3>
        <p>Sign up for our newsletter and start saving today.</p>
      </div>
      <a href="#shop" className="btn btn-primary">Shop Now</a>
    </div>
  </div>
</section>

{/* <!-- ===== Footer ===== --> */}
<footer className="site-footer" id="about" id="contact">
  <div className="container">
    <div className="footer-grid">
      <div>
        <h4>About Us</h4>
        <p>Urban Wear is your destination for the latest fashion trends. We offer high-quality clothing for every style.</p>
        <div className="social-row">
          <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-9h3l.5-4H13V7c0-1.2.3-2 2-2h2V1.2C16.6 1 15.4 1 14 1c-3 0-5 1.8-5 5v3H6v4h3v9h4Z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
          <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.6A11.4 11.4 0 0 1 3.7 4.6a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 3.9c-.6.1-1.2.2-1.8.1a4 4 0 0 0 3.7 2.7A8 8 0 0 1 2 18.4a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.3-6 11.3-11.3v-.5c.8-.6 1.4-1.3 1.9-2.1Z"/></svg></a>
          <a href="#" aria-label="Pinterest"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.6 19.3c0-.8-.1-2 .1-2.9l1.3-5.6s-.3-.7-.3-1.6c0-1.5.9-2.7 2-2.7.9 0 1.4.7 1.4 1.6 0 1-.6 2.4-.9 3.8-.3 1.1.6 2.1 1.7 2.1 2.1 0 3.5-2.6 3.5-5.8 0-2.4-1.6-4.2-4.6-4.2-3.3 0-5.4 2.5-5.4 5.3 0 1 .3 1.6.7 2.2.2.2.2.3.1.6l-.3 1c-.1.3-.3.4-.6.3-1.6-.7-2.4-2.5-2.4-4.6 0-3.4 2.9-7.5 8.6-7.5 4.6 0 7.6 3.3 7.6 6.9 0 4.7-2.6 8.2-6.4 8.2-1.3 0-2.5-.7-2.9-1.4l-.8 3.2c-.3 1-.9 2.3-1.3 3.1A10 10 0 1 0 12 2Z"/></svg></a>
        </div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#brands">Brands</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Help</h4>
        <ul>
          <li><a href="#">Shipping &amp; Delivery</a></li>
          <li><a href="cart.html">Returns</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="tracking.html">Track Order</a></li>
          <li><a href="#">Size Guide</a></li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <p>Stay up to date with our latest drops and offers.</p>
        <div className="pay-row">
          <span>VISA</span><span>PayPal</span><span>MC</span><span>Amex</span>
        </div>
      </div>
    </div>
    <div className="footer-bottom">© 2026 Urban Wear. All rights reserved.</div>
  </div>
</footer>
     </>
  )
}
export default Mainpage;