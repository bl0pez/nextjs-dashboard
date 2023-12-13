'use client';
import { useState } from 'react';

interface Props {
	value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
	const [count, setCount] = useState<number>(value);

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const handleDecrement = () => {
		if (count === 0) return;
		setCount((prevCount) => prevCount - 1);
	};

	return (
		<>
			<span className='text-9xl'>{count}</span>

			<div className='flex gap-2'>
				<button
					onClick={handleIncrement}
					className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]'
				>
					+1
				</button>
				<button
					onClick={handleDecrement}
					className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]'
				>
					-1
				</button>
			</div>
		</>
	);
};
