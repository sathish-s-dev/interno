import { ContactSection } from '@/components/contact-section';
import Container from '@/components/container';
import Hero from '@/components/hero';
import ServiceCardSection from '@/components/services/service-card-section';
import { WorksSection } from '@/components/services/works-section';
import { WorkCard } from '@/components/work-card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const ServicesPage = () => {
	return (
		<main className='flex-1'>
			<Hero
				imageUrl='/hero_bg.jpg'
				path='Home / Services'
				title='Services'
			/>
			<ServiceCardSection />
			<WorksSection />
			<ContactSection />
		</main>
	);
};

export default ServicesPage;

