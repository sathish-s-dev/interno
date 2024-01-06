import Container from '../container';
import { WorkCard } from '../work-card';

export default function ServiceCardSection() {
	const servicesData = [
		{
			title: 'Project Plan',
			description:
				'There are many variations of the passages of lorem Ipsum from available, majority',
		},
		{
			title: 'Interior Work',
			description:
				'There are many variations of the passages of lorem Ipsum from available, majority',
		},
		{
			title: 'Retail Design',
			description:
				'There are many variations of the passages of lorem Ipsum from available, majority',
		},
		{
			title: '2d/3d Art Work',
			description:
				'There are many variations of the passages of lorem Ipsum from available, majority',
		},
		{
			title: 'Interior Work',
			description:
				'There are many variations of the passages of lorem Ipsum from available, majority',
		},
		{
			title: 'Decoration Work',
			description:
				'There are many variations of the passages of lorem Ipsum from available, majority',
		},
	];

	return (
		<Container className='text-center grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3'>
			{servicesData.map((service, i) => (
				<WorkCard
					key={service.title + i}
					title='Project Plan'
					description='There are many variations of the passages of lorem Ipsum from available, majority'
				/>
			))}
		</Container>
	);
}
