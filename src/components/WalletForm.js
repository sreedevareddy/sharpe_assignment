import React, { useState } from 'react';
import { firestore } from './firebase';

const WalletForm = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validate Wallet Address
    if (!walletAddress.trim()) {
      newErrors.walletAddress = 'Wallet address field cannot be empty';
    } else if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      newErrors.walletAddress = 'Invalid Ethereum address format';
    }

    // Validate Amount
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue < 0 || amountValue > 10000) {
      newErrors.amount = 'Amount must be a number between 0 and 10,000';
    }

    setErrors(newErrors);

    // Return true if there are no errors, otherwise false
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      try {
        // Send data to Firestore
        await firestore.collection('walletData').add({
          walletAddress,
          amount: parseFloat(amount),
          timestamp: new Date(),
        });

        // Reset form fields
        setWalletAddress('');
        setAmount('');
        setErrors({});
        
        console.log('Form submitted and data stored in Firestore.');
        window.alert('Data successfully submitted to Firestore!');
      } catch (error) {
        console.error('Error storing data in Firestore:', error);
        window.alert('Error submitting data to Firestore. Please try again.');
      }
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-3 mb-5 bg-dark text-white form-card text-center">
        <h1 className="text-center mb-4">Transaction Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="walletAddress" className="form-label">Wallet Address:</label>
            <input
              type="text"
              className={`form-control ${errors.walletAddress ? 'is-invalid' : ''}`}
              id="walletAddress"
              placeholder='Enter Address'
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
            {errors.walletAddress && <div className="invalid-feedback">{errors.walletAddress}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount:</label>
            <input
              type="text"
              placeholder='Enter Amount'
              className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            {errors.amount && <div className="invalid-feedback">{errors.amount}</div>}
          </div>

          <div className="text-center subbtn">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WalletForm;
