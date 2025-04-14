// adminMiddleware.js
export const isAdmin = (req, res, next) => {
  const userRole = req.user.role;  // Assuming user role is stored in the JWT token
  console.log("User role in isAdmin middleware:", req.user.role);  // Debugging line to see the user role


  if (userRole !='admin') {
    return res.status(403).json({ msg: 'Access denied. Admins only.' });
  }

  next(); // Proceed to the next middleware or route handler
};
