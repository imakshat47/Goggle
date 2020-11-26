import React, { createContext, useContext, useReducer } from "react";

// preparing data layer
export const StateContext = createContext();

// Data updating
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook to get access data
export const useStateValue = () => useContext(StateContext);
