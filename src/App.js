import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useAuth } from './context/auth-context';
import { Home, ProductPage, Login, SignUp, Wishlist, Cart } from './pages';
import { Navbar } from './shared';

function App() {
	const { user } = useAuth();
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="products" element={<ProductPage />} />

				{!user.token && (
					<>
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<SignUp />} />
					</>
				)}
				{user.token && (
					<>
						<Route path="cart" element={<Cart />} />
						<Route path="wishlist" element={<Wishlist />} />
					</>
				)}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
}

export default App;
