import express from "express";
import { createBook, getAllBooks, getBookById, updateBook, deleteBook, searchBook, filterBooksByGenre } from "../controllers/bookController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import   { isAdmin } from "../middleware/adminMiddleware.js"

const router = express.Router();

// Create a new book
router.post("/createBook",authMiddleware, isAdmin, createBook);

// Get all books
router.get("/GetAllBooks",  getAllBooks);

// Get a single book by its ID
router.get("/GetOneBook/:id", getBookById);

// Update a book by its ID
router.put("/UpdateBook",authMiddleware, isAdmin, updateBook);

// Delete a book by its ID
router.delete("/DeleteBook",authMiddleware,isAdmin, deleteBook);

router.get("/searchBook", searchBook)

router.get("/filterBooksByGenre", filterBooksByGenre)

export default router;
