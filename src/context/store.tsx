import React, { createContext, useReducer } from "react";
import { ProviderProps, StoreProps } from "../types/context";
import { initialState, stateReducer } from "./reducer";

export const Store = createContext({} as StoreProps)

export const StateProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  return (
    <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  )
}