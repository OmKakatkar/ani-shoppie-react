import axios from 'axios';
import {
  API_CATEGORIES,
	API_ALL_PRODUCTS,
	API_CART,
	API_WISHLIST
} from '../constants/api-constants';


// API functions for Categories
const getCategories = async() => await axios.get(API_CATEGORIES)

// API functions for Product Listing
const getProducts = async () => await axios.get(API_ALL_PRODUCTS);

// API functions for WishList
const getWishlist = async authToken =>
	await axios.get(API_WISHLIST, {
		headers: {
			authorization: authToken
		}
	});

const addToWishList = async (authToken, product) =>
	await axios.post(
		API_WISHLIST,
		{ product },
		{
			headers: {
				authorization: authToken
			}
		}
	);

const removeFromWishList = async (authToken, product) =>
	await axios.delete(`${API_WISHLIST}/${product._id}`, {
		headers: {
			authorization: authToken
		}
	});

// API functions for Cart
const getCart = async authToken =>
	await axios.get(API_CART, {
		headers: {
			authorization: authToken
		}
	});

const addToCart = async (authToken, product) =>
	await axios.post(
		API_CART,
		{ product },
		{
			headers: {
				authorization: authToken
			}
		}
	);

const removeFromCart = async (authToken, product) =>
	await axios.delete(`${API_CART}/${product._id}`, {
		headers: {
			authorization: authToken
		}
	});

const changeCartQuantity = async (authToken, product, type) =>
	await axios.post(
		`${API_CART}/${product._id}`,
		{
			action: {
				type
			}
		},
		{
			headers: {
				authorization: authToken
			}
		}
	);

export {
  getCategories,
	getProducts,
	getWishlist,
	addToWishList,
	removeFromWishList,
	getCart,
	addToCart,
	removeFromCart,
	changeCartQuantity
};
