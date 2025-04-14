import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

 const handleLogin = async (e) => {
    e.preventDefault();
  
    // Simple validation before submitting the form
    if (!email || !password) {
      setErrorMessage("Please fill in both fields");
      return;
    }
  
    try {
      // Send login request to your backend API
      const response = await axios.post("http://localhost:3000/user/signin", {
        email,
        password,
      });
  
      // Log the response data to check if token and role are coming as expected
      console.log(response.data); // Ensure you see the token and role in the response body
  
      // If the login is successful, handle the response (e.g., store a token and role)
      if (response.status === 200) {
        const { token, role } = response.data;
  
        // Make sure the token and role are coming correctly and stored in localStorage
        if (token) {
          localStorage.setItem("authToken", token); // Save token to localStorage
        } else {
          console.error("No token returned in the response");
        }
  
        if (role) {
          localStorage.setItem("userRole", role); // Save role to localStorage
        } else {
          console.error("No role returned in the response");
        }
  
        // Redirect to the appropriate page based on the role
        if (role === "admin") {
          navigate("/admin-dashboard"); // Redirect to admin dashboard
        } else {
          navigate("/"); // Redirect to the home page
        }
      }
    } catch (error) {
      // Handle errors such as invalid credentials or network issues
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid credentials, please try again.");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <section className="login-section text-center py-5" style={{ backgroundColor: "#e1bee7", borderBottom: "1px solid #4a148c" }}>
      <div className="container">
        <h1 className="display-4 mb-4" style={{ color: "#4a148c" }}>Login to Your Account</h1>
        <p className="lead mb-5" style={{ color: "#6a1b9a" }}>Enter your email and password to access the dashboard.</p>

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-lg">
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}
                  <div className="form-group mb-4">
                    <label htmlFor="email" className="text-muted">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        borderColor: "#4a148c",
                        borderRadius: "5px",
                        boxShadow: "none",
                      }}
                      autoComplete="email"  

                    />
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="password" className="text-muted">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        borderColor: "#4a148c",
                        borderRadius: "5px",
                        boxShadow: "none",
                      }}
                      autoComplete="password"  

                    />
                  </div>

                  <button type="submit" className="btn btn-lg btn-dark w-100" style={{ backgroundColor: "#4a148c" }}>
                    Login
                  </button>
                </form>
                <div className="mt-3">
                  <p className="text-muted">Don't have an account? <a href="/signup" style={{ color: "#4a148c" }}>Sign Up</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
