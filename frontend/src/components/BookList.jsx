import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookCard from "./BookCard";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const genre = queryParams.get("genre"); // Get selected genre from URL

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let url = "http://localhost:3000/book/filterBooksByGenre";
        if (genre && genre !== "All") {
          url += `?genre=${encodeURIComponent(genre)}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [genre]); // Runs when genre changes

  return (
    <div className="container">
      <h2 className="my-4">{genre ? `Books in ${genre}` : "All Books"}</h2>
      <div className="row">
        {books.length > 0 ? (
          books.map((book) => <BookCard key={book._id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
