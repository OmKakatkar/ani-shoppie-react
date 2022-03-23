import { products } from '../backend/db/products';
import EcommerceCard from '../components/EcommerceCard';

function Wishlist() {
	return (
		<main className="ecom-main">
			<h1 className="text-xhuge text-center">Wishlist</h1>
			<div className="container flex-container">
				{/* FIXME: Remove product array and fetch wishlist from backend */}
				{products.map(product => (
					<EcommerceCard
						key={product._id}
						title={product.title}
						description={product.description}
						price={product.price}
						discount={product.discount}
						isWishlist
					>
						<button className="btn bg-blue rounded">Move to Cart</button>
					</EcommerceCard>
				))}
			</div>
		</main>
	);
}

export default Wishlist;
