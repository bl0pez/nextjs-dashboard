'use client';
import { IoCartOutline } from 'react-icons/io5';

import { useAppSelector } from '@/store';

import { SimpleWidget } from './SimpleWidget';

export const WidgetsGrid = () => {
	const isCart = useAppSelector((state) => state.counter.count);

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-10 gap-4 '>
			<SimpleWidget
				label='Contador'
				title={isCart.toString()}
				subtitle='Productos en el carrito'
				href='/dashboard/counter'
				icon={<IoCartOutline size={70} className='text-blue-600' />}
			/>
		</div>
	);
};
