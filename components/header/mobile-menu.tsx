'use client';
import { useState } from 'react';
import { NavigationBar } from './header';
import { Button } from '../ui/button';
import {
	Cross1Icon,
	EyeClosedIcon,
	HamburgerMenuIcon,
} from '@radix-ui/react-icons';

export function MobileMenu() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	return (
		<>
			<button
				className='bg-transparent p-2'
				onClick={() => setShowMobileMenu(!showMobileMenu)}>
				{showMobileMenu ? <Cross1Icon /> : <HamburgerMenuIcon />}
			</button>
			{showMobileMenu && (
				<NavigationBar
					className='flex-col absolute space-x-0 gap-y-10 bg-theme_primary-3 top-20 left-0 px-24 py-12 flex sm:hidden'
					textColor='text-theme_primary-1'
				/>
			)}
		</>
	);
}
