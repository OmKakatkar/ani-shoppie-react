import EcommerceCard from '../components/EcommerceCard';
import { useProduct } from '../context/product-context';

export const Wishlist = () => {
	const { wishList } = useProduct();

	return (
		<main className="ecom-main">
			<h1 className="text-xhuge text-center">Wishlist</h1>
			<div className="container flex-container">
				{wishList.map(wishListItem => (
					<EcommerceCard
						key={wishListItem._id}
						product={wishListItem}
						isWishList
					>
						<button className="btn bg-blue rounded">Move to Cart</button>
					</EcommerceCard>
				))}
			</div>
		</main>
	);
};
