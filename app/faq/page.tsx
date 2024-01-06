'use client';
import Hero from '@/components/hero';
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '../../components/ui/accordion';
import React from 'react';
import Container from '@/components/container';
import Image from 'next/image';
import { EveryQuestionFaqData, FAQ } from '@/constants';
import { cn } from '@/lib/utils';

const FaqPage = () => {
	return (
		<main className='flex-1'>
			<Hero
				path='Home / FAQ'
				imageUrl='/hero_bg.jpg'
				title='FAQ'
			/>
			<div>
				<FaqSection
					imageUrl='/style.jpg'
					title='Every Question Answered'
				/>
				<FaqSection
					imageUrl='/style.jpg'
					title='Project related questions'
					right
				/>
			</div>
		</main>
	);
};

export default FaqPage;

function FaqSection({
	imageUrl,
	right,
	title,
}: {
	imageUrl: string;
	right?: boolean;
	title?: string;
}) {
	return (
		<Container className='grid gap-y-6'>
			<h2 className='font-dmsans text-4xl text-center text-slate-700'>
				{title}
			</h2>
			<div
				className={cn(
					'flex flex-col sm:flex-row py-6 md:py-6 items-start gap-10',
					right && 'sm:flex-row-reverse'
				)}>
				<div className='max-w-[325px] w-full overflow-hidden flex justify-center items-center flex-1'>
					<Image
						src={imageUrl}
						alt={'faq'}
						width={250}
						height={200}
						className='w-full h-full object-cover rounded-[24px]'
					/>
				</div>
				<FaqAccordion data={EveryQuestionFaqData} />
			</div>
		</Container>
	);
}

function FaqAccordion({ data }: { data: FAQ[] }) {
	return (
		<Accordion
			className='w-full max-w-xl flex-1 p-6'
			type='single'
			collapsible>
			{data.map((item) => (
				<AccordionItem
					value={item.question}
					key={item.question}>
					<AccordionTrigger className='text-slate-800'>
						{item.question}
					</AccordionTrigger>
					<AccordionContent className='text-slate-600'>
						{item.answer}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
