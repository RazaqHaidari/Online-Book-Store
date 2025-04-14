import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookCard from "../components/BookCard";

const GenreBooks = () => {
  const { genre } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooksByGenre = async () => {
      try {
        const response = await fetch(`http://localhost:3000/book/filterBooksByGenre?genre=${genre}`);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books by genre:", error);
      }
    };

    fetchBooksByGenre();
  }, [genre]);

  return (
    <div className="container">
      <h2 className="mt-4">Books in {genre} Genre</h2>
      <div className="row">
        {books.length > 0 ? (
          books.map((book) => <BookCard key={book._id} book={book} />)
        ) : (
          <p>No books found for this genre.</p>
        )}
      </div>
    </div>
  );
};

export default GenreBooks;
