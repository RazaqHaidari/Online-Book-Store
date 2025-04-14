import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={book.imageUrl} className="card-img-top" alt={book.title} />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">{book.author}</p>
          <p className="card-text">{book.price} USD</p>
          <Link to={`/book/${book._id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
