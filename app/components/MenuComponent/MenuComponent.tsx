import React from 'react';
import { getMenuData } from './utils';

type MenuStyle = 'greenAndGold';

type MenuComponentProps = {
	id: string;
	styleName: MenuStyle;
};

export default function MenuComponent({ id, styleName }: MenuComponentProps) {
	const menuData = getMenuData(id);

	return JSON.stringify(menuData);
}
