import React from 'react';
import { useExpenseContext } from '../../context/ExpenseContext';  // Import the custom hook
import { formatCurrency } from './currencyFormatter';  // Import currency formatter

const TransactionHistory = () => {
  const { transactions } = useExpenseContext();  // Get the transactions from context

  return (
    <div className="transaction-history">
      <h3>Transaction History</h3>
      {transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className="transaction-item">
              <span className="transaction-name">{transaction.name}</span>
              <span className="transaction-amount">
                {formatCurrency(transaction.amount)} {/* USD will be used */}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No transactions yet.</p>  
      )}
    </div>
  );
};

export default TransactionHistory;
