'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();
	router.push('/menus/friday');
	return <div id='index-page-container'>redirecting...</div>;
}
