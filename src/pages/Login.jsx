import React, { useEffect, useState } from "react";
import styles from "./styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // Ensure `navigate` is initialized properly

  // Handle Google login success
  const handleSuccess = (response) => {
    console.log("Login Successful:", response);
    // Store user data locally
    localStorage.setItem("user", JSON.stringify(response));
    // Redirect to the homepage
    navigate("/HomePage");
  };

  // Handle Google login failure
  const handleFailure = (response) => {
    console.error("Login Failed:", response);
    alert("Google login failed. Please try again.");
  };

  // Update the document title
  useEffect(() => {
    document.title = "BlogSpot - Login";
  }, []);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login details:", formData);
    const { email, password } = formData;
    if (email === "admin@admin.com" && password === "admin") {
      alert("Login successful");
      navigate("/HomePage");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
  <GoogleOAuthProvider clientId="857798224946-kq8f0arlieia718a2hq0etjslglt34mr.apps.googleusercontent.com">
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1>BlogSpot</h1>
      </header>

      {/* Login Form */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>

      {/* Google Login Section */}
      <div className={styles.googleSection}>
        <GoogleLogin
          clientId="857798224946-kq8f0arlieia718a2hq0etjslglt34mr.apps.googleusercontent.com" // Replace with your Google Client ID
          buttonText="Login with Google"
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          cookiePolicy="single_host_origin"
          redirectUri="https://localhost:3000" 
        />
      </div>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} BlogSpot. All rights reserved.</p>
      </footer>
    </div>
  </GoogleOAuthProvider>
  );
};

export default Login;
