// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom';  // Use BrowserRouter here
import { CartProvider } from './CartProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider> {/* Wrap your App with CartProvider */}
    <Router> {/* Use BrowserRouter here */}
      <App />
    </Router>
  </CartProvider>
);
