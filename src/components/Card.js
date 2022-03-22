import image from '../assets/images/coffee.jpg';

function Card({ title, description, isImage, cls, children }) {
	return (
		<article className={`card rounded ${cls}`}>
			{isImage && (
				<div>
					<img src={image} alt="" />
				</div>
			)}
			<div className="card-body">
				<h3 className="text-huge">{title}</h3>
				<p className="text-md">{description}</p>
				{children}
			</div>
		</article>
	);
}

export default Card;
