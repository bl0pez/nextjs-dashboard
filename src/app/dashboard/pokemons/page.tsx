import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';

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
	const pokemons = await getPokemons();

	return (
		<>
			<span className='text-center block text-4xl py-4'>Listado de Pokémons estático</span>
			<PokemonGrid pokemons={pokemons} />
		</>
	);
}
