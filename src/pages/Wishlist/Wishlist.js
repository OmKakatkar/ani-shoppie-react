import { Link } from "react-router-dom";
import EcommerceCard from "../../components/EcommerceCard/EcommerceCard";
import { useProduct } from "../../context/product-context";

export const Wishlist = () => {
	const { wishList } = useProduct();

	return (
		<main className="ecom-main">
			<h1 className="text-xhuge text-center">Wishlist</h1>
			{!wishList.length ? (
				<div className="text-huge text-center flex-container flex-column cart-empty">
					<p>Oops! Your wishList is empty...</p>
					<Link to="/products" className="text-blue">
						Find Your favourite products here
					</Link>
				</div>
			) : (
				<div className="container flex-container">
					{wishList.map((wishListItem) => (
						<EcommerceCard
							key={wishListItem._id}
							product={wishListItem}
							isWishList
						/>
					))}
				</div>
			)}
		</main>
	);
};
