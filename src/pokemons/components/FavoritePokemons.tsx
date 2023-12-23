'use client';
import { useEffect, useState } from 'react';

import { IoHeartOutline } from 'react-icons/io5';

import { useAppSelector } from '@/store';

import { PokemonGrid, SimplePokemon } from '..';

export const FavoritePokemons = () => {
	const favoritePokemons = useAppSelector((state) => Object.values(state.pokemons.favorites));
	// const [pokemons, setPokemons] = useState<SimplePokemon[]>(favoritePokemons);

	// useEffect(() => {
	// 	setPokemons(favoritePokemons);
	// }, [favoritePokemons]);

	if (!favoritePokemons.length) {
		return <NoFavorites />;
	}

	return (
		<>
			<PokemonGrid pokemons={favoritePokemons} />
		</>
	);
};

export const NoFavorites = () => {
	return (
		<div className='flex flex-col h-[50vh] items-center justify-center'>
			<IoHeartOutline size={100} className='text-red-500' />
			<span>No hay pokémons favoritos</span>
		</div>
	);
};
