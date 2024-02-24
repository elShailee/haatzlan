import React from 'react';
import { MenuCategory } from '../types';
import { MenuStyleName } from '../MenuComponent';
import { getIconElement } from '../utils';

type CategoryProps = {
	category: MenuCategory;
	styleName: MenuStyleName;
};

export default function Category({ category, styleName }: CategoryProps) {
	if (category.type === 'details') {
		return (
			<div>
				<h2>
					{getIconElement({ iconId: category.iconId, styleName, size: 'M' })}
					{category.title}
				</h2>
				<ul>
					{category.items.map((item, index) => (
						<li key={index}>
							{item.title} - {item.variants.map(variant => (category.pricePrefix || '') + variant.price).join(' / ')}
						</li>
					))}
				</ul>
			</div>
		);
	}

	if (category.type === 'footer') {
		return (
			<div>
				<h2>{category.title}</h2>
				<ul>
					{category.items.map((item, index) => (
						<li key={index}>
							{item.title} - {item.variants.map(variant => variant.price + (category.pricePrefix || '')).join(' / ')}
						</li>
					))}
				</ul>
			</div>
		);
	}

	if (category.type === 'cards') {
		return (
			<div>
				<h2>{category.title}</h2>
				<ul>
					{category.items.map((item, index) => (
						<li key={index}>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
