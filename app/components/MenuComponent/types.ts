export type MenuData = {
	title: string;
	description: string;
	categories: Array<MenuCategory>;
};

export type MenuCategory = DetailsCategory | FooterCategory | CardsCategory;

type BaseCategory = {
	title: string;
	pricePrefix?: string;
};

type DetailsCategory = BaseCategory & {
	type: 'details';
	iconId: IconId;
	items: MenuItem[];
};

type FooterCategory = BaseCategory & {
	type: 'footer';
	items: MenuItem[];
};

type CardsCategory = BaseCategory & {
	type: 'cards';
	items: MenuCard[];
};

export type MenuItem = {
	title: string;
	variants: MenuItemVariant[];
};

type MenuItemVariant = {
	title: string;
	price: number;
};

export type MenuCard = {
	title: string;
	description: string;
	iconId: IconId;
};

type IconId = 'beer' | 'beer3';
