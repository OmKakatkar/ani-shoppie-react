import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faHeart,
	faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { useAuth } from '../context/auth-context';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	const { user, handleLogout } = useAuth();

	return (
		<nav className="nav fix-top ecom-nav home-nav">
			<div className="brand">
				<Link to="/" className="brand-name">
					ani shoppie
				</Link>
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
					<div className="flex-container flex-column">
						<FontAwesomeIcon icon={faUser} className="text-lg" />
						<span className="text-sm">Profile</span>
					</div>
					<div className="dropdown">
						{!user.token && (
							<Link to="login" className="btn rounded text-red bd-red">
								LogIn / Register
							</Link>
						)}
						{user.token && (
							<Link
								to="/"
								className="btn rounded bd-red"
								onClick={handleLogout}
							>
								Log Out
							</Link>
						)}
					</div>
				</li>
				<li className="nav-link">
					{user.token && (
						<Link to="cart" className="flex-container flex-column icon-badge">
							<FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
							<span className="text-sm">My Cart</span>
							<span className="badge">5</span>
						</Link>
					)}
					{!user.token && (
						<Link to="login" className="flex-container flex-column">
							<FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
							<span className="text-sm">My Cart</span>
						</Link>
					)}
				</li>
				<li className="nav-link">
					{user.token && (
						<Link to="wishlist" className="flex-container flex-column icon-badge">
							<FontAwesomeIcon icon={faHeart} className="text-lg" />
							<span className="text-sm">Wishlist</span>
							<span className="badge">11</span>
						</Link>
					)}
					{!user.token && (
						<Link to="login" className="flex-container flex-column">
							<FontAwesomeIcon icon={faHeart} className="text-lg" />
							<span className="text-sm">Wishlist</span>
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
};
