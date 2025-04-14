import Book from "../models/Book.js";

// CREATE: Add a new book correct
export const createBook = async (req, res) => {
  const { title, author, genre, description, price, stock, imageUrl, publisher, publishedDate, rating } = req.body;
  
  try {
    const newBook = new Book({
      title,
      author,
      genre,
      description,
      price,
      stock,
      imageUrl,
      publisher,
      publishedDate,
      rating
    });
    
    await newBook.save();
    res.status(201).json({
      msg: "Book created successfully",
      book: newBook
    });
  } catch (error) {
    console.log("Error while creating book:", error);
    res.status(500).json({
      msg: "Error creating the book",
    });
  }
};

// READ: Get all books correct
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      books,
    });
  } catch (error) {
    console.log("Error while fetching books:", error);
    res.status(500).json({
      msg: "Error fetching books",
    });
  }
};

// READ: Get a single book by its ID done
export const getBookById = async (req, res) => {
  // Extract the book ID from URL parameters
  const { id } = req.params;

  try {
    // Find the book by its ID from the database
    const book = await Book.findById(id);
    
    // If the book is not found, return a 404
    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }
    
    // Return the book details as the response
    res.status(200).json({
      book,
    });
  } catch (error) {
    // Log the error and send a 500 response if there is an issue
    console.log("Error while fetching the book:", error);
    res.status(500).json({
      msg: "Error fetching the book",
    });
  }
};
// UPDATE: Update book details by its ID  done 
// bookController.js
export const updateBook = async (req, res) => {
  const { id, title, author, genre, description, price, stock, imageUrl, publisher, publishedDate, rating } = req.body;

  if (!id) {
    return res.status(400).json({ msg: "Book ID is required" });
  }

  try {
    // Find the book by ID and update it
    const updatedBook = await Book.findByIdAndUpdate(id, {
      title,
      author,
      genre,
      description,
      price,
      stock,
      imageUrl,
      publisher,
      publishedDate,
      rating,
    }, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ msg: "Book not found" });
    }

    res.status(200).json({
      msg: "Book updated successfully",
      book: updatedBook,
    });
  } catch (error) {
    console.log("Error while updating book:", error);
    res.status(500).json({
      msg: "Error updating the book",
    });
  }
};

// DELETE: Delete a book by its ID
export const deleteBook = async (req, res) => {
  const { id } = req.body;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ msg: "Book not found" });
    }

    res.status(200).json({
      msg: "Book deleted successfully",
    });
  } catch (error) {
    console.log("Error while deleting book:", error);
    res.status(500).json({
      msg: "Error deleting the book",
    });
  }
};
export const searchBook = async (req, res) => {
  try {
    const searchQuery = req.query.query; // ✅ Ensure this matches the frontend request
    let books = [];

    if (searchQuery) {
      books = await Book.find({
        $or: [
          { title: { $regex: searchQuery, $options: "i" } },
          { author: { $regex: searchQuery, $options: "i" } }
        ],
      });
    } 

    res.json(books); // ✅ Only return matching books
  } catch (error) {
    console.error("Error searching books:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const filterBooksByGenre = async (req, res) => {
  try {
    const genre = req.query.genre;
    if (!genre) {
      return res.status(400).json({ message: "Genre is required" });
    }

    const books = await Book.find({ genre });
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
