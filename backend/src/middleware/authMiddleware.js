import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

const authMiddleware = (req, res, next) => {
  // Get token from the Authorization header (check for 'Bearer ' prefix)
  const token = req.header('Authorization') && req.header('Authorization').startsWith('Bearer ') ? req.header('Authorization').split(' ')[1] : null;

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.SECRET_KEY);  // Ensure SECRET_KEY is in your .env file
    
    // Attach the decoded user data (including role) to the req.user object
    req.user = decoded; 

    console.log("Decoded user:", req.user);  // Debugging: Log the decoded user to see the contents

    next();  // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Token verification error:", error);  // Log error for debugging
    return res.status(400).json({ message: 'Invalid token.' });
  }
};

export default authMiddleware;
