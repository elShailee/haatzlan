import React from 'react';
import { getMenuData } from './utils';
import Category from './components/Category';

export type MenuStyleName = 'greenAndGold';

type MenuComponentProps = {
	id: string;
	styleName: MenuStyleName;
};

export default function MenuComponent({ id, styleName }: MenuComponentProps) {
	const menuData = getMenuData(id);

	return (
		<div>
			<h1>{menuData.title}</h1>
			<p>{menuData.description}</p>
			{menuData.categories.map((category, index) => (
				<Category key={index} category={category} styleName={styleName} />
			))}
		</div>
	);
}
