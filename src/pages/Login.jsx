import React, { useState } from "react";
import styles from "./styles/Login.module.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login details:", formData);
    // Add your login logic here
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1>BlogSpot</h1>
      </header>
      
      {/* Login Form */}
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
      
      {/* Login with Google Section */}
      <div className={styles.googleSection}>
        <button className={styles.googleButton}>
          <img
            src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
            alt="Google Logo"
            className={styles.googleLogo}
          />
          Login with Google
        </button>
      </div>
      
      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} BlogSpot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
