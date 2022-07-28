import { Link } from "react-router-dom";
import "./CustomLink.css";
function CustomLink({ path, cls = "", text }) {
	return (
		<Link to={path} className={cls}>
			{text}
		</Link>
	);
}
export default CustomLink;
