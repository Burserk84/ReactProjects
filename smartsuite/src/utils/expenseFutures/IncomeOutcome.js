import React from 'react';
import { useExpenseContext } from '../../context/ExpenseContext';  // Import the custom hook
import { formatCurrency } from './currencyFormatter';  // Import currency formatter

const IncomeOutcome = () => {
  const { income, outcome } = useExpenseContext();  // Get income and outcome from context

  return (
    <div className="income-outcome">
      <div className="income">
        <h3>Income</h3>
        <p>{formatCurrency(income)}</p>  {/* USD format */}
      </div>
      <div className="outcome">
        <h3>Outcome</h3>
        <p>{formatCurrency(outcome)}</p>  {/* USD format */}
      </div>
    </div>
  );
};

export default IncomeOutcome;
