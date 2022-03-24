import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faHeart,
	faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { useAuth } from '../context/auth-context';

function Navbar() {
	const { user, handleLogout } = useAuth();
	console.log(user.token);

	return (
		<nav className="nav fix-top ecom-nav home-nav">
			<div className="brand">
				<a href="#" className="brand-name">
					ani shoppie
				</a>
			</div>
			<label className="search-container" aria-label="search">
				<input
					type="search"
					className="searchbar text-md"
					placeholder="Search..."
				/>
			</label>
			<ul className="nav-link-container flex-container">
				<li className="nav-link">
					<a href="#" className="flex-container flex-column">
						<FontAwesomeIcon icon={faUser} className="text-lg" />
						<span className="text-sm">Profile</span>
					</a>
					<div className="dropdown">
						{!user.token && (
							<a className="btn rounded bd-red" href="./login">
								LogIn / Register
							</a>
						)}
						{user.token && (
							<button className="btn rounded bd-red" onClick={handleLogout}>
								Log Out
							</button>
						)}
					</div>
				</li>
				<li className="nav-link">
					<a href="#" className="flex-container flex-column icon-badge">
						<FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
						<span className="text-sm">My Cart</span>
						<span className="badge">5</span>
					</a>
				</li>
				<li className="nav-link">
					<a href="#" className="flex-container flex-column icon-badge">
						<FontAwesomeIcon icon={faHeart} className="text-lg" />
						<span className="text-sm">Wishlist</span>
						<span className="badge">11</span>
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
