import styles from './styles.module.css';

export default function Home() {
	const random = Math.random();
	const coinflip = random > 0.5;
	return (
		<div id='app-container' className={coinflip ? styles.appContainer : styles.appContainerBlack}>
			Homepage
		</div>
	);
}
