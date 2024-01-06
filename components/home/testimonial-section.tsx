import React from 'react';
import Container from '../container';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const TestimonialSection = () => {
	const testimonials = [
		{
			name: 'Nattasha Mith',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
			img: '/user.jpg',
			location: 'Sydney, USA',
		},
		{
			name: 'Raymond Galario',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
			img: '/user.jpg',
			location: 'Sydney, Australia',
		},
		{
			name: 'Benny Roll',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
			img: '/user.jpg',
			location: 'Sydney, New York',
		},
	];
	return (
		<Container className='md:w-full w-fit bg-[#F4F0EC] rounded-[50px] justify-center items-center flex flex-col space-y-12 px-12 my-6 mx-6'>
			<h3 className='text-center text-3xl max-w-sm font-[400] font-dmsans'>
				What the People Thinks About Us
			</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{testimonials.map((testimonial) => (
					<Testimonial
						key={testimonial.name}
						{...testimonial}
					/>
				))}
			</div>
		</Container>
	);
};

export default TestimonialSection;

type TestimonialProps = {
	img: string;
	name: string;
	text: string;
	location: string;
};
function Testimonial({ img, name, text, location }: TestimonialProps) {
	return (
		<div className='space-y-3 flex flex-col px-6 py-10 rounded-lg bg-white max-w-xs'>
			<div className='flex space-x-2'>
				<Image
					src={img}
					alt={name}
					width={50}
					height={50}
					className='rounded-full'
				/>
				<p>
					<span className='text-lg font-semibold block'>{name}</span>
					<span className='text-xs'>{location}</span>
				</p>
			</div>
			<p className={cn('text-slate-500 text-sm')}>{text}</p>
		</div>
	);
}
