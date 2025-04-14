import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const truncateTitle = (title, wordLimit = 3) => {
  const words = title.split(" ");
  if (words.length <= wordLimit) {
    return title;  
  }
  return words.slice(0, wordLimit).join(" ") + "...";  
};

const truncateDescription = (description, wordLimit = 30) => {
  const words = description.split(" ");
  if (words.length <= wordLimit) {
    return description;
  }
  return words.slice(0, wordLimit).join(" ") + "...";
};

const Hero = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:3000/book/GetAllBooks");
        const data = await response.json();
        console.log("Fetched books:", data); 
        setBooks(data.books);  
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section className="hero-section text-center py-5" style={{ backgroundColor: "#e1bee7", borderBottom: "1px solid #4a148c" }}>
      <div className="container">
        <h1 className="display-4 mb-4" style={{ color: "#4a148c" }}>
          Discover Your Next Favorite Book
        </h1>
        <p className="lead mb-5" style={{ color: "#6a1b9a" }}>
          Explore our wide range of books across various genres.
        </p>

        <div className="row">
          {books.length > 0 ? (
            books.map((book) => (
              <div className="col-md-4 mb-4" key={book._id}>
                <div className="card">
                  <img
                    src={book.imageUrl}
                    className="card-img-top"
                    alt={book.title}
                    style={{
                      width: "100%", 
                      height: "300px",  
                      objectFit: "contain", 
                      objectPosition: "center", 
                      borderBottom: "1px solid #ddd" 
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{
                      fontSize: "1.25rem",
                      color: "#4a148c",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}>
                      {truncateTitle(book.title)} 
                    </h5>
                    <p className="card-text" style={{ color: "#4a148c" }}>
                      {truncateDescription(book.description)} 
                    </p>
                    <Link to={`/book/${book._id}`} className="btn btn-outline-dark">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading books...</p>
          )}
        </div>

        {/* <div className="mt-4">
          <Link to="/shop" className="btn btn-lg btn-dark">Browse More Books</Link>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
