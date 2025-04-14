import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();  

  const handleLogout = () => {
    localStorage.removeItem('authToken');

    localStorage.removeItem('cart');

    navigate('/login');
  };

  return (
    <button
      className="btn btn-danger"
      onClick={handleLogout}
      style={{ backgroundColor: "#4a148c", color: "white" }}
    >
      Logout
    </button>
  );
};

export default Logout;
