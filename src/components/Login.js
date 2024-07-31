import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import loginLogo from "../images/login-logo.png";
import { useAuth } from "../context/GlobalContext";

const Login = () => {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to Sign in");
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
      <div className="login-card">
        {error && <p className="error-message">{error}</p>}
        <h1 className="login-header">Sign in</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} />
          <button type="submit" disabled={loading}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Fake Clone Conditions of Use and
          Privacy Notice
        </p>
        <Link className="signup" to={"/signup"}>
          Create Your Amazon Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
