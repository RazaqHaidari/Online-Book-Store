import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../CartProvider';  

const BookDetailPage = () => {
  const { id } = useParams();  
  const [book, setBook] = useState(null);
  const [cartMessage, setCartMessage] = useState("");  
  const navigate = useNavigate();
  const { addToCart } = useCart();  

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/book/GetOneBook/${id}`);
        setBook(response.data.book);  
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBook();
  }, [id]); 

  const handleAddToCart = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setCartMessage("Please log in to add items to your cart.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/cart/addToCart",
        { bookId: book._id, quantity: 1 },  
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCartMessage(response.data.msg);
      console.log("Book added to cart:", response.data.cart);

      addToCart(book);  
    } catch (error) {
      console.error("Error adding book to cart:", error);
      setCartMessage("An error occurred while adding the book to your cart.");
    }
  };

  if (!book) return <div>Loading...</div>;  

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="img-fluid"  
            style={{
              width: '100%', 
              height: 'auto', 
              objectFit: 'contain', 
            }}
          />
        </div>

        <div className="col-md-7">
          <h2 className="book-title" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4a148c' }}>
            {book.title}
          </h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Publisher:</strong> {book.publisher}</p>
          <p><strong>Published Date:</strong> {new Date(book.publishedDate).toLocaleDateString()}</p>

          <div>
            <strong>Description:</strong>
            <p>{book.description}</p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <p><strong>Price:</strong> ₹{book.price}</p>
            <p><strong>Stock:</strong> {book.stock} available</p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <p><strong>Rating:</strong> {book.rating} / 5</p>
            <button onClick={handleAddToCart} className="btn btn-success">Add to Cart</button>
          </div>

          {cartMessage && <div className="alert alert-info mt-3">{cartMessage}</div>}
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;

