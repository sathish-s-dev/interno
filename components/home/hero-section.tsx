import Image from 'next/image';
import { Button } from '@/components/theme-button';

export function HeroSection() {
	return (
		<div className='w-full h-screen rounded-bl-[50px] md:rounded-bl-[150px] relative overflow-hidden'>
			<Image
				src='/hero_bg.jpg'
				alt='hero_bg'
				fill
				className='filter absolute brightness-90 object-cover -z-[1]'
			/>
			<div className='w-full h-full flex md:px-40 px-8 items-center'>
				<div className='max-w-lg space-y-6'>
					<h2 className='text-5xl font-semibold font-dmsans'>
						Let Your Home Be Unique
					</h2>
					<p>
						There are many variations of the passages of lorem Ipsum
						fromavailable,variations of the passages.
					</p>
					<Button
						title='Get Started'
						className='bg-theme_primary-1'
					/>
				</div>
			</div>
		</div>
	);
}
