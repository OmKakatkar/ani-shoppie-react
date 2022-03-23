import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faLinkedin,
	faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Footer() {
	return (
		<footer class="home-footer flex-container flex-column">
			<p>
				Made with and for <FontAwesomeIcon icon={faCoffee}/> by Om Kakatkar
			</p>
			<ul class="nav-link-container flex">
				<li class="nav-link">
					<a href="https://twitter.com/omkakatkar">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</li>
				<li class="nav-link">
					<a href="https://www.linkedin.com/in/omkakatkar/">
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</li>
				<li class="nav-link">
					<a href="https://github.com/OmKakatkar">
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
