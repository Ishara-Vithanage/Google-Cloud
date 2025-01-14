// PrivacyPolicy.jsx
import { React, useEffect } from "react";
import styles from "./styles/PrivacyPolicy.module.css";

const PrivacyPolicy = () => {

  useEffect(() => {
    document.title = "Privacy Policy - BlogSpot";
  }
);

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.logo}>BlogSpot</h1>
        <nav className={styles.nav}>
          <button className={styles.navButton}>Home</button>
          <button className={styles.navButton}>About</button>
          <button className={styles.navButton}>Contact</button>
        </nav>
      </header>

      {/* Privacy Policy Content */}
      <main className={styles.main}>
        <h2 className={styles.heading}>Privacy Policy</h2>
        <p className={styles.text}>
          Welcome to BlogSpot! Your privacy is important to us. This Privacy Policy
          explains how we collect, use, and protect your information.
        </p>

        <section className={styles.section}>
          <h3 className={styles.subheading}>Information We Collect</h3>
          <p className={styles.text}>
            We collect information when you sign up, such as your name and email address. 
            Additionally, we may collect usage data to improve your experience.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>How We Use Your Information</h3>
          <p className={styles.text}>
            Your information is used to provide and improve our services, such as:
            <ul className={styles.list}>
              <li>Personalizing your experience on BlogSpot.</li>
              <li>Providing access to your blogs and saved preferences.</li>
              <li>Communicating updates or important notifications.</li>
            </ul>
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>Third-Party Services</h3>
          <p className={styles.text}>
            BlogSpot uses Google Authentication for secure login. We do not share your data
            with third parties except as required to provide our services or comply with the law.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>Your Rights</h3>
          <p className={styles.text}>
            You have the right to access, modify, or delete your data. Contact us at
            support@blogspot.com for assistance.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>Policy Updates</h3>
          <p className={styles.text}>
            We may update this Privacy Policy from time to time. Any changes will be 
            communicated on this page.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} BlogSpot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;