import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faSubtract, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useProduct } from "../../context/product-context";
import { checkItemInArray } from "../../util/utilities";
import {
	addToWishList,
	changeCartQuantity,
	removeFromCart,
} from "../../util/product-request";
import "./CartCard.css";

function CartCard({ product }) {
	const { title, price, qty, image, discount } = product;
	const { user } = useAuth();
	const { setCart, wishList, setWishList } = useProduct();
	const [isLoading, setIsLoading] = useState(false);

	const deleteFromCart = async () => {
		try {
			setIsLoading(true);
			const { data } = await removeFromCart(user.token, product);
			setCart(data.cart);
		} catch (err) {
			console.error(err);
		}
	};

	const moveToWishlist = async () => {
		try {
			setIsLoading(true);
			if (!checkItemInArray(wishList, product)) {
				const { data } = await addToWishList(user.token, product);
				setWishList(data.wishlist);
			}
			deleteFromCart();
		} catch (err) {
			console.error(err);
		}
	};

	const changeQuantity = async (type) => {
		try {
			setIsLoading(true);
			if (type === "decrement" && qty === 1) {
				deleteFromCart();
			} else {
				const { data } = await changeCartQuantity(user.token, product, type);
				setCart(data.cart);
				setIsLoading(false);
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<article className="card rounded">
			<div className="container flex-container image-container">
				<img src={image} alt="" />
			</div>
			<div className="card-body">
				<h3 className="text-huge card-title text-center">{title}</h3>
				<div className="quantity-container">
					<button
						className="btn circular bd-blue"
						disabled={isLoading}
						onClick={() => changeQuantity("decrement")}
					>
						{product.qty > 1 && <FontAwesomeIcon icon={faSubtract} />}
						{product.qty === 1 && <FontAwesomeIcon icon={faTrash} />}
					</button>
					<span className="text-huge">{qty}</span>
					<button
						className="btn circular bd-blue"
						disabled={isLoading}
						onClick={() => changeQuantity("increment")}
					>
						<FontAwesomeIcon icon={faAdd} />
					</button>
				</div>
				<div className="price text-center">
					<span className="discount-price">
						Rs. {Math.round(price - (price * discount) / 100)}
					</span>
					<span className="original-price">Rs. {price}</span>
					<span className="offer">{discount}% off</span>
				</div>
				<button
					className="btn bg-red rounded"
					disabled={isLoading}
					onClick={deleteFromCart}
				>
					Remove from Cart
				</button>
				{!checkItemInArray(wishList, product) ? (
					<button
						className="btn bg-blue rounded"
						disabled={isLoading}
						onClick={moveToWishlist}
					>
						Move to Wishlist
					</button>
				) : (
					<Link to="/wishlist" className="flex">
						<button className="btn bg-green rounded" disabled={isLoading}>
							Show in Wishlist
						</button>
					</Link>
				)}
			</div>
		</article>
	);
}

export default CartCard;
