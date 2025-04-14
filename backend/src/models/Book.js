import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, "Title should be less than or equal to 100 characters"],
  },
  author: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, "Author name should be less than or equal to 100 characters"],
  },
  genre: {
    type: String,
    required: true,
    enum: ["Fiction","Adventure", "Non-Fiction", "Mystery", "Sci-Fi", "Fantasy", "Biography", "Romance"], // Add other genres if needed
  },
  description: {
    type: String,
    required: true,
    maxlength: [1000, "Description should be less than or equal to 1000 characters"],
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price cannot be less than 0"],
  },
  stock: {
    type: Number,
    required: true,
    min: [0, "Stock cannot be less than 0"],
  },
  imageUrl: {
    type: String,  
    required: true,
  },
  publisher: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, "Publisher name should be less than or equal to 100 characters"],
  },
  publishedDate: {
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    min: [0, "Rating cannot be less than 0"],
    max: [5, "Rating cannot be more than 5"],
    default: 0,
  },
  reviews: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Assuming you have a User model
    comment: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5, required: true },
    createdAt: { type: Date, default: Date.now },
  }],
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);

export default Book;
