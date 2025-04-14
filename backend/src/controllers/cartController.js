import Cart from "../models/Cart.js";
import Book from "../models/Book.js";
import jwt from "jsonwebtoken"


// export const addToCart = async (req, res) => {
//   const { bookId, quantity } = req.body;
//   const userId = req.user.id; // Assuming you are using JWT authentication

//   try {
//     const book = await Book.findById(bookId);
//     if (!book) {
//       return res.status(404).json({ msg: "Book not found" });
//     }

//     let cart = await Cart.findOne({ userId });

//     // If the cart doesn't exist, create a new one
//     if (!cart) {
//       cart = new Cart({
//         userId,
//         items: []
//       });
//     }

//     // Check if the book is already in the cart
//     const existingItemIndex = cart.items.findIndex(item => item.bookId.toString() === bookId);

//     if (existingItemIndex >= 0) {
//       // Update the quantity if the book already exists
//       cart.items[existingItemIndex].quantity += quantity;
//     } else {
//       // Add the book to the cart
//       cart.items.push({ bookId, quantity });
//     }

//     // Save the cart
//     await cart.save();
//     res.status(201).json({
//       msg: "Book added to cart successfully",
//       cart
//     });
//   } catch (error) {
//     console.log("Error while adding to cart:", error);
//     res.status(500).json({
//       msg: "Error adding to cart",
//     });
//   }
// };

// READ: Get the user's cart


export const addToCart = async (req, res) => {
  // 1. Get the token from the Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');  // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ msg: 'Unauthorized: No token provided' });  // If no token provided, return 401 Unauthorized
  }

  try {
    // 2. Verify the token to extract user information
    const decoded = jwt.verify(token, process.env.SECRET_KEY);  // Verify the token with the secret key
    const userId = decoded.id;  // Get the user ID from the decoded token

    // 3. Fetch the book details from the database
    const { bookId, quantity } = req.body;
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });  // Return 404 if the book doesn't exist
    }

    // 4. Find the user's cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // If no cart exists for the user, create a new cart
      cart = new Cart({
        userId,
        items: []
      });
    }

    // 5. Check if the book is already in the cart
    const existingItemIndex = cart.items.findIndex(item => item.bookId.toString() === bookId);

    if (existingItemIndex >= 0) {
      // If the book already exists in the cart, update its quantity
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Otherwise, add the new book to the cart
      cart.items.push({ bookId, quantity });
    }

    // 6. Save the updated cart
    await cart.save();

    // 7. Return a success response
    res.status(201).json({
      msg: 'Book added to cart successfully',
      cart
    });

  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({
      msg: 'Server error while adding to cart',
    });
  }
};


export const getCart = async (req, res) => {
  const userId = req.user.id;

  try {
    const cart = await Cart.findOne({ userId }).populate("items.bookId"); // Populating book details
    if (!cart) {
      return res.status(404).json({ msg: "Cart is empty" });
    }

    res.status(200).json({
      cart
    });
  } catch (error) {
    console.log("Error while fetching cart:", error);
    res.status(500).json({
      msg: "Error fetching the cart",
    });
  }
};

// UPDATE: Update the quantity of a book in the cart
// export const updateCart = async (req, res) => {
//   const { bookId, quantity } = req.body;
//   const userId = req.user.id;

//   try {
//     const cart = await Cart.findOne({ userId });
//     if (!cart) {
//       return res.status(404).json({ msg: "Cart not found" });
//     }

//     const itemIndex = cart.items.findIndex(item => item.bookId.toString() === bookId);
//     if (itemIndex < 0) {
//       return res.status(404).json({ msg: "Item not found in cart" });
//     }

//     // Update the quantity
//     cart.items[itemIndex].quantity = quantity;

//     // Save the updated cart
//     await cart.save();
//     res.status(200).json({
//       msg: "Cart updated successfully",
//       cart
//     });
//   } catch (error) {
//     console.log("Error while updating cart:", error);
//     res.status(500).json({
//       msg: "Error updating the cart",
//     });
//   }
// };

export const updateCart = async (req, res) => {
  const { bookId, quantity } = req.body;
  const userId = req.user.id;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(item => item.bookId.toString() === bookId);
    if (itemIndex < 0) {
      return res.status(404).json({ msg: "Item not found in cart" });
    }

    // Update the quantity
    cart.items[itemIndex].quantity = quantity;

    // Save the updated cart
    await cart.save();
    res.status(200).json({
      msg: "Cart updated successfully",
      cart
    });
  } catch (error) {
    console.log("Error while updating cart:", error);
    res.status(500).json({
      msg: "Error updating the cart",
    });
  }
};


// DELETE: Remove a book from the cart
export const removeFromCart = async (req, res) => {
  const { bookId } = req.body;
  const userId = req.user.id;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    // Remove the book from the cart
    cart.items = cart.items.filter(item => item.bookId.toString() !== bookId);

    // Save the updated cart
    await cart.save();
    res.status(200).json({
      msg: "Item removed from cart successfully",
      cart
    });
  } catch (error) {
    console.log("Error while removing item from cart:", error);
    res.status(500).json({
      msg: "Error removing the item from cart",
    });
  }
};