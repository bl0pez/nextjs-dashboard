import { PokemonCard } from './PokemonCard';
import { SimplePokemon } from '..';

interface Props {
	pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
			{pokemons.map((pokemon) => (
				<div key={pokemon.id} className='flex justify-center'>
					<PokemonCard pokemon={pokemon} />
				</div>
			))}
		</div>
	);
};
