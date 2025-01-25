import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (!cart) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.items.map((item) => (
          <li key={item.product._id}>
            <h2>{item.product.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.product.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.product._id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h3>
        Total: $
        {cart.items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        )}
      </h3>
    </div>
  );
};

export default Cart;
