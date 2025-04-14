import express from "express"
import { getCart,addToCart,removeFromCart,updateCart } from "../controllers/cartController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
// Route to get the cart
router.get('/getCart',authMiddleware, getCart);

// Route to add an item to the cart
router.post('/addToCart', authMiddleware, addToCart);

// Route to remove an item from the cart
router.delete('/removeFromCart', authMiddleware, removeFromCart);

// Route to update the quantity of an item in the cart
router.put('/updateCart',authMiddleware, updateCart);

export default router
