import MenuComponent from '@/app/components/MenuComponent/MenuComponent';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'פאב העצלן - תפריט שישי',
	description: 'תפריט שישי בפאב העצלן',
};

export default function FridayMenu() {
	return <MenuComponent id='friday' styleName='greenAndGold' />;
}
