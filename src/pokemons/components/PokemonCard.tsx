'use client';
import Image from 'next/image';
import Link from 'next/link';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavorite } from '@/store/pokemon/pokemonsSlice';

import { SimplePokemon } from '..';

interface Props {
	pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
	const { id, name } = pokemon;

	const isFavorite = useAppSelector((state) => !!state.pokemons[id]);
	const dispatch = useAppDispatch();
	const onToggleFavorite = () => {
		dispatch(toggleFavorite(pokemon));
	};

	return (
		<div className='mx-auto right-0 mt-2 w-60'>
			<div className='bg-white rounded overflow-hidden shadow-lg'>
				<div className='p-6 bg-gray-800 border-b flex flex-col justify-center items-center'>
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
						alt={name}
						width={100}
						height={100}
						priority={false}
					/>
					<p className='capitalize pt-2 text-lg font-semibold text-gray-50'>{name}</p>
					<div className='mt-5'>
						<Link
							href={`/dashboard/pokemons/${name}`}
							className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
						>
							Mas información
						</Link>
					</div>
				</div>
				<div className='border-b'>
					<div
						onClick={onToggleFavorite}
						className='px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer'
					>
						<div className='text-red-500'>{isFavorite ? <IoHeart /> : <IoHeartOutline />}</div>
						<div className='pl-3'>
							<p className='text-sm font-medium text-gray-800 leading-none'>
								{isFavorite ? 'Remove from favorites' : 'Add to favorites'}
							</p>
							<p className='text-xs text-gray-500'>
								Clic para {isFavorite ? 'remover' : 'agregar'} a favoritos
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
