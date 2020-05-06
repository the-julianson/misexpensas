import React, { useContext } from "react";
import { GlobalContext } from '../contexts/GlobalState';


export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // Create an array with the amounts
  const amounts = transactions.map( item => item.amount);
  // Sum the total amount, starting with Zero, and then fixed to 2 decimals
  const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
