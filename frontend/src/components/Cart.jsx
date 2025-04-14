// import React, { useEffect, useState } from 'react';
// import CartItem from './CartItem'; // Adjust path if needed
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Cart = () => {
//   const [cart, setCart] = useState([]);  // Store cart items
//   const [isLoaded, setIsLoaded] = useState(false); // Track loading state
//   const [totalAmount, setTotalAmount] = useState(0); // Store total cart amount

//   // Fetch cart data from localStorage or API (if required)
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || []; // Fetching cart from localStorage
//     setCart(storedCart);
//     calculateTotal(storedCart);
//     setIsLoaded(true);
//   }, []);

//   const calculateTotal = (cartItems) => {
//     let total = 0;
//     cartItems.forEach((item) => {
//       total += item.quantity * item.bookId.price;
//     });
//     setTotalAmount(total);
//   };

//   const removeItemFromCart = (bookId) => {
//     const updatedCart = cart.filter(item => item.bookId._id !== bookId);
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update cart in localStorage
//     calculateTotal(updatedCart);
//   };

//   const updateQuantity = (bookId, quantity) => {
//     const updatedCart = cart.map(item => 
//       item.bookId._id === bookId ? { ...item, quantity: parseInt(quantity) } : item
//     );
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update cart in localStorage
//     calculateTotal(updatedCart);
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Shopping Cart</h2>
//       {isLoaded ? (
//         cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <>
//             {cart.map(item => (
//               <CartItem 
//                 key={item.bookId._id}
//                 item={item}
//                 onRemove={removeItemFromCart}
//                 onUpdateQuantity={updateQuantity}
//               />
//             ))}
//             <hr />
//             <div className="d-flex justify-content-between">
//               <h4>Total: ${totalAmount.toFixed(2)}</h4>
//               <Link to="/checkout" className="btn btn-success">Proceed to Checkout</Link>
//             </div>
//           </>
//         )
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Cart;
