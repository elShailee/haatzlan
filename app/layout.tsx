import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import './variables.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Pub Haatzlan',
	description: 'Pub Haatzlans website',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
