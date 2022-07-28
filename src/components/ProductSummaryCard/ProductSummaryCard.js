import "./ProductSummaryCard.css";
function ProductSummaryCard({ product }) {
	const { title, image, qty, price } = product;
	return (
		<article className="mg-1r pad-1r pad-top-2r pad-btm-2r card flex-container product-summary-card">
			<div className="flex-container">
				<img src={image} alt={title} className="image sm" />
				<p className="text-center">{title}</p>
			</div>
			<div className="font-bold text-lg product-summary-qty">{qty}</div>
			<div className="pad-rt-2r font-bold text-lg product-summary-price">{`Rs. ${price * qty}`}</div>
		</article>
	);
}
export default ProductSummaryCard;
