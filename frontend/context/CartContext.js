import React, { createContext, useContext, useEffect, useState } from "react";
import cartService from "../services/cartService";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user]);

  const fetchCart = async () => {
    try {
      const cartData = await cartService.getCart(user.token);
      setCart(cartData);
    } catch (err) {
      console.error(err);
    }
  };

  const addToCart = async (productId, quantity) => {
    try {
      const updatedCart = await cartService.addToCart(
        productId,
        quantity,
        user.token
      );
      setCart(updatedCart);
    } catch (err) {
      console.error(err);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const updatedCart = await cartService.removeFromCart(
        productId,
        user.token
      );
      setCart(updatedCart);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
