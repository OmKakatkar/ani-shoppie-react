import { useState } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAuth } from '../context/auth-context';
import {
	addToWishList,
	removeFromWishList,
	addToCart
} from '../util/product-request';
import { useProduct } from '../context/product-context';
import Card from './Card';

import loader from '../assets/loaders/loader.gif';
import './EcommerceCard.css';
import { Link } from 'react-router-dom';

function EcommerceCard({ isWishList, product, children }) {
	const { user } = useAuth();
	const { wishList, setWishList, cart, setCart } = useProduct();

	const { title, description, price, discount, image, rating } = product;
	const [isLoading, setIsLoading] = useState(false);
	const checkItemInWishList = () =>
		Boolean(
			wishList.filter(wishListItem => wishListItem._id === product._id).length
		);

	const checkItemInCart = () =>
		Boolean(cart.filter(cartItem => cartItem._id === product._id).length);

	const insertIntoCart = async () => {
		try {
			setIsLoading(true);
			if (!checkItemInCart()) {
				const { data } = await addToCart(user.token, product);
				setCart(data.cart);
			}
			setIsLoading(false);
		} catch (err) {
			console.error(err);
		}
	};

	const toggleWishList = async () => {
		try {
			setIsLoading(true);
			if (!checkItemInWishList()) {
				const { data } = await addToWishList(user.token, product);
				setWishList(data.wishlist);
			} else {
				const { data } = await removeFromWishList(user.token, product);
				setWishList(data.wishlist);
			}
			!isWishList && setIsLoading(false);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<Card title={title} description={description} isImage image={image}>
			{user.token && (
				<button
					className="icon-btn"
					onClick={() => toggleWishList()}
					disabled={isLoading}
				>
					<FontAwesomeIcon
						icon={faHeart}
						className={`icon ${checkItemInWishList() && 'wishlist'}`}
					/>
				</button>
			)}
			<div className="badge hidden">Best Seller</div>
			<div className="price">
				<span className="discount-price">
					Rs. {Math.round(price - (price * discount) / 100)}
				</span>
				<span className="original-price">Rs. {price}</span>
				<span className="offer">{discount}% off</span>
			</div>
			<div>
				{rating >= 1 && <span className="card-star-rating"></span>}
				{rating >= 2 && <span className="card-star-rating"></span>}
				{rating >= 3 && <span className="card-star-rating"></span>}
				{rating >= 4 && <span className="card-star-rating"></span>}
				{rating >= 5 && <span className="card-star-rating"></span>}
			</div>
			{children}
			{!checkItemInCart() && (
				<button className="btn bg-blue rounded" onClick={insertIntoCart}>
					Add to Cart
				</button>
			)}
			{checkItemInCart() && (
				<Link to="/cart" className="flex">
					<button className="btn bg-green rounded">Show in Cart</button>
				</Link>
			)}
			{isLoading && (
				<div className="card-loader-container">
					<img src={loader} alt="loader" className="card-loader"></img>
				</div>
			)}
		</Card>
	);
}

export default EcommerceCard;
