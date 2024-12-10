import React from 'react';
import { useExpenseContext } from '../../context/ExpenseContext';  // Import the custom hook
import { formatCurrency } from './currencyFormatter';  // Import currency formatter

const Balance = () => {
  const { balance } = useExpenseContext();  // Get the balance from context

  return (
    <div className="balance">
      <h3>Current Balance</h3>
      <p>{formatCurrency(balance)}</p>  {/* USD will be displayed */}
    </div>
  );
};

export default Balance;
