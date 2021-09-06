import { PokemonCustom } from '../types/pokemonList';

export type ActionProps = 
  | {type: 'addPokemons', payload: PokemonCustom[]}

export type StateProps = {
  pokemons: PokemonCustom[]
}

export const initialState: StateProps = {
  pokemons: []
}

export const stateReducer = (state: StateProps, action: ActionProps): StateProps => {
  switch (action.type) {
    case 'addPokemons':
      return {
        ...state, 
        pokemons: action.payload
      }
  
    default:
      return state
  }
}