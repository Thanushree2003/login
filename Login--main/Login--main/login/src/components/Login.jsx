import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
// import loginBg from "../assets/images/bglogin.jpg"; // ✅ Make sure this path is correct

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (existingUser) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">

  {/* LEFT SECTION - THEME SIDE */}
  <div className="login-left">
    <div className="login-text-overlay">
      {/* <h1>Welcome Back!</h1><br/>
      <p>Shop fresh, organic, and healthy products with us.</p>  */}
    </div>
  </div>

  {/* RIGHT SECTION - LOGIN FORM */}
  <div className="login-right">
    <div className="login-card">
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button">
          Sign In
        </button>
        <p className="create-account-msg">
          Don't have an account?
          <Link to="/register" className="create-account-link"> Create Account </Link>
        </p>
      </form>
    </div>
  </div>

</div>

  );
}

export default Login;
