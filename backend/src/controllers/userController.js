import User from "../models/User.js";
import {config} from "dotenv"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

config()

export const SignUp = async (req, res) => {
  const body = req.body;

  try {
    const user = await User.findOne({ email: body.email });
    if (user || user !== null) {
      return res.status(403).json({
        msg: "user already exists",
      });
    }



    const hashedPass = await bcrypt.hash(body.password, parseInt(process.env.SALT))
    const response = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      username: body.username,
      email: body.email,
      password: hashedPass,
      role: "user"
    })
    const token = jwt.sign(response._id.toHexString(),process.env.SECRET_KEY)
    res.json({
      token: token,
      username: response.username
    })
  } catch (error) {
    console.log("error while signing up", error);
    return res.status(401).json({
      msg: "error while signing up",
    });
  }
};



export const SignIn = async (req, res) => {
  const body = req.body;

  if (!body.email || !body.password) {
    return res.status(400).json({ msg: "Email and password are required" });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email: body.email });
    
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(body.password, user.password);
    
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // Ensure the user role is fetched correctly
    console.log("User role during sign-in:", user.role);  // Log the role for debugging

    // Generate JWT token with the user ID and role
    const token = jwt.sign(
      { id: user._id, role: user.role },  // Include user ID and role in the payload
      process.env.SECRET_KEY,  // Use your secret key from .env file
      { expiresIn: "1h" }  // Set the token to expire in 1 hour
    );

    // Send the token and user data in the response
    res.json({
      token: token,
      username: user.username,
      role: user.role
    });
  } catch (error) {
    console.log("Error during sign-in:", error);  // Log error for debugging
    return res.status(500).json({
      msg: "Error during sign-in",
    });
  }
};