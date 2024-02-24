import BeerIcon from '@/public/icons/BeerIcon';
import { MenuStyleName } from './MenuComponent';
import { fridayMenuData } from './mockData/fridayMenuData';
import BeerIcon3 from '@/public/icons/BeerIcon3';
import { ReactNode } from 'react';

export const getMenuData = (id: string) => {
	if (id === 'friday') {
		return fridayMenuData;
	}

	throw new Error(`Unknown menu id: ${id}`);
};

// NEED TO IMPLEMENT USE OF SIZE
type IconSize = 'S' | 'M' | 'L';
export const getIconElement = ({
	iconId,
	size,
	styleName,
}: {
	iconId: string;
	size: IconSize;
	styleName: MenuStyleName;
}) => {
	const iconElements: { [key: string]: ReactNode } = {
		beer: BeerIcon,
		beer3: BeerIcon3,
	};

	const element = iconElements[iconId];

	if (!element) {
		throw new Error(`Unknown icon id: ${iconId}`);
	}

	return element;
};
