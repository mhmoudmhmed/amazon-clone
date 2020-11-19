import React, { createContext, useContext, useReducer } from "react";

// setup data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


// this is how we use provider inside component
// Pull information from the data layer
export const UseStateValue = () => useContext(StateContext);