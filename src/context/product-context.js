import { createContext, useState, useContext, useReducer } from 'react';
import {
	PRICE_LOW_TO_HIGH,
	SORT_BY_PRICE,
	FILTER_BY_CATEGORY,
	FILTER_BY_PRICE
} from '../constants/filter-constants';

const ProductContext = createContext();

const addCategory = (categoryArray, category) => {
	return [...categoryArray, category];
};

const removeCategory = (categoryArray, category) => {
	return categoryArray.filter(c => c !== category);
};

const reducer = (state, action) => {
	switch (action.type) {
		case SORT_BY_PRICE:
			return { ...state, price: action.payload };
		case FILTER_BY_CATEGORY:
			if (state.category.includes(action.payload)) {
				return {
					...state,
					category: removeCategory(state.category, action.payload)
				};
			}
			return {
				...state,
				category: addCategory(state.category, action.payload)
			};
		case FILTER_BY_PRICE:
			return { ...state, maxPrice: action.payload };
		default:
			return state;
	}
};
const intialData = {
	price: PRICE_LOW_TO_HIGH,
	category: [],
	maxPrice: ''
};

const ProductProvider = ({ children }) => {
	const [filters, dispatch] = useReducer(reducer, intialData);
	const [products, setProducts] = useState([]);

	const productContextValue = { filters, dispatch, products, setProducts };
	return (
		<ProductContext.Provider value={productContextValue}>
			{children}
		</ProductContext.Provider>
	);
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
