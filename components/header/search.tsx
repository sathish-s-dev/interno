'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
export function Search() {
	const [show, setShow] = useState(false);
	const searchRef = useRef<null | HTMLInputElement>(null);
	useEffect(() => {
		if (show && searchRef.current) {
			searchRef.current.focus();
		}
	}, [show]);
	const router = useRouter();
	return (
		<div className='flex group'>
			{/* <Link href={'/'}> */}
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: show ? 250 : '0' }}>
				<Input
					placeholder='search...'
					ref={searchRef}
					className='border-none outline-theme_primary-2 outline-1 ring-theme_primary-2 focus-visible:ring-1 shadow-none w-full transition-all duration-500'
				/>
			</motion.div>
			<Button
				variant={'link'}
				onClick={() => {
					if(searchRef.current?.value) {
            router.push('/search?query=' + searchRef.current.value);
            searchRef.current.value = ''
          }
          setShow(!show);
				}}>
				<Image
					src={'/icons/search.svg'}
					alt={'search'}
					width={16}
					height={16}
				/>
				{/* </Link> */}
			</Button>
		</div>
	);
}
