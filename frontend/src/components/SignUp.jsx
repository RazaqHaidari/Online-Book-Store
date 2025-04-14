import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");  
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",  
  });

  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    let errors = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "", 
    };

    if (!firstName) {
      errors.firstName = "First name is required";
      valid = false;
    } else if (!/^[a-zA-Z]+$/.test(firstName)) {
      errors.firstName = "First name should contain only letters";
      valid = false;
    }

    if (!lastName) {
      errors.lastName = "Last name is required";
      valid = false;
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
      errors.lastName = "Last name should contain only letters";
      valid = false;
    }

    if (!username) {
      errors.username = "Username is required";
      valid = false;
    } else if (username.length < 3) {
      errors.username = "Username must be at least 3 characters long";
      valid = false;
    }

    if (!email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      valid = false;
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      errors.password = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
      valid = false;
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
      valid = false;
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; 
    }

    try {
      const response = await axios.post("http://localhost:3000/user/signUp", {
        firstName,
        lastName,
        username,
        email,
        password,
      });

      if (response.status === 200) {
        console.log('Signup successful:', response.data);

        localStorage.setItem("authToken", response.data.token);

        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setErrorMessage("User already exists. Please try another email.");
      } else {
        setErrorMessage("An error occurred during signup. Please try again.");
      }
    }
  };

  return (
    <div className="signup-box">
      <h2>Sign Up</h2>

      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {formErrors.firstName && (
            <div className="text-danger">{formErrors.firstName}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {formErrors.lastName && (
            <div className="text-danger">{formErrors.lastName}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {formErrors.username && (
            <div className="text-danger">{formErrors.username}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors.email && (
            <div className="text-danger">{formErrors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {formErrors.password && (
            <div className="text-danger">{formErrors.password}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {formErrors.confirmPassword && (
            <div className="text-danger">{formErrors.confirmPassword}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
