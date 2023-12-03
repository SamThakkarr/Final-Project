// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>Data Marketplace</div>
        <div className={styles.navLinks}>
          <Link to="/Home" className={styles.navLink}>
            Home
          </Link>
          <Link to="/login" className={styles.navLink}>
            Login
          </Link>
          <Link to="/Contact" className={styles.navLink}>
            Contact
          </Link>
          <Link to="/Team" className={styles.navLink}>
            Team
          </Link>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
