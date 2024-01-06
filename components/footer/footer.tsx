import React from 'react';
import Container from '../container';
import Image from 'next/image';
import Link from 'next/link';
import { FooterGroup, footerItems } from '@/constants';
import SocialLink from '../social-link';

const Footer = () => {
	return (
		<footer className='w-full border-t border-slate-100'>
			<Container className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:px-6 place-items-center sm:place-items-start sm:text-start text-center'>
				<div className='grid gap-3 content-start flex-1 flex-shrink-0 max-w-xs items-center'>
					<Image
						src={'/Logo.svg'}
						alt='interno logo'
						width={100}
						height={50}
					/>
					<p className='text-sm text-slate-500 max-w-xs'>
						It is a long established fact that a reader will be distracted
						lookings.
					</p>
					<SocialLink />
				</div>
				{footerItems.map((item) => (
					<FooterGroup
						group={item}
						key={item.title + item.links}
					/>
				))}
			</Container>
			<p className='text-sm text-slate-500 text-center mb-6'>
				© 2022 Interno. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;

type FooterGroupProps = {
	group: FooterGroup;
};

function FooterGroup({ group: { title, links } }: FooterGroupProps) {
	return (
		<div
			key={title}
			className='space-y-3 max-w-[250px]'>
			<h4 className='text-lg font-semibold'>{title}</h4>
			<ul className='grid gap-y-3'>
				{links.map((link) => (
					<li key={link.value}>
						<Link
							href={link.href}
							className='text-sm text-slate-500 hover:text-orange-300'>
							{link.value}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
