import { Link } from 'react-router-dom';
import CartCard from '../components/CartCard';
import CartSummary from '../components/CartSummary';
import { useProduct } from '../context/product-context';
import './Cart.css';

export const Cart = () => {
	const { cart } = useProduct();

	const calculateCartTotal = () => {
		return cart.reduce(
			(subTotal, { price, discount, qty }) =>
				subTotal + Math.round(price - (price * discount) / 100) * qty,
			0
		);
	};
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
					{cart.map(cartItem => (
						<CartCard key={cartItem._id} product={cartItem} />
					))}
				</div>
			</main>
			<CartSummary subTotalPrice={calculateCartTotal()} />
		</>
	);
};
