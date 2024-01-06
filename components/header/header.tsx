import { navItems } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavItem from './nav-item';
import { headers } from 'next/headers';

const Header = () => {
	return (
		<header className='flex items-center justify-between px-4 py-6 max-w-5xl mx-auto w-full'>
			<div aria-label='logo'>
				<Link href={'/'}>
					<Image
						src={'/Logo.svg'}
						alt='interno logo'
						width={100}
						height={50}
					/>
				</Link>
			</div>
			<nav>
				<ul className='flex space-x-4 text-sm items-center'>
					{navItems.map((item) => (
						<li key={`${item.title} + ${item.href}`}>
							<NavItem {...item} />
						</li>
					))}
					<li className='hover:scale-105'>
						<Link href={'/'}>
							<Image
								src={'/icons/search.svg'}
								alt={'search'}
								width={16}
								height={16}
							/>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
