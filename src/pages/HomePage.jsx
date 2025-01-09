import React from "react";
import styles from "./styles/HomePage.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const blogs = [
    {
      id: 1,
      title: "The Rise of Artificial Intelligence",
      author: "John Doe",
      date: "January 5, 2025",
      snippet: "Exploring the potential and challenges of AI in modern society.",
    },
    {
      id: 2,
      title: "The Art of Minimalism",
      author: "Jane Smith",
      date: "December 20, 2024",
      snippet: "Discover how living with less can lead to more happiness.",
    },
    {
      id: 3,
      title: "Traveling the World on a Budget",
      author: "Alex Brown",
      date: "November 15, 2024",
      snippet: "Tips and tricks to see the world without breaking the bank.",
    },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have been logged out");
    navigate("/");
  }

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.logo}>BlogSpot</h1>
        <nav className={styles.nav}>
          <button className={styles.navButton}>Home</button>
          <button className={styles.navButton}>About</button>
          <button className={styles.navButton}>Contact</button>
          <button className={styles.navButton}>Create Blog</button>
          <button onClick={handleLogout} className={styles.navButton}>Logout</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <h2 className={styles.heading}>Featured Blogs</h2>
        <div className={styles.blogList}>
          {blogs.map((blog) => (
            <article key={blog.id} className={styles.blogCard}>
              <h3 className={styles.blogTitle}>{blog.title}</h3>
              <p className={styles.blogMeta}>
                By <span className={styles.blogAuthor}>{blog.author}</span> on {blog.date}
              </p>
              <p className={styles.blogSnippet}>{blog.snippet}</p>
            </article>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} BlogSpot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
