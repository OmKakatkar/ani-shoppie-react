import {
	PRICE_HIGH_TO_LOW,
	PRICE_LOW_TO_HIGH
} from '../constants/filter-constants';

const sortByPrice = (productList, sortBy) => {
	if (sortBy) {
		switch (sortBy) {
			case PRICE_LOW_TO_HIGH:
				return productList.sort((a, b) => a.price - b.price);
			case PRICE_HIGH_TO_LOW:
				return productList.sort((a, b) => b.price - a.price);
			default:
				return productList;
		}
	}
};

export { sortByPrice };