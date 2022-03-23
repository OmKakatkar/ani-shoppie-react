import './CartSummary.css'

function CartSummary({subTotalPrice ,totalPrice}) {
	return (
		<aside className="cart-summary">
			<header>Order Summary</header>
			<div className="cart-summary-row">
				<span> Subtotal </span>
				<span> Rs {subTotalPrice} </span>
			</div>
			<div className="cart-summary-row">
				<span> Shipping </span>
				<span> Rs 50 </span>
			</div>
			<hr />
			<div className="cart-summary-row">
				<span> Total </span>
				<span> Rs {(subTotalPrice + 50) || 0} </span>
			</div>
			<div className="cart-summary-row">
				<button className="btn bg-green rounded summary-checkout">Checkout</button>
			</div>
		</aside>
	);
}

export default CartSummary;
