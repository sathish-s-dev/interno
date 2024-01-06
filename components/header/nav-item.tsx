'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type NavItemProps = {
	href: string;
	title: string;
};

const NavItem = ({ href, title }: NavItemProps) => {
	const url = usePathname();
	return (
		<Link
			href={href}
			className={cn(
				'text-theme_primary-1 tracking-wider hover:text-theme_primary-2 font-[500] transition-all duration-300',
				url === href ? 'text-theme_primary-2' : ''
			)}>
			{title}
		</Link>
	);
};

export default NavItem;
