import {
	faGithub,
	faInstagram,
	faLinkedin,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
	return (
		<footer id="footer" className="footer-section">
			<hr className="footer-hr" />
			<div className="footer-flex">
				<div className="socials-div">
					<ul>
						<li>
							<a
								className=""
								href="https://github.com/Ethel-tech"
								role="button"
							>
								<FontAwesomeIcon icon={faGithub} />
							</a>
						</li>
						<li>
							<a
								className=""
								href="https://www.linkedin.com/in/boma-sim-jaja-5bba191ab/"
								role="button"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</li>
						<li>
							<a className="" href="https://x.com/Ethej_sj" role="button">
								<FontAwesomeIcon icon={faXTwitter} />
							</a>
						</li>
						<li>
							<a
								className=""
								href="https://www.instagram.com/etheljaja/"
								role="button"
							>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>
					</ul>
				</div>

				<div className="copyright-div">
					© 2025 Copyright. Made by&nbsp;
					<span>
						<AnchorLink href="#home-page">
							<a>Sim-Jaja Boma</a>
						</AnchorLink>
					</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
