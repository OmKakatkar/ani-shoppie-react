import { useState, useEffect } from 'react';
import EcommerceCard from '../components/EcommerceCard';
import ProductFilter from '../components/ProductFilter';
import { getProducts } from '../util/product-request';
import './ProductPage.css';

export const ProductPage = () => {
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		(async () => {
			const { data } = await getProducts();
			setProductList(data.products);
		})();
	}, []);
	return (
		<>
			<ProductFilter />
			<main className="product-main">
				<h1 className="text-xhuge text-center">Products</h1>
				<div className="container flex-container">
					{productList.map(product => (
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
