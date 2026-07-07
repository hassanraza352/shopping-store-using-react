



function ProductCard({product,addToCart}){
  return(

        <article className="product-card" >

     <div className="product-thumb">

        {product.isNew && <span className="tag">New</span>}

        <button className="wish-btn" aria-label="Add to wishlist">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"/>
          </svg>
        </button>

        <img
          src={product.img}
          alt={product.name}
          className="cat-image"
        />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="meta">{product.description}</p>

        <div className="price-row">
          <span className="price">${product.price}</span>
        </div>

        <button className="add-cart-btn"
         onClick={() => addToCart(product)}
         >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>
          </svg>
          Add to Cart
        </button>
      </div>
    </article>
  )
}
export default ProductCard;