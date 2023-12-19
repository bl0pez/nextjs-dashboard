'use client';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initCounterState, substracOne } from '@/store/counter/counterSlice';

interface Props {
	value?: number;
}

interface CounterResponse {
	count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
	const data = await fetch('/api/counter').then((res) => res.json());
	return data as CounterResponse;
};

export const CartCounter = ({ value }: Props) => {
	const count = useAppSelector((state) => state.counter.count);
	const dispatch = useAppDispatch();
	// const [count, setCount] = useState<number>(value);

	const handleIncrement = () => {
		// setCount((prevCount) => prevCount + 1);
		dispatch(addOne());
	};

	const handleDecrement = () => {
		if (count === 0) return;
		// setCount((prevCount) => prevCount - 1);
		dispatch(substracOne());
	};

	// useEffect(() => {
	// 	dispatch(initCounterState(value));
	// }, [dispatch, value]);

	useEffect(() => {
		getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
	}, [dispatch]);

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
