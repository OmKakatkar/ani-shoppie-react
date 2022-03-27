import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../context/auth-context';
import Card from './Card';
import './EcommerceCard.css';

function EcommerceCard({
	title,
	description,
	price,
	discount,
	isWishlist,
	image,
	rating,
	children
}) {
	const { user } = useAuth();

	return (
		<Card title={title} description={description} isImage image={image}>
			{user.token && (
				<button className="icon-btn">
					<FontAwesomeIcon
						icon={faHeart}
						className={`icon ${isWishlist && 'wishlist'}`}
					/>
				</button>
			)}
			<div className="badge hidden">Best Seller</div>
			<div className="price">
				<span className="discount-price">
					Rs. {Math.round(price - (price * discount) / 100)}
				</span>
				<span className="original-price">Rs. {price}</span>
				<span className="offer">{discount}% off</span>
			</div>
			<div>
				{rating >= 1 && <span className="card-star-rating"></span>}
				{rating >= 2 && <span className="card-star-rating"></span>}
				{rating >= 3 && <span className="card-star-rating"></span>}
				{rating >= 4 && <span className="card-star-rating"></span>}
				{rating >= 5 && <span className="card-star-rating"></span>}
			</div>
			{children}
		</Card>
	);
}

export default EcommerceCard;
