import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { services } from '../constants/services';
import { Footer } from '../shared';
import { getCategories } from '../util/product-request';
import Card from '../components/Card';

import loader from '../assets/loaders/loader.gif';
import './Home.css';

export const Home = () => {
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				const { data } = await getCategories();
				setCategories(data.categories);
				setIsLoading(false);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);
	return (
		<>
			<header>
				<div className="hero flex-container flex-column">
					<h1 className="hero-heading">Coffee For All</h1>
					<p className="hero-description">
						Select from our wide range of coffee brands handpicked by our experts. We also have coffee mugs for you coffee lovers.
					</p>
					<Link to="products" className="btn rounded bg-green hero-btn">
						Buy Now!
					</Link>
				</div>
			</header>
			<main>
				<h2 className="text-heading text-center home-section-heading">
					Just For You
				</h2>
				<section className="flex-container">
					{categories
						.slice(0, 2)
						.map(({ _id, categoryName, description, image }) => (
							<Card
								key={_id}
								title={categoryName}
								description={description}
								image={image}
								cls="shadow home-card"
								isHome
								isImage
							/>
						))}
				</section>

				<h2 className="text-heading text-center home-section-heading">
					Our Services
				</h2>
				<section className="flex-container">
					{services.map(({ _id, serviceName, description }) => (
						<Card
							key={_id}
							title={serviceName}
							description={description}
							cls="border"
						/>
					))}
				</section>
			</main>
			<Footer />
			{isLoading && (
				<div className="home-loader card-loader-container">
					<img
						src={loader}
						alt="loader"
						className="card-loader"
					></img>
				</div>
			)}
		</>
	);
};
