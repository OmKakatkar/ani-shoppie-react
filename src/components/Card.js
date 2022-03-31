import './Card.css';
function Card({ title, description, isImage, isHome, cls, image, children }) {
	function limitDescriptionChars(text) {
		if (text.length > 55) {
			return `${text.substring(0, 55)}...`;
		}
		return text;
	}
	return (
		<article className={`card rounded ${cls}`}>
			{isImage && (
				<div className="container flex-container image-container">
					<img src={image} alt="" />
				</div>
			)}
			<div className="card-body">
				<h3 className="text-huge card-title">{title}</h3>
				<p className="text-md card-description">
					{isHome && description}
					{!isHome && limitDescriptionChars(description)}
				</p>
				{children}
			</div>
		</article>
	);
}

export default Card;
