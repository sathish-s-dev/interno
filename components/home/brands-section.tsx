import Image from 'next/image';
import Container from '../container';

export function BrandsSection() {
	const brands = [
		{
			src: '/brands/01.svg',
			alt: 'Mordern Home',
		},
		{
			src: '/brands/02.svg',
			alt: 'stylish vintage',
		},
		{
			src: '/brands/03.svg',
			alt: 'Brand',
		},
		{
			src: '/brands/04.svg',
			alt: 'Nature home',
		},
		{
			src: '/brands/05.svg',
			alt: 'clasic deisgn studio',
		},
	];
	return (
		<Container className='w-full flex items-center justify-around relative flex-wrap gap-12'>
			{brands.map(({ src, alt }) => (
				<div key={'brand-' + alt}>
					<Image
						src={src}
						alt={alt}
						width={100}
						height={100}
						className='object-contain'
					/>
				</div>
			))}
		</Container>
	);
}
