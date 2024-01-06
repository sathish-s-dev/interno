'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type NavItemProps = {
	href: string;
	title: string;
	className?: string;
};

const NavItem = ({ href, title, className }: NavItemProps) => {
	const url = usePathname();
	return (
		<Link
			href={href}
			className={cn(
				'group font-semibold tracking-wider hover:text-theme_primary-2 transition-all duration-300 hover:-rotate-[4deg]  block',
				url === href ? 'text-theme_primary-2' : 'text-theme_primary-1/60',
				className
			)}>
			<div className='w-full scale-0 group-hover:scale-125 transition-all duration-500 h-[1px] bg-theme_primary-2 ' />

			{title}
			<div className='w-full scale-0 group-hover:scale-125 transition-all duration-500 h-[1px] bg-theme_primary-2 mt-[2px] ' />
		</Link>
	);
};

export default NavItem;
