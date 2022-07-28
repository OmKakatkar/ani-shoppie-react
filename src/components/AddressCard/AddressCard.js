import { useAuth } from "../../context/auth-context";
import "./AddressCard.css";

function AddressCard() {
	const { user } = useAuth();
	return (
		<div className="address-card">
			<p className="text-white pad-1r address-card-header">Deliver to</p>
			<div className="pad-1r address-card-content">
				<div className="flex mg-btm-1r address-card-field">
					<span>Name: </span>
					<span>{user.user.name}</span>
				</div>
				<div className="flex mg-btm-1r address-card-field">
					<span>Address: </span>
					<span>B-701, Vishnu Apts, Ganesh Nagar, Andheri (W), Mumbai</span>
				</div>
				<div className="flex mg-btm-1r address-card-field">
					<span>Pincode: </span>
					<span>400053</span>
				</div>
			</div>
		</div>
	);
}
export default AddressCard;
