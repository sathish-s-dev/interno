export const navItems = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'About',
		href: '/about',
	},
	{
		title: 'Contact',
		href: '/contact',
	},
	{
		title: 'Services',
		href: '/services',
	},
	{
		title: 'Faq',
		href: '/faq',
	},
];

export type FooterGroup = {
	title: string;
	links: { value: string; href: string }[];
};

export const footerItems: FooterGroup[] = [
	{
		title: 'Pages',
		links: [
			{ value: 'About us', href: '/about' },
			{ value: 'Our Team', href: '/our-team' },
			{ value: 'Our Works', href: '/our-works' },
			{ value: 'Services', href: '/services' },
			{ value: 'Contact', href: '/contact' },
		],
	},
	{
		title: 'Services',
		links: [
			{ value: 'Kitchen', href: '/about' },
			{ value: 'Living Area', href: '/our-team' },
			{ value: 'Bathroom', href: '/our-works' },
			{ value: 'Dinning Hall', href: '/services' },
			{ value: 'Bedroom', href: '/contact' },
		],
	},
	{
		title: 'Contact',
		links: [
			{ value: '55 East Birchwood Ave. Brooklyn, New York 11201', href: '#' },
			{ value: 'contact@interno.com', href: 'mailto:contact@interno.com' },
			{ value: '123-456-7890', href: 'tel:123-456-7890' },
		],
	},
];

export type FAQ = {
	question: string;
	answer: string;
};

export const EveryQuestionFaqData: FAQ[] = [
	{
		question: 'What is the Hipcouch Interior Design Service?',

		answer: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.`,
	},
	{
		question: 'So, how exactly does this work?',
		answer: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.`,
	},
	{
		question: 'What cities do you currently operate in?',
		answer: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.`,
	},
	{
		question: 'Hipcouch Interior Design Service?',
		answer: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.`,
	},
];
const ProjectRelatedFaqData = [
	{
		question: 'What is the Hipcouch Interior Design Service?',

		answer: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.`,
	},
	{
		question: 'So, how exactly does this work?',
		answer: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.`,
	},
	{
		question: 'What cities do you currently operate in?',
		answer: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.`,
	},
	{
		question: 'Hipcouch Interior Design Service?',
		answer: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.`,
	},
];
