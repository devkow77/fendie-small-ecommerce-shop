import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Navbar, ThemeProvider, Ad, Footer } from './components/index';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Fendie - Hoodie Eccomerce Shop',
	description: 'Fendie is small eccomerce hoodies shop in New York',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} dark:bg-neutral-900 dark:text-white bg-white text-slate-400`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<Ad>Unlock savings now! Enter code 'CODE10' at checkout before 01.12.2024 to enjoy an exclusive 10% discount on your purchase. Don't miss out on this limited-time offer!</Ad>
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
