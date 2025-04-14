
import React, { useState } from 'react';
import { useCart } from '../CartProvider';  // Import the CartContext

const CartPage = () => {
  const { cart, updateCart, removeFromCart, loading, error } = useCart();  
  const [errorState, setErrorState] = useState('');

  const handleQuantityChange = (bookId, newQuantity) => {
    if (newQuantity < 1) {
      setErrorState('Quantity must be at least 1.');
      return;
    }

    setErrorState('');
    updateCart(bookId, newQuantity);  
  };

  const handleRemoveItem = (bookId) => {
    removeFromCart(bookId);  
  };

  if (loading) return <div>Loading...</div>;
  if (error || errorState) return <div>{error || errorState}</div>;

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div key={item.bookId._id} className="cart-item">
              <img src={item.bookId.imageUrl || 'default-image.jpg'} alt={item.bookId.title} width="100" />
              <h5>{item.bookId.title}</h5>
              <p>Price: ₹{item.bookId.price}</p>
              <div>
                <label>Quantity:</label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.bookId._id, parseInt(e.target.value))}
                  min="1"
                />
              </div>
              <button onClick={() => handleRemoveItem(item.bookId._id)}>Remove from Cart</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
