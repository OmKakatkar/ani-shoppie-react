import './CartCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faSubtract } from '@fortawesome/free-solid-svg-icons';

function CartCard({ product }) {
	const { title, price, qty, image, discount } = product;

	return (
		<article className='card rounded'>
			<div className="container flex-container image-container">
				<img src={image} alt="" />
			</div>
			<div className="card-body">
				<h3 className="text-huge card-title text-center">{title}</h3>
				<div className="quantity-container">
					<button className="btn circular bd-blue">
						<FontAwesomeIcon icon={faAdd} />
					</button>
					<span className='text-huge'>{qty}</span>
					<button className="btn circular bd-blue">
						<FontAwesomeIcon icon={faSubtract} />
					</button>
				</div>
				<div className="price text-center">
					<span className="discount-price">
						Rs. {Math.round(price - (price * discount) / 100)}
					</span>
					<span className="original-price">Rs. {price}</span>
					<span className="offer">{discount}% off</span>
				</div>
       
        <button className="btn bg-red rounded">Remove from Cart</button>
        <button className="btn bg-blue rounded">Move to Wishlist</button>
       
			</div>
		</article>
	);
}

export default CartCard;
