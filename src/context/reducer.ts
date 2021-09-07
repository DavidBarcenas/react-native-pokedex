import { PokemonCustom } from '../types/pokemonList';
import { Pokemon } from '../types/pokemon';
import { Species } from '../types/species';

export type DistributivePick<T, K extends keyof T> = T extends unknown
  ? Pick<T, K>
  : never;

type About = 
  Pick<Species, 'egg_groups' | 'habitat'> & 
  Pick<Pokemon, 'weight' | 'height' | 'abilities'> 
  | null

export type ActionProps = 
  | {type: 'SET_ABOUT', payload: About}

export type StateProps = {
  pokemon: {
    about: About
  }
}

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