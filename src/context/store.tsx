import React, { createContext, useReducer } from "react";
import { ActionProps, initialState, StateProps, stateReducer } from "./reducer";

type ProviderProps = {
  children: React.ReactNode
}

type StoreProps = {
  state: StateProps
  dispatch: React.Dispatch<ActionProps>
}

export const Store = createContext({} as StoreProps)

export const StateProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  return (
    <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  )
}