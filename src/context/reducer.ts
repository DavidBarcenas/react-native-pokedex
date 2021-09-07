import { ActionProps, StateProps } from "../types/context"

export const initialState: StateProps = {
  pokemon: {
    about: null
  }
}

export const stateReducer = (state: StateProps, action: ActionProps): StateProps => {
  switch (action.type) {
    case 'SET_ABOUT':
      return {
        ...state, 
        pokemon: {
          about: action.payload
        }
      }
  
    default:
      return state
  }
}