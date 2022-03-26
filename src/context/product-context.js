import { createContext, useState, useContext, useReducer } from 'react';
import {
	PRICE_LOW_TO_HIGH,
	SORT_BY_PRICE
} from '../constants/filter-constants';

const ProductContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case SORT_BY_PRICE:
			return { ...state, price: action.payload };
		default:
			return state;
	}
};
const intialData = {
	price: PRICE_LOW_TO_HIGH
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
