import { FavoritePokemons } from '@/pokemons/components/FavoritePokemons';

export const metadata = {
	title: 'Favoritos',
	description: 'Listado de 100 Poké mons estático',
};

export default async function PokemonsPage() {
	return (
		<>
			<span className='text-center block text-4xl py-4'>
				Pokémons Favoritos <small className='text-blue-500'>Global State</small>
			</span>
			<FavoritePokemons />
		</>
	);
}
