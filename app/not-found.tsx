import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
	return (
		<Container className='flex-1 flex flex-col sm:flex-row  items-center md:py-0 gap-10 my-0'>
			<div className='grid gap-4 p-10'>
				<Image
					src={'/404.svg'}
					alt={'404'}
					width={300}
					height={300}
					className=''
				/>
				<Link href={'/'}>
					<Button>Back to home</Button>
				</Link>
			</div>
			<div className='relative w-full hidden sm:flex flex-1 justify-end'>
				<Image
					src={'/404.png'}
					alt={'arrow'}
					height={400}
					width={400}
					className='rounded-bl-[200px] h-screen object-cover w-full'></Image>
			</div>
		</Container>
	);
};

export default NotFoundPage;
