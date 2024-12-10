import React, { useState } from 'react';
import { useExpenseContext } from '../../context/ExpenseContext';  // Import the custom hook

const TransactionForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useExpenseContext();  // Get the addTransaction function from context

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || amount === 0) return;  // Simple validation

    const newTransaction = {
      id: Math.random().toString(36).substring(7),
      name,
      amount: parseFloat(amount),  // Ensure the amount is a number
    };

    addTransaction(newTransaction);  // Add transaction using context function

    setName('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount (USD):</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit" style={{backgroundColor: "rgb(121, 190, 188)", color: "black"}}>Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
