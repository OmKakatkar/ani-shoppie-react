import { useLocation, Navigate } from "react-router-dom";
import CartSummary from "../../components/CartSummary";
import usePaymentIntegration from "../../hooks/usePaymentIntegration";
import { useAuth } from "../../context/auth-context";
import { useProduct } from "../../context/product-context";
import ProductSummaryCard from "../../components/ProductSummaryCard/ProductSummaryCard";
import "./OrderSummary.css";
import AddressCard from "../../components/AddressCard/AddressCard";

export const OrderSummary = () => {
	const { cart, cartTotal } = useProduct();
	const { user } = useAuth();
	const location = useLocation();

	const showRazorPay = usePaymentIntegration(cartTotal + 50, user.user);
	return cartTotal > 0 ? (
		<>
			<main className="cart-main">
				<h1 className="text-xhuge text-center">My Order</h1>
				<div className="container flex-container">
					<div className="flex order-header pad-1r">
						<p className="text-lg pad-lt-5r text-white">Product</p>
						<p className="text-lg text-white">Qty</p>
						<p className="text-right text-lg text-white">Pay</p>
					</div>
					{cart.map((cartItem) => (
						<ProductSummaryCard key={cartItem._id} product={cartItem} />
					))}
				</div>
			</main>
			<CartSummary>
				<button
					className="btn bg-green rounded summary-checkout text-center"
					onClick={showRazorPay}
				>
					Proceed to Payment
				</button>
			</CartSummary>
			<AddressCard />
		</>
	) : (
		<Navigate to={location.state?.path || "/products"} />
	);
};
