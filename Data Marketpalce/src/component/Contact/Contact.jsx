// Contact.jsx
import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h2>Contact Our Team</h2>

      <div className={styles.teamMember}>
        <h3>Nikhil Tyagi</h3>
        <p>Email: nikhiltyagi.n17@gmail.com</p>
        <p>Phone:9315608817</p>
      </div>

      <div className={styles.teamMember}>
        <h3>Samarth Bhatt</h3>
        <p>Email: jane.smith@example.com</p>
        <p>Phone: 9315608817</p>
      </div>
      <div className={styles.teamMember}>
        <h3>Sam Bhatt</h3>
        <p>Email: jane.smith@example.com</p>
        <p>Phone: 9315608817</p>
      </div>

      {/* Add more team members as needed */}

      <div className={styles.copyright}>
        <p>&copy; 2023 Data Marketplace. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Contact;