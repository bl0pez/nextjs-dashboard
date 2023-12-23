// eslint-disable-next-line import/named
import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit"

import { RootState } from "..";

export const localSotrageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        next(action);

        if ( action.type === 'pokemons/toggleFavorite') {
            const { pokemons } = state.getState() as RootState;
            localStorage.setItem('favorites-pokemons', JSON.stringify(pokemons));
            return;
        }
    }
}