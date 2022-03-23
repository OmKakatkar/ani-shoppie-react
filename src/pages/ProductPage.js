import { products } from '../backend/db/products';
import EcommerceCard from '../components/EcommerceCard';
import ProductFilter from '../components/ProductFilter';
import './ProductPage.css';

function ProductPage() {
	return (
		<>
			<ProductFilter />
			<main className="product-main">
				<h1 className="text-xhuge text-center">Products</h1>
				<div className="container flex-container">
					{products.map(product => (
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
}

export default ProductPage;
