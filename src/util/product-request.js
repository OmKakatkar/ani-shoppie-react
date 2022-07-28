import axios from "axios";
import {
	API_CATEGORIES,
	API_ALL_PRODUCTS,
	API_CART,
	API_WISHLIST,
} from "../constants/api-constants";
import { error, success } from "../constants/toast-constants";
import { notify } from "./notify";

// API functions for Categories
const getCategories = async () => {
	try {
		const data = await axios.get(API_CATEGORIES);
		return data;
	} catch (err) {
		notify(error, "Unable to fetch data");
		console.error(err);
	}
};

// API functions for Product Listing
const getProducts = async () => {
	try {
		const data = await axios.get(API_ALL_PRODUCTS);
		return data;
	} catch (err) {
		notify(error, "Unable to fetch data");
		console.error(err);
	}
};

// API functions for WishList
const getWishlist = async (authToken) => {
	try {
		const data = await axios.get(API_WISHLIST, {
			headers: {
				authorization: authToken,
			},
		});
		return data;
	} catch (err) {
		notify(error, "Unable to fetch data");
		console.error(err);
	}
};

const addToWishList = async (authToken, product) => {
	try {
		const data = await axios.post(
			API_WISHLIST,
			{ product },
			{
				headers: {
					authorization: authToken,
				},
			}
		);
		notify(success, "Added to Wishlist");
		return data;
	} catch (err) {
		notify(error, "Unable to post data");
		console.error(err);
	}
};

const removeFromWishList = async (authToken, product) => {
	try {
		const data = await axios.delete(`${API_WISHLIST}/${product._id}`, {
			headers: {
				authorization: authToken,
			},
		});
		notify(success, "Removed from Wishlist");
		return data;
	} catch (err) {
		notify(error, "Unable to remove data");
		console.error(err);
	}
};

// API functions for Cart

const getCart = async (authToken) => {
	try {
		const data = await axios.get(API_CART, {
			headers: {
				authorization: authToken,
			},
		});
		return data;
	} catch (err) {
		notify(error, "Unable to fetch data");
		console.error(err);
	}
};

const addToCart = async (authToken, product) => {
	try {
		const data = await axios.post(
			API_CART,
			{ product },
			{
				headers: {
					authorization: authToken,
				},
			}
		);
		notify(success, "Added to Cart");
		return data;
	} catch (err) {
		notify(error, "Unable to post data");
		console.error(err);
	}
};

const removeFromCart = async (authToken, product) => {
	try {
		const data = await axios.delete(`${API_CART}/${product._id}`, {
			headers: {
				authorization: authToken,
			},
		});
		notify(success, "Removed from Cart");
		return data;
	} catch (err) {
		notify(error, "Unable to remove data");
		console.error(err);
	}
};

const emptyCart = async (authToken) => {
	try {
		const data = await axios.delete(API_CART, {
			headers: {
				authorization: authToken,
			},
		});
		return data;
	} catch (err) {
		notify(error, "Unable to remove data");
		console.error(err);
	}
};

const changeCartQuantity = async (authToken, product, type) => {
	try {
		const data = await axios.post(
			`${API_CART}/${product._id}`,
			{
				action: {
					type,
				},
			},
			{
				headers: {
					authorization: authToken,
				},
			}
		);
		return data;
	} catch (err) {
		notify(error, "Unable to fetch data");
		console.error(err);
	}
};

export {
	getCategories,
	getProducts,
	getWishlist,
	addToWishList,
	removeFromWishList,
	getCart,
	addToCart,
	removeFromCart,
	emptyCart,
	changeCartQuantity,
};
