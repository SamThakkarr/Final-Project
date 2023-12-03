// // // Login.jsx
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate
// // import styles from './Login.module.css';
// // import React, { useEffect } from 'react';
// // import Web3 from 'web3';

// // const Login = () => {
// //   const navigate = useNavigate(); // Initialize useNavigate hook

// //   // State to manage email and password input
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   // Function to handle form submission
// //   const handleLogin = async () => {
// //     try {
// //       // Implement your login logic here, for example, making an API call
// //       console.log('Login clicked');
// //       console.log('Email:', email);
// //       console.log('Password:', password);

// //       // Reset any previous errors
// //       setError('');

// //       // Your authentication logic goes here

// //       // For demo purposes, let's assume successful login with hardcoded credentials
// //       if (email === 'nikhiltyagi.n17@gmail.com' && password === '@123') {
// //         // Redirect to the BuyDatasetPage

// //         navigate('/buy-dataset');
// //       } else {
// //         // Display login failed message
// //         setError('Invalid email or password');
// //       }

// //     } catch (error) {
// //       console.error('Login error:', error);
// //       setError('Login failed. Please try again.'); // Display an error message
// //     }
// //   };

// //   return (
// //     <div className={styles.login}>
// //       <form className={styles.loginForm}>
// //         <div className={styles.formGroup}>
// //           <label className={styles.label} htmlFor="email">
// //             Email:
// //           </label>
// //           <input
// //             className={styles.input}
// //             type="email"
// //             id="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //         </div>
// //         <div className={styles.formGroup}>
// //           <label className={styles.label} htmlFor="password">
// //             Password:
// //           </label>
// //           <input
// //             className={styles.input}
// //             type="password"
// //             id="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //         </div>
// //         {error && <div className={styles.error}>{error}</div>}
// //         <button
// //           className={styles.button}
// //           type="button"
// //           onClick={handleLogin}
// //         >
// //           Login
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;

// // Login.jsx
// import Web3 from 'web3';

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './Login.module.css';
// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const blockchainNodeUrl = 'http://localhost:8545';
//   const web3 = new Web3(new Web3.providers.HttpProvider(blockchainNodeUrl));

//   const createBlockchainAccount = async () => {
//     try {
//       const newAccount = await web3.eth.personal.newAccount(password);
//       console.log('New Blockchain Account Address:', newAccount);
//     } catch (error) {
//       console.error('Error creating blockchain account:', error);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       console.log('Login clicked');
//       console.log('Email:', email);
//       console.log('Password:', password);

//       setError('');

//       // Replace this with your actual authentication logic
//       if (email === 'nikhiltyagi.n17@gmail.com' && password === '@123') {
//         // Redirect to the BuyDatasetPage
//         navigate('/buy-dataset');

//         // Create a new blockchain account
//         createBlockchainAccount();
//       } else {
//         setError('Invalid email or password');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError('Login failed. Please try again.');
//     }
//   };

//   return (
//     <div className={styles.login}>
//       <form className={styles.loginForm}>
//         <div className={styles.formGroup}>
//           <label className={styles.label} htmlFor="email">
//             Email:
//           </label>
//           <input
//             className={styles.input}
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label className={styles.label} htmlFor="password">
//             Password:
//           </label>
//           <input
//             className={styles.input}
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {error && <div className={styles.error}>{error}</div>}
//         <button
//           className={styles.button}
//           type="button"
//           onClick={handleLogin}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import Web3 from 'web3';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const blockchainNodeUrl = 'http://localhost:8545';
  const web3 = new Web3(new Web3.providers.HttpProvider(blockchainNodeUrl));

  const createBlockchainAccount = async () => {
    try {
      const newAccount = await web3.eth.personal.newAccount('nikhilgandu');
      console.log('New Blockchain Account Address:', newAccount);
      return newAccount; // Return the new blockchain account address
    } catch (error) {
      console.error('Error creating blockchain account:', error);
      throw error;
    }
  };

  const handleLogin = async () => {
    try {
      console.log('Login clicked');
      console.log('Email:', email);
      console.log('Password:', password);

      setError('');

      // Replace this with your actual authentication logic
      if (email === 'nikhiltyagi.n17@gmail.com' && password === '@123') {
        // Create a new blockchain account
        const blockchainAddress = await createBlockchainAccount();

        // Existing account with ether
        const existingAccount = '0x4c99E97966aa989bdf0Ea614D8752189fbde44A2';  // Replace with your existing account address
        // Replace with your new account address

        // Specify the amount of ether to send (in Wei)
        const amountToSend = web3.utils.toWei('1000000', 'ether');  // Adjust the amount as needed

        // Build the transaction
        const transaction = {
          from: existingAccount,
          to: blockchainAddress,
          value: amountToSend,
          gas: 21000,
          gasPrice: web3.utils.toWei('50', 'gwei'),  // Standard gas limit for a simple ether transfer
        };

        // Send the transaction
        web3.eth.sendTransaction(transaction)
          .on('transactionHash', (hash) => {
            console.log('Transaction Hash:', hash);
          })
          .on('receipt', (receipt) => {
            console.log('Transaction Receipt:', receipt);
          })
          .on('error', (error) => {
            console.error('Error sending transaction:', error);
          });


        // Notify the parent component about the successful login and pass the blockchain address
        onLogin(blockchainAddress);

        // Redirect to the BuyDatasetPage
        navigate('/buy-dataset');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className={styles.login}>
      <form className={styles.loginForm}>
        <div className={styles.formGroup}>
           <label className={styles.label} htmlFor="email">
             Email:
           </label>
           <input
            className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">
            Password:
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button
          className={styles.button}
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
