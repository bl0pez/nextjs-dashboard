import Image from 'next/image';
import Link from 'next/link';
import { IoHeartOutline } from 'react-icons/io5';

import { SimplePokemon } from '..';

interface Props {
	pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
	const { id, name } = pokemon;

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
							href={`/dashboard/pokemon/${id}`}
							className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
						>
							Mas información
						</Link>
					</div>
				</div>
				<div className='border-b'>
					<Link href='/dashboard/main' className='px-4 py-2 hover:bg-gray-100 flex items-center'>
						<div className='text-red-500'>
							<IoHeartOutline />
						</div>
						<div className='pl-3'>
							<p className='text-sm font-medium text-gray-800 leading-none'>Add to favorites</p>
							<p className='text-xs text-gray-500'>View your campaigns</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
