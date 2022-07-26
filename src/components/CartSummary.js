import { useAuth } from "../context/auth-context";
import "./CartSummary.css";

const loadScript = async (url) => {
	return new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = url;

		script.onload = () => {
			resolve(true);
			console.log("loaded");
		};

		script.onerror = () => {
			resolve(false);
			console.log("error");
		};

		document.body.appendChild(script);
	});
};

function CartSummary({ subTotalPrice }) {
	const { user: currentUser } = useAuth();
	const { user } = currentUser;
	const finalPrice = subTotalPrice + 50;

	async function showRazorPay() {
		console.log(process.env.REACT_APP_RZP_ID);
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);

		if (!res) {
			alert("Oops something went wrong!");
			return;
		}

		const options = {
			key: process.env.REACT_APP_RZP_ID,
			amount: finalPrice * 100,
			currency: "INR",
			name: "Ani Shoppie",
			description: "Pay for the products",
			image:
				"https://res.cloudinary.com/dwubqdebj/image/upload/v1658770075/logo_2_zcdaex.png",
			handler: function (response) {
				const paymentId = response.razorpay_payment_id;
				console.log(paymentId);
			},
			prefill: {
				name: user.name,
				email: user.email,
				contact: "9999999999",
			},
			theme: {
				color: "#008190",
			},
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}

	return (
		<aside className="cart-summary">
			<header>Order Summary</header>
			<div className="cart-summary-row">
				<span> Subtotal </span>
				<span> Rs {subTotalPrice} </span>
			</div>
			<div className="cart-summary-row">
				<span> Shipping </span>
				<span> Rs {subTotalPrice ? 50 : 0} </span>
			</div>
			<hr />
			<div className="cart-summary-row">
				<span> Total </span>
				<span> Rs {subTotalPrice ? finalPrice : 0} </span>
			</div>
			<div className="cart-summary-row">
				<button
					className="btn bg-green rounded summary-checkout"
					onClick={showRazorPay}
				>
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default CartSummary;
