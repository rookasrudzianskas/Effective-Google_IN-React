import React, { createContext, useContext, useReducer } from "react";

// is preparing the data layer
export const StateContext = createContext();

// Higeher older component, children is the app, to which it pass all the data
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// hook which allows us to get all the information from data layer
export const useStateValue = () => useContext(StateContext);