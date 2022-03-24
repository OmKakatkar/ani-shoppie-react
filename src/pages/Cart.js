import CartCard from '../components/CartCard';
import CartSummary from '../components/CartSummary';

export const Cart = () => {
	return (
		<>
			<main className="ecom-main flex-container flex-column">
				<h1 className="text-xhuge text-center">Cart</h1>
				<CartCard title="Caffè latte" price={199} quantity={1} />
			</main>
			<CartSummary subTotalPrice={199} />
		</>
	);
};
