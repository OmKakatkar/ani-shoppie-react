import { useEffect } from "react";
import { Link } from "react-router-dom";
import CartCard from "../../components/CartCard/CartCard";
import CartSummary from "../../components/CartSummary/CartSummary";
import CustomLink from "../../components/CustomLink/CustomLink";
import { useAuth } from "../../context/auth-context";
import "./Cart.css";

export const Cart = () => {
	const { cart, cartTotal, setCartTotal } = useAuth();

	useEffect(() => {
		console.log(cart);
		const calculateCartTotal = () => {
			return cart.reduce(
				(subTotal, { price, discount, qty }) =>
					subTotal + (price - Math.round((price * discount) / 100)) * qty,
				0
			);
		};
		setCartTotal(calculateCartTotal());
	}, [cart, setCartTotal]);

	return (
		<>
			<main className="cart-main">
				<h1 className="text-xhuge text-center">Cart</h1>
				{cart.length === 0 && (
					<div className="text-huge text-center flex-container flex-column cart-empty">
						<p>Seems like your cart is empty...</p>
						<Link to="/products" className="text-blue">
							Start Shopping here
						</Link>
					</div>
				)}
				<div className="container flex-container">
					{cart.map((cartItem) => (
						<CartCard key={cartItem._id} product={cartItem} />
					))}
				</div>
			</main>
			<CartSummary>
				<CustomLink
					path="/order-summary"
					cls={`btn rounded summary-checkout text-center ${
						cartTotal > 0 ? "bg-green" : "disabled-link text-gray"
					}`}
					text="Proceed to Checkout"
				/>
			</CartSummary>
		</>
	);
};
