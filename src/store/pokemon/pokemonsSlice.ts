// eslint-disable-next-line import/named
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { SimplePokemon } from '@/pokemons';

interface PokemonState {
    favorites: {[key: string]:SimplePokemon}
}

// const getInitialState = (): PokemonState => {

//   // if ( typeof localStorage === 'undefined') return {};

//   const favorites = JSON.parse(window.localStorage.getItem('favorites-pokemons') || '{}');
//   return favorites as PokemonState;
// }


const initialState: PokemonState = {
  favorites: {},
  // ...getInitialState()
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action:PayloadAction<{ [key: string]:SimplePokemon }>) {
      state.favorites = action.payload;
    },
    toggleFavorite( state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if ( state.favorites[id] ) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }

      //TODO: No se debe de hacer en Redux
      localStorage.setItem('favorites-pokemons', JSON.stringify( state.favorites ) );
    },
  }
});

export const { toggleFavorite,  setFavoritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer