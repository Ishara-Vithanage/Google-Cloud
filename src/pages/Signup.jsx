import React, { useEffect, useState } from "react";
import styles from "./styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  // Handle Google signup success
  const handleSuccess = (response) => {
    console.log("Signup Successful:", response);
    // Store user data locally
    localStorage.setItem("user", JSON.stringify(response));
    // Redirect to homepage or onboarding
    navigate("/HomePage");
  };

  // Handle Google signup failure
  const handleFailure = (response) => {
    console.error("Signup Failed:", response);
    alert("Google signup failed. Please try again.");
  };

  // Update the document title
  useEffect(() => {
    document.title = "BlogSpot - Sign Up";
  }, []);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup details:", formData);
    const { name, email, password } = formData;

    // Simulate storing user in the database
    if (name && email && password) {
      alert("Signup successful");
      localStorage.setItem("user", JSON.stringify(formData));
      navigate("/HomePage");
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <GoogleOAuthProvider clientId="857798224946-kq8f0arlieia718a2hq0etjslglt34mr.apps.googleusercontent.com">
      <div className={styles.container}>
        {/* Header Section */}
        <header className={styles.header}>
          <h1>BlogSpot</h1>
        </header>

        {/* Signup Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Sign Up</h2>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>

        {/* Google Signup Section */}
        <div className={styles.googleSection}>
          <GoogleLogin
            clientId="857798224946-kq8f0arlieia718a2hq0etjslglt34mr.apps.googleusercontent.com"
            buttonText="Sign Up with Google"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            cookiePolicy="single_host_origin"
            redirectUri="https://localhost:3000/HomePage"
          />
        </div>

        {/* Footer Section */}
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} BlogSpot. All rights reserved.</p>
          <p>Already have an account ?
            <button className={styles.signup} onClick={() => navigate("/")}>Log in</button>
          </p>
        </footer>
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignUp;
