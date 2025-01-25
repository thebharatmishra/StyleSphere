import axios from "axios";

const API_URL = "/api/cart";

// Get user's cart
const getCart = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

// Add item to cart
const addToCart = async (productId, quantity, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    `${API_URL}/add`,
    { productId, quantity },
    config
  );
  return response.data;
};

// Remove item from cart
const removeFromCart = async (productId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/remove/${productId}`, config);
  return response.data;
};

const cartService = { getCart, addToCart, removeFromCart };
export default cartService;
