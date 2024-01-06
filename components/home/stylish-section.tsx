import Image from 'next/image';
import Container from '../container';
import { Button } from '../theme-button';

export function StylishSection() {
	return (
		<Container className='flex items-center w-full justify-between px-8 flex-col md:flex-row gap-12'>
			<div className='max-w-md md:max-w-sm space-y-6 text-center md:text-start'>
				<h3 className='text-4xl font-dmsans tracking-wider'>
					We Create The Art Of Stylish Living Stylishly
				</h3>
				<p className='text-sm text-slate-500 md:max-w-[300px]'>
					It is a long established fact that a reader will be distracted by the
					of readable content of a page when lookings.
				</p>
				<div className='flex space-x-3 items-center md:justify-start justify-center'>
					<Image
						src={'/Call Icon.svg'}
						alt='call icon'
						width={50}
						height={50}
					/>
					<div>
						<p>
							<span className='text-lg font-semibold'>+1 123 456 7890</span>
						</p>
						<span className='text-slate-500'>Call Us Anytime</span>
					</div>
				</div>
				<Button title='Get Free Estimate' />
			</div>
			<div className='max-w-md rounded-bl-3xl rounded-tr-[150px] overflow-clip h-[600px]'>
				<Image
					src={'/style.jpg'}
					alt='hero_bg'
					width={650}
					height={700}
					className='object-cover h-full'
				/>
			</div>
		</Container>
	);
}
