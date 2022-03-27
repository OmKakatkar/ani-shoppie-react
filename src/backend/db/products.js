import { v4 as uuid } from 'uuid';

/**
 * TODO: Add more products
 * */

export const products = [
	{
		_id: uuid(),
		title: 'Blue Tokai | Vienna Roast',
		image: 'https://m.media-amazon.com/images/I/61jVuc32+bL._SX522_.jpg',
		price: '420',
		discount: '2',
		rating: '4',
		category: 'Filter Coffee',
		description: 'Vienna Roast Arabica - 250gm Dark Roast'
	},
	{
		_id: uuid(),
		title: 'Mysore Concerns | Brindavan Bold',
		image: 'https://m.media-amazon.com/images/I/715kWlBq3dL._AC_UL320_.jpg',
		price: '750',
		discount: '5',
		rating: '3',
		category: 'Filter Coffee',
		description: 'South Indian Filter Coffee | 80% Coffee, 20% Chicory'
	},
	{
		_id: uuid(),
		title: 'Lavazza Crema E Gusto Ground Coffee',
		image: 'https://m.media-amazon.com/images/I/81ExpHS+vXL._AC_UL320_.jpg',
		price: '380',
		discount: '2',
		rating: '5',
		category: 'Filter Coffee',
		description:
			'This ground coffee blend made from Arabica and Robusta beans is creamy and fulfilling'
	},
	{
		_id: uuid(),
		title: 'Tata Coffee Grand Filter Coffee',
		image: 'https://m.media-amazon.com/images/I/617SMwcS4HS._AC_UL320_.jpg',
		price: '180',
		discount: '2',
		rating: '5',
		category: 'Filter Coffee',
		description:
			'The mixture contains a blend of 53% Coffee and 47% Chicory. Delivers an intensely sophisticated and fresh aroma'
	},
	{
		_id: uuid(),
		title: 'BRU Green Label Filter Coffee',
		image: 'https://m.media-amazon.com/images/I/61FlCfSqpzS._AC_UL320_.jpg',
		price: '160',
		discount: '4',
		rating: '4',
		category: 'Filter Coffee',
		description:
			'Powder 500 g Pouch, Lightly Roasted Ground Coffee Beans from South India - Rich & Strong Blend of Coffee'
	},
	{
		_id: uuid(),
		title: 'PRISTINE Deccan Gold',
		image: 'https://m.media-amazon.com/images/I/81fNgK8l5bL._AC_UL320_.jpg',
		price: '300',
		discount: '4',
		rating: '3',
		category: 'Filter Coffee',
		description:
			'Gold Roasted Premium Pure Filter Coffee Powder (80% Coffee 20% Chicory) 500g'
	},
	{
		_id: uuid(),
		title: 'Nescafé Classic Coffee',
		image: 'https://m.media-amazon.com/images/I/71PiszDkulL._AC_UL320_.jpg',
		price: '300',
		discount: '2',
		rating: '2',
		category: 'Instant Coffee',
		description:
			'Start your day right with the first sip of this classic that awakens your senses to new opportunities'
	},
	{
		_id: uuid(),
		title: 'Rage Coffee - Premium',
		image: 'https://m.media-amazon.com/images/I/61vnQwqiH8S._AC_UL320_.jpg',
		price: '440',
		discount: '1',
		rating: '5',
		category: 'Instant Coffee',
		description:
			'100% Ethiopian Arabica Instant Coffee Crystals Infused with Natural Vitamins - 100 GMS '
	},
	{
		_id: uuid(),
		title: 'BRU Instant Coffee',
		image: 'https://m.media-amazon.com/images/I/61gIV9FklqL._AC_UL320_.jpg',
		price: '290',
		discount: '2',
		rating: '3',
		category: 'Instant Coffee',
		description:
			'Roasted Arabica & Robusta Ground Coffee Beans From South India - Rich & Strong Blend Of Coffee'
	},
	{
		_id: uuid(),
		title: 'Kaffa Cerrado Indonesia Mandheling',
		image: 'https://m.media-amazon.com/images/I/61LREXJux4L._AC_UL320_.jpg',
		price: '900',
		discount: '5',
		rating: '4',
		category: 'Instant Coffee',
		description:
			'Dark Roast Grounded Coffee Powder, Paper Filtered, 250 gm Pouch'
	},
	{
		_id: uuid(),
		title: 'Continental Coffee Xtra',
		image: 'https://m.media-amazon.com/images/I/71AW67MqPOL._AC_UL320_.jpg',
		price: '250',
		discount: '2',
		rating: '3',
		category: 'Instant Coffee',
		description:
			'Instant 70% Coffee - 30% Chicory Mixture Carefully chosen Coffee Beans blended with roasted Chicory to provide a strong cup of rich tasting Its chunky granules lock the aroma and ﬂavour giving a strong & divine taste to the coﬀee. This is the strongest cup of instant coﬀee you will ever taste '
	},
	{
		_id: uuid(),
		title: 'Colombian Brew Arabica Espresso',
		image: 'https://m.media-amazon.com/images/I/61VQrzYRMsL._AC_UL320_.jpg',
		price: '200',
		discount: '1',
		rating: '4',
		category: 'Expresso',
		description:
			"Colombian Brew Coffee is inspired by Franceso Romero, a 16th century Colombian Priest that started Colombia's coffee revolution. Our coffee is sourced from the best coffee plantations in the world."
	},
	{
		_id: uuid(),
		title: 'Colombian Brew High Caffeine Espresso',
		image: 'https://m.media-amazon.com/images/I/71OypM0BHLL._AC_UL320_.jpg',
		price: '200',
		discount: '2',
		rating: '4',
		category: 'Expresso',
		description:
			"Colombian brew high caffeine espresso instant coffee, strong, 50g. This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. Add sugar as per taste."
	},
	{
		_id: uuid(),
		title: 'Lavazza Caffe Espresso',
		image: 'https://m.media-amazon.com/images/I/61HxQT68XkL._AC_UL320_.jpg',
		price:'500',
		discount: '5',
		rating: '5',
		category: 'Expresso',
		description:
			"Blend made from 100 percent specially selected Arabica coffees from south America and Africa. Medium roasted coffee with the notes of fruits and flowers"
	},
	{
		_id: uuid(),
		title: 'Davidoff Café Espresso 57 Intense',
		image: 'https://m.media-amazon.com/images/I/71vN+wF37uS._AC_UL320_.jpg',
		price:'500',
		discount: '5',
		rating: '3',
		category: 'Expresso',
		description:
			"An intense, elegant, rich and truly luxurious espresso"
	},
	{
		_id: uuid(),
		title: 'Jarved Espresso Intenso',
		image: 'https://m.media-amazon.com/images/I/71C2ceJB06L._AC_UL320_.jpg',
		price:'420',
		discount: '2',
		rating: '3',
		category: 'Expresso',
		description:
			"We handcraft our coffee using the finest quality beans and an original process to give you a product that stands out for its long-lasting aftertaste, strong body, and spicy aroma; This earthy mix of instant coffee powder is composed entirely of agglomerated coffee with no chicory added"
	},
	{
		_id: uuid(),
		title: 'Wosta Travel Mug',
		image: 'https://m.media-amazon.com/images/I/41KRZoNNaxL._AC_UL320_.jpg',
		price:'710',
		discount: '10',
		rating: '5',
		category: 'Mug',
		description:
			"Insulated Coffee Cup with Leakproof Lid ,Vacuum Insulation Stainless Steel Reusable for Hot and Cold Coffee,"
	},
	{
		_id: uuid(),
		title: 'Vidha Impex Lazy Panda',
		image: 'https://m.media-amazon.com/images/I/31ZGHU33RmL._AC_UL320_.jpg',
		price:'270',
		discount: '4',
		rating: '4',
		category: 'Mug',
		description:
			"Lazy Panda Printed Coffee Mug. Ceramic Coffee Tea Milk Mugs"
	},
	{
		_id: uuid(),
		title: 'Trebleon Coffee Mug with Lid ',
		image: 'https://m.media-amazon.com/images/I/51iM9aDq5aL._AC_UL320_.jpg',
		price:'890',
		discount: '4',
		rating: '4',
		category: 'Mug',
		description:
			"Coffee Sipper 500ml. Travel Mug Keeps Drinks Hot and Cold for 6 Hours. Travel Coffee Mu"
	},
];
