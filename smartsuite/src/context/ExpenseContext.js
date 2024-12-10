import React, { createContext, useState, useContext } from 'react';

// Create the context
const ExpenseContext = createContext();

// Create a custom hook to use the context
export const useExpenseContext = () => useContext(ExpenseContext);

// ExpenseProvider component to provide the context value
export const ExpenseProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  
  // Calculate the balance and categorize income and outcome
  const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const income = transactions.filter(transaction => transaction.amount > 0).reduce((acc, transaction) => acc + transaction.amount, 0);
  const outcome = transactions.filter(transaction => transaction.amount < 0).reduce((acc, transaction) => acc + transaction.amount, 0);

  // Function to add a new transaction
  const addTransaction = (transaction) => {
    setTransactions(prevTransactions => [...prevTransactions, transaction]);
  };

  return (
    <ExpenseContext.Provider value={{ transactions, balance, income, outcome, addTransaction }}>
      {children}
    </ExpenseContext.Provider>
  );
};
