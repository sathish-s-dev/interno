import Container from '../container';
import { Button } from '../ui/button';
import { WorkCard } from '../work-card';

export function WorkSection() {
	const workCardData = [
		{
			id: '1',
			title: 'Project Work',
			description:
				'There are many variations of the passages of lorem Ipsum from available, majority.',
		},
		{
			id: '2',
			title: 'Interior Work',
			description:
				'There are many variations of the passages of lorem Ipsum from available, majority.',
		},
		{
			id: '3',
			title: 'Realization Work',
			description:
				'There are many variations of the passages of lorem Ipsum from available, majority.',
		},
	];
	return (
		<Container className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 text-center md:py-6 place-items-center'>
			{workCardData.map(({ title, description, id }) => (
				<WorkCard
					key={id + title}
					title={title}
					description={description}
				/>
			))}
		</Container>
	);
}
