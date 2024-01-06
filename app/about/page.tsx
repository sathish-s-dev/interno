import { TechTalkForm } from '@/components/about/tech-form';
import Container from '@/components/container';
import { Button } from '@/components/theme-button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
	return (
		<main className='flex-1 grid place-items-center'>
			<Container className='justify-center items-center flex relative my-16'>
				<div className='relative w-full max-w-xl flex justify-center items-center'>
					<Image
						src={'/Pattern.svg'}
						alt='qoute pattern'
						width={500}
						height={500}
						className='w-[90%] max-w-lg absolute -z-10'
					/>
					<div className='max-w-xs text-center grid gap-y-4 place-items-center text-slate-500'>
						<Image
							src={'/icons/quote.svg'}
							alt={'quote'}
							width={50}
							height={50}
						/>
						<h2>
							I like an interior that defies labeling. I don&apos;t really want
							someone to walk into a room and know that I did it
						</h2>
						<p>-BUNNY WILLIAMS</p>
					</div>
				</div>
			</Container>
			{Array(5)
				.fill(0)
				.map((_, i) => (
					<AboutCard
						key={i + 'item'}
						right={i % 2 === 0}
						title='What We Do'
						description='It is a long established fact that a reader will be distracted by the
					of readable content of a page when lookings at its layouts the points
					of using that it has a more-or-less normal.'
					/>
				))}
			<div className='grid max-w-lg text-center gap-12 my-12'>
				<h3 className='font-dmsans text-4xl'>
					Creative project? Let&apos;s have a productive talk.
				</h3>
				<TechTalkForm className=' ' />
			</div>
		</main>
	);
};

export default AboutPage;

function AboutCard({
	title,
	description,
	right,
}: {
	title: string;
	description: string;
	right?: boolean;
}) {
	return (
		<Container
			className={cn(
				'flex flex-col md:flex-row gap-10 justify-center items-center',
				right && 'md:flex-row-reverse'
			)}>
			<div className='flex-1 relative w-[90%] md:max-w-[400px]'>
				<Image
					src={'/style.jpg'}
					alt='what we do'
					width={400}
					height={200}
					className='rounded-3xl md:max-h-[200px] max-h-[250px] w-full object-cover'
				/>
			</div>
			<div className='flex-1 flex flex-col justify-center space-y-4'>
				<h3 className='font-dmsans text-4xl'>{title}</h3>
				<p className='max-w-md text-slate-500'>{description}</p>
				<Button
					className='self-start'
					title='Read More'
				/>
			</div>
		</Container>
	);
}
