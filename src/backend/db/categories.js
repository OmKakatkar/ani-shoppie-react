import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: 'Strong Brews',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam velit veritatis distinctio minus labore nobis!'
	},
	{
		_id: uuid(),
		categoryName: 'Serve it hot',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam velit veritatis distinctio minus labore nobis!'
	},
	{
		_id: uuid(),
		categoryName: 'Cold Coffee',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam velit veritatis distinctio minus labore nobis!'
	},
	{
		_id: uuid(),
		categoryName: 'Experiment with us',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam velit veritatis distinctio minus labore nobis!'
	}
];
