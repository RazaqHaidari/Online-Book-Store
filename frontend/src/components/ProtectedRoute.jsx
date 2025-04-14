// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children, requiredRole = "user" }) => {
//   const authToken = localStorage.getItem("authToken");
//   const role = localStorage.getItem("userRole");

//   if (!authToken) {
//     return <Navigate to="/login" />;
//   }

//   if (requiredRole === "admin" && role !== "admin") {
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// export default ProtectedRoute;


import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole = "user", redirectTo = "/login" }) => {
  const authToken = localStorage.getItem("authToken");
  const role = localStorage.getItem("userRole");

  // If there is no authToken, redirect to the login page
  if (!authToken) {
    return <Navigate to={redirectTo} />;
  }

  // If a specific role is required and the user doesn't have the correct role, redirect to an error page or home
  if (requiredRole === "admin" && role !== "admin") {
    return <Navigate to="/not-authorized" />;  // You can change this to any page you prefer
  }

  // If conditions pass, render the child components (protected page)
  return children;
};

export default ProtectedRoute;
