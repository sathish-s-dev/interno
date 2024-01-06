import { navItems } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavItem from './nav-item';
import { headers } from 'next/headers';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search } from './search';
import { cn } from '@/lib/utils';
import { MobileMenu } from './mobile-menu';

const Header = () => {
	return (
		<header className=' bg-theme_primary-3 z-20 shadow-md w-full sticky top-0'>
			<div className='flex max-w-5xl mx-auto justify-between items-center h-full px-4 py-6 '>
				<div aria-label='logo' className='flex items-center space-y-2'>
				<MobileMenu />
					<Link href={'/'}>
						<Image
							src={'/Logo.svg'}
							alt='interno logo'
							width={100}
							height={50}
							className='hover:animate-bounce'
						/>
					</Link>
				</div>
				<nav className='flex space-x-2'>
					<NavigationBar />	
					<Search />
				</nav>
			</div>
		</header>
	);
};

export default Header;

export function NavigationBar({className, textColor}: {className?: string; textColor?: string}) {
	return (
		<ul className={cn('sm:flex space-x-4 text-sm items-center hidden', className)}>
			{navItems.map((item) => (
				<li key={`${item.title} + ${item.href}`}>
					<NavItem className={textColor} {...item} />
				</li>
			))}
		</ul>
	);
}
