import { Metadata } from 'next';

import { WidgetsGrid } from '@/components';

export const metadata: Metadata = {
	title: 'Admin Dashboard',
	description: 'Admin Dashboard',
};

export default function MainPage() {
	return (
		<div className='p-2 text-center'>
			<h1 className='mt-2 text-3xl'>Dashboard</h1>
			<span className='text-xl text-blue-500'>Información general</span>
			<WidgetsGrid />
		</div>
	);
}
