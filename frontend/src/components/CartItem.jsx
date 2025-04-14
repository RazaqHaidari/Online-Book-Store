// import React from 'react';

// const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
//   return (
//     <div className="row align-items-center mb-3">
//       <div className="col-md-3">
//         <img src={item.bookId.imageUrl} alt={item.bookId.title} className="img-fluid" />
//       </div>
//       <div className="col-md-6">
//         <h5>{item.bookId.title}</h5>
//         <p>{item.bookId.author}</p>
//         <p>Price: ${item.bookId.price.toFixed(2)}</p>
//       </div>
//       <div className="col-md-3">
//         <input
//           type="number"
//           value={item.quantity}
//           min="1"
//           className="form-control"
//           onChange={(e) => onUpdateQuantity(item.bookId._id, e.target.value)}
//         />
//         <button className="btn btn-danger mt-2" onClick={() => onRemove(item.bookId._id)}>
//           Remove
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartItem;
