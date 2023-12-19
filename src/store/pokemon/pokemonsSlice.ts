// eslint-disable-next-line import/named
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { SimplePokemon } from '@/pokemons';

interface PokemonState {
    [key: string] : SimplePokemon
}


const initialState: PokemonState = {}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite( state, action: PayloadAction<SimplePokemon>) {
        const pokemon = action.payload;
        const { id } = pokemon;
        // eslint-disable-next-line no-extra-boolean-cast
        if( !!state[id]) {
           delete state[id];
            return;
        }
        state[id] = pokemon;
    },
  }
});

export const {toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer