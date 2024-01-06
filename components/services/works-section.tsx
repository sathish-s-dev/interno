// import { ServiceCard } from '@/app/services/page';
import { ServiceCard } from './service-card';
import Container from '../container';

export function WorksSection() {
	const serviceWorkData = [
		{
			number: 1,
			title: 'Concept & Details',
			description:
				'It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.',
		},
		{
			number: 2,
			title: 'Idea for Work',
			description:
				'It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.',
		},
		{
			number: 3,
			title: 'Design',
			description:
				'It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.',
		},
		{
			number: 4,
			title: 'Perfection',
			description:
				'It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.',
		},
	];
	return (
		<>
			<Container className='space-y-6 bg-theme_primary-3 rounded-3xl w-[90%] justify-center grid place-items-center mb-12'>
				<h1 className='text-4xl font-dmsans tracking-widest'>How we Work</h1>
				<p className='max-w-xl w-[90%] text-center text-sm text-slate-600'>
					It is a long established fact will be distracted.Lorem Ipsum is simply
					dummy text of the printing and typesetting industry.
				</p>
				<div className='grid gap-6'>
					{serviceWorkData.map((service, i) => (
						<ServiceCard
							key={i + 'item'}
							right={i % 2 === 0}
							title={service.title}
							description={service.description}
							number={service.number}
						/>
					))}
				</div>
			</Container>
		</>
	);
}
