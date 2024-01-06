import type { Metadata } from 'next';
import { Inter, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import toast, { Toaster } from 'react-hot-toast';

// export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dmSerif = DM_Serif_Display({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-dm-serif',
});

export const metadata: Metadata = {
	title: 'Interno | We Create The Art Of Stylish Living Stylishly',
	description: 'We Create The Art Of Stylish Living Stylishly',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={` ${dmSerif.variable} font-inter flex flex-col min-h-screen w-full`}>
				<Header />
				{children}
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
