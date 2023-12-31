import { Metadata } from 'next';

import { CartCounter } from '@/shopping-cart/components';

export const metadata: Metadata = {
	title: 'Shopping Cart',
	description: 'Simple shopping cart',
};

export default function CounterPage() {
	return (
		<div className='flex flex-col items-center justify-center w-full h-full'>
			<span>Productos en el carrito</span>
			<CartCounter />
		</div>
	);
}
