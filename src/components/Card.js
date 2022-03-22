import image from '../assets/images/coffee.jpg';

function Card({ title, description, isImage, cls }) {
	return (
		<article className={`card rounded ${cls}`}>
			{isImage && (
				<div>
					<img src={image} alt="not found" />
				</div>
			)}
			<div className="card-body">
				<h3 className="text-huge">{title}</h3>
				<p className="text-sm">{description}</p>
			</div>
		</article>
	);
}

export default Card;
