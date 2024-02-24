export type MenuData = {
	title: string;
	description: string;
	categories: Array<MenuCategory>;
};

type MenuCategory = DetailsCategory | FooterCategory | CardsCategory;

type DetailsCategory = {
	type: 'details';
	title: string;
	iconId: IconId;
	items: MenuItem[];
};

type FooterCategory = {
	type: 'footer';
	title: string;
	items: MenuItem[];
};

type CardsCategory = {
	type: 'cards';
	title: string;
	items: MenuCard[];
};

type MenuItem = {
	title: string;
	variants: MenuItemVariant[];
};

type MenuItemVariant = {
	title: string;
	price: number;
};

type MenuCard = {
	title: string;
	description: string;
	iconId: IconId;
};

type IconId = 'beer' | 'beer3';
