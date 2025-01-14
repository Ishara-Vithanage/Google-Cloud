// TermsOfService.jsx
import { React, useEffect } from "react";
import styles from "./styles/TermsOfService.module.css";

const TermsOfService = () => {

  useEffect(() => {
    document.title = "Terms of Service - BlogSpot";
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

      {/* Terms of Service Content */}
      <main className={styles.main}>
        <h2 className={styles.heading}>Terms of Service</h2>
        <p className={styles.text}>
          Welcome to BlogSpot! By accessing or using our services, you agree to comply with
          the following Terms of Service. Please read them carefully.
        </p>

        <section className={styles.section}>
          <h3 className={styles.subheading}>1. Use of Our Services</h3>
          <p className={styles.text}>
            You agree to use BlogSpot in compliance with all applicable laws and not for
            any unlawful activities. You are responsible for maintaining the
            confidentiality of your account.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>2. User Content</h3>
          <p className={styles.text}>
            You retain ownership of any content you post on BlogSpot but grant us a
            license to use, modify, and display your content for the purpose of
            operating and promoting our services.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>3. Prohibited Activities</h3>
          <p className={styles.text}>
            You agree not to engage in activities such as:
            <ul className={styles.list}>
              <li>Posting harmful, abusive, or illegal content.</li>
              <li>Attempting to gain unauthorized access to other accounts.</li>
              <li>Using automated means to scrape or interfere with our services.</li>
            </ul>
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>4. Termination</h3>
          <p className={styles.text}>
            We reserve the right to terminate or suspend access to your account at
            our sole discretion, with or without notice, for any breach of these
            Terms of Service.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>5. Limitation of Liability</h3>
          <p className={styles.text}>
            BlogSpot is not responsible for any indirect, incidental, or consequential
            damages arising from your use of our services.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>6. Changes to Terms</h3>
          <p className={styles.text}>
            We may update these Terms of Service periodically. Continued use of our
            services constitutes your acceptance of any changes.
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

export default TermsOfService;
