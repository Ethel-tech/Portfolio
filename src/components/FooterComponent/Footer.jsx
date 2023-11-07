import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";

function Footer() {
  return (
    <footer id="footer" className="footer-section">
      <hr className="footer-hr" />
      <div className="footer-flex">
        <div className="socials-div">
          <ul>
            <li>
              <a className="" href="#!" role="button">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a className="" href="#!" role="button">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a className="" href="#!" role="button">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a className="" href="#!" role="button">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>

        <div className="copyright-div">
          © 2023 Copyright. Made by&nbsp;
          <span>
            <a href="#">Sim-Jaja Boma</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
