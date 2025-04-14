import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Create a Cart Context
const CartContext = createContext();

// CartProvider component to provide cart state to other components
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch cart from backend when the app starts
  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) return;

      try {
        const response = await axios.get('http://localhost:3000/cart/getcart', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCart(response.data.cart.items);  // Set the cart items
      } catch (err) {
        console.error('Error fetching cart:', err);
        setError('Error fetching cart.');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  // Add book to the cart
  // const addToCart = (book) => {
  //   setCart((prevCart) => [...prevCart, book]); // Directly update the cart state
  // };
// In CartProvider.js

// Add book to the cart
const addToCart = (book) => {
  setCart((prevCart) => {
    const existingBookIndex = prevCart.findIndex((item) => item.bookId._id === book._id);
    if (existingBookIndex >= 0) {
      const updatedCart = [...prevCart];
      updatedCart[existingBookIndex].quantity += 1;
      return updatedCart;
    } else {
      return [...prevCart, { bookId: book, quantity: 1 }];
    }
  });
};


  // Update cart item quantity
  const updateCart = async (bookId, quantity) => {
    const token = localStorage.getItem('authToken');
    if (!token) return setError('You need to log in to update the cart.');

    try {
      // Call the backend to update the quantity
      const response = await axios.put(
        'http://localhost:3000/cart/updatecart',
        { bookId, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the cart state immediately with the new data
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.bookId._id === bookId ? { ...item, quantity } : item
        )
      );

      setError(''); // Clear any previous error on success
    } catch (err) {
      console.error('Error updating cart:', err);
      setError('Error updating cart.');
    }
  };

  // Remove item from the cart
  const removeFromCart = async (bookId) => {
    const token = localStorage.getItem('authToken');
    if (!token) return setError('You need to log in to remove the item.');

    try {
      // Call the backend to remove the item
      await axios.delete('http://localhost:3000/cart/removefromcart', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { bookId },
      });

      // Update the cart state by removing the item
      setCart((prevCart) => prevCart.filter((item) => item.bookId._id !== bookId));

      setError(''); // Clear any previous error on success
    } catch (err) {
      console.error('Error removing item from cart:', err);
      setError('Error removing item from cart.');
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, removeFromCart, loading, error }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext in components
export const useCart = () => {
  return useContext(CartContext);
};
