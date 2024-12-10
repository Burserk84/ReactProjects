import React from 'react';

const TransactionItem = ({ transaction }) => {
  return (
    <li className={transaction.amount < 0 ? 'expense' : 'income'}>
      {transaction.name} <span>${transaction.amount.toFixed(2)}</span>
    </li>
  );
};

export default TransactionItem;
