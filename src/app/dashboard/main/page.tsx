import { SimpleWidget } from '@/components';

export default function MainPage() {
	return (
		<div className='p-2 text-center'>
			<h1 className='mt-2 text-3xl'>Dashboard</h1>
			<span className='text-xl text-blue-500'>Información general</span>

			<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-10 gap-4 '>
				<SimpleWidget />
			</div>
		</div>
	);
}
