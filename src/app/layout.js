import Nav from '@/components/common/navigation/Nav';
import './globals.css';
import { Roboto, Tilt_Neon } from 'next/font/google';

import Footer from '@/components/common/navigation/Footer';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '500', '700', '900'],
});

export const metadata = {
	title: 'Spin Studio',
	description:
		'We help businesses have a lasting impact on customers by crafting captivating designs and Development that stands out.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			{/* <body className={roboto.className}> */}
			<body>
				{/* <Nav /> */}
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
