import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import styles from './BuyDatasetPage.module.css';
import YourComponent from '../YourComponent/YourComponent'; // Adjust the path accordingly

const BuyDatasetPage = () => {
  const [datasets, setDatasets] = useState([
    { id: 1, name: 'Dataset A', price: 10, path: 'C:/Users/SAM THAKKAR/Desktop/Team Sher/heart.csv' },
    { id: 2, name: 'Dataset B', price: 15, path: '/path/to/datasetB.jpg' },
    { id: 3, name: 'Dataset C', price: 20, path: '/path/to/datasetC.jpg' },
  ]);
const handlePurchase = async (dataset) => {
    try {
      const response = await fetch('http://localhost:5000/purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ datasetPath: dataset.path }),
      });

      if (response.ok) {
        console.log(`Dataset ${dataset.name} purchased!`);
        // Handle success, e.g., update UI
      } else {
        console.error('Failed to purchase dataset');
        // Handle failure, e.g., show an error message
      }
    } catch (error) {
      console.error('Error during purchase:', error);
      // Handle error, e.g., show an error message
    }
  };

  const [selectedDataset, setSelectedDataset] = useState(null);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);

  const handleBuyClick = (dataset) => {
    setSelectedDataset(dataset);
    openPaymentModal();
  };

  const openPaymentModal = () => {
    setPaymentModalVisible(true);
  };

  const closePaymentModal = () => {
    setPaymentModalVisible(false);
  };

  const handleNavigateToTestCase = () => {
    closePaymentModal();
    // You can use a Link to navigate to the /test_case page
  };

  const handlePaymentAction = async (action) => {
    // Implement payment logic or any other action
    console.log(`Performing ${action} for dataset: ${selectedDataset.name}`);
  };

  return (
    <div className={styles.buyDatasetPage}>
      <h2>Available Datasets</h2>
      <ul className={styles.datasetList}>
        {datasets.map((dataset) => (
          <li key={dataset.id} className={styles.datasetItem}>
            <p>{dataset.name}</p>
            <p>${dataset.price}</p>
            <button onClick={() => handleBuyClick(dataset)} className={styles.buyButton}>
              Buy
            </button>
          </li>
        ))}
      </ul>

      {/* Payment Modal */}
      {paymentModalVisible && (
        <div className={styles.paymentModal}>
          <h3>Payment Gateway</h3>
          <p>Amount: ${selectedDataset?.price}</p>
          {/* Use Link to navigate to the /test_case page */}
          <Link to="http://127.0.0.1:5000">
            <button onClick={() => handlePurchase(datasets.path)}>Use The predictor</button>
          </Link>
          <button onClick={() => handlePaymentAction('pay')}>Pay</button>
          <YourComponent
            userBlockchainAddress={userBlockchainAddress} // Replace with the actual user's address
            datasetName={selectedDataset?.name}
            datasetDescription={`Description of ${selectedDataset?.name}`}
            datasetPrice={selectedDataset?.price}
          />
          <button onClick={closePaymentModal}>Close</button>
        </div>
      )}
      {/* Receipt Information */}
      <div id="receiptInfo"></div>
    </div>
  );
};

export default BuyDatasetPage;
