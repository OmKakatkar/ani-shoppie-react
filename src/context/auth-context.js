import { createContext, useContext, useState } from 'react';
import { login, signup } from '../util/auth-request';

const AuthContext = createContext();

const currentUser = 'ANI_SHOPPIE_USER';

const AuthProvider = ({ children }) => {
	const initialUser = JSON.parse(localStorage.getItem(currentUser)) || {};
	const [user, setUser] = useState(initialUser);

	const handleLogin = async ({ email, password }) => {
		try {
			const {
				data: { foundUser: user, encodedToken: token }
			} = await login({ email, password });
			if (token) {
				localStorage.setItem(currentUser, JSON.stringify({ user, token }));
				setUser(JSON.parse(localStorage.getItem(currentUser)));
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handleSignUp = async ({ name, email, password }) => {
		try {
			const {
				data: { createdUser: user, encodedToken: token }
			} = await signup({ name, email, password });
			if (token) {
				localStorage.setItem(currentUser, JSON.stringify({ user, token }));
				setUser(JSON.parse(localStorage.getItem(currentUser)));
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handleLogout = () => {
		localStorage.removeItem(currentUser);
		setUser({});
	};

	return (
		<AuthContext.Provider
			value={{ user, handleLogin, handleLogout, handleSignUp }}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };