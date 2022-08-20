import { createContext, useContext, useState } from "react";
import { login, signup } from "../util/auth-request";

const AuthContext = createContext();

const currentUser = "ANI_SHOPPIE_USER";

const AuthProvider = ({ children }) => {
	const initialUser = JSON.parse(localStorage.getItem(currentUser));

	const [user, setUser] = useState(initialUser || {});
	const [wishList, setWishList] = useState(initialUser?.user?.wishlist || []);
	const [cart, setCart] = useState(initialUser?.user?.cart || []);
	const [cartTotal, setCartTotal] = useState(0);

	const handleLogin = async ({ email, password }, isLoginRemember) => {
		try {
			const {
				data: { foundUser: user, encodedToken: token },
			} = await login({ email, password });
			if (token) {
				delete user.password;
				setUser({ user, token });
				setWishList(user.wishlist);
				setCart(user.cart);
				if (isLoginRemember) {
					user.wishlist = [];
					user.cart = [];
					localStorage.setItem(currentUser, JSON.stringify({ user, token }));
				}
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handleSignUp = async ({ name, email, password }) => {
		try {
			const {
				data: { createdUser: user, encodedToken: token },
			} = await signup({ name, email, password });
			if (token) {
				delete user.password;
				localStorage.setItem(currentUser, JSON.stringify({ user, token }));
				setUser({ user, token });
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handleLogout = () => {
		localStorage.removeItem(currentUser);
		setUser({});
		setWishList([]);
		setCart([]);
		setCartTotal(0);
	};

	const providerData = {
		user,
		handleLogin,
		handleLogout,
		handleSignUp,
		wishList,
		setWishList,
		cart,
		setCart,
		cartTotal,
		setCartTotal,
	};

	return (
		<AuthContext.Provider value={providerData}>{children}</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
