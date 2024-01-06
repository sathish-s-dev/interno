import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SocialLink = ({ vertical }: { vertical?: boolean }) => {
	const links = [
		{
			name: 'Twitter',
			href: 'https://twitter.com/withastro',
			icon: '/social-icons/twitter.svg',
		},
		{
			name: 'instagram',
			href: 'https://instagram.com/withastro',
			icon: '/social-icons/insta.svg',
		},
		{
			name: 'LinkedIn',
			href: 'https://linkedin.com',
			icon: '/social-icons/linkedin.svg',
		},
		{
			name: 'facebook',
			href: 'https://facebook.com',
			icon: '/social-icons/fb.svg',
		},
	];

	return (
		<div
			className={cn(
				'flex space-x-4 items-end',
				vertical && 'flex-col space-y-4 space-x-0'
			)}>
			{links.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					className='text-slate-500 hover:text-orange-300 relative hover:scale-105'>
					<Image
						src={link.icon}
						alt={link.name}
						width={20}
						height={20}
						className='w-full h-full hover:fill-orange-400'
					/>
				</Link>
			))}
		</div>
	);
};

export default SocialLink;
