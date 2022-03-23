import './CartCard.css'
import image from '../assets/images/coffee.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faSubtract } from '@fortawesome/free-solid-svg-icons';

function CartCard({title, price, quantity}) {
	return (
		<article className="card card-horizontal flex rounded ecom-card">
			<div className="image flex">
				<img src={image} alt="" />
			</div>
			<div className="card-body">
				<h3 className="text-xlg">{title}</h3>
				<div className="price">
					<span className="discount-price text-xsm">Rs. {price}</span>
				</div>
				<div className="order-qty-container">
					<button className="btn font-bold"><FontAwesomeIcon icon={faSubtract}/></button>
					<div className="order-quantity">{quantity}</div>
					<button className="btn font-bold"><FontAwesomeIcon icon={faAdd}/></button>
				</div>
				<div className="button-container">
					<button className="btn rounded bg-blue">Move to Wishlist</button>
					<button className="btn rounded bd-red">Remove from Cart</button>
				</div>
			</div>
		</article>
	);
}

export default CartCard;
