import { v4 as uuid } from 'uuid';

/**
 * TODO: Add more products
 * */

export const products = [
	{
		_id: uuid(),
		title: 'Caffè latte',
		price: '219',
		discount: '10',
		category: 'Instant Coffee',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, incidunt?'
	},
	{
		_id: uuid(),
		title: 'Caffè latte',
		price: '400',
		discount: '5',
		category: 'Instant Coffee',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, incidunt?'
	},
	{
		_id: uuid(),
		title: 'Caffè latte',
		price: '600',
		discount: '2',
		category: 'Filter Coffee',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, incidunt?'
	},
	{
		_id: uuid(),
		title: 'Caffè latte',
		price: '780',
		discount: '4',
		category: 'Filter Coffee',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, incidunt?'
	},
	{
		_id: uuid(),
		title: 'Caffè latte',
		price: '240',
		discount: '2',
		category: 'Tea Blend',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, incidunt?'
	}
];
