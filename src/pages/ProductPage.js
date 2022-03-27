import { useEffect } from 'react';
import EcommerceCard from '../components/EcommerceCard';
import ProductFilter from '../components/ProductFilter';
import { getProducts } from '../util/product-request';
import { useProduct } from '../context/product-context';
import { getFilteredProducts } from '../helpers/filter-helper';
import './ProductPage.css';

export const ProductPage = () => {
	const { products, setProducts, filters } = useProduct();
	const { price, category } = filters;

	const filteredProducts = getFilteredProducts(products, category, price);

	useEffect(() => {
		(async () => {
			const { data } = await getProducts();
			setProducts(data.products);
		})();
	}, [setProducts]);
	return (
		<>
			<ProductFilter />
			<main className="product-main">
				<h1 className="text-xhuge text-center">Products</h1>
				<div className="container flex-container">
					{filteredProducts.map(product => (
						<EcommerceCard
							key={product._id}
							title={product.title}
							description={product.description}
							price={product.price}
							discount={product.discount}
						>
							<button className="btn bg-blue rounded">Add to Cart</button>
							<button className="btn bg-blue rounded" disabled>
								Go to Cart
							</button>
						</EcommerceCard>
					))}
				</div>
			</main>
		</>
	);
};
