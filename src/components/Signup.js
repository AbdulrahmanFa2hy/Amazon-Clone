import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import loginLogo from "../images/login-logo.png";
import { useAuth } from "../context/GlobalContext";

const Signup = () => {
  const { signup } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("The password does not match");
    }
    try {
      setLoading(true);
      setError("");
      await signup(emailRef.current.value, passwordRef.current.value);
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
        <img className="logo" src={loginLogo} alt="" />
      </div>
      <div className="login-card">
        {error && <p className="error-message">{error}</p>}
        <h1 className="login-header">Signup</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} />
          <label htmlFor="password-confirmation">Password Confirmation</label>
          <input
            type="password"
            id="password-confirmation"
            ref={passwordConfirmationRef}
          />
          <button type="submit" disabled={loading}>
            Create Account
          </button>
        </form>
        <p>Already have an account?</p>
        <Link className="signup" to={"/login"}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Signup;
