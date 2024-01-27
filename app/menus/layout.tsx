import Logo from '../components/Logo';
import styles from './layout.module.css';

export default function MenusLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={styles.container}>
			<Logo />
			{children}
		</div>
	);
}
