import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminPage = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin/createBook', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}` 
          }
        });
        setBooks(response.data);
      } catch (error) {
        setError("Error fetching books.");
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/admin/deleteBook/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`  
        }
      });
      setBooks(books.filter(book => book._id !== id));
    } catch (error) {
      setError("Error deleting book.");
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <Link to="/admin/addBook" className="btn btn-primary mb-3">Add New Book</Link>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row">
        {books.map(book => (
          <div key={book._id} className="col-md-4 mb-4">
            <div className="card">
              <img src={book.imageUrl} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <button className="btn btn-danger" onClick={() => handleDelete(book._id)}>Delete</button>
                <Link to={`/admin/editBook/${book._id}`} className="btn btn-warning ms-2">Edit</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
