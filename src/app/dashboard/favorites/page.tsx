import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';

export const metadata = {
	title: 'Favoritos',
	description: 'Listado de 100 Poké mons estático',
};

const getPokemons = async (limit = 100, offset = 0): Promise<SimplePokemon[]> => {
	const data: PokemonsResponse = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
	).then((res) => res.json());

	const Pokemon = data.results.map((pokemon) => ({
		id: pokemon.url.split('/').at(-2)!,
		name: pokemon.name,
	}));

	return Pokemon;
};

export default async function PokemonsPage() {
	return (
		<>
			<span className='text-center block text-4xl py-4'>
				Pokémons Favoritos <small className='text-blue-500'>Global State</small>
			</span>
			<PokemonGrid pokemons={[]} />
		</>
	);
}
