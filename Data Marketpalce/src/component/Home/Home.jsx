import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to Data Marketplace</h1>
      <p>
        Explore a decentralized platform for buying and selling datasets. Our marketplace leverages blockchain technology to ensure security, transparency, and fair transactions.
      </p>
      <p>
        Sellers can list their datasets, and buyers can securely purchase and verify the integrity of the data through our innovative platform.
      </p>
      <p>
        Join us in revolutionizing the way data is exchanged in a transparent and decentralized manner. Start exploring the vast world of data opportunities!
      </p>
<p id="last" style={{ position: 'fixed', bottom: 0, width: '100%', textAlign: 'center',  color: '#28a745', padding: '11px 0' }}>&copy; 2023 Data Marketplace. All rights reserved.</p>

    </div>
  );
}

export default Home;