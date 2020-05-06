import React, { createContext, useReducer } from "react";
import { appReducer } from "../reducers/appReducer";
import actionTypes from "../reducers/actionTypes";

//initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 }
  ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Create the Provider

export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: actionTypes.DELETE_TRANSACTION,
      payload: id
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        // con esto puedo hacer transactions.map
        transactions: state.transactions,
        deleteTransaction
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
