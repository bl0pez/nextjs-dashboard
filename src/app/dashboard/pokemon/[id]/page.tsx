import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { PokemonResponse } from '@/pokemons';

interface Props {
	params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	try {
		const { id, name } = await getPokemon(params.id);

		return {
			title: `#${id} ${name} | Pokédex`,
			description: `Información de ${name}`,
		};
	} catch (error) {
		return {
			title: 'Pokédex',
			description: 'Información de los pokemones',
		};
	}
}

const getPokemon = (id: string): Promise<PokemonResponse> => {
	const pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
		cache: 'force-cache',
		// next: {
		// 	revalidate: 60 * 60 * 24 * 30, // 30 days
		// },
	})
		.then((res) => res.json())
		.catch(() => notFound());

	return pokemon;
};

export default async function PokemonPage({ params }: Props) {
	const pokemon = await getPokemon(params.id);

	return (
		<div className='flex mt-5 flex-col items-center text-slate-800'>
			<div className='rounded-[20px] mx-auto bg-white bg-clip-border  shadow-lg  p-3 max-w-[700px]'>
				<div className='mt-2 mb-8 w-full'>
					<h1 className='px-2 text-xl font-bold text-slate-700 capitalize'>
						#{pokemon.id} {pokemon.name}
					</h1>
					<div className='flex flex-col justify-center items-center'>
						<Image
							src={pokemon.sprites.other?.dream_world.front_default ?? ''}
							width={150}
							height={150}
							alt={`Imagen del pokemon ${pokemon.name}`}
							className='mb-5'
						/>

						<div className='flex flex-wrap'>
							{pokemon.moves.map((move) => (
								<p key={move.move.name} className='mr-2 capitalize'>
									{move.move.name}
								</p>
							))}
						</div>
					</div>
				</div>
				<div className='grid md:grid-cols-2 gap-4 px-2 w-full grid-cols-1'>
					<div className='flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg '>
						<p className='text-sm text-gray-600'>Types</p>
						<div className='text-base font-medium text-navy-700 flex'>
							{pokemon.types.map((type) => (
								<p key={type.slot} className='mr-2 capitalize'>
									{type.type.name}
								</p>
							))}
						</div>
					</div>

					<div className='flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg '>
						<p className='text-sm text-gray-600'>Peso</p>
						<span className='text-base font-medium text-navy-700 flex'>{pokemon.weight}</span>
					</div>

					<div className='flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg'>
						<p className='text-sm text-gray-600'>Regular Sprites</p>
						<div className='flex justify-center'>
							<Image
								src={pokemon.sprites.front_default}
								width={100}
								height={100}
								alt={`sprite ${pokemon.name}`}
							/>

							<Image
								src={pokemon.sprites.back_default}
								width={100}
								height={100}
								alt={`sprite ${pokemon.name}`}
							/>
						</div>
					</div>

					<div className='flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg'>
						<p className='text-sm text-gray-600'>Shiny Sprites</p>
						<div className='flex justify-center'>
							<Image
								src={pokemon.sprites.front_shiny}
								width={100}
								height={100}
								alt={`sprite ${pokemon.name}`}
							/>

							<Image
								src={pokemon.sprites.back_shiny}
								width={100}
								height={100}
								alt={`sprite ${pokemon.name}`}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
