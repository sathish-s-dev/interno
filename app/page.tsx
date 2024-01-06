import {
	BrandsSection,
	CounterSection,
	HeroSection,
	ProjectsSection,
	StylishSection,
	TestimonialSection,
	WorkSection,
} from '@/components/home';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between text-slate-700'>
			<HeroSection />
			<WorkSection />
			<StylishSection />
			<TestimonialSection />
			<BrandsSection />
			<ProjectsSection />
			<CounterSection />
			<ContactSection />
		</main>
	);
}
