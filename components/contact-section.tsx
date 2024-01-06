import Link from 'next/link';
import Container from './container';
import { Button } from './ui/button';

export function ContactSection() {
	return (
		<Container className='bg-[#292F36] justify-center items-center md:max-w-4xl w-[90%] mx-auto  h-full flex my-6 py-16 md:py-20 flex-col text-slate-200 space-y-4 rounded-[75px] font-inter'>
			<h3 className='text-3xl font-dmsans'>Wanna Join the Interno?</h3>
			<p className='text-slate-300 text-sm'>
				It is a long established fact will be distracted.
			</p>
			<Link href={'/contact'}>
				<Button
					className='bg-[#CDA274] hover:bg-[#CDA274]/90 text-slate-200'
					size={'lg'}>
					Contact with us
					<span className='ml-2 text-200'>→</span>
				</Button>
			</Link>
		</Container>
	);
}
