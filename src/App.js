import './App.css';
import Home from './pages/Home';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';

function App() {
	return (
		<div className="App">
			{/* TODO: Add routing. Cart and WishList are protected under auth. Home, Product List, Auth Pages are public*/}
			<Navbar />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
