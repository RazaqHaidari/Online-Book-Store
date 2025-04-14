import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/book/searchbook?query=${searchQuery}`);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchBooks();
    }
  }, [searchQuery]);

  return (
    <div className="container mt-4">
      <h2>Search Results for "{searchQuery}"</h2>
      {loading ? (
        <p>Loading...</p>
      ) : books.length > 0 ? (
        <div className="row">
          {books.map((book) => (
            <div key={book._id} className="col-md-3 mb-4">
              <div className="card">
                <img src={book.image} className="card-img-top" alt={book.title} />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.author}</p>
                  <p className="card-text"><strong>Price:</strong> ${book.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default SearchResults;
