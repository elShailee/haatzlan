import { fridayMenuData } from './mockData/fridayMenuData';

export const getMenuData = (id: string) => {
	if (id === 'friday') {
		return fridayMenuData;
	}

	throw new Error(`Unknown menu id: ${id}`);
};
