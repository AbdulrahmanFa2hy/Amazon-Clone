import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./logout.css";
import loginLogo from "../images/login-logo.png";
import { useAuth } from "../context/GlobalContext";

const Logout = () => {
  const { logout, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      await logout();
      navigate("/");
    } catch {
      setError("Failed to Logout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="continaer">
      <div className="login-logo">
        <Link to={"/"}>
          <img className="logo" src={loginLogo} alt="" />
        </Link>
      </div>
      <div className="logout-card">
        {error && <p className="error-message">{error}</p>}
        <h1 className="login-header">Logout!</h1>
        <p>{currentUser && currentUser.email}</p>
        <button onClick={handleLogout} disabled={loading}>
          click to logout
        </button>
        <Link to={"/"}>cancel</Link>
      </div>
    </div>
  );
};

export default Logout;
