import { v4 as uuid } from 'uuid';

export const services = [
	{
		_id: uuid(),
		serviceName: 'Home Delivery',
		description: 'Fast delivery on your door step. Available at working hours'
	},
	{
		_id: uuid(),
		serviceName: 'Top-notch Quality',
		description:
			'Our experts make sure that the products are genuine and quality tested to assure the best quality at all times'
	},
	{
		_id: uuid(),
		serviceName: 'Prompt Support',
		description:
			'We have a dedicated customer support 24x7 to make sure you are delivered any kind of assistance'
	}
];
