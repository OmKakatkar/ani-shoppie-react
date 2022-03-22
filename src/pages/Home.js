import { categories } from '../backend/db/categories';
import { services } from '../backend/db/services';
import Card from '../components/Card';
import './Home.css';

function Home() {
	return (
		<>
			<header>
				<div className="hero flex-container flex-column">
					<h1 className="hero-heading">Coffee For All</h1>
					<p className="hero-description">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Perferendis nam minus, sunt exercitationem adipisci neque
					</p>
					<button className="btn rounded bg-green hero-btn">Buy Now!</button>
				</div>
			</header>
			<main>
				<h2 className="text-heading text-center home-section-heading">
					Just For You
				</h2>
				<section className="flex-container">
					{categories.map(({ _id, categoryName, description }) => (
						<Card
							key={_id}
							title={categoryName}
							description={description}
							isImage
							cls="shadow"
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
		</>
	);
}

export default Home;
