import Image from 'next/image';
import Container from '../container';

export function ProjectsSection() {
	const projects = [
		{
			cardTitle: 'Modern Kitchen',
			cardText: 'Decor / Artchitecture',
			cardImg: '/style.jpg',
		},
		{
			cardTitle: 'Modern Kitchen',
			cardText: 'Decor / Artchitecture',
			cardImg: '/style.jpg',
		},
		{
			cardTitle: 'Modern Kitchen',
			cardText: 'Decor / Artchitecture',
			cardImg: '/style.jpg',
		},
		{
			cardTitle: 'Modern Kitchen',
			cardText: 'Decor / Artchitecture',
			cardImg: '/style.jpg',
		},
	];
	return (
		<Container className='flex justify-center'>
			<div className='grid place-items-center text-center px-6 lg:px-24 gap-y-4'>
				<h3 className='font-bold text-3xl font-dmsans'>Follow Our Projects</h3>
				<p className='max-w-3xl'>
					It is a long established fact that a reader will be distracted by the
					of readable content of page lookings at its layouts points.
				</p>
				<div className='grid md:grid-cols-2 gap-10 gap-x-24 grid-cols-1'>
					{projects.map((project, i) => (
						<ProjectCard
							cardImg={project.cardImg}
							cardText={project.cardText}
							cardTitle={project.cardTitle}
							key={project.cardTitle + i}
						/>
					))}
				</div>
			</div>
		</Container>
	);
}

function ProjectCard({
	cardTitle,
	cardText,
	cardImg,
}: {
	cardTitle: string;
	cardText: string;
	cardImg: string;
}) {
	return (
		<div className='rounded-tr-[50px] overflow-clip space-y-3 shadow-sm'>
			<div className='max-w-[350px]'>
				<Image
					src={cardImg}
					alt={'style'}
					width={500}
					height={500}
					className={'rounded'}
				/>
			</div>
			<div className='flex flex-1 justify-between'>
				<div>
					<h4>{cardTitle}</h4>
					<p className='text-xs text-slate-500'>{cardText}</p>
				</div>
				<Image
					src={'/arrow.svg'}
					alt={'arrow'}
					width={36}
					height={36}></Image>
			</div>
		</div>
	);
}
