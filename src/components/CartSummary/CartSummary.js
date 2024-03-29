import "./CartSummary.css";
import { useAuth } from "../../context/auth-context";

function CartSummary({ children }) {
	const { cartTotal } = useAuth();

	return (
		<aside className="cart-summary">
			<header>Order Summary</header>
			<div className="cart-summary-row">
				<span> Subtotal </span>
				<span> Rs {cartTotal} </span>
			</div>
			<div className="cart-summary-row">
				<span> Shipping </span>
				<span> Rs {cartTotal && 50} </span>
			</div>
			<hr />
			<div className="cart-summary-row">
				<span> Total </span>
				<span> Rs {cartTotal ? cartTotal + 50 : 0} </span>
			</div>
			<div className="cart-summary-row">{children}</div>
		</aside>
	);
}

export default CartSummary;
