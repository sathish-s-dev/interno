import Image from 'next/image';
import React from 'react';

type HeroProps = {
	imageUrl: string;
	title: string;
	path: string;
};
const Hero = ({ imageUrl, title, path }: HeroProps) => {
	return (
		<div className='flex justify-center flex-col items-center font-dmsans relative'>
			<div className='w-full h-[40vh] relative overflow-hidden'>
				<Image
					src={imageUrl}
					alt='hero_bg'
					fill
					className='filter absolute brightness-90 object-cover -z-[1]'
				/>
			</div>
			<div className='absolute z-10 -bottom-2 bg-white max-w-fit px-10 rounded-t-xl pb-10 pt-4 text-center'>
				<h2 className='text-2xl font-bold'>{title}</h2>
				<p className='text-xs font-inter pt-2'>{path}</p>
			</div>
		</div>
	);
};

export default Hero;
