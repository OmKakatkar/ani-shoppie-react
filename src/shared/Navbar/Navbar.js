import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faHeart,
	faShoppingCart,
	faCoffee,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useAuth } from "../../context/auth-context";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useProduct } from "../../context/product-context";
import { useState } from "react";

export const Navbar = () => {
	const { user, handleLogout } = useAuth();
	const { wishList, cart } = useProduct();
	const location = useLocation();
	const [, setSearchParams] = useSearchParams();
	const [searchQuery, setSearchQuery] = useState("");

	const calculateItemsInCart = () => {
		return cart.reduce((totalItems, { qty }) => totalItems + qty, 0);
	};
	const handleSearch = (e) => {
		e.preventDefault();
		setSearchParams({ search: searchQuery });
		setSearchQuery("");
	};

	return (
		<nav className="nav fix-top ecom-nav home-nav">
			<div className="brand">
				{!(location.pathname === "/thank-you") ? (
					<Link to="/" className="brand-name">
						ani shoppie
					</Link>
				) : (
					<div className="brand-name">ani shoppie</div>
				)}
			</div>
			{location.pathname === "/products" && (
				<form className="search-wrapper" onSubmit={handleSearch}>
					<label className="search-container" aria-label="search">
						<input
							type="search"
							className="searchbar text-md"
							placeholder="Search Products..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</label>
					<button className="btn search-button" type="submit">
						<FontAwesomeIcon icon={faSearch} className="text-lg" />
					</button>
				</form>
			)}
			{!(location.pathname === "/thank-you") && (
				<ul className="nav-link-container flex-container">
					<li className="nav-link">
						<Link
							to="products"
							className="flex-container flex-column icon-badge"
						>
							<FontAwesomeIcon icon={faCoffee} className="text-lg" />
							<span className="text-sm">Products</span>
						</Link>
					</li>
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
						<Link to="cart" className="flex-container flex-column icon-badge">
							<FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
							<span className="text-sm">My Cart</span>
							{calculateItemsInCart() > 0 && (
								<span className="badge">{calculateItemsInCart()}</span>
							)}
						</Link>
					</li>
					<li className="nav-link">
						<Link
							to="wishlist"
							className="flex-container flex-column icon-badge"
						>
							<FontAwesomeIcon icon={faHeart} className="text-lg" />
							<span className="text-sm">Wishlist</span>
							{wishList.length > 0 && (
								<span className="badge">{wishList.length}</span>
							)}
						</Link>
					</li>
				</ul>
			)}
		</nav>
	);
};
