'use client';
import { useEffect } from 'react';

import { Provider } from 'react-redux';

import { store } from '.';
import { setFavoritePokemons } from './pokemon/pokemonsSlice';

interface Props {
	children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
	useEffect(() => {
		const favorites = JSON.parse(window.localStorage.getItem('favorites-pokemons') || '{}');
		store.dispatch(setFavoritePokemons(favorites));
	}, []);

	return <Provider store={store}>{children}</Provider>;
};
