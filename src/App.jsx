import Mainpage from "./index.jsx"
import CartPage from "./Cart.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import TrackingPage from "./Tracking.jsx";



function App() {
    const [cart, setCart] = useState([]);
    function RemoveFromCart(id) {
  setCart(cart.filter((item) => item.id !== id));
}
  function increase(id) {

  const updatedCart = cart.map((item) => {

    if (item.id === id) {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }

    return item;
  });

  setCart(updatedCart);
}
function decrease(id) {

  const updatedCart = cart
    .map((item) => {

      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    })
    .filter((item) => item.quantity > 0);

  setCart(updatedCart);
}
  return(
 <BrowserRouter>

      <Routes>
      <Route path="/" element={<Mainpage 
       cart={cart}
    setCart={setCart}
    />} />

        <Route
  path="/cart"
  element={
    <CartPage
      cart={cart}
      RemoveFromCart={RemoveFromCart}
      increase={increase}
      decrease={decrease}
    />


      }
/>
      <Route
      path="/tracking"
  element={
    <TrackingPage
    cart={cart}
    />
  }

      />

      </Routes>

    </BrowserRouter>
  )
}

export default App
