import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <h1>Fresh & Organic Products</h1>
        <p>Join us to explore the power of nature and healthy living.</p>
      </div>
      <div className="register-right">
        <h2>Create Your Account</h2>
        <form onSubmit={handleRegister}>
          <div className="form-row">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address1"
              placeholder="Address Line 1"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address2"
              placeholder="Address Line 2"
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="pincode"
              placeholder="Pin Code"
              onChange={handleChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        {/* <p className="login-link" onClick={() => navigate("/")}>
          Already have an account? Login
        </p> */}
      </div>
    </div>
  );
}

export default Register;
