import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import EcommerceCard from "../components/EcommerceCard";
import ProductFilter from "../components/ProductFilter";
import { getProducts } from "../util/product-request";
import { useProduct } from "../context/product-context";
import { getFilteredProducts } from "../helpers/filter-helper";
import "./ProductPage.css";

export const ProductPage = () => {
	const { products, setProducts, filters } = useProduct();
	const { category, maxPrice, price, rating } = filters;
	const [isLoading, setIsLoading] = useState(false);
	const [searchParams] = useSearchParams();

	const search = searchParams.get("search");
	const filteredProducts = getFilteredProducts(
		products,
		category,
		maxPrice,
		price,
		rating,
		search
	);

	useEffect(() => {
		(async () => {
			if (!products.length) {
				try {
					setIsLoading(true);
					const { data } = await getProducts();
					setProducts(data.products);
					setIsLoading(false);
				} catch (err) {
					console.error(err);
				}
			}
		})();
	}, [products, setProducts]);

	return (
		<>
			<ProductFilter />
			<main className="product-main">
				<h1 className="text-xhuge text-center">
					Products {`(${filteredProducts.length})`}
				</h1>
				{!filteredProducts.length ? (
					<h2 className="text-huge text-center product-not-found">
						No Products Matched
					</h2>
				) : (
					<div className="container flex-container">
						{filteredProducts.map((product) => (
							<EcommerceCard
								key={product._id}
								product={product}
							></EcommerceCard>
						))}
					</div>
				)}
				{isLoading && (
					<div className="home-loader card-loader-container">
						<img
							src="https://res.cloudinary.com/dwubqdebj/image/upload/c_scale,w_500/v1649329000/ani-watch/loader_ixolpe.gif"
							alt="loader"
							className="card-loader"
						></img>
					</div>
				)}
			</main>
		</>
	);
};
