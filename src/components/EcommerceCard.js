import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';
import './EcommerceCard.css';

function EcommerceCard({
	title,
	description,
	price,
	discount,
	badgeText,
	isWishlist,
	cls,
	children
}) {
	return (
		<Card title={title} description={description} isImage>
			<button className="icon-btn">
				<FontAwesomeIcon
					icon={faHeart}
					className={`icon ${isWishlist && 'wishlist'}`}
				/>
			</button>
			<div className="badge hidden">Best Seller</div>
			<div className="price">
				<span className="discount-price">
					Rs. {Math.round(price - (price * discount) / 100)}
				</span>
				<span className="original-price">Rs. {price}</span>
				<span className="offer">{discount}% off</span>
			</div>
			{children}
		</Card>
	);
}

export default EcommerceCard;
