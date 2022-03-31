import { useState, useEffect } from 'react';
import EcommerceCard from '../components/EcommerceCard';
import ProductFilter from '../components/ProductFilter';
import { getProducts } from '../util/product-request';
import { useProduct } from '../context/product-context';
import { getFilteredProducts } from '../helpers/filter-helper';
import loader from '../assets/loaders/loader.gif';
import './ProductPage.css';

export const ProductPage = () => {
	const { products, setProducts, filters } = useProduct();
	const { category, maxPrice, price, rating } = filters;
	const [isLoading, setIsLoading] = useState(false);

	const filteredProducts = getFilteredProducts(
		products,
		category,
		maxPrice,
		price,
		rating
	);

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				const { data } = await getProducts();
				setProducts(data.products);
				setIsLoading(false);
			} catch (err) {
				console.error(err);
			}
		})();
	}, [setProducts]);

	return (
		<>
			<ProductFilter />
			<main className="product-main">
				<h1 className="text-xhuge text-center">Products</h1>
				<div className="container flex-container">
					{filteredProducts.map(product => (
						<EcommerceCard key={product._id} product={product}></EcommerceCard>
					))}
				</div>
				{isLoading && (
					<div className="home-loader card-loader-container">
						<img src={loader} alt="loader" className="card-loader"></img>
					</div>
				)}
			</main>
		</>
	);
};
