import { useContext, useState } from "react"
import CartItem from "../components/CartItem"
import { CartContext } from "../context/CartProvider"

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order")
  const { cart, emptyCart } = useContext(CartContext)
  const totalCost = 5.99 * cart.length
  const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

  const cartElements = cart.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  function placeOrder() {
    setButtonText("Ordering...")
    setTimeout(() => {
      console.log("Order placed!")
      setButtonText("Place Order")
      emptyCart()
    }, 3000)
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      {
        cart.length > 0 ?
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div> :
        <p>You have no items in your cart.</p>
      }
    </main>
  )
}

export default Cart
