import type { ActionProps, StateProps } from "../types/context"

export const initialState: StateProps = {
  pokemons: [],
  pokemon: {
    about: null,
    stats: []
  }
}

export const stateReducer = (state: StateProps, action: ActionProps): StateProps => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return {
        ...state, 
        pokemons: action.payload
      }
    
    case 'SET_ABOUT':
      return {
        ...state, 
        pokemon: {
          ...state.pokemon,
          about: action.payload
        }
      }
    
    case 'SET_STATS':
      return {
        ...state, 
        pokemon: {
          ...state.pokemon,
          stats: action.payload
        }
      }
  
    default:
      return state
  }
}