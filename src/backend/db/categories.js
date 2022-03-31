import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: 'Expresso',
    image:'https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
		description:
			'Literally, Press Coffee is a type of strong black coffee made by forcing steam through ground coffee beans.'
	},
	{
		_id: uuid(),
		categoryName: 'Coffee Mugs',
    image:'https://images.unsplash.com/photo-1513127653385-eeaf744da067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
		description:
			'Hand Crafted to speacially desgined and machine manufactured high quality mugs'
	},
	{
		_id: uuid(),
		categoryName: 'Instant Coffee',
		description:
			'Instant coffee, also called soluble coffee, coffee crystals, coffee powder, or powdered coffee, is a beverage derived from brewed coffee beans that enables people to quickly prepare hot coffee by adding hot water or milk to the powder or crystals and stirring. Instant coffee is commercially prepared by either freeze-drying or spray drying, after which it can be rehydrated.'
	},
	{
		_id: uuid(),
		categoryName: 'Filter Coffee',
		description:
			'Indian filter coffee is a coffee drink made by mixing frothed and boiled milk with the infusion obtained by percolation brewing of finely ground coffee powder in a traditional Indian filter.'
	}
];
