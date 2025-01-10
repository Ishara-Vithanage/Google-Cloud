import React, { useEffect, useState } from "react";
import styles from "./styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    console.log("Login Successful:", response.profileObj);
    // Store user data in localStorage
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    // Redirect to homepage
    navigate("/HomePage");
  };

  const handleFailure = (response) => {
    console.error("Google Login Error:", response);
    alert("Google Login Failed. Please check your configuration and try again.");
  };

  useEffect(() => {
    document.title = "BlogSpot - Login";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>BlogSpot</h1>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
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
          <label htmlFor="password" className={styles.label}>Password</label>
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
        <button type="submit" className={styles.button}>Login</button>
      </form>

      <div className={styles.googleSection}>
        <GoogleLogin
          clientId="YOUR_CLIENT_ID_HERE" // Replace with your Google Client ID
          buttonText="Login with Google"
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          cookiePolicy="single_host_origin"
        />
      </div>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} BlogSpot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
