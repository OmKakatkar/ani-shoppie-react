import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
	Home,
	ProductPage,
	Login,
	SignUp,
	Wishlist,
	Cart,
	PageNotFound,
} from "./pages";
import { Navbar } from "./shared";
import MockAPI from "./mock/MockAPI";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Auth from "./components/Auth/Auth";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/mockman" element={<MockAPI />} />
				<Route path="products" element={<ProductPage />} />

				<Route element={<Auth />}>
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<SignUp />} />
				</Route>

				<Route element={<RequireAuth />}>
					<Route path="cart" element={<Cart />} />
					<Route path="wishlist" element={<Wishlist />} />
				</Route>

				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<ToastContainer autoClose={2000} />
		</div>
	);
}

export default App;
