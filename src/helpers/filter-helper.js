import {
	PRICE_HIGH_TO_LOW,
	PRICE_LOW_TO_HIGH,
	RATING_1,
	RATING_2,
	RATING_3,
	RATING_4,
} from "../constants/filter-constants";

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
	return productList;
};

const filterByRating = (productList, rating) => {
	if (rating) {
		switch (rating) {
			case RATING_4:
				return productList.filter((product) => product.rating >= 4);
			case RATING_3:
				return productList.filter((product) => product.rating >= 3);
			case RATING_2:
				return productList.filter((product) => product.rating >= 2);
			case RATING_1:
				return productList.filter((product) => product.rating >= 1);
			default:
				return productList;
		}
	}
	return productList;
};

const filterByCategory = (productList, filterBy) => {
	if (filterBy.length) {
		return productList.filter((product) => filterBy.includes(product.category));
	}
	return productList;
};

const filterByPrice = (productList, maxPrice) => {
	if (maxPrice.length) {
		return productList.filter((product) => product.price <= maxPrice);
	}
	return productList;
};

const getFilteredProducts = (
	productList,
	filterCategory,
	filterPrice,
	sortBy,
	rating
) => {
	const productsFilteredByRating = filterByRating(productList, rating);
	const productsFilteredByPrice = filterByPrice(
		productsFilteredByRating,
		filterPrice
	);
	const productsFilteredByCategory = filterByCategory(
		productsFilteredByPrice,
		filterCategory
	);
	const productsSortedByPrice = sortByPrice(productsFilteredByCategory, sortBy);
	return productsSortedByPrice;
};

export { getFilteredProducts };
