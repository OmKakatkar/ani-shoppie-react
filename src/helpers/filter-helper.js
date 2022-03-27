import {
	PRICE_HIGH_TO_LOW,
	PRICE_LOW_TO_HIGH
} from '../constants/filter-constants';

const sortByPrice = (productList, sortBy) => {
	if (sortBy) {
		switch (sortBy) {
			case PRICE_LOW_TO_HIGH:
				return [...productList].sort((a, b) => a.price - b.price);
			case PRICE_HIGH_TO_LOW:
				return [...productList].sort((a, b) => b.price - a.price);
			default:
				return productList;
		}
	}
};

const filterByCategory = (productList, filterBy) => {
	if (filterBy.length) {
		return productList.filter(product => filterBy.includes(product.category));
	}
	return productList;
};

const filterByPrice = (productList, maxPrice) => {
	if (maxPrice.length) {
		return productList.filter(product => product.price <= maxPrice);
	}
	return productList;
};

const getFilteredProducts = (
	productList,
	filterCategory,
	filterPrice,
	sortBy
) => {
	const productsFilteredByPrice = filterByPrice(productList, filterPrice);
	const productsFilteredByCategory = filterByCategory(
		productsFilteredByPrice,
		filterCategory
	);
	const productsSortedByPrice = sortByPrice(productsFilteredByCategory, sortBy);
	return productsSortedByPrice;
};

export { getFilteredProducts };
