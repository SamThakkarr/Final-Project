// YourComponent.jsx
import React from 'react';
import { web3, dataMarketplaceContract } from '../../web3/web3'; // Adjust the path accordingly

const YourComponent = ({ userBlockchainAddress, datasetName, datasetDescription, datasetPrice }) => {
  const handlePaymentAction = async () => {
    try {
      console.log(`Performing payment for user: ${userBlockchainAddress}`);
      await handlePayment(userBlockchainAddress, datasetName, datasetDescription, datasetPrice);
    } catch (error) {
      console.error('Error handling payment:', error);
    }
  };

  const handlePayment = async (userBlockchainAddress, name, description, price) => {
    try {
      await listData(userBlockchainAddress, name, description, price);
      // Additional logic after successful payment, if needed
    } catch (error) {
      console.error('Error handling payment:', error);
    }
  };
   
  const listData = async (userBlockchainAddress, name, description, price) => {
    try {
      const unlockResult = await web3.eth.personal.unlockAccount(userBlockchainAddress, 'nikhilgandu', 600);
      // Call the contract method to list data
      const transaction = dataMarketplaceContract.methods.listData(name, description, price).send({
        from: userBlockchainAddress,
        gas: 2000000,
        gasPrice: web3.utils.toWei('50', 'gwei'), // Adjust gas limit as needed
      });

      // Wait for the transaction to be mined
      const receipt = await transaction;
      console.log('Data listed successfully:', receipt);

      // Display receipt information on the page
      const receiptInfoDiv = document.getElementById('receiptInfo');
      if (receiptInfoDiv) {
        let receiptInfoHTML = '<h3>Transaction Receipt:</h3>';
        for (const key in receipt) {
          receiptInfoHTML += `<p><strong>${key}:</strong> ${receipt[key]}</p>`;
        }
        receiptInfoDiv.innerHTML = receiptInfoHTML;
      }
    } catch (error) {
      console.error('Error listing data:', error);
    }
  };

  return (
    <div>
      {/* YourComponent content */}
      <button onClick={handlePaymentAction}>Pay</button>
    </div>
  );
};

export default YourComponent;

