import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faLinkedin,
	faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
	return (
		<footer className="home-footer flex-container flex-column">
			<p>
				Made with and for <FontAwesomeIcon icon={faCoffee} /> by Om Kakatkar
			</p>
			<ul className="nav-link-container flex">
				<li className="nav-link">
					<a href="https://twitter.com/omkakatkar">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</li>
				<li className="nav-link">
					<a href="https://www.linkedin.com/in/omkakatkar/">
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</li>
				<li className="nav-link">
					<a href="https://github.com/OmKakatkar">
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</li>
			</ul>
		</footer>
	);
};
