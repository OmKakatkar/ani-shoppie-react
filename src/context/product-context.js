import { createContext, useState, useContext, useReducer } from "react";
import {
	SORT_BY_PRICE,
	FILTER_BY_CATEGORY,
	FILTER_BY_PRICE,
	CLEAR_FILTERS,
	FILTER_BY_RATING,
} from "../constants/filter-constants";

const ProductContext = createContext();

const addCategory = (categoryArray, category) => {
	return [...categoryArray, category];
};

const removeCategory = (categoryArray, category) => {
	return categoryArray.filter((c) => c !== category);
};

const intialData = {
	price: "",
	category: [],
	maxPrice: "900",
	rating: "",
};

const reducer = (state, action) => {
	switch (action.type) {
		case CLEAR_FILTERS:
			return intialData;
		case SORT_BY_PRICE:
			return { ...state, price: action.payload };
		case FILTER_BY_CATEGORY:
			if (state.category.includes(action.payload)) {
				return {
					...state,
					category: removeCategory(state.category, action.payload),
				};
			}
			return {
				...state,
				category: addCategory(state.category, action.payload),
			};
		case FILTER_BY_PRICE:
			return { ...state, maxPrice: action.payload };
		case FILTER_BY_RATING:
			return { ...state, rating: action.payload };
		default:
			return state;
	}
};

const ProductProvider = ({ children }) => {
	const [filters, dispatch] = useReducer(reducer, intialData);
	const [products, setProducts] = useState([]);
	const [wishList, setWishList] = useState([]);
	const [cart, setCart] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

	const productContextValue = {
		filters,
		dispatch,
		products,
		setProducts,
		wishList,
		setWishList,
		cart,
		setCart,
		cartTotal,
		setCartTotal,
	};
	return (
		<ProductContext.Provider value={productContextValue}>
			{children}
		</ProductContext.Provider>
	);
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
