import { ContactForm } from '@/components/contact/contact-form';
import Container from '@/components/container';
import Hero from '@/components/hero';
import SocialLink from '@/components/social-link';
import { contactSchema } from '@/schemas/contact-schema';
import Image from 'next/image';

const ContactPage = () => {
	return (
		<main className='flex-1'>
			<Hero
				path='Home/Contact'
				imageUrl='/hero_bg.jpg'
				title='Contact Us'
			/>
			<ContactFormSection />
			<MapSection />
		</main>
	);
};

export default ContactPage;

function MapSection() {
	return (
		<Container className='py-0'>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1959447343193!2d77.7017474!3d12.9593101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1383fc363ceb%3A0x66009e3075ae9b11!2sALTEK%20COMPUTER%20EDUCATION!5e0!3m2!1sen!2sin!4v1704290993438!5m2!1sen!2sin'
				style={{ border: 0 }}
				loading='lazy'
				className='w-full h-[50vh] rounded-[24px]'
				referrerPolicy='no-referrer-when-downgrade'
			/>
		</Container>
	);
}

function ContactFormSection() {
	return (
		<Container className='text-xl justify-center items-center w-full h-full flex my-12 flex-colspace-y-4 rounded-[50px] font-inter flex-col'>
			<h3 className='font-dmsans pb-20 text-2xl max-w-xs text-center text-slate-800'>
				We love meeting new people and helping them.
			</h3>
			<div className='grid grid-cols-1 md:grid-cols-5 w-full gap-12'>
				<div className='bg-theme_primary-3 text-slate-900 p-10 rounded-3xl col-span-2 grid gap-y-4'>
					<ContactItem
						icon='/Icons/Maill.svg'
						text='support@interno.com'
					/>
					<ContactItem
						icon='/Icons/icon_call.svg'
						text='+1 (378) 400-1234'
					/>
					<ContactItem
						icon='/Icons/icon_globe.svg'
						text='www.interno.com'
					/>
					<SocialLink />
				</div>
				<div className='flex flex-col space-y-6 w-full col-span-3'>
					<ContactForm />
				</div>
			</div>
		</Container>
	);
}

function ContactItem({ icon, text }: { icon: string; text: string }) {
	return (
		<div className='grid grid-cols-[50px_minmax(900px,_1fr)] text-[16px] gap-x-2 items-center'>
			<Image
				src={icon}
				alt='arrow'
				width={50}
				height={50}
				className=''
			/>
			<p className='text-slate-600'>{text}</p>
		</div>
	);
}
