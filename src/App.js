import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import SignUp from './pages/SignUp';
import Wishlist from './pages/Wishlist';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';

function App() {
	return (
		<div className="App">
			{/* TODO: Add routing. Cart and WishList are protected under auth. Home, Product List, Auth Pages are public*/}
			<Navbar />
			<Home />
			{/* <SignUp /> */}
			{/* <Wishlist /> */}
			{/* <ProductPage /> */}
			{/* <Cart /> */}
			{/* <Login /> */}
			{/* <Footer /> */}
		</div>
	);
}

export default App;
