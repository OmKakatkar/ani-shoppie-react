import { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAuth } from "../../context/auth-context";
import {
	addToWishList,
	removeFromWishList,
	addToCart,
} from "../../util/product-request";
import Card from "../Card/Card";

import "./EcommerceCard.css";
import { Link } from "react-router-dom";
import { checkItemInArray } from "../../util/utilities";

function EcommerceCard({ isWishList, product, children }) {
	const { user, wishList, setWishList, cart, setCart } = useAuth();

	const { title, description, price, discount, image, rating, category } =
		product;
	const [isLoading, setIsLoading] = useState(false);

	const insertIntoCart = async () => {
		try {
			setIsLoading(true);
			if (!checkItemInArray(cart, product)) {
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
			if (!checkItemInArray(wishList, product)) {
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
						className={`icon ${
							checkItemInArray(wishList, product) && !isLoading && "wishlist"
						}`}
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
			<small className="card-chip">{category}</small>
			<div>
				{rating >= 1 && <span className="card-star-rating"></span>}
				{rating >= 2 && <span className="card-star-rating"></span>}
				{rating >= 3 && <span className="card-star-rating"></span>}
				{rating >= 4 && <span className="card-star-rating"></span>}
				{rating >= 5 && <span className="card-star-rating"></span>}
			</div>
			{children}
			{user.token && (
				<>
					{!checkItemInArray(cart, product) ? (
						<button
							className="btn bg-blue rounded"
							onClick={insertIntoCart}
							disabled={isLoading}
						>
							Add to Cart
						</button>
					) : (
						<Link to="/cart" className="flex">
							<button className="btn bg-green rounded">Go to Cart</button>
						</Link>
					)}
				</>
			)}
			{!user.token && (
				<Link to="/login" className="flex">
					<button className="btn bg-blue rounded">Add to Cart</button>
				</Link>
			)}
		</Card>
	);
}

export default EcommerceCard;
